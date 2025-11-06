import React, { useState } from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonProgressBar,
  IonChip,
  IonSegment,
  IonSegmentButton,
  IonAlert,
  IonLoading,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/react';
import {
  close,
  play,
  pause,
  stop,
  checkmarkCircle,
  timeOutline,
  personOutline,
  documentTextOutline,
  alertCircleOutline,
  refreshOutline,
} from 'ionicons/icons';
import {
  useGetProcessInstanceQuery,
  useGetProcessStepsQuery,
  useGetProcessLogsQuery,
  useCompleteStepMutation,
  usePauseProcessMutation,
  useResumeProcessMutation,
  useCancelProcessMutation,
} from '../../../features/crud/processInstancesApi';
import { ProcessInstance, ProcessInstanceStep, ProcessLog } from '../../../types';

interface ProcessInstanceDetailModalProps {
  isOpen: boolean;
  processInstance: ProcessInstance | null;
  onClose: () => void;
}

const ProcessInstanceDetailModal: React.FC<ProcessInstanceDetailModalProps> = ({
  isOpen,
  processInstance,
  onClose,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<string>('steps');
  const [showCompleteAlert, setShowCompleteAlert] = useState(false);
  const [selectedStep, setSelectedStep] = useState<ProcessInstanceStep | null>(null);
  const [showActionAlert, setShowActionAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // API hooks
  const {
    data: processInstanceData,
    isLoading: isLoadingProcess,
    refetch: refetchProcess,
  } = useGetProcessInstanceQuery(processInstance?.id || 0, {
    skip: !processInstance?.id,
  });

  const {
    data: processSteps,
    isLoading: isLoadingSteps,
    refetch: refetchSteps,
  } = useGetProcessStepsQuery(processInstance?.id || 0, {
    skip: !processInstance?.id,
  });

  const {
    data: processLogs,
    isLoading: isLoadingLogs,
    refetch: refetchLogs,
  } = useGetProcessLogsQuery(processInstance?.id || 0, {
    skip: !processInstance?.id,
  });

  const [completeStep] = useCompleteStepMutation();
  const [pauseProcess] = usePauseProcessMutation();
  const [resumeProcess] = useResumeProcessMutation();
  const [cancelProcess] = useCancelProcessMutation();

  // Helper functions
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'medium';
      case 'running': return 'primary';
      case 'waiting_user': return 'warning';
      case 'waiting_condition': return 'tertiary';
      case 'waiting_timer': return 'secondary';
      case 'completed': return 'success';
      case 'failed': return 'danger';
      case 'skipped': return 'dark';
      case 'paused': return 'warning';
      case 'cancelled': return 'dark';
      default: return 'medium';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  const formatDuration = (minutes?: number) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getLogIcon = (action: string) => {
    switch (action) {
      case 'process_started': return play;
      case 'process_completed': return checkmarkCircle;
      case 'process_failed': return alertCircleOutline;
      case 'process_paused': return pause;
      case 'process_resumed': return play;
      case 'process_cancelled': return stop;
      case 'step_started': return play;
      case 'step_completed': return checkmarkCircle;
      case 'step_failed': return alertCircleOutline;
      default: return documentTextOutline;
    }
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case 'error': return 'danger';
      case 'warn': return 'warning';
      case 'info': return 'primary';
      case 'debug': return 'medium';
      default: return 'medium';
    }
  };

  // Action handlers
  const handleRefresh = async (event: CustomEvent) => {
    await Promise.all([refetchProcess(), refetchSteps(), refetchLogs()]);
    event.detail.complete();
  };

  const handleCompleteStep = async (step: ProcessInstanceStep) => {
    if (!processInstance) return;
    
    try {
      await completeStep({
        processInstanceId: processInstance.id,
        stepId: step.id,
        body: {
          data: {
            completedAt: new Date().toISOString(),
            notes: 'Completed via UI',
          },
        },
      }).unwrap();
      
      setAlertMessage(`Step "${step.stepOrder}" has been completed successfully.`);
      setShowActionAlert(true);
    } catch (error) {
      console.error('Failed to complete step:', error);
      setAlertMessage('Failed to complete step. Please try again.');
      setShowActionAlert(true);
    }
  };

  const handleProcessAction = async (action: string) => {
    if (!processInstance) return;
    
    try {
      switch (action) {
        case 'pause':
          await pauseProcess(processInstance.id).unwrap();
          setAlertMessage('Process has been paused.');
          break;
        case 'resume':
          await resumeProcess(processInstance.id).unwrap();
          setAlertMessage('Process has been resumed.');
          break;
        case 'cancel':
          await cancelProcess(processInstance.id).unwrap();
          setAlertMessage('Process has been cancelled.');
          break;
      }
      setShowActionAlert(true);
    } catch (error) {
      console.error('Failed to perform action:', error);
      setAlertMessage('Failed to perform action. Please try again.');
      setShowActionAlert(true);
    }
  };

  const currentProcess = processInstanceData || processInstance;

  if (!currentProcess) return null;

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{currentProcess.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={onClose}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        <IonLoading isOpen={isLoadingProcess || isLoadingSteps || isLoadingLogs} />

        {/* Process Summary */}
        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol>
                  <IonCardTitle>{currentProcess.name}</IonCardTitle>
                  {currentProcess.description && (
                    <IonText color="medium">
                      <p>{currentProcess.description}</p>
                    </IonText>
                  )}
                </IonCol>
                <IonCol size="auto">
                  <IonBadge color={getStatusColor(currentProcess.status)}>
                    {currentProcess.status.toUpperCase()}
                  </IonBadge>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonItem lines="none">
                    <IonIcon icon={timeOutline} slot="start" color="medium" />
                    <IonLabel>
                      <h3>Step {currentProcess.currentStepOrder}</h3>
                      <p>Current step</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                  <IonItem lines="none">
                    <IonIcon icon={personOutline} slot="start" color="medium" />
                    <IonLabel>
                      <h3>{currentProcess.assignedUser?.name || 'Unassigned'}</h3>
                      <p>Assigned to</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                  <IonItem lines="none">
                    <IonLabel>
                      <h3>{formatDate(currentProcess.startedAt)}</h3>
                      <p>Started at</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                  <IonItem lines="none">
                    <IonLabel>
                      <h3>{formatDuration(currentProcess.estimatedDuration)}</h3>
                      <p>Est. duration</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>

              {/* Action Buttons */}
              <IonRow className="ion-margin-top">
                <IonCol>
                  {currentProcess.status === 'running' && (
                    <IonButton
                      fill="outline"
                      color="warning"
                      onClick={() => handleProcessAction('pause')}
                    >
                      <IonIcon icon={pause} slot="start" />
                      Pause
                    </IonButton>
                  )}
                  {currentProcess.status === 'paused' && (
                    <IonButton
                      fill="outline"
                      color="primary"
                      onClick={() => handleProcessAction('resume')}
                    >
                      <IonIcon icon={play} slot="start" />
                      Resume
                    </IonButton>
                  )}
                </IonCol>
                <IonCol size="auto">
                  {(currentProcess.status === 'running' || currentProcess.status === 'paused') && (
                    <IonButton
                      fill="outline"
                      color="danger"
                      onClick={() => handleProcessAction('cancel')}
                    >
                      <IonIcon icon={stop} slot="start" />
                      Cancel
                    </IonButton>
                  )}
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* Segment Control */}
        <IonSegment
          value={selectedSegment}
          onIonChange={(e) => setSelectedSegment(e.detail.value as string)}
        >
          <IonSegmentButton value="steps">
            <IonLabel>Steps</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="logs">
            <IonLabel>Activity Log</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Steps View */}
        {selectedSegment === 'steps' && (
          <IonList>
            {processSteps?.map((step) => (
              <IonCard key={step.id}>
                <IonCardContent>
                  <IonGrid>
                    <IonRow className="ion-align-items-center">
                      <IonCol>
                        <IonText>
                          <h3>Step {step.stepOrder}</h3>
                          {step.step?.title && <p>{step.step.title}</p>}
                        </IonText>
                      </IonCol>
                      <IonCol size="auto">
                        <IonBadge color={getStatusColor(step.status)}>
                          {step.status.replace('_', ' ').toUpperCase()}
                        </IonBadge>
                      </IonCol>
                    </IonRow>

                    {step.status === 'waiting_user' && (
                      <IonRow className="ion-margin-top">
                        <IonCol>
                          <IonButton
                            fill="solid"
                            size="small"
                            onClick={() => handleCompleteStep(step)}
                          >
                            <IonIcon icon={checkmarkCircle} slot="start" />
                            Complete Step
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    )}

                    <IonRow className="ion-margin-top">
                      <IonCol>
                        <IonText color="medium">
                          <p>
                            Started: {formatDate(step.startedAt)} |{' '}
                            Completed: {formatDate(step.completedAt)}
                          </p>
                        </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        )}

        {/* Logs View */}
        {selectedSegment === 'logs' && (
          <IonList>
            {processLogs?.map((log) => (
              <IonItem key={log.id}>
                <IonIcon
                  icon={getLogIcon(log.action)}
                  slot="start"
                  color={getLogColor(log.level)}
                />
                <IonLabel>
                  <h3>{log.message}</h3>
                  <p>{formatDate(log.createdAt)}</p>
                  {log.data && (
                    <IonText color="medium">
                      <p>{JSON.stringify(log.data)}</p>
                    </IonText>
                  )}
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}

        {/* Alerts */}
        <IonAlert
          isOpen={showActionAlert}
          onDidDismiss={() => setShowActionAlert(false)}
          header="Action Complete"
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonModal>
  );
};

export default ProcessInstanceDetailModal;
