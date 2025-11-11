import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonRefresher,
  IonRefresherContent,
  IonProgressBar,
  IonIcon,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonToast,
  IonAlert,
  RefresherEventDetail
} from '@ionic/react';
import {
  documentTextOutline,
  checkmarkCircle
} from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../features/auth/authSlice';
import {
  useGetProcessInstancesQuery,
  usePauseProcessMutation,
  useResumeProcessMutation
} from '../../../../features/crud/processInstancesApi';
import { ProcessInstance } from '../../../../types';

// Components
import { MyProcessCard } from './components/MyProcessCard';

// Utils
import {
  getProcessDisplayName,
  formatDate,
  isProcessActive
} from '../shared/processUtils';

// Styles
import './MyProcessesPage.css';
import Header from '../../../../components/Header/Header';

const MyProcessesPage: React.FC = () => {
  const user = useSelector(selectCurrentUser);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // API hooks
  const { data: allProcesses, isLoading, refetch } = useGetProcessInstancesQuery();
  const [pauseProcess] = usePauseProcessMutation();
  const [resumeProcess] = useResumeProcessMutation();

  // Filter processes assigned to current user
  const myProcesses = allProcesses?.filter(
    (process: ProcessInstance) => process.assignedUserId === user?.id
  ) || [];

  // Get active processes (not completed or cancelled)
  const activeProcesses = myProcesses.filter((process: ProcessInstance) =>
    isProcessActive(process)
  );

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await refetch();
    event.detail.complete();
  };

  const handlePauseProcess = async (processId: number) => {
    try {
      await pauseProcess(processId).unwrap();
      setToastMessage('Process paused');
    } catch (error) {
      setAlertMessage('Failed to pause process');
      setShowAlert(true);
    }
  };

  const handleResumeProcess = async (processId: number) => {
    try {
      await resumeProcess(processId).unwrap();
      setToastMessage('Process resumed');
    } catch (error) {
      setAlertMessage('Failed to resume process');
      setShowAlert(true);
    }
  };

  if (isLoading) {
    return (
      <IonPage>
        <Header title='My Tasks' />
        <IonContent>
          <IonProgressBar type="indeterminate" />
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Header title='My Tasks' />
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        {activeProcesses.length === 0 ? (
          <div className="empty-state">
            <IonIcon icon={documentTextOutline} size="large" color="medium" />
            <h2>No Active Processes</h2>
            <p>You don't have any active processes assigned to you right now.</p>
          </div>
        ) : (
          <div className="my-processes-content">
            <IonGrid>
              <IonRow>
                {activeProcesses.map((process) => (
                  <IonCol size="12" sizeMd="6" key={process.id}>
                    <MyProcessCard
                      process={process}
                      onPause={handlePauseProcess}
                      onResume={handleResumeProcess}
                    />
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>
        )}

        {/* Recently Completed Section */}
        {myProcesses.filter((p: ProcessInstance) => p.status === 'completed').length > 0 && (
          <div className="completed-section">
            <h2>Recently Completed</h2>
            <IonList>
              {myProcesses
                .filter((p: ProcessInstance) => p.status === 'completed')
                .slice(0, 5)
                .map((process: ProcessInstance) => (
                  <IonItem key={process.id} lines="inset">
                    <IonIcon icon={checkmarkCircle} color="success" slot="start" />
                    <IonLabel>
                      <h3>{getProcessDisplayName(process)}</h3>
                      <p>Completed: {formatDate(process.completedAt)}</p>
                    </IonLabel>
                  </IonItem>
                ))}
            </IonList>
          </div>
        )}

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

export default MyProcessesPage;
