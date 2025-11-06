import React from 'react';
import {
  IonButton,
  IonInput,
  IonTextarea,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/react';
import { ProcessInstanceStep, StepContent, StepAction } from '../../../../types';

export const renderStepContent = (content: StepContent) => {
  if (!content || !content.contentData) return null;

  switch (content.contentType) {
    case 'text':
      return (
        <IonText>
          <p>{content.contentData}</p>
        </IonText>
      );
    
    case 'image':
      return (
        <img 
          src={content.contentData} 
          alt="Step content" 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      );
    
    case 'video':
      return (
        <video 
          src={content.contentData} 
          controls 
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      );
    
    case 'file':
      return (
        <IonButton 
          fill="outline" 
          href={content.contentData} 
        >
          Download File
        </IonButton>
      );
    
    case 'link':
      return (
        <IonButton 
          fill="outline" 
          href={content.contentData} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Open Link
        </IonButton>
      );
    
    case 'template_variable':
      return (
        <IonText color="primary">
          <span>{content.contentData}</span>
        </IonText>
      );
    
    default:
      return (
        <IonText>
          <p>{String(content.contentData)}</p>
        </IonText>
      );
  }
};

export const renderStepAction = (
  action: StepAction,
  onActionClick: (action: StepAction) => void
) => {
  if (!action.isEnabled) return null;

  return (
    <IonButton
      key={action.id}
      color={action.buttonStyle || 'primary'}
      size="default"
      fill="solid"
      onClick={() => onActionClick(action)}
    >
      {action.icon && <span style={{ marginRight: '8px' }}>{action.icon}</span>}
      {action.label}
    </IonButton>
  );
};

interface StepContentRendererProps {
  step: ProcessInstanceStep;
  stepData?: any;
  onDataChange?: (key: string, value: any) => void;
  onActionClick?: (action: StepAction) => void;
  showActions?: boolean;
}

export const StepContentRenderer: React.FC<StepContentRendererProps> = ({
  step,
  stepData = {},
  onDataChange = () => {},
  onActionClick = () => {},
  showActions = true
}) => {
  const stepContents = step.step?.stepContents || [];
  const stepActions = step.step?.stepActions || [];

  return (
    <div className="step-content-renderer">
      {/* Render step contents */}
      {stepContents.length > 0 && (
        <div className="step-contents" style={{ marginBottom: '16px' }}>
          {stepContents.map((content, index) => (
            <div key={index} style={{ marginBottom: '12px' }}>
              {renderStepContent(content)}
            </div>
          ))}
        </div>
      )}

      {/* Basic step input fields for user data */}
      <div className="step-inputs" style={{ marginBottom: '16px' }}>
        <IonItem>
          <IonLabel position="stacked">Notes</IonLabel>
          <IonTextarea
            value={stepData.notes || ''}
            onIonInput={(e) => onDataChange('notes', e.detail.value)}
            placeholder="Add any notes or observations..."
            rows={3}
          />
        </IonItem>
        
        {/* Quality check - common for most steps */}
        <IonItem>
          <IonLabel position="stacked">Status</IonLabel>
          <IonInput
            value={stepData.status || ''}
            onIonInput={(e) => onDataChange('status', e.detail.value)}
            placeholder="Step completion status"
          />
        </IonItem>
      </div>

      {/* Render step actions */}
      {showActions && stepActions.length > 0 && (
        <div className="step-actions" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {stepActions.map((action) => 
            renderStepAction(action, onActionClick)
          )}
        </div>
      )}
    </div>
  );
};
