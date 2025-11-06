import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText
} from '@ionic/react';
import {
  checkmarkCircle,
  playCircle,
  pauseCircle,
  alertCircle
} from 'ionicons/icons';

interface ProcessSummaryCardsProps {
  processes: any[];
}

export const ProcessSummaryCards: React.FC<ProcessSummaryCardsProps> = ({ processes }) => {
  const stats = {
    total: processes.length,
    running: processes.filter(p => p.status === 'running').length,
    paused: processes.filter(p => p.status === 'paused').length,
    completed: processes.filter(p => p.status === 'completed').length,
    failed: processes.filter(p => p.status === 'failed').length,
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="6" sizeMd="3">
          <IonCard className="summary-card">
            <IonCardContent>
              <div className="summary-content">
                <IonIcon icon={playCircle} color="success" size="large" />
                <div className="summary-text">
                  <h2>{stats.running}</h2>
                  <p>Running</p>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="6" sizeMd="3">
          <IonCard className="summary-card">
            <IonCardContent>
              <div className="summary-content">
                <IonIcon icon={pauseCircle} color="warning" size="large" />
                <div className="summary-text">
                  <h2>{stats.paused}</h2>
                  <p>Paused</p>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="6" sizeMd="3">
          <IonCard className="summary-card">
            <IonCardContent>
              <div className="summary-content">
                <IonIcon icon={checkmarkCircle} color="medium" size="large" />
                <div className="summary-text">
                  <h2>{stats.completed}</h2>
                  <p>Completed</p>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="6" sizeMd="3">
          <IonCard className="summary-card">
            <IonCardContent>
              <div className="summary-content">
                <IonIcon icon={alertCircle} color="danger" size="large" />
                <div className="summary-text">
                  <h2>{stats.failed}</h2>
                  <p>Failed</p>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
