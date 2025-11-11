import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToast, IonToolbar, IonBadge } from '@ionic/react';
import { add, close, create, trash, play, checkmark, warning, eye, eyeOff, list } from 'ionicons/icons';
import React, { useState } from 'react';
import { 
    useGetProcessTemplatesQuery, 
    useCreateProcessTemplateMutation, 
    useUpdateProcessTemplateMutation, 
    useDeleteProcessTemplateMutation,
    ProcessTemplate,
    CreateProcessTemplate,
    ProcessCategory
} from '../../../../features/crud/ProcessTemplates/processTemplatesApi';
import ProcessTemplateEditorModal from './components/ProcessTemplateEditorModal';

const ProcessTemplateManager: React.FC = () => {
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState<ProcessTemplate | null>(null);
    const [editorModalOpen, setEditorModalOpen] = useState(false);
    const [selectedTemplateForEdit, setSelectedTemplateForEdit] = useState<ProcessTemplate | null>(null);

    const { data: templates = [], isLoading, refetch } = useGetProcessTemplatesQuery();
    console.log('Templates:', templates);
    const [deleteTemplate] = useDeleteProcessTemplateMutation();
    const [updateTemplate] = useUpdateProcessTemplateMutation();
    const [createTemplate] = useCreateProcessTemplateMutation();

    const defaultTemplate: CreateProcessTemplate = {
        name: '',
        description: '',
        version: '1.0',
        category: ProcessCategory.PRINTING,
        estimatedDuration: undefined,
    };

    const [formData, setFormData] = useState<CreateProcessTemplate>({ ...defaultTemplate });

    const resetForm = () => {
        setFormData({ ...defaultTemplate });
        setEditingTemplate(null);
        setIsModalOpen(false);
    };

    const handleEdit = (template: ProcessTemplate) => {
        setEditingTemplate(template);
        setFormData({
            name: template.name,
            description: template.description || '',
            version: template.version || '1.0',
            category: template.category || ProcessCategory.PRINTING,
            estimatedDuration: template.estimatedDuration,
        });
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingTemplate) {
                await updateTemplate({
                    id: editingTemplate.id,
                    data: formData,
                }).unwrap();
                setToastMessage('Process template updated successfully!');
            } else {
                await createTemplate(formData).unwrap();
                setToastMessage('Process template created successfully!');
            }
            resetForm();
            refetch();
            setShowToast(true);
        } catch (error) {
            console.error('Error saving process template:', error);
            setToastMessage('Error saving process template');
            setShowToast(true);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteTemplate(id).unwrap();
            setToastMessage('Process template deleted successfully!');
            refetch();
            setShowToast(true);
        } catch (error) {
            console.error('Error deleting process template:', error);
            setToastMessage('Error deleting process template');
            setShowToast(true);
        }
    };

    const handleEditTemplate = (template: ProcessTemplate) => {
        setSelectedTemplateForEdit(template);
        setEditorModalOpen(true);
    };

    const getCategoryColor = (category: ProcessCategory) => {
        switch (category) {
            case ProcessCategory.PRINTING: return 'primary';
            case ProcessCategory.MAINTENANCE: return 'warning';
            case ProcessCategory.QUALITY_CHECK: return 'success';
            case ProcessCategory.POST_PROCESSING: return 'secondary';
            case ProcessCategory.DESIGN: return 'tertiary';
            case ProcessCategory.TESTING: return 'danger';
            case ProcessCategory.TRAINING: return 'medium';
            default: return 'medium';
        }
    };

    const renderTemplatePreview = (template: ProcessTemplate) => {
        const hasSteps = template.processTemplateSteps && template.processTemplateSteps.length > 0;
        const sortedSteps = hasSteps ? [...(template.processTemplateSteps ?? [])].sort((a, b) => a.stepOrder - b.stepOrder) : [];

        return (
            <IonCard key={template.id} style={{ margin: '8px 0' }}>
                <IonCardHeader style={{ paddingBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
                            <IonIcon icon={play} color="primary" style={{ fontSize: '18px', flexShrink: 0 }} />
                            <IonCardTitle style={{ margin: 0, fontSize: '16px', wordBreak: 'break-word' }}>
                                {template.name}
                            </IonCardTitle>
                        </div>
                        <IonButton
                            fill="clear"
                            size="small"
                            onClick={() => handleEditTemplate(template)}
                            style={{ flexShrink: 0 }}
                        >
                            <IonIcon icon={create} />
                        </IonButton>
                    </div>
                    
                    {/* <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        <IonChip color={getCategoryColor(template.category)} style={{ height: '20px', fontSize: '11px' }}>
                            {template.category.replace('_', ' ')}
                        </IonChip>
                        <IonChip style={{ height: '20px', fontSize: '11px' }}>
                            v{template.version}
                        </IonChip>
                        {template.estimatedDuration && (
                            <IonChip color="medium" style={{ height: '20px', fontSize: '11px' }}>
                                {template.estimatedDuration}min
                            </IonChip>
                        )}
                        {hasSteps && (
                            <IonBadge color="primary" style={{ fontSize: '10px' }}>
                                {(template.processTemplateSteps?.length || 0)} step{(template.processTemplateSteps?.length || 0) !== 1 ? 's' : ''}
                            </IonBadge>
                        )}
                    </div> */}

                    {template.description && (
                        <div style={{ 
                            fontSize: '13px', 
                            color: 'var(--ion-color-medium)', 
                            lineHeight: '1.4',
                            marginBottom: '8px'
                        }}>
                            {template.description}
                        </div>
                    )}
                </IonCardHeader>

                <IonCardContent style={{ paddingTop: 0 }}>
                    {/* Steps Preview */}
                    {hasSteps && (
                        <div style={{ marginBottom: '12px' }}>
                            <div style={{ 
                                fontSize: '12px', 
                                color: 'var(--ion-color-medium)', 
                                marginBottom: '8px',
                                fontWeight: '600'
                            }}>
                                Workflow Steps:
                            </div>
                            {sortedSteps.slice(0, 3).map((templateStep, index) => (
                                <div key={templateStep.id} style={{ 
                                    marginBottom: '6px',
                                    padding: '6px 8px',
                                    backgroundColor: 'var(--ion-color-light)',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    lineHeight: '1.3'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ 
                                            minWidth: '18px',
                                            height: '18px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--ion-color-primary)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '10px',
                                            fontWeight: 'bold'
                                        }}>
                                            {templateStep.stepOrder}
                                        </span>
                                        <span style={{ fontWeight: '500' }}>
                                            {templateStep.step.title}
                                        </span>
                                        {templateStep.isRequired && (
                                            <IonChip color="warning" style={{ height: '16px', fontSize: '9px' }}>
                                                Required
                                            </IonChip>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {sortedSteps.length > 3 && (
                                <div style={{ 
                                    fontSize: '11px', 
                                    color: 'var(--ion-color-medium)',
                                    fontStyle: 'italic',
                                    textAlign: 'center',
                                    marginTop: '8px'
                                }}>
                                    +{sortedSteps.length - 3} more step{sortedSteps.length - 3 !== 1 ? 's' : ''}
                                </div>
                            )}
                        </div>
                    )}

                    {!hasSteps && (
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                            color: 'var(--ion-color-medium)',
                            fontSize: '12px'
                        }}>
                            <IonIcon icon={warning} style={{ fontSize: '24px', marginBottom: '8px' }} />
                            <div>No steps configured</div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginTop: '16px',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--ion-color-light)'
                    }}>
                        <IonButton
                            fill="outline"
                            size="small"
                            color="danger"
                            onClick={() => handleDelete(template.id)}
                        >
                            <IonIcon icon={trash} slot="start" style={{ fontSize: '14px' }} />
                            Delete
                        </IonButton>
                        <IonButton
                            size="small"
                            onClick={() => handleEditTemplate(template)}
                        >
                            <IonIcon icon={list} slot="start" style={{ fontSize: '14px' }} />
                            Edit Steps
                        </IonButton>
                    </div>
                </IonCardContent>
            </IonCard>
        );
    };

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
                    <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>Process Templates</h2>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--ion-color-medium)', fontSize: '14px' }}>
                        Create and manage reusable workflow templates
                    </p>
                </div>
                <IonButton onClick={() => setIsModalOpen(true)}>
                    <IonIcon icon={add} slot="start" />
                    Create
                </IonButton>
            </div>

            {templates.length === 0 && (
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
                    <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>No Process Templates</h2>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4' }}>
                        Create your first process template to start building reusable workflows.
                    </p>
                </div>
            )}

            {/* Templates List */}
            <div style={{ padding: '0 16px' }}>
                {!isLoading && Array.isArray(templates) && templates.map((template) => renderTemplatePreview(template))}
            </div>

            {/* Modal for Create/Edit Template */}
            <IonModal isOpen={isModalOpen} onDidDismiss={resetForm}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{editingTemplate ? 'Edit Template' : 'Create Template'}</IonTitle>
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
                            <IonLabel position="stacked">Name *</IonLabel>
                            <IonInput
                                value={formData.name}
                                onIonInput={e => setFormData({ ...formData, name: e.detail.value! })}
                                placeholder="Enter template name"
                                required
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Description</IonLabel>
                            <IonTextarea
                                value={formData.description}
                                onIonInput={e => setFormData({ ...formData, description: e.detail.value! })}
                                placeholder="Enter template description"
                                rows={3}
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Version</IonLabel>
                            <IonInput
                                value={formData.version}
                                onIonInput={e => setFormData({ ...formData, version: e.detail.value! })}
                                placeholder="Enter version (e.g., 1.0)"
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Category</IonLabel>
                            <IonSelect
                                value={formData.category}
                                onIonChange={e => setFormData({ ...formData, category: e.detail.value })}
                            >
                                <IonSelectOption value={ProcessCategory.PRINTING}>Printing</IonSelectOption>
                                <IonSelectOption value={ProcessCategory.MAINTENANCE}>Maintenance</IonSelectOption>
                                <IonSelectOption value={ProcessCategory.QUALITY_CHECK}>Quality Check</IonSelectOption>
                                <IonSelectOption value={ProcessCategory.POST_PROCESSING}>Post Processing</IonSelectOption>
                                <IonSelectOption value={ProcessCategory.DESIGN}>Design</IonSelectOption>
                                <IonSelectOption value={ProcessCategory.TESTING}>Testing</IonSelectOption>
                                <IonSelectOption value={ProcessCategory.TRAINING}>Training</IonSelectOption>
                                <IonSelectOption value={ProcessCategory.OTHER}>Other</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Estimated Duration (minutes)</IonLabel>
                            <IonInput
                                type="number"
                                value={formData.estimatedDuration}
                                onIonInput={e => setFormData({ ...formData, estimatedDuration: e.detail.value ? parseInt(e.detail.value) : undefined })}
                                placeholder="Enter estimated duration"
                            />
                        </IonItem>

                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                            <IonButton expand="block" type="submit">
                                {editingTemplate ? 'Update' : 'Create'} Template
                            </IonButton>
                            <IonButton expand="block" fill="outline" onClick={resetForm}>
                                Cancel
                            </IonButton>
                        </div>
                    </form>
                </IonContent>
            </IonModal>

            {/* Process Template Editor Modal */}
            {selectedTemplateForEdit && (
                <ProcessTemplateEditorModal
                    isOpen={editorModalOpen}
                    onClose={() => {
                        setEditorModalOpen(false);
                        setSelectedTemplateForEdit(null);
                    }}
                    templateId={selectedTemplateForEdit.id}
                    onUpdate={() => {
                        refetch();
                        setToastMessage('Process template updated successfully!');
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

export default ProcessTemplateManager;
