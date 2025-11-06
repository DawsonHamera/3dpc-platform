import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToast, IonToolbar, IonBadge } from '@ionic/react';
import { add, close, create, trash, play, checkmark, warning, eye, eyeOff } from 'ionicons/icons';
import React, { useState } from 'react';
import { useAddStepMutation, useDeleteStepMutation, useGetStepsQuery, useUpdateStepMutation } from '../../../../features/crud/steps/stepsApi';
import { getCategoryColor, getStepTypeIcon, renderStepContent } from './hooks';
import { CreateStep, Step } from '../../../../features/crud/steps/types';
import StepEditorModal from './components/StepEditorModal';
import StepPreview from './StepPreview';

const StepManager: React.FC = () => {
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStep, setEditingStep] = useState<Step | null>(null);
    const [editorModalOpen, setEditorModalOpen] = useState(false);
    const [selectedStepForEdit, setSelectedStepForEdit] = useState<Step | null>(null);

    const { data: steps = [], isLoading, refetch } = useGetStepsQuery();
    const [deleteStep] = useDeleteStepMutation();
    const [updateStep] = useUpdateStepMutation();
    const [createStep] = useAddStepMutation();

    const defaultStep: CreateStep = {
        title: '',
        description: '',
        stepType: 'manual',
        isRequired: false,
        isCritical: false,
    };

    const [formData, setFormData] = useState<CreateStep>({ ...defaultStep });

    const resetForm = () => {
        setFormData({ ...defaultStep });
        setEditingStep(null);
        setIsModalOpen(false);
    };

    const handleEdit = (step: Step) => {
        setEditingStep(step);
        setFormData({
            title: step.title,
            description: step.description || '',
            stepType: step.stepType || 'manual',
            isRequired: step.isRequired || false,
            isCritical: step.isCritical || false,
        });
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingStep) {
                await updateStep({
                    id: editingStep.id,
                    data: formData,
                }).unwrap();
                setToastMessage('Step definition updated successfully!');
            } else {
                await createStep(formData).unwrap();
                setToastMessage('Step definition created successfully!');
            }
            resetForm();
            refetch();
            setShowToast(true);
        } catch (error) {
            console.error('Error saving step definition:', error);
            setToastMessage('Error saving step definition');
            setShowToast(true);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteStep(id).unwrap();
            setToastMessage('Step definition deleted successfully!');
            refetch();
            setShowToast(true);
        } catch (error) {
            console.error('Error deleting step definition:', error);
            setToastMessage('Error deleting step definition');
            setShowToast(true);
        }
    };

    const handleEditStep = (step: Step) => {
        setSelectedStepForEdit(step);
        setEditorModalOpen(true);
    };

    if (!isLoading) {
        console.log('Steps:', steps);
    }


    return (
        <div>
            {/* Header Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                padding: '16px',
                flexWrap: 'wrap',
                gap: '12px'
            }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>Steps</h2>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--ion-color-medium)', fontSize: '14px' }}>
                        Create and manage reusable workflow steps
                    </p>
                </div>
                <IonButton onClick={() => setIsModalOpen(true)}>
                    <IonIcon icon={add} slot="start" />
                    Create
                </IonButton>
            </div>

            {steps.length === 0 && (
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    color: 'var(--ion-color-medium)'
                }}>
                    <IonIcon
                        icon={add}
                        style={{
                            fontSize: '64px',
                            color: 'var(--ion-color-light)',
                            marginBottom: '16px'
                        }}
                    />
                    <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>No Steps Defined</h2>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4' }}>
                        Create your first step to start building your workflow process.
                    </p>
                </div>
            )}

            {/* Steps List */}
            <div style={{ padding: '0 16px' }}>
                {!isLoading && Array.isArray(steps) && steps.map((step) => (
                    <StepPreview key={step.id} step={step} header={(step) =>
                        <IonCardHeader style={{ paddingBottom: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
                                    <IonIcon icon={play} color="primary" style={{ fontSize: '18px', flexShrink: 0 }} />
                                    <IonCardTitle style={{ margin: 0, fontSize: '16px', wordBreak: 'break-word' }}>
                                        {step.title}
                                    </IonCardTitle>
                                </div>
                                <IonButton
                                    fill="clear"
                                    size="small"
                                    onClick={() => handleEditStep(step)}
                                    style={{ flexShrink: 0 }}
                                >
                                    <IonIcon icon={create} />
                                </IonButton>
                                <IonButton
                                    fill='clear'
                                    size="small"
                                    color="danger"
                                    onClick={() => handleDelete(step.id)}
                                >
                                    <IonIcon icon={trash} slot="start" style={{ fontSize: '14px' }} />

                                </IonButton>
                            </div>
                        </IonCardHeader>
                    } />
                ))}
            </div>

            {/* Modal for Create/Edit Step */}
            <IonModal isOpen={isModalOpen} onDidDismiss={resetForm}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{editingStep ? 'Edit Step' : 'Create Step'}</IonTitle>
                        <IonButtons slot="end">
                            <IonButton fill="clear" onClick={resetForm}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
                        <IonItem>
                            <IonLabel position="stacked">Title *</IonLabel>
                            <IonInput
                                value={formData.title}
                                onIonInput={e => setFormData({ ...formData, title: e.detail.value! })}
                                placeholder="Enter step title"
                                required
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Description</IonLabel>
                            <IonTextarea
                                value={formData.description}
                                onIonInput={e => setFormData({ ...formData, description: e.detail.value! })}
                                placeholder="Enter step description"
                                rows={3}
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Step Type</IonLabel>
                            <IonSelect
                                value={formData.stepType}
                                onIonChange={e => setFormData({ ...formData, stepType: e.detail.value })}
                            >
                                <IonSelectOption value="manual">Manual</IonSelectOption>
                                <IonSelectOption value="automated">Automated</IonSelectOption>
                                <IonSelectOption value="approval">Approval</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Required Step</IonLabel>
                            <IonCheckbox
                                checked={formData.isRequired}
                                onIonChange={e => setFormData({ ...formData, isRequired: e.detail.checked })}
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel>Critical Step</IonLabel>
                            <IonCheckbox
                                checked={formData.isCritical}
                                onIonChange={e => setFormData({ ...formData, isCritical: e.detail.checked })}
                            />
                        </IonItem>

                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                            <IonButton expand="block" type="submit">
                                {editingStep ? 'Update' : 'Create'} Step
                            </IonButton>
                            <IonButton expand="block" fill="outline" onClick={resetForm}>
                                Cancel
                            </IonButton>
                        </div>
                    </form>
                </IonContent>
            </IonModal>

            {/* Unified Step Editor Modal */}
            {selectedStepForEdit && (
                <StepEditorModal
                    isOpen={editorModalOpen}
                    onClose={() => {
                        setEditorModalOpen(false);
                        setSelectedStepForEdit(null);
                    }}
                    step={selectedStepForEdit}
                    onUpdate={() => {
                        refetch();
                        setToastMessage('Step updated successfully!');
                        setShowToast(true);
                    }}
                />
            )}

            {/* Toast */}
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={3000}
                position="bottom"
            />
        </div>
    );
};

export default StepManager;
