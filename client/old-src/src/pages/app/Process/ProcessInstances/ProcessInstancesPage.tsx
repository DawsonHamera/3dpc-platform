import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonRefresher,
  IonRefresherContent,
  IonProgressBar,
  IonToast,
  IonAlert,
  RefresherEventDetail
} from '@ionic/react';
import { addOutline, refreshOutline } from 'ionicons/icons';
import {
  useGetProcessInstancesQuery,
  usePauseProcessMutation,
  useResumeProcessMutation,
  useCancelProcessMutation
} from '../../../../features/crud/processInstancesApi';
import { ProcessInstance } from '../../../../types';

// Components
import { ProcessSummaryCards } from './components/ProcessSummaryCards';
import { ProcessInstanceCard } from './components/ProcessInstanceCard';
import ProcessInstanceDetailModal from '../ProcessInstanceDetailModal';
import CreateProcessInstanceModal from '../CreateProcessInstanceModal';

// Styles
import './ProcessInstancesPage.css';

const ProcessInstancesPage: React.FC = () => {
  const [selectedProcess, setSelectedProcess] = useState<ProcessInstance | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // API hooks
  const { data: processes = [], isLoading, refetch } = useGetProcessInstancesQuery();
  const [pauseProcess] = usePauseProcessMutation();
  const [resumeProcess] = useResumeProcessMutation();
  const [cancelProcess] = useCancelProcessMutation();

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await refetch();
    event.detail.complete();
  };

  const handleViewProcess = (process: ProcessInstance) => {
    setSelectedProcess(process);
    setShowDetailModal(true);
  };

  const handlePauseProcess = async (processId: number) => {
    try {
      await pauseProcess(processId).unwrap();
      setToastMessage('Process paused successfully');
    } catch (error) {
      setAlertMessage('Failed to pause process');
      setShowAlert(true);
    }
  };

  const handleResumeProcess = async (processId: number) => {
    try {
      await resumeProcess(processId).unwrap();
      setToastMessage('Process resumed successfully');
    } catch (error) {
      setAlertMessage('Failed to resume process');
      setShowAlert(true);
    }
  };

  const handleCancelProcess = async (processId: number) => {
    try {
      await cancelProcess(processId).unwrap();
      setToastMessage('Process cancelled successfully');
    } catch (error) {
      setAlertMessage('Failed to cancel process');
      setShowAlert(true);
    }
  };

  if (isLoading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Process Instances</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonProgressBar type="indeterminate" />
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Process Instances</IonTitle>
          <IonButton
            slot="end"
            fill="clear"
            onClick={() => setShowCreateModal(true)}
          >
            <IonIcon icon={addOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        {/* Summary Cards */}
        <ProcessSummaryCards processes={processes} />

        {/* Process List */}
        <div className="process-list-section">
          <div className="section-header">
            <h2>All Process Instances</h2>
            <IonButton
              fill="outline"
              size="small"
              onClick={() => refetch()}
            >
              <IonIcon icon={refreshOutline} slot="start" />
              Refresh
            </IonButton>
          </div>

          <IonGrid>
            <IonRow>
              {processes.map((process) => (
                <IonCol size="12" sizeMd="6" sizeLg="4" key={process.id}>
                  <ProcessInstanceCard
                    process={process}
                    onView={handleViewProcess}
                    onPause={handlePauseProcess}
                    onResume={handleResumeProcess}
                    onCancel={handleCancelProcess}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

          {processes.length === 0 && (
            <div className="empty-state">
              <h3>No Process Instances</h3>
              <p>Create your first process instance to get started.</p>
              <IonButton
                onClick={() => setShowCreateModal(true)}
                color="primary"
              >
                <IonIcon icon={addOutline} slot="start" />
                Create Process Instance
              </IonButton>
            </div>
          )}
        </div>

        {/* Modals */}
        <ProcessInstanceDetailModal
          isOpen={showDetailModal}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedProcess(null);
          }}
          processInstance={selectedProcess}
        />

        <CreateProcessInstanceModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />

        {/* Toast and Alert */}
        <IonToast
          isOpen={!!toastMessage}
          message={toastMessage}
          duration={3000}
          onDidDismiss={() => setToastMessage('')}
          color="success"
        />

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default ProcessInstancesPage;
