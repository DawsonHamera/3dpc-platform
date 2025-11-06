import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonText,
  
  IonChip,
  IonProgressBar
} from '@ionic/react';
import {
  chevronDown,
  chevronForward,
  playCircle,
  arrowForward,
  checkmarkCircle,
  documentTextOutline
} from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCurrentUser } from '../../../../features/auth/authSlice';
import {
  useGetProcessInstancesQuery,
  useGetProcessStepsQuery
} from '../../../../features/crud/processInstancesApi';
import { ProcessInstance } from '../../../../types';
import {
  getCurrentStep,
  getProcessDisplayName,
  isProcessActive,
  getStatusColor,
  getProgressPercentage,
  getCompletedStepsCount,
  getTotalStepsCount
} from '../../Process/shared/processUtils';
import { StepContentRenderer } from '../../Process/shared/StepContentRenderer';
import './ProcessQuickWidget.css';


interface ProcessQuickWidgetProps {
  maxProcesses?: number;
}

export const ProcessQuickWidget: React.FC<ProcessQuickWidgetProps> = ({
  maxProcesses = 3
}) => {
  const [expandedProcesses, setExpandedProcesses] = useState<Set<number>>(new Set());
  const user = useSelector(selectCurrentUser);
  const history = useHistory();

  const { data: allProcesses, isLoading } = useGetProcessInstancesQuery();

  // Filter to user's active processes
  const myActiveProcesses = allProcesses?.filter(
    (process: ProcessInstance) => 
      process.assignedUserId === user?.id && isProcessActive(process)
  )?.slice(0, maxProcesses) || [];

  const toggleExpanded = (processId: number) => {
    const newExpanded = new Set(expandedProcesses);
    if (newExpanded.has(processId)) {
      newExpanded.delete(processId);
    } else {
      newExpanded.add(processId);
    }
    setExpandedProcesses(newExpanded);
  };

  const handleViewAllProcesses = () => {
    history.push('/dashboard/my-processes');
  };

  const handleViewProcessDetail = (processId: number) => {
    history.push(`/dashboard/my-processes/${processId}`);
  };

  if (isLoading) {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>My Processes</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonProgressBar type="indeterminate" />
        </IonCardContent>
      </IonCard>
    );
  }

  if (myActiveProcesses.length === 0) {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>My Processes</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <div className="quick-widget-empty">
            <IonIcon icon={documentTextOutline} color="medium" />
            <IonText color="medium">
              <p>No active processes assigned</p>
            </IonText>
          </div>
        </IonCardContent>
      </IonCard>
    );
  }

  return (
    <IonCard className="process-quick-widget">
      <IonCardHeader>
        <IonCardTitle>
          <div className="widget-header">
            My Processes
            <IonButton 
              fill="clear" 
              style={{fontSize: "0.8rem"}} 
              onClick={handleViewAllProcesses}
            >
              View All
              <IonIcon icon={arrowForward} slot="end" />
            </IonButton>
          </div>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList lines="none">
          {myActiveProcesses.map((process) => (
            <ProcessQuickItem
              key={process.id}
              process={process}
              isExpanded={expandedProcesses.has(process.id)}
              onToggleExpanded={() => toggleExpanded(process.id)}
              onViewDetail={() => handleViewProcessDetail(process.id)}
            />
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

interface ProcessQuickItemProps {
  process: ProcessInstance;
  isExpanded: boolean;
  onToggleExpanded: () => void;
  onViewDetail: () => void;
}

const ProcessQuickItem: React.FC<ProcessQuickItemProps> = ({
  process,
  isExpanded,
  onToggleExpanded,
  onViewDetail
}) => {
  const { data: processSteps } = useGetProcessStepsQuery(
    process.id,
    { skip: !isExpanded }
  );

  const currentStep = getCurrentStep(processSteps);
  const completedCount = getCompletedStepsCount(processSteps);
  const totalCount = getTotalStepsCount(processSteps);
  const progressPercentage = getProgressPercentage(processSteps);

  return (
    <div className="process-quick-item">
      <IonItem button onClick={onToggleExpanded}>
        <IonIcon 
          icon={isExpanded ? chevronDown : chevronForward}
          slot="start"
          color="medium"
        />
        <IonLabel>
          <h3 className="process-name">{getProcessDisplayName(process)}</h3>
          <p className="process-status">
            Status: <IonChip style={{fontSize: "0.8rem"}} color={getStatusColor(process.status)}>
              {process.status}
            </IonChip>
          </p>
        </IonLabel>
        <IonButton 
          fill="clear" 
          style={{fontSize: "0.8rem"}} 
          slot="end"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetail();
          }}
        >
          <IonIcon icon={arrowForward} slot="icon-only" />
        </IonButton>
      </IonItem>
      
      {isExpanded && (
        <div className="expanded-content">
          {processSteps && (
            <>
              {/* Progress Summary */}
              <div className="progress-summary">
                <IonText>
                  <p><strong>{completedCount} of {totalCount}</strong> steps completed</p>
                </IonText>
                <IonProgressBar value={progressPercentage / 100} />
              </div>

              {/* Current Step */}
              {currentStep && (
                <div className="current-step-summary">
                  <IonText color="primary">
                    <h4>Current Step:</h4>
                  </IonText>
                  <div className="step-details">
                    <h5>{currentStep.step?.title || `Step ${currentStep.stepOrder}`}</h5>
                    {currentStep.step?.description && (
                      <p className="step-description">{currentStep.step.description}</p>
                    )}
                    
                    {/* Step Actions Preview */}
                    {currentStep.step?.stepActions && currentStep.step.stepActions.length > 0 && (
                      <div className="step-actions-preview">
                        <IonText color="medium">
                          <p>Available actions:</p>
                        </IonText>
                        {currentStep.step.stepActions.slice(0, 2).map((action, index) => (
                          <IonChip key={index} outline color="primary">
                            {action.label}
                          </IonChip>
                        ))}
                        {currentStep.step.stepActions.length > 2 && (
                          <IonChip outline color="medium">
                            +{currentStep.step.stepActions.length - 2} more
                          </IonChip>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <IonButton 
                    fill="outline" 
                    style={{fontSize: "0.8rem"}} 
                    expand="block"
                    onClick={onViewDetail}
                    className="quick-action-btn"
                  >
                    <IonIcon icon={playCircle} slot="start" />
                    Continue Process
                  </IonButton>
                </div>
              )}

              {!currentStep && process.status === 'completed' && (
                <div className="completion-status">
                  <IonIcon icon={checkmarkCircle} color="success" />
                  <IonText color="success">
                    <span>Process completed!</span>
                  </IonText>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
