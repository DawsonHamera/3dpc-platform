import React from 'react';
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import {
  checkmarkCircle,
  playCircle,
  pauseCircle
} from 'ionicons/icons';
import { ProcessInstance, ProcessInstanceStep } from '../../../../../types';
import { StepContentRenderer } from '../../shared/StepContentRenderer';
import {
  canPauseProcess,
  canResumeProcess,
  formatDateTime
} from '../../shared/processUtils';

interface ProcessDetailsProps {
  process: ProcessInstance;
  currentStep: ProcessInstanceStep | null;
  completedSteps: ProcessInstanceStep[];
  stepData: any;
  onDataChange: (key: string, value: any) => void;
  onCompleteStep: (stepId: number) => void;
  onPause: (processId: number) => void;
  onResume: (processId: number) => void;
}

export const ProcessDetails: React.FC<ProcessDetailsProps> = ({
  process,
  currentStep,
  completedSteps,
  stepData,
  onDataChange,
  onCompleteStep,
  onPause,
  onResume
}) => {
  return (
    <div className="process-details">
      {/* Current Step Section */}
      {currentStep && (
        <div className="current-step-section">
          <h3>Complete Current Step</h3>
          
          <div className="step-info">
            <h4>{currentStep.step?.title || `Step ${currentStep.stepOrder}`}</h4>
            {currentStep.step?.description && (
              <p className="step-description">{currentStep.step.description}</p>
            )}
          </div>

          {/* Step Content and Actions */}
          <StepContentRenderer
            step={currentStep}
            stepData={stepData}
            onDataChange={onDataChange}
            showActions={true}
          />
        </div>
      )}

      {/* Completed Steps */}
      {completedSteps.length > 0 && (
        <div className="completed-steps-section">
          <h4>Completed Steps ({completedSteps.length})</h4>
          <IonList>
            {completedSteps.map((step) => (
              <IonItem key={step.id} lines="inset">
                <IonIcon 
                  icon={checkmarkCircle} 
                  color="success" 
                  slot="start" 
                />
                <IonLabel>
                  <h3>{step.step?.title || `Step ${step.stepOrder}`}</h3>
                  <p>Completed: {formatDateTime(step.completedAt)}</p>
                  {step.notes && (
                    <p className="step-notes">Notes: {step.notes}</p>
                  )}
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      )}
    </div>
  );
};
