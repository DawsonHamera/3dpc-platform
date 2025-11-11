import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonBadge,
  IonButton,
  IonIcon,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { pencilOutline, trashOutline, arrowUpOutline, arrowDownOutline, closeOutline } from 'ionicons/icons';
import { StepDefinition, StepContentData, StepActionData, StepTriggerData } from '../../../../types';

interface StepDefinitionCardProps {
  stepDefinition: StepDefinition;
  onEdit?: (stepDefinition: StepDefinition) => void;
  onDelete?: (id: number) => void;
  onDragStart?: (e: React.DragEvent, stepDefinition: StepDefinition) => void;
  isDraggable?: boolean;
  style?: React.CSSProperties;
}

export const StepDefinitionCard: React.FC<StepDefinitionCardProps> = ({
  stepDefinition,
  onEdit,
  onDelete,
  onDragStart,
  isDraggable = false,
  style = {}
}) => {
  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'printing': return 'primary';
      case 'maintenance': return 'warning';
      case 'quality_check': return 'success';
      case 'post_processing': return 'secondary';
      default: return 'medium';
    }
  };

  const getStepTypeIcon = (stepType?: string) => {
    switch (stepType) {
      case 'manual': return '👤';
      case 'automatic': return '🤖';
      case 'conditional': return '🔀';
      case 'timer': return '⏱️';
      default: return '📝';
    }
  };

  const cardStyle: React.CSSProperties = {
    cursor: isDraggable ? 'move' : 'default',
    transition: 'all 0.3s ease',
    ...style
  };

  return (
    <IonCard
      style={cardStyle}
      draggable={isDraggable}
      onDragStart={(e) => onDragStart?.(e, stepDefinition)}
    >
      <IonCardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            <span style={{ fontSize: '24px' }} title={stepDefinition.stepType}>
              {stepDefinition.icon || getStepTypeIcon(stepDefinition.stepType)}
            </span>
            <div style={{ flex: 1 }}>
              <IonCardTitle style={{ fontSize: '18px', margin: 0 }}>{stepDefinition.name}</IonCardTitle>
              <p style={{ 
                margin: '4px 0 0 0', 
                fontSize: '14px', 
                color: 'var(--ion-color-medium)',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {stepDefinition.description}
              </p>
            </div>
          </div>
          {(onEdit || onDelete) && (
            <div style={{ display: 'flex', gap: '4px' }}>
              {onEdit && (
                <IonButton
                  fill="clear"
                  size="small"
                  onClick={() => onEdit(stepDefinition)}
                  title="Edit step"
                >
                  <IonIcon icon={pencilOutline} />
                </IonButton>
              )}
              {onDelete && (
                <IonButton
                  fill="clear"
                  size="small"
                  color="danger"
                  onClick={() => onDelete(stepDefinition.id)}
                  title="Delete step"
                >
                  <IonIcon icon={trashOutline} />
                </IonButton>
              )}
            </div>
          )}
        </div>
      </IonCardHeader>

      <IonCardContent>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
          {stepDefinition.category && (
            <IonBadge color={getCategoryColor(stepDefinition.category)}>
              {stepDefinition.category.replace('_', ' ')}
            </IonBadge>
          )}
          {stepDefinition.stepType && (
            <IonBadge color="light">
              {stepDefinition.stepType}
            </IonBadge>
          )}
          {stepDefinition.estimatedDuration && (
            <IonBadge color="tertiary">
              ~{stepDefinition.estimatedDuration}min
            </IonBadge>
          )}
        </div>

        {stepDefinition.tags && stepDefinition.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {stepDefinition.tags.map((tag, index) => (
              <span 
                key={index} 
                style={{
                  padding: '2px 8px',
                  fontSize: '12px',
                  backgroundColor: 'var(--ion-color-light)',
                  color: 'var(--ion-color-dark)',
                  borderRadius: '12px',
                  border: '1px solid var(--ion-color-light-shade)'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </IonCardContent>
    </IonCard>
  );
};

interface ContentBlockProps {
  content: StepContentData;
  onUpdate: (content: StepContentData) => void;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  content,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast
}) => {
  const handleContentChange = (field: keyof StepContentData, value: any) => {
    onUpdate({ ...content, [field]: value });
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'text': return '📝';
      case 'image': return '🖼️';
      case 'video': return '🎥';
      case 'file': return '📎';
      case 'link': return '🔗';
      case 'template_variable': return '🔧';
      default: return '📄';
    }
  };

  return (
    <IonCard style={{ backgroundColor: 'var(--ion-color-light)' }}>
      <IonCardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>{getContentTypeIcon(content.contentType)}</span>
            <IonSelect
              value={content.contentType}
              onIonChange={(e) => handleContentChange('contentType', e.detail.value)}
              interface="popover"
              placeholder="Select content type"
            >
              <IonSelectOption value="text">Text</IonSelectOption>
              <IonSelectOption value="image">Image</IonSelectOption>
              <IonSelectOption value="video">Video</IonSelectOption>
              <IonSelectOption value="file">File</IonSelectOption>
              <IonSelectOption value="link">Link</IonSelectOption>
              <IonSelectOption value="template_variable">Template Variable</IonSelectOption>
            </IonSelect>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            {!isFirst && onMoveUp && (
              <IonButton fill="clear" size="small" onClick={onMoveUp} title="Move up">
                <IonIcon icon={arrowUpOutline} />
              </IonButton>
            )}
            {!isLast && onMoveDown && (
              <IonButton fill="clear" size="small" onClick={onMoveDown} title="Move down">
                <IonIcon icon={arrowDownOutline} />
              </IonButton>
            )}
            <IonButton fill="clear" size="small" color="danger" onClick={onRemove} title="Remove">
              <IonIcon icon={closeOutline} />
            </IonButton>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {content.contentType === 'text' && (
            <IonTextarea
              value={content.contentData?.text || ''}
              onIonInput={(e) => handleContentChange('contentData', { ...content.contentData, text: e.detail.value! })}
              placeholder="Enter text content..."
              rows={3}
              fill="outline"
            />
          )}

          {content.contentType === 'image' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <IonInput
                type="url"
                value={content.contentData?.url || ''}
                onIonInput={(e) => handleContentChange('contentData', { ...content.contentData, url: e.detail.value! })}
                placeholder="Image URL"
                fill="outline"
              />
              <IonInput
                type="text"
                value={content.contentData?.alt || ''}
                onIonInput={(e) => handleContentChange('contentData', { ...content.contentData, alt: e.detail.value! })}
                placeholder="Alt text"
                fill="outline"
              />
            </div>
          )}

          {content.contentType === 'link' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <IonInput
                type="url"
                value={content.contentData?.url || ''}
                onIonInput={(e) => handleContentChange('contentData', { ...content.contentData, url: e.detail.value! })}
                placeholder="Link URL"
                fill="outline"
              />
              <IonInput
                type="text"
                value={content.contentData?.label || ''}
                onIonInput={(e) => handleContentChange('contentData', { ...content.contentData, label: e.detail.value! })}
                placeholder="Link label"
                fill="outline"
              />
            </div>
          )}

          {content.contentType === 'template_variable' && (
            <IonInput
              type="text"
              value={content.contentData?.variable || ''}
              onIonInput={(e) => handleContentChange('contentData', { ...content.contentData, variable: e.detail.value! })}
              placeholder="Variable name (e.g., {{taskId}}, {{printerName}})"
              fill="outline"
            />
          )}

          <IonItem lines="none">
            <IonCheckbox
              checked={content.isRequired || false}
              onIonChange={(e) => handleContentChange('isRequired', e.detail.checked)}
              slot="start"
            />
            <IonLabel>Required</IonLabel>
          </IonItem>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

interface ActionBlockProps {
  action: StepActionData;
  onUpdate: (action: StepActionData) => void;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export const ActionBlock: React.FC<ActionBlockProps> = ({
  action,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast
}) => {
  const handleActionChange = (field: keyof StepActionData, value: any) => {
    onUpdate({ ...action, [field]: value });
  };

  const handleTriggerAdd = () => {
    const newTrigger: StepTriggerData = {
      triggerType: 'update_task_status',
      triggerConfig: {},
      isEnabled: true,
      triggerOrder: (action.triggers?.length || 0) + 1
    };
    const updatedTriggers = [...(action.triggers || []), newTrigger];
    handleActionChange('triggers', updatedTriggers);
  };

  const handleTriggerUpdate = (index: number, trigger: StepTriggerData) => {
    const updatedTriggers = [...(action.triggers || [])];
    updatedTriggers[index] = trigger;
    handleActionChange('triggers', updatedTriggers);
  };

  const handleTriggerRemove = (index: number) => {
    const updatedTriggers = action.triggers?.filter((_, i) => i !== index) || [];
    handleActionChange('triggers', updatedTriggers);
  };

  return (
    <IonCard style={{ backgroundColor: 'var(--ion-color-primary-tint)' }}>
      <IonCardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IonCardTitle style={{ fontSize: '18px' }}>Action</IonCardTitle>
          <div style={{ display: 'flex', gap: '4px' }}>
            {!isFirst && onMoveUp && (
              <IonButton fill="clear" size="small" onClick={onMoveUp} title="Move up">
                <IonIcon icon={arrowUpOutline} />
              </IonButton>
            )}
            {!isLast && onMoveDown && (
              <IonButton fill="clear" size="small" onClick={onMoveDown} title="Move down">
                <IonIcon icon={arrowDownOutline} />
              </IonButton>
            )}
            <IonButton fill="clear" size="small" color="danger" onClick={onRemove} title="Remove">
              <IonIcon icon={closeOutline} />
            </IonButton>
          </div>
        </div>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Label</IonLabel>
                <IonInput
                  value={action.label || ''}
                  onIonInput={(e) => handleActionChange('label', e.detail.value!)}
                  placeholder="Action label"
                />
              </IonItem>
            </IonCol>

            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Action Type</IonLabel>
                <IonSelect
                  value={action.actionType}
                  onIonChange={(e) => handleActionChange('actionType', e.detail.value)}
                  interface="popover"
                >
                  <IonSelectOption value="complete_step">Complete Step</IonSelectOption>
                  <IonSelectOption value="skip_step">Skip Step</IonSelectOption>
                  <IonSelectOption value="go_to_step">Go to Step</IonSelectOption>
                  <IonSelectOption value="update_status">Update Status</IonSelectOption>
                  <IonSelectOption value="start_timer">Start Timer</IonSelectOption>
                  <IonSelectOption value="capture_data">Capture Data</IonSelectOption>
                  <IonSelectOption value="send_notification">Send Notification</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>

            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Button Style</IonLabel>
                <IonSelect
                  value={action.buttonStyle || 'primary'}
                  onIonChange={(e) => handleActionChange('buttonStyle', e.detail.value)}
                  interface="popover"
                >
                  <IonSelectOption value="primary">Primary</IonSelectOption>
                  <IonSelectOption value="secondary">Secondary</IonSelectOption>
                  <IonSelectOption value="success">Success</IonSelectOption>
                  <IonSelectOption value="warning">Warning</IonSelectOption>
                  <IonSelectOption value="danger">Danger</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>

            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Icon</IonLabel>
                <IonInput
                  value={action.icon || ''}
                  onIonInput={(e) => handleActionChange('icon', e.detail.value!)}
                  placeholder="Icon (emoji or class)"
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div style={{ display: 'flex', gap: '16px', margin: '16px 0' }}>
          <IonItem lines="none">
            <IonCheckbox
              checked={action.isEnabled !== false}
              onIonChange={(e) => handleActionChange('isEnabled', e.detail.checked)}
              slot="start"
            />
            <IonLabel>Enabled</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonCheckbox
              checked={action.requiresConfirmation || false}
              onIonChange={(e) => handleActionChange('requiresConfirmation', e.detail.checked)}
              slot="start"
            />
            <IonLabel>Requires Confirmation</IonLabel>
          </IonItem>
        </div>

        {action.requiresConfirmation && (
          <IonItem>
            <IonLabel position="stacked">Confirmation Message</IonLabel>
            <IonInput
              value={action.confirmationMessage || ''}
              onIonInput={(e) => handleActionChange('confirmationMessage', e.detail.value!)}
              placeholder="Are you sure you want to perform this action?"
            />
          </IonItem>
        )}

        <div style={{ borderTop: '1px solid var(--ion-color-light)', paddingTop: '16px', marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Triggers</h3>
            <IonButton
              size="small"
              onClick={handleTriggerAdd}
            >
              Add Trigger
            </IonButton>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {action.triggers?.map((trigger, index) => (
              <IonCard key={index} style={{ margin: 0, backgroundColor: 'var(--ion-color-light)' }}>
                <IonCardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Trigger {index + 1}</span>
                    <IonButton
                      fill="clear"
                      size="small"
                      color="danger"
                      onClick={() => handleTriggerRemove(index)}
                    >
                      Remove
                    </IonButton>
                  </div>

                  <IonGrid>
                    <IonRow>
                      <IonCol size="12" sizeMd="8">
                        <IonItem>
                          <IonLabel position="stacked">Trigger Type</IonLabel>
                          <IonSelect
                            value={trigger.triggerType}
                            onIonChange={(e) => handleTriggerUpdate(index, { ...trigger, triggerType: e.detail.value as any })}
                            interface="popover"
                          >
                            <IonSelectOption value="update_task_status">Update Task Status</IonSelectOption>
                            <IonSelectOption value="update_printer_status">Update Printer Status</IonSelectOption>
                            <IonSelectOption value="send_notification">Send Notification</IonSelectOption>
                            <IonSelectOption value="schedule_timer">Schedule Timer</IonSelectOption>
                            <IonSelectOption value="create_subtask">Create Subtask</IonSelectOption>
                            <IonSelectOption value="log_event">Log Event</IonSelectOption>
                          </IonSelect>
                        </IonItem>
                      </IonCol>

                      <IonCol size="12" sizeMd="4" style={{ display: 'flex', alignItems: 'center' }}>
                        <IonItem lines="none">
                          <IonCheckbox
                            checked={trigger.isEnabled !== false}
                            onIonChange={(e) => handleTriggerUpdate(index, { ...trigger, isEnabled: e.detail.checked })}
                            slot="start"
                          />
                          <IonLabel>Enabled</IonLabel>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
