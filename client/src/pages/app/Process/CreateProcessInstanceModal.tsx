import React, { useState } from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonAlert,
  IonLoading,
  IonList,
  IonCard,
  IonCardContent,
  IonText,
} from '@ionic/react';
import { close, checkmarkCircle, addCircle } from 'ionicons/icons';
import {
  useCreateProcessInstanceMutation,
  CreateProcessInstanceRequest,
} from '../../../features/crud/processInstancesApi';
import { useGetProcessTemplatesQuery } from '../../../features/crud/ProcessTemplates/processTemplatesApi';
import { useGetUsersQuery } from '../../../features/crud/users/usersApi';

interface CreateProcessInstanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProcessInstanceModal: React.FC<CreateProcessInstanceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<CreateProcessInstanceRequest>({
    templateId: 0,
    name: '',
    description: '',
    assignedUserId: undefined,
    dueDate: undefined,
    priority: 'normal',
    metadata: {},
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // API hooks
  const { data: processTemplates, isLoading: isLoadingTemplates } = useGetProcessTemplatesQuery();
  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery();
  const [createProcessInstance, { isLoading: isCreating }] = useCreateProcessInstanceMutation();

  // Form handlers
  const handleInputChange = (field: keyof CreateProcessInstanceRequest, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.templateId || !formData.name.trim()) {
      setAlertMessage('Please select a process template and enter a name.');
      setIsSuccess(false);
      setShowAlert(true);
      return;
    }

    try {
      await createProcessInstance(formData).unwrap();
      setAlertMessage('Process instance created successfully!');
      setIsSuccess(true);
      setShowAlert(true);
      
      // Reset form
      setFormData({
        templateId: 0,
        name: '',
        description: '',
        assignedUserId: undefined,
        dueDate: undefined,
        priority: 'normal',
        metadata: {},
      });
    } catch (error) {
      console.error('Failed to create process instance:', error);
      setAlertMessage('Failed to create process instance. Please try again.');
      setIsSuccess(false);
      setShowAlert(true);
    }
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      templateId: 0,
      name: '',
      description: '',
      assignedUserId: undefined,
      dueDate: undefined,
      priority: 'normal',
      metadata: {},
    });
    onClose();
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
    if (isSuccess) {
      onClose();
    }
  };

  const selectedTemplate = processTemplates?.find(t => t.id === formData.templateId);

  return (
    <IonModal isOpen={isOpen} onDidDismiss={handleCancel}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Process Instance</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={handleCancel}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonLoading isOpen={isCreating || isLoadingTemplates || isLoadingUsers} />

        {/* Template Selection */}
        <IonCard>
          <IonCardContent>
            <IonText color="primary">
              <h2>Process Template</h2>
            </IonText>
            <IonItem>
              <IonLabel position="stacked">Select Process Template *</IonLabel>
              <IonSelect
                value={formData.templateId}
                placeholder="Choose a process template"
                onIonChange={(e) => handleInputChange('templateId', e.detail.value)}
              >
                {processTemplates?.map((template) => (
                  <IonSelectOption key={template.id} value={template.id}>
                    {template.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>

            {selectedTemplate && (
              <IonItem lines="none">
                <IonLabel>
                  <IonText color="medium">
                    <p>{selectedTemplate.description}</p>
                    <p>Estimated duration: {selectedTemplate.estimatedDuration || 'N/A'} minutes</p>
                  </IonText>
                </IonLabel>
              </IonItem>
            )}
          </IonCardContent>
        </IonCard>

        {/* Basic Information */}
        <IonCard>
          <IonCardContent>
            <IonText color="primary">
              <h2>Basic Information</h2>
            </IonText>
            
            <IonItem>
              <IonLabel position="stacked">Process Name *</IonLabel>
              <IonInput
                value={formData.name}
                placeholder="Enter process name"
                onIonInput={(e) => handleInputChange('name', e.detail.value!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Description</IonLabel>
              <IonTextarea
                value={formData.description}
                placeholder="Enter process description (optional)"
                rows={3}
                onIonInput={(e) => handleInputChange('description', e.detail.value!)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Priority</IonLabel>
              <IonSelect
                value={formData.priority}
                onIonChange={(e) => handleInputChange('priority', e.detail.value)}
              >
                <IonSelectOption value="low">Low</IonSelectOption>
                <IonSelectOption value="normal">Normal</IonSelectOption>
                <IonSelectOption value="high">High</IonSelectOption>
                <IonSelectOption value="critical">Critical</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCardContent>
        </IonCard>

        {/* Assignment & Scheduling */}
        <IonCard>
          <IonCardContent>
            <IonText color="primary">
              <h2>Assignment & Scheduling</h2>
            </IonText>

            <IonItem>
              <IonLabel position="stacked">Assign to User</IonLabel>
              <IonSelect
                value={formData.assignedUserId}
                placeholder="Leave unassigned"
                onIonChange={(e) => handleInputChange('assignedUserId', e.detail.value)}
              >
                <IonSelectOption value={undefined}>Unassigned</IonSelectOption>
                {users?.map((user) => (
                  <IonSelectOption key={user.id} value={user.id}>
                    {user.name} ({user.email})
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Due Date</IonLabel>
              <IonDatetime
                value={formData.dueDate}
                onIonChange={(e) => handleInputChange('dueDate', e.detail.value as string)}
              />
            </IonItem>
          </IonCardContent>
        </IonCard>

        {/* Action Buttons */}
        <div className="ion-padding-top">
          <IonButton
            expand="block"
            onClick={handleSubmit}
            disabled={!formData.templateId || !formData.name.trim()}
          >
            <IonIcon icon={addCircle} slot="start" />
            Create Process Instance
          </IonButton>
          
          <IonButton
            expand="block"
            fill="outline"
            onClick={handleCancel}
            className="ion-margin-top"
          >
            Cancel
          </IonButton>
        </div>

        {/* Alert */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={handleAlertDismiss}
          header={isSuccess ? "Success" : "Error"}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonModal>
  );
};

export default CreateProcessInstanceModal;
