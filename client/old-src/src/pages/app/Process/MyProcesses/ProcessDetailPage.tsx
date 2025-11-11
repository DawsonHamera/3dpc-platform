import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonProgressBar,
  IonText,
  IonToast,
  IonAlert,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import {
  arrowBack,
  playCircle,
  pauseCircle
} from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { selectCurrentUser } from '../../../../features/auth/authSlice';
import {
  useGetProcessInstanceQuery,
  useGetProcessStepsQuery,
  useCompleteStepMutation,
  usePauseProcessMutation,
  useResumeProcessMutation
} from '../../../../features/crud/processInstancesApi';
import { ProcessInstance, ProcessInstanceStep } from '../../../../types';

// Components
import { ProcessDetails } from './components/ProcessDetails';

// Utils
import {
  getCurrentStep,
  getCompletedStepsCount,
  getTotalStepsCount,
  getProcessDisplayName,
  canPauseProcess,
  canResumeProcess,
  getProgressPercentage
} from '../shared/processUtils';

// Styles
import './ProcessDetailPage.css';

const ProcessDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const user = useSelector(selectCurrentUser);
  const processId = parseInt(id);

  const [stepFormData, setStepFormData] = useState<Record<number, any>>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // API hooks
  const { data: process, isLoading: processLoading, error } = useGetProcessInstanceQuery(processId);
  const { data: processSteps, isLoading: stepsLoading } = useGetProcessStepsQuery(processId);
  
  const [completeStep] = useCompleteStepMutation();
  const [pauseProcess] = usePauseProcessMutation();
  const [resumeProcess] = useResumeProcessMutation();

  // Check if user has access to this process
  useEffect(() => {
    if (process && process.assignedUserId !== user?.id) {
      setAlertMessage('You do not have access to this process.');
      setShowAlert(true);
      setTimeout(() => history.push('/dashboard/my-processes'), 2000);
    }
  }, [process, user?.id, history]);

  const currentStep = getCurrentStep(processSteps);
  const completedSteps = processSteps?.filter(s => s.status === 'completed') || [];
  const completedCount = getCompletedStepsCount(processSteps);
  const totalCount = getTotalStepsCount(processSteps);
  const progressPercentage = getProgressPercentage(processSteps);

  const handleStepComplete = async (stepId: number) => {
    try {
      const formData = stepFormData[stepId] || {};
      await completeStep({
        processInstanceId: processId,
        stepId,
        body: {
          data: formData,
          userId: user?.id
        }
      }).unwrap();

      setToastMessage('Step completed successfully!');
      setStepFormData((prev: Record<number, any>) => ({ ...prev, [stepId]: {} }));
    } catch (error) {
      setAlertMessage('Failed to complete step. Please try again.');
      setShowAlert(true);
    }
  };

  const handlePauseProcess = async () => {
    if (!process) return;
    try {
      await pauseProcess(process.id).unwrap();
      setToastMessage('Process paused');
    } catch (error) {
      setAlertMessage('Failed to pause process');
      setShowAlert(true);
    }
  };

  const handleResumeProcess = async () => {
    if (!process) return;
    try {
      await resumeProcess(process.id).unwrap();
      setToastMessage('Process resumed');
    } catch (error) {
      setAlertMessage('Failed to resume process');
      setShowAlert(true);
    }
  };

  const handleStepDataChange = (key: string, value: any) => {
    if (!currentStep) return;
    setStepFormData(prev => ({
      ...prev,
      [currentStep.id]: {
        ...prev[currentStep.id],
        [key]: value
      }
    }));
  };

  if (processLoading || stepsLoading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/dashboard/my-processes" />
            </IonButtons>
            <IonTitle>Loading Process...</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonProgressBar type="indeterminate" />
        </IonContent>
      </IonPage>
    );
  }

  if (error || !process) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/dashboard/my-processes" />
            </IonButtons>
            <IonTitle>Process Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="error-state">
            <IonText color="danger">
              <h2>Process Not Found</h2>
              <p>The requested process could not be found or you don't have access to it.</p>
            </IonText>
            <IonButton fill="outline" onClick={() => history.push('/dashboard/my-processes')}>
              Back to My Processes
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard/my-processes" />
          </IonButtons>
          <IonTitle>{getProcessDisplayName(process)}</IonTitle>
          <IonButtons slot="end">
            {canPauseProcess(process) && (
              <IonButton fill="clear" onClick={handlePauseProcess}>
                <IonIcon icon={pauseCircle} />
              </IonButton>
            )}
            {canResumeProcess(process) && (
              <IonButton fill="clear" onClick={handleResumeProcess}>
                <IonIcon icon={playCircle} />
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="process-detail-page">
          {/* Progress Overview */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Process Progress</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="progress-overview">
                <div className="progress-stats">
                  <IonText>
                    <h3>{completedCount} of {totalCount} steps completed</h3>
                    <p>Status: {process.status}</p>
                  </IonText>
                </div>
                <IonProgressBar value={progressPercentage / 100} />
              </div>
            </IonCardContent>
          </IonCard>

          {/* Current Step Focus */}
          {currentStep && (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Current Step</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <ProcessDetails
                  process={process}
                  currentStep={currentStep}
                  completedSteps={completedSteps}
                  stepData={stepFormData[currentStep?.id || 0] || {}}
                  onDataChange={handleStepDataChange}
                  onCompleteStep={handleStepComplete}
                  onPause={handlePauseProcess}
                  onResume={handleResumeProcess}
                />
              </IonCardContent>
            </IonCard>
          )}

          {!currentStep && process.status === 'completed' && (
            <IonCard>
              <IonCardContent>
                <div className="completion-message">
                  <IonText color="success">
                    <h2>í¾‰ Process Completed!</h2>
                    <p>All steps have been successfully completed.</p>
                  </IonText>
                </div>
              </IonCardContent>
            </IonCard>
          )}
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message={alertMessage}
          buttons={['OK']}
        />

        <IonToast
          isOpen={!!toastMessage}
          message={toastMessage}
          duration={3000}
          onDidDismiss={() => setToastMessage('')}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default ProcessDetailPage;
