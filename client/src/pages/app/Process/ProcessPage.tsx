import { 
    IonButton, 
    IonContent, 
    IonIcon, 
    IonLabel, 
    IonPage, 
    IonProgressBar, 
    IonToolbar, 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonList,
    IonNote,
    IonBadge,
    IonActionSheet,
    IonAlert,
    useIonRouter 
} from "@ionic/react";
import React, { useState, useMemo } from "react";
import { 
    checkmarkCircle, 
    ellipse, 
    ellipseOutline, 
    warningOutline, 
    playCircle, 
    pauseCircle, 
    stopCircle,
    timeOutline,
    checkmarkOutline,
    closeOutline 
} from "ionicons/icons";
import "./ProcessPage.css"
import { RouteComponentProps } from "react-router";
import { useGetTaskQuery } from "../../../features/crud/tasksApi";
import { 
    useGetProcessQuery,
    useUpdateProcessStatusMutation,
    useCompleteStepMutation,
    useSkipStepMutation 
} from "../../../features/crud/processApi";
import Header from "../../../components/Header/Header";
import ModelViewer from "../Order/ModelViewer";
import { Process, WorkflowStep, StepAction, StepContent, ProcessExecution } from "../../../types";

interface Props extends RouteComponentProps<{ id: string; }> { }

const ProcessPage: React.FC<Props> = ({ match }) => {
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [showConfirmAlert, setShowConfirmAlert] = useState(false);
    const [selectedAction, setSelectedAction] = useState<StepAction | null>(null);
    const [activeStep, setActiveStep] = useState<WorkflowStep | null>(null);

    const { data: task, isLoading: taskIsLoading } = useGetTaskQuery(parseInt(match.params.id));
    const { data: process, isLoading: processIsLoading } = useGetProcessQuery(task?.processId!, {
        skip: !task?.processId,
    });

    const [updateProcessStatus] = useUpdateProcessStatusMutation();
    const [completeStep] = useCompleteStepMutation();
    const [skipStep] = useSkipStepMutation();

    const router = useIonRouter();

    const currentStep = useMemo(() => {
        if (!process?.template?.steps) return null;
        return process.template.steps.find((step: WorkflowStep) => step.id === process.currentStepId) || process.template.steps[0];
    }, [process]);

    const completedSteps = useMemo(() => {
        if (!process?.template?.steps || !currentStep) return [];
        const currentIndex = process.template.steps.findIndex((step: WorkflowStep) => step.id === currentStep.id);
        return process.template.steps.slice(0, currentIndex);
    }, [process, currentStep]);

    const upcomingSteps = useMemo(() => {
        if (!process?.template?.steps || !currentStep) return [];
        const currentIndex = process.template.steps.findIndex((step: WorkflowStep) => step.id === currentStep.id);
        return process.template.steps.slice(currentIndex + 1);
    }, [process, currentStep]);

    const progressPercentage = useMemo(() => {
        if (!process?.template?.steps || !currentStep) return 0;
        const currentIndex = process.template.steps.findIndex((step: WorkflowStep) => step.id === currentStep.id);
        return Math.round((currentIndex / process.template.steps.length) * 100);
    }, [process, currentStep]);

    const handleActionClick = (action: StepAction, step: WorkflowStep) => {
        setSelectedAction(action);
        setActiveStep(step);
        
        if (action.requiresConfirmation) {
            setShowConfirmAlert(true);
        } else {
            executeAction(action, step);
        }
    };

    const executeAction = async (action: StepAction, step: WorkflowStep) => {
        if (!process) return;

        try {
            switch (action.actionType) {
                case 'complete_step':
                    await completeStep({
                        processId: process.id,
                        stepId: step.id,
                        executionData: {}
                    });
                    break;
                case 'skip_step':
                    await skipStep({
                        processId: process.id,
                        stepId: step.id,
                        reason: 'User skipped'
                    });
                    break;
                case 'update_status':
                    if (action.actionConfig?.status) {
                        await updateProcessStatus({
                            processId: process.id,
                            status: action.actionConfig.status
                        });
                    }
                    break;
                default:
                    console.log('Action not implemented:', action.actionType);
            }
        } catch (error) {
            console.error('Action execution failed:', error);
        }
    };

    const renderStepContent = (content: StepContent[]) => {
        return content.map((item, index) => (
            <div key={`content-${index}`} className="step-content-item">
                {item.contentType === 'text' && (
                    <IonNote color="medium">{item.contentData}</IonNote>
                )}
                {item.contentType === 'image' && (
                    <img src={item.contentData} alt="Step content" className="step-content-image" />
                )}
                {item.contentType === 'link' && (
                    <a href={item.contentData} target="_blank" rel="noopener noreferrer">
                        {item.contentData}
                    </a>
                )}
            </div>
        ));
    };

    const renderStepActions = (actions: StepAction[], step: WorkflowStep) => {
        return actions.map((action, index) => (
            <IonButton
                key={`action-${index}`}
                fill={action.buttonStyle === 'primary' ? 'solid' : 'outline'}
                color={action.buttonStyle === 'danger' ? 'danger' : 'primary'}
                size="default"
                onClick={() => handleActionClick(action, step)}
                disabled={!action.isEnabled}
            >
                {action.icon && <IonIcon icon={action.icon} slot="start" />}
                {action.label}
            </IonButton>
        ));
    };

    const renderStep = (step: WorkflowStep, status: 'completed' | 'current' | 'upcoming') => {
        const stepExecution = process?.executions?.find((exec: ProcessExecution) => exec.workflowStepId === step.id);
        
        return (
            <IonCard key={step.id} className={`process-step ${status}`}>
                <IonCardHeader>
                    <IonCardTitle className="step-title">
                        <IonIcon 
                            icon={status === 'completed' ? checkmarkCircle : 
                                  status === 'current' ? ellipse : ellipseOutline} 
                            color={status === 'completed' ? 'success' : 
                                   status === 'current' ? 'primary' : 'medium'}
                        />
                        {step.title}
                        {step.isRequired && <IonBadge color="warning">Required</IonBadge>}
                        {step.stepType === 'timer' && <IonIcon icon={timeOutline} color="medium" />}
                    </IonCardTitle>
                </IonCardHeader>
                
                <IonCardContent>
                    {step.description && (
                        <p className="step-description">{step.description}</p>
                    )}
                    
                    {step.estimatedDuration && (
                        <IonNote color="medium">
                            Estimated time: {step.estimatedDuration} minutes
                        </IonNote>
                    )}

                    {stepExecution && (
                        <div className="step-execution-info">
                            <IonNote color="medium">
                                Status: {stepExecution.status}
                                {stepExecution.completedAt && ` | Completed: ${new Date(stepExecution.completedAt).toLocaleString()}`}
                                {stepExecution.durationMinutes && ` | Duration: ${stepExecution.durationMinutes}m`}
                            </IonNote>
                            {stepExecution.notes && (
                                <IonNote color="medium">Notes: {stepExecution.notes}</IonNote>
                            )}
                        </div>
                    )}

                    {step.content && step.content.length > 0 && (
                        <div className="step-content">
                            {renderStepContent(step.content)}
                        </div>
                    )}

                    {status === 'current' && step.actions && step.actions.length > 0 && (
                        <div className="step-actions">
                            {renderStepActions(step.actions, step)}
                        </div>
                    )}
                </IonCardContent>
            </IonCard>
        );
    };

    if (taskIsLoading || (task?.processId && processIsLoading)) {
        return (
            <IonPage>
                <Header title="Loading..." />
                <IonContent>
                    <IonProgressBar type="indeterminate" />
                </IonContent>
            </IonPage>
        );
    }

    if (!task) {
        return (
            <IonPage>
                <Header title="Task Not Found" />
                <IonContent>
                    <IonCard>
                        <IonCardContent>
                            <p>Task not found.</p>
                            <IonButton onClick={() => router.push('/app/orders')}>
                                Back to Orders
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }

    if (!task.processId) {
        return (
            <IonPage>
                <Header title="No Process Assigned" />
                <IonContent>
                    <IonCard>
                        <IonCardContent>
                            <p>No process has been assigned to this task yet.</p>
                            <IonButton onClick={() => router.push('/app/orders')}>
                                Back to Orders
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }

    if (!process) {
        return (
            <IonPage>
                <Header title="Process Not Found" />
                <IonContent>
                    <IonCard>
                        <IonCardContent>
                            <p>Process not found or not started for this task.</p>
                            <IonButton onClick={() => router.push('/app/orders')}>
                                Back to Orders
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <Header title={`Process: ${process.template?.name || 'Unknown'}`} />
            
            <IonContent>
                {/* Process Overview */}
                <IonCard className="process-overview">
                    <IonCardHeader>
                        <IonCardTitle>Process Overview</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>
                                    <h3>Task</h3>
                                    <p>{task.model?.name} - Quantity: {task.quantity}</p>
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    <h3>Status</h3>
                                    <p>{process.status}</p>
                                </IonLabel>
                                <IonBadge color={
                                    process.status === 'completed' ? 'success' :
                                    process.status === 'in_progress' ? 'primary' :
                                    process.status === 'failed' ? 'danger' : 'medium'
                                }>
                                    {process.status}
                                </IonBadge>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    <h3>Progress</h3>
                                    <p>{progressPercentage}% Complete</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                        <IonProgressBar value={progressPercentage / 100} />
                    </IonCardContent>
                </IonCard>

                {/* Model Viewer */}
                {task.model && (
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Model Preview</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <ModelViewer modelPath={task.model?.modelFile?.url} />
                        </IonCardContent>
                    </IonCard>
                )}

                {/* Completed Steps */}
                {completedSteps.length > 0 && (
                    <div className="process-section">
                        <h2>Completed Steps</h2>
                        {completedSteps.map((step: WorkflowStep) => renderStep(step, 'completed'))}
                    </div>
                )}

                {/* Current Step */}
                {currentStep && (
                    <div className="process-section">
                        <h2>Current Step</h2>
                        {renderStep(currentStep, 'current')}
                    </div>
                )}

                {/* Upcoming Steps */}
                {upcomingSteps.length > 0 && (
                    <div className="process-section">
                        <h2>Upcoming Steps</h2>
                        {upcomingSteps.map((step: WorkflowStep) => renderStep(step, 'upcoming'))}
                    </div>
                )}

                {/* Confirmation Alert */}
                <IonAlert
                    isOpen={showConfirmAlert}
                    onDidDismiss={() => setShowConfirmAlert(false)}
                    header="Confirm Action"
                    message={selectedAction?.confirmationMessage || `Are you sure you want to ${selectedAction?.label}?`}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel'
                        },
                        {
                            text: 'Confirm',
                            handler: () => {
                                if (selectedAction && activeStep) {
                                    executeAction(selectedAction, activeStep);
                                }
                            }
                        }
                    ]}
                />
            </IonContent>
        </IonPage>
    );
};

export default ProcessPage;