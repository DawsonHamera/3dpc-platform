import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonBadge,
  IonButton,
  IonIcon,
  IonChip,
  IonLabel,
  IonText
} from '@ionic/react';
import {
  playCircle,
  pauseCircle,
  stopCircle,
  eyeOutline,
  timeOutline,
  personOutline
} from 'ionicons/icons';
import { ProcessInstance } from '../../../../../types';
import { 
  getStatusColor, 
  getPriorityColor, 
  getProcessDisplayName,
  formatDate,
  canPauseProcess,
  canResumeProcess,
  canCancelProcess
} from '../../shared/processUtils';

interface ProcessInstanceCardProps {
  process: ProcessInstance;
  onView: (process: ProcessInstance) => void;
  onPause: (processId: number) => void;
  onResume: (processId: number) => void;
  onCancel: (processId: number) => void;
}

export const ProcessInstanceCard: React.FC<ProcessInstanceCardProps> = ({
  process,
  onView,
  onPause,
  onResume,
  onCancel
}) => {
  return (
    <IonCard className="process-instance-card">
      <IonCardHeader>
        <div className="process-header">
          <IonCardTitle>{getProcessDisplayName(process)}</IonCardTitle>
          <div className="process-badges">
            <IonBadge color={getStatusColor(process.status)}>
              {process.status}
            </IonBadge>
            <IonBadge color={getPriorityColor(process.priority)}>
              {process.priority}
            </IonBadge>
          </div>
        </div>
        
        <div className="process-meta">
          <IonChip>
            <IonIcon icon={personOutline} />
            <IonLabel>ID: {process.id}</IonLabel>
          </IonChip>
          <IonChip>
            <IonIcon icon={timeOutline} />
            <IonLabel>{formatDate(process.createdAt)}</IonLabel>
          </IonChip>
          {process.assignedUser && (
            <IonChip>
              <IonIcon icon={personOutline} />
              <IonLabel>{process.assignedUser.name}</IonLabel>
            </IonChip>
          )}
        </div>
      </IonCardHeader>

      <IonCardContent>
        {process.description && (
          <IonText color="medium">
            <p>{process.description}</p>
          </IonText>
        )}

        <div className="process-actions">
          <IonButton
            fill="clear"
            size="small"
            onClick={() => onView(process)}
          >
            <IonIcon icon={eyeOutline} slot="start" />
            View Details
          </IonButton>

          {canPauseProcess(process) && (
            <IonButton
              fill="clear"
              color="warning"
              size="small"
              onClick={() => onPause(process.id)}
            >
              <IonIcon icon={pauseCircle} slot="start" />
              Pause
            </IonButton>
          )}

          {canResumeProcess(process) && (
            <IonButton
              fill="clear"
              color="success"
              size="small"
              onClick={() => onResume(process.id)}
            >
              <IonIcon icon={playCircle} slot="start" />
              Resume
            </IonButton>
          )}

          {canCancelProcess(process) && (
            <IonButton
              fill="clear"
              color="danger"
              size="small"
              onClick={() => onCancel(process.id)}
            >
              <IonIcon icon={stopCircle} slot="start" />
              Cancel
            </IonButton>
          )}
        </div>
      </IonCardContent>
    </IonCard>
  );
};
