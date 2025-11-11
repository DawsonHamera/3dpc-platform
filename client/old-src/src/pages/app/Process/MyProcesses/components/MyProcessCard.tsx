import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonProgressBar,
  IonChip,
  IonText
} from '@ionic/react';
import {
  arrowForward,
  playCircle,
  pauseCircle,
  checkmarkCircle
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { ProcessInstance, ProcessInstanceStep } from '../../../../../types';
import {
  getStatusColor,
  getProcessDisplayName,
  formatDate,
  canPauseProcess,
  canResumeProcess,
  getProgressPercentage,
  getCurrentStep
} from '../../shared/processUtils';

interface MyProcessCardProps {
  process: ProcessInstance;
  onPause: (processId: number) => void;
  onResume: (processId: number) => void;
}

export const MyProcessCard: React.FC<MyProcessCardProps> = ({
  process,
  onPause,
  onResume
}) => {
  const history = useHistory();
  
  // For the card view, we'll show basic progress info
  // Detailed step info will be loaded on the detail page
  const totalSteps = 0 // Will be calculated from actual steps when loaded || 0;
  const progressPercentage = totalSteps > 0 ? (process.currentStepOrder / totalSteps) * 100 : 0;

  const handleOpenDetails = () => {
    history.push(`/dashboard/my-processes/${process.id}`);
  };

  const handlePauseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPause(process.id);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onResume(process.id);
  };

  return (
    <IonCard className="my-process-card">
      <IonCardHeader>
        <IonItem lines="none" className="process-header">
          <IonLabel>
            <h2 className="process-title">{getProcessDisplayName(process)}</h2>
            {process.description && (
              <p className="process-description">{process.description}</p>
            )}
          </IonLabel>
          <IonChip 
            slot="end" 
            color={getStatusColor(process.status)}
          >
            {process.status}
          </IonChip>
        </IonItem>
      </IonCardHeader>

      <IonCardContent>
        {/* Progress Summary */}
        <div className="progress-summary">
          <div className="progress-info">
            <IonText>
              <p>
                <strong>Step {process.currentStepOrder} of {totalSteps}</strong>
              </p>
            </IonText>
            <IonProgressBar value={progressPercentage / 100} />
          </div>
        </div>

        {/* Current Step Preview */}
        {process.status === 'running' && (
          <div className="current-step-preview">
            <IonText color="primary">
              <h4>Current Step:</h4>
            </IonText>
            <p className="step-title">
              Step {process.currentStepOrder}
            </p>
          </div>
        )}

        {/* Completion Status */}
        {process.status === 'completed' && (
          <div className="completion-status">
            <IonIcon icon={checkmarkCircle} color="success" />
            <IonText color="success">
              <span>Completed on {formatDate(process.completedAt)}</span>
            </IonText>
          </div>
        )}

        {/* Due Date */}
        {process.dueDate && process.status !== 'completed' && (
          <div className="due-date">
            <IonText color="medium">
              <p>Due: {formatDate(process.dueDate)}</p>
            </IonText>
          </div>
        )}

        {/* Action Buttons */}
        <div className="card-actions">
          <IonButton 
            fill="outline" 
            expand="block" 
            onClick={handleOpenDetails}
            className="view-details-btn"
          >
            <IonIcon icon={arrowForward} slot="end" />
            View Details & Actions
          </IonButton>

          <div className="process-controls">
            {canPauseProcess(process) && (
              <IonButton 
                fill="clear" 
                size="small"
                onClick={handlePauseClick}
                color="warning"
              >
                <IonIcon icon={pauseCircle} slot="icon-only" />
              </IonButton>
            )}
            {canResumeProcess(process) && (
              <IonButton 
                fill="clear" 
                size="small"
                onClick={handleResumeClick}
                color="success"
              >
                <IonIcon icon={playCircle} slot="icon-only" />
              </IonButton>
            )}
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
