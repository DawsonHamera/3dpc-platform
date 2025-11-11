import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    IonTextarea,
    IonToast,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
} from "@ionic/react";
import { close, add, trash, checkmark, time } from "ionicons/icons";
import Header from "../../../components/Header/Header";
import Card from "../../../components/UI/Card/Card";
import {
    useGetProcessesQuery,
    useAddProcessMutation,
    useRemoveProcessMutation,
} from "../../../features/crud/processApi";

interface ProcessForm {
    templateId: number | null;
    currentStepId: number | null;
}

const defaultProcessForm: ProcessForm = {
    templateId: null,
    currentStepId: null,
};

// Mock process templates and workflow steps - these should come from APIs
const processTemplates = [
    { id: 1, name: 'Standard Print Process', description: 'Standard 3D printing workflow' },
    { id: 2, name: 'Quality Control Process', description: 'Enhanced quality control workflow' },
    { id: 3, name: 'Prototype Development', description: 'Rapid prototyping workflow' },
];

const workflowSteps = [
    { id: 1, name: 'Design Review', description: 'Review the design for feasibility', order: 1, processTemplateId: 1 },
    { id: 2, name: 'Slice Model', description: 'Prepare the model for printing', order: 2, processTemplateId: 1 },
    { id: 3, name: 'Print Setup', description: 'Set up the printer and materials', order: 3, processTemplateId: 1 },
    { id: 4, name: 'Printing', description: 'Execute the print job', order: 4, processTemplateId: 1 },
    { id: 5, name: 'Post Processing', description: 'Clean and finish the printed part', order: 5, processTemplateId: 1 },
    { id: 6, name: 'Quality Check', description: 'Final quality inspection', order: 6, processTemplateId: 1 },
];

const ProcessPage: React.FC = () => {
    const { data: processes, isLoading: processesLoading } = useGetProcessesQuery();
    const [addProcess, { isLoading: isUpdating }] = useAddProcessMutation();
    const [removeProcess] = useRemoveProcessMutation();
    
    const [processForm, setProcessForm] = useState<ProcessForm>(defaultProcessForm);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [toast, setToast] = useState<{ show: boolean, message: string, color?: string }>({ 
        show: false, 
        message: '', 
        color: 'success' 
    });

    const handleInputChange = (key: keyof ProcessForm, value: any) => {
        setProcessForm((prev: ProcessForm) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleFormSubmit = async () => {
        try {
            const submissionData = {
                ...processForm,
                templateId: processForm.templateId || undefined,
                currentStepId: processForm.currentStepId || undefined,
            };
            await addProcess(submissionData).unwrap();
            setToast({ show: true, message: 'Process created successfully!', color: 'success' });
            setProcessForm(defaultProcessForm);
            setFormOpen(false);
        } catch (error) {
            setToast({ show: true, message: 'Error creating process. Try again.', color: 'danger' });
        }
    };

    const handleDelete = async (processId: number) => {
        try {
            await removeProcess(processId).unwrap();
            setToast({ show: true, message: 'Process deleted successfully!', color: 'success' });
        } catch (error) {
            setToast({ show: true, message: 'Error deleting process. Try again.', color: 'danger' });
        }
    };

    const getProcessStatus = (process: any) => {
        if (process.completedAt) {
            return { text: 'Completed', color: 'success', icon: checkmark };
        }
        return { text: 'In Progress', color: 'warning', icon: time };
    };

    const renderProcessCard = (process: any) => {
        const status = getProcessStatus(process);
        return (
            <Card key={process.id} style={{ position: 'relative' }}>
                <div style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <h3 style={{ margin: 0 }}>Process #{process.id}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <IonIcon icon={status.icon} style={{ color: `var(--ion-color-${status.color})` }} />
                            <span style={{ 
                                padding: '4px 8px', 
                                borderRadius: '12px', 
                                fontSize: '12px',
                                backgroundColor: `var(--ion-color-${status.color})`,
                                color: 'white'
                            }}>
                                {status.text}
                            </span>
                        </div>
                    </div>
                    
                    {process.template && (
                        <p style={{ margin: '4px 0', color: 'var(--ion-color-medium)' }}>
                            <strong>Template:</strong> {process.template.name}
                        </p>
                    )}
                    
                    {process.currentStep && (
                        <p style={{ margin: '4px 0', color: 'var(--ion-color-medium)' }}>
                            <strong>Current Step:</strong> {process.currentStep.name}
                        </p>
                    )}
                    
                    <p style={{ margin: '4px 0', color: 'var(--ion-color-medium)' }}>
                        <strong>Created:</strong> {new Date(process.createdAt || '').toLocaleDateString()}
                    </p>
                    
                    {process.completedAt && (
                        <p style={{ margin: '4px 0', color: 'var(--ion-color-medium)' }}>
                            <strong>Completed:</strong> {new Date(process.completedAt).toLocaleDateString()}
                        </p>
                    )}
                </div>
                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <IonButton 
                        fill="clear" 
                        color="danger" 
                        onClick={() => handleDelete(process.id)}
                    >
                        <IonIcon icon={trash} />
                    </IonButton>
                </div>
            </Card>
        );
    };

    return (
        <IonPage>
            <Header title="Processes" type='back' />
            <IonContent fullscreen>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Process Templates Section */}
                    <div>
                        <h2>Process Templates</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                            {processTemplates.map(template => (
                                <IonCard key={template.id}>
                                    <IonCardHeader>
                                        <IonCardTitle>{template.name}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{template.description}</p>
                                        <div style={{ marginTop: '12px' }}>
                                            <h4>Workflow Steps:</h4>
                                            {workflowSteps
                                                .filter(step => step.processTemplateId === template.id)
                                                .sort((a, b) => a.order - b.order)
                                                .map(step => (
                                                    <div key={step.id} style={{ marginBottom: '8px', padding: '8px', backgroundColor: 'var(--ion-color-light)', borderRadius: '4px' }}>
                                                        <strong>{step.order}. {step.name}</strong>
                                                        <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: 'var(--ion-color-medium)' }}>
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </IonCardContent>
                                </IonCard>
                            ))}
                        </div>
                    </div>

                    {/* Active Processes Section */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h2>Active Processes</h2>
                            <IonButton onClick={() => setFormOpen(true)}>
                                <IonIcon icon={add} slot="start" />
                                Start New Process
                            </IonButton>
                        </div>

                        {processesLoading ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>Loading processes...</div>
                        ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                                {processes?.length ? (
                                    processes.map(renderProcessCard)
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--ion-color-medium)' }}>
                                        No active processes found. Start a new process to get started!
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Add Process Modal */}
                <IonModal isOpen={formOpen} onDidDismiss={() => setFormOpen(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Start New Process</IonTitle>
                            <IonButton
                                slot="end"
                                fill="clear"
                                onClick={() => setFormOpen(false)}
                            >
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div style={{ padding: '16px' }}>
                            {/* Process Template */}
                            <IonItem>
                                <IonLabel position="stacked">Process Template</IonLabel>
                                <IonSelect
                                    value={processForm.templateId}
                                    placeholder="Select a process template"
                                    onIonChange={(e) => handleInputChange('templateId', e.detail.value)}
                                >
                                    {processTemplates.map(template => (
                                        <IonSelectOption key={template.id} value={template.id}>
                                            {template.name}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>

                            {/* Initial Step */}
                            <IonItem>
                                <IonLabel position="stacked">Starting Step (Optional)</IonLabel>
                                <IonSelect
                                    value={processForm.currentStepId}
                                    placeholder="Select starting step (defaults to first step)"
                                    onIonChange={(e) => handleInputChange('currentStepId', e.detail.value)}
                                >
                                    {workflowSteps
                                        .filter(step => step.processTemplateId === processForm.templateId)
                                        .sort((a, b) => a.order - b.order)
                                        .map(step => (
                                            <IonSelectOption key={step.id} value={step.id}>
                                                {step.order}. {step.name}
                                            </IonSelectOption>
                                        ))
                                    }
                                </IonSelect>
                            </IonItem>

                            {/* Template Description */}
                            {processForm.templateId && (
                                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--ion-color-light)', borderRadius: '8px' }}>
                                    <h4>Template Details</h4>
                                    <p>{processTemplates.find(t => t.id === processForm.templateId)?.description}</p>
                                </div>
                            )}

                            {/* Submit Buttons */}
                            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                                <IonButton 
                                    expand="block" 
                                    onClick={handleFormSubmit}
                                    disabled={isUpdating || !processForm.templateId}
                                >
                                    {isUpdating ? 'Starting...' : 'Start Process'}
                                </IonButton>
                                <IonButton 
                                    expand="block" 
                                    fill="outline" 
                                    onClick={() => setFormOpen(false)}
                                >
                                    Cancel
                                </IonButton>
                            </div>
                        </div>
                    </IonContent>
                </IonModal>

                {/* Toast for notifications */}
                <IonToast
                    isOpen={toast.show}
                    message={toast.message}
                    color={toast.color}
                    duration={2000}
                    onDidDismiss={() => setToast({ ...toast, show: false })}
                />
            </IonContent>
        </IonPage>
    );
};

export default ProcessPage;
