import React, { useState, useEffect } from 'react';
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonCheckbox,
    IonCard,
    IonCardContent,
    IonSelect,
    IonSelectOption,
    IonToast,
    IonChip,
    IonBadge,
} from '@ionic/react';
import { close, add, trash, save, checkmark, reorderThree } from 'ionicons/icons';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
    ProcessTemplate,
    ProcessTemplateStep,
    useGetProcessTemplateQuery,
    useAddStepToTemplateMutation,
    useRemoveStepFromTemplateMutation,
    useReorderTemplateStepsMutation,
} from '../../../../../features/crud/ProcessTemplates/processTemplatesApi';
import { useGetStepsQuery } from '../../../../../features/crud/steps/stepsApi';
import { Step } from '../../../../../features/crud/steps/types';

interface ProcessTemplateEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    templateId: number | null;
    onUpdate: () => void;
}

interface SortableTemplateStepProps {
    templateStep: ProcessTemplateStep;
    onRemove: (stepId: number) => void;
}

type TabType = 'preview' | 'steps';

const SortableTemplateStep: React.FC<SortableTemplateStepProps> = ({ templateStep, onRemove }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: templateStep.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style}>
            <IonCard style={{ margin: '8px 0' }}>
                <IonCardContent style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                        <div
                            {...attributes}
                            {...listeners}
                            style={{
                                cursor: 'grab',
                                minHeight: '32px',
                                minWidth: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '6px',
                                backgroundColor: 'var(--ion-color-light)',
                                touchAction: 'none',
                                flexShrink: 0,
                            }}
                        >
                            <IonIcon icon={reorderThree} style={{ fontSize: '16px' }} />
                        </div>
                        <span style={{
                            minWidth: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--ion-color-primary)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            flexShrink: 0,
                        }}>
                            {templateStep.stepOrder}
                        </span>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '500' }}>{templateStep.step.title}</div>
                            <div style={{ fontSize: '12px', color: 'var(--ion-color-medium)' }}>
                                {templateStep.step.stepType}
                                {templateStep.isRequired && ' • Required'}
                            </div>
                        </div>
                        <IonButton
                            fill="clear"
                            color="danger"
                            size="small"
                            onClick={() => onRemove(templateStep.stepId)}
                        >
                            <IonIcon icon={trash} />
                        </IonButton>
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

const ProcessTemplateEditorModal: React.FC<ProcessTemplateEditorModalProps> = ({
    isOpen,
    onClose,
    templateId,
    onUpdate,
}) => {
    const [activeTab, setActiveTab] = useState<TabType>('preview');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showAddStepModal, setShowAddStepModal] = useState(false);
    const [selectedStep, setSelectedStep] = useState<number | null>(null);
    const [stepIsRequired, setStepIsRequired] = useState(true);

    const { data: template, refetch: refetchTemplate } = useGetProcessTemplateQuery(templateId!, {
        skip: !templateId,
    });
    const { data: availableSteps = [] } = useGetStepsQuery();
    const [addStepToTemplate] = useAddStepToTemplateMutation();
    const [removeStepFromTemplate] = useRemoveStepFromTemplateMutation();
    const [reorderTemplateSteps] = useReorderTemplateStepsMutation();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 3,
            },
        })
    );

    useEffect(() => {
        // Reset add step modal when template changes
        setSelectedStep(null);
        setStepIsRequired(true);
    }, [templateId]);

    const handleAddStep = async () => {
        if (!selectedStep || !template) return;

        try {
            const currentSteps = template.processTemplateSteps || [];
            const nextOrder = currentSteps.length > 0 ? Math.max(...currentSteps.map((s: ProcessTemplateStep) => s.stepOrder)) + 1 : 1;
            
            await addStepToTemplate({
                templateId: template.id,
                stepId: selectedStep,
                stepOrder: nextOrder,
                isRequired: stepIsRequired,
            }).unwrap();

            setShowAddStepModal(false);
            setSelectedStep(null);
            setStepIsRequired(true);
            setToastMessage('Step added successfully!');
            setShowToast(true);
            onUpdate();
        } catch (error) {
            console.error('Error adding step:', error);
            setToastMessage('Error adding step');
            setShowToast(true);
        }
    };

    const handleRemoveStep = async (stepId: number) => {
        if (!template) return;

        try {
            await removeStepFromTemplate({
                templateId: template.id,
                stepId: stepId,
            }).unwrap();

            setToastMessage('Step removed successfully!');
            setShowToast(true);
            onUpdate();
        } catch (error) {
            console.error('Error removing step:', error);
            setToastMessage('Error removing step');
            setShowToast(true);
        }
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;

        if (!template || !over || active.id === over.id) {
            return;
        }

        try {
            // Work with sorted steps to match the display order
            const sortedSteps = [...(template.processTemplateSteps || [])].sort((a, b) => a.stepOrder - b.stepOrder);
            
            const oldIndex = sortedSteps.findIndex(step => step.id === active.id);
            const newIndex = sortedSteps.findIndex(step => step.id === over.id);

            const reorderedSteps = arrayMove(sortedSteps, oldIndex, newIndex);

            // Create new order data
            const stepOrderUpdates = reorderedSteps.map((step, index) => ({
                stepId: step.stepId,
                stepOrder: index + 1,
            }));

            await reorderTemplateSteps({
                templateId: template.id,
                stepOrderUpdates,
            }).unwrap();

            setToastMessage('Steps reordered successfully!');
            setShowToast(true);
            onUpdate();
        } catch (error) {
            console.error('Error reordering steps:', error);
            setToastMessage('Error reordering steps');
            setShowToast(true);
        }
    };

    const renderPreview = () => {
        if (!template) return null;
        
        const sortedSteps = [...(template.processTemplateSteps || [])].sort((a, b) => a.stepOrder - b.stepOrder);

        return (
            <div style={{ padding: '16px' }}>
                <IonCard>
                    <IonCardContent>
                        <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {template.name}
                            <IonChip color="primary">{template.category}</IonChip>
                        </h3>
                        
                        {template.description && (
                            <p style={{ color: 'var(--ion-color-medium)', marginBottom: '16px' }}>
                                {template.description}
                            </p>
                        )}

                        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                            <IonBadge color="medium">v{template.version}</IonBadge>
                            {template.estimatedDuration && (
                                <IonBadge color="tertiary">{template.estimatedDuration} min</IonBadge>
                            )}
                            <IonBadge color="primary">{sortedSteps.length} steps</IonBadge>
                        </div>

                        <h4 style={{ margin: '16px 0 8px 0' }}>Workflow Steps:</h4>
                        {sortedSteps.length === 0 ? (
                            <div style={{ 
                                textAlign: 'center', 
                                padding: '20px', 
                                color: 'var(--ion-color-medium)',
                                fontStyle: 'italic'
                            }}>
                                No steps configured. Add steps using the Steps tab.
                            </div>
                        ) : (
                            <div>
                                {sortedSteps.map((templateStep, index) => (
                                    <div key={templateStep.id} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '8px',
                                        backgroundColor: 'var(--ion-color-light)',
                                        borderRadius: '6px',
                                        marginBottom: '8px'
                                    }}>
                                        <span style={{
                                            minWidth: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--ion-color-primary)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            fontWeight: 'bold'
                                        }}>
                                            {templateStep.stepOrder}
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: '500' }}>{templateStep.step.title}</div>
                                            {templateStep.step.description && (
                                                <div style={{ fontSize: '12px', color: 'var(--ion-color-medium)' }}>
                                                    {templateStep.step.description}
                                                </div>
                                            )}
                                        </div>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            {templateStep.isRequired && (
                                                <IonChip color="warning" style={{ height: '20px', fontSize: '10px' }}>
                                                    Required
                                                </IonChip>
                                            )}
                                            <IonChip color="medium" style={{ height: '20px', fontSize: '10px' }}>
                                                {templateStep.step.stepType}
                                            </IonChip>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </IonCardContent>
                </IonCard>
            </div>
        );
    };

    const renderStepsEditor = () => {
        if (!template) return null;
        
        const sortedSteps = [...(template.processTemplateSteps || [])].sort((a, b) => a.stepOrder - b.stepOrder);
        // Allow all steps to be added multiple times
        const availableStepsForAdd = availableSteps;

        return (
            <div style={{ padding: '16px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ margin: 0 }}>Template Steps</h4>
                    <IonButton 
                        size="small" 
                        onClick={() => setShowAddStepModal(true)}
                        disabled={availableStepsForAdd.length === 0}
                    >
                        <IonIcon icon={add} slot="start" />
                        Add Step
                    </IonButton>
                </div>

                {sortedSteps.length === 0 ? (
                    <div style={{ 
                        textAlign: 'center', 
                        padding: '40px 20px', 
                        color: 'var(--ion-color-medium)' 
                    }}>
                        <p>No steps added to this template.</p>
                        <IonButton 
                            fill="outline" 
                            onClick={() => setShowAddStepModal(true)}
                            disabled={availableStepsForAdd.length === 0}
                        >
                            <IonIcon icon={add} slot="start" />
                            Add First Step
                        </IonButton>
                    </div>
                ) : (
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={sortedSteps.map(step => step.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            {sortedSteps.map((templateStep) => (
                                <SortableTemplateStep
                                    key={templateStep.id}
                                    templateStep={templateStep}
                                    onRemove={handleRemoveStep}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                )}

                {/* Add Step Modal */}
                <IonModal isOpen={showAddStepModal} onDidDismiss={() => setShowAddStepModal(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Add Step to Template</IonTitle>
                            <IonButtons slot="end">
                                <IonButton fill="clear" onClick={() => setShowAddStepModal(false)}>
                                    <IonIcon icon={close} />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div style={{ padding: '16px' }}>
                            <IonItem>
                                <IonLabel position="stacked">Select Step</IonLabel>
                                <IonSelect
                                    placeholder="Choose a step to add"
                                    value={selectedStep}
                                    onIonChange={e => setSelectedStep(e.detail.value)}
                                >
                                    {availableStepsForAdd.map(step => (
                                        <IonSelectOption key={step.id} value={step.id}>
                                            {step.title} ({step.stepType})
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Required Step</IonLabel>
                                <IonCheckbox
                                    checked={stepIsRequired}
                                    onIonChange={e => setStepIsRequired(e.detail.checked)}
                                />
                            </IonItem>

                            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                                <IonButton 
                                    expand="block" 
                                    onClick={handleAddStep}
                                    disabled={!selectedStep}
                                >
                                    <IonIcon icon={checkmark} slot="start" />
                                    Add Step
                                </IonButton>
                                <IonButton 
                                    expand="block" 
                                    fill="outline" 
                                    onClick={() => setShowAddStepModal(false)}
                                >
                                    Cancel
                                </IonButton>
                            </div>
                        </div>
                    </IonContent>
                </IonModal>
            </div>
        );
    };

    return (
        <>
            <IonModal isOpen={isOpen} onDidDismiss={onClose}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Edit Process Template</IonTitle>
                        <IonButtons slot="end">
                            <IonButton fill="clear" onClick={onClose}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    {!template ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                            <div>Loading template...</div>
                        </div>
                    ) : (
                        <>
                            <IonSegment value={activeTab} onIonChange={e => setActiveTab(e.detail.value as TabType)}>
                                <IonSegmentButton value="preview">
                                    <IonLabel>Preview</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="steps">
                                    <IonLabel>Steps</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>

                            {activeTab === 'preview' && renderPreview()}
                            {activeTab === 'steps' && renderStepsEditor()}
                        </>
                    )}
                </IonContent>
            </IonModal>

            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={3000}
                position="bottom"
            />
        </>
    );
};

export default ProcessTemplateEditorModal;
