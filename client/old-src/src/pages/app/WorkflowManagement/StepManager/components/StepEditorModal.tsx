import React, { useState, useEffect } from 'react';
import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar,
    IonToast,
    IonNote,
    IonSegment,
    IonSegmentButton,
    IonChip,
    IonBadge,
    IonList,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/react';
import {
    close,
    add,
    trash,
    eye,
    eyeOff,
    reorderThree,
    settings,
    checkmark,
    warning,
    information,
    chevronDown,
    chevronUp,
    play,
} from 'ionicons/icons';
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
import { Step, StepContent, StepAction } from '../../../../../features/crud/steps/types';
import {
    useUpdateStepMutation,
    useUpdateStepContentsMutation,
    useUpdateStepActionsMutation,
} from '../../../../../features/crud/steps/stepsApi';
import StepPreview from '../StepPreview';

interface StepEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    step: Step | null;
    onUpdate: () => void;
}

interface NewStepContent {
    contentOrder: number;
    contentType: string;
    contentData: string;
}

interface NewStepAction {
    actionOrder: number;
    actionType: string;
    label: string;
    buttonStyle?: 'primary' | 'secondary' | 'success' | 'warning';
    isEnabled: boolean;
    actionConfig: string;
}

// Sortable Content Item Component
interface SortableContentItemProps {
    content: StepContent;
    onEdit: (content: StepContent) => void;
    onDelete: (id: number) => void;
    isPreview?: boolean;
}

const SortableContentItem: React.FC<SortableContentItemProps> = ({
    content,
    onEdit,
    onDelete,
    isPreview = false
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: content.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const renderContentPreview = () => {
        switch (content.contentType) {
            case 'text':
                return <p style={{ margin: 0, lineHeight: '1.4' }}>{content.contentData}</p>;
            case 'link':
                return <a href={content.contentData} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ion-color-primary)' }}>{content.contentData}</a>;
            case 'image':
                return <img src={content.contentData} alt="Step content" style={{ maxWidth: '100%', borderRadius: '4px' }} />;
            case 'video':
                return <video src={content.contentData} controls style={{ maxWidth: '100%', borderRadius: '4px' }} />;
            case 'file':
                return <a href={content.contentData} download style={{ color: 'var(--ion-color-primary)' }}>Download File</a>;
            case 'template_variable':
                return <span style={{ fontFamily: 'monospace', backgroundColor: 'var(--ion-color-light)', padding: '2px 4px', borderRadius: '4px' }}>{content.contentData}</span>;
            default:
                return <p style={{ margin: 0 }}>{content.contentData}</p>;
        }
    };

    if (isPreview) {
        return (
            <div style={{ marginBottom: '12px' }}>
                {renderContentPreview()}
            </div>
        );
    }

    return (
        <div ref={setNodeRef} style={style}>
            <IonCard style={{ margin: '8px 0' }}>
                <IonCardContent style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
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
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                                <IonChip style={{ height: '20px', fontSize: '11px' }}>
                                    {content.contentType.toUpperCase()}
                                </IonChip>
                            </div>
                            <div style={{ fontSize: '13px', lineHeight: '1.3' }}>
                                {renderContentPreview()}
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                            <IonButton
                                fill="clear"
                                size="small"
                                onClick={() => onEdit(content)}
                                style={{ '--padding-start': '4px', '--padding-end': '4px' }}
                            >
                                Edit
                            </IonButton>
                            <IonButton
                                fill="clear"
                                size="small"
                                color="danger"
                                onClick={() => onDelete(content.id)}
                                style={{ '--padding-start': '4px', '--padding-end': '4px' }}
                            >
                                <IonIcon icon={trash} style={{ fontSize: '14px' }} />
                            </IonButton>
                        </div>
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

// Sortable Action Item Component
interface SortableActionItemProps {
    action: StepAction;
    onEdit: (action: StepAction) => void;
    onDelete: (id: number) => void;
    isPreview?: boolean;
}

const SortableActionItem: React.FC<SortableActionItemProps> = ({
    action,
    onEdit,
    onDelete,
    isPreview = false
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: action.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    if (isPreview && action.actionType === 'button' && action.isEnabled) {
        return (
            <IonButton
                color={action.buttonStyle || 'primary'}
                size="default"
                style={{ margin: '4px', '--border-radius': '8px' }}
            >
                {action.label}
            </IonButton>
        );
    }

    if (isPreview) {
        return null; // Don't show non-button actions in preview
    }

    return (
        <div ref={setNodeRef} style={style}>
            <IonCard style={{ margin: '8px 0' }}>
                <IonCardContent style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
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
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                                <IonIcon
                                    icon={action.isEnabled ? eye : eyeOff}
                                    color={action.isEnabled ? 'success' : 'medium'}
                                    style={{ fontSize: '14px' }}
                                />
                                <IonChip style={{ height: '20px', fontSize: '11px' }}>
                                    {action.actionType.toUpperCase()}
                                </IonChip>
                                {action.buttonStyle && (
                                    <IonChip color={action.buttonStyle} style={{ height: '20px', fontSize: '10px' }}>
                                        {action.buttonStyle}
                                    </IonChip>
                                )}
                            </div>
                            {action.label && (
                                <div style={{ fontSize: '13px', fontWeight: '500' }}>
                                    {action.label}
                                </div>
                            )}
                        </div>
                        <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                            <IonButton
                                fill="clear"
                                size="small"
                                onClick={() => onEdit(action)}
                                style={{ '--padding-start': '4px', '--padding-end': '4px' }}
                            >
                                Edit
                            </IonButton>
                            <IonButton
                                fill="clear"
                                size="small"
                                color="danger"
                                onClick={() => onDelete(action.id)}
                                style={{ '--padding-start': '4px', '--padding-end': '4px' }}
                            >
                                <IonIcon icon={trash} style={{ fontSize: '14px' }} />
                            </IonButton>
                        </div>
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

const StepEditorModal: React.FC<StepEditorModalProps> = ({
    isOpen,
    onClose,
    step,
    onUpdate
}) => {
    const [currentTab, setCurrentTab] = useState<'preview' | 'general' | 'content' | 'actions'>('preview');
    const [localStep, setLocalStep] = useState<Step | null>(null);
    const [localContents, setLocalContents] = useState<StepContent[]>([]);
    const [localActions, setLocalActions] = useState<StepAction[]>([]);

    // Form states
    const [editingContent, setEditingContent] = useState<StepContent | null>(null);
    const [editingAction, setEditingAction] = useState<StepAction | null>(null);
    const [showContentForm, setShowContentForm] = useState(false);
    const [showActionForm, setShowActionForm] = useState(false);

    const [newContent, setNewContent] = useState<NewStepContent>({
        contentOrder: 1,
        contentType: 'text',
        contentData: ''
    });

    const [newAction, setNewAction] = useState<NewStepAction>({
        actionOrder: 1,
        actionType: 'button',
        label: '',
        buttonStyle: 'primary',
        isEnabled: true,
        actionConfig: ''
    });

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const [updateStep] = useUpdateStepMutation();
    const [updateStepContents] = useUpdateStepContentsMutation();
    const [updateStepActions] = useUpdateStepActionsMutation();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 3,
            },
        })
    );

    useEffect(() => {
        if (isOpen && step) {
            setLocalStep({ ...step });
            setLocalContents([...(step.stepContents || [])]);
            setLocalActions([...(step.stepActions || [])]);
            setCurrentTab('preview');
        }
    }, [isOpen, step]);

    const handleContentDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setLocalContents((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                const newItems = arrayMove(items, oldIndex, newIndex);

                return newItems.map((item, index) => ({
                    ...item,
                    contentOrder: index + 1
                }));
            });
        }
    };

    const handleActionDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setLocalActions((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                const newItems = arrayMove(items, oldIndex, newIndex);

                return newItems.map((item, index) => ({
                    ...item,
                    actionOrder: index + 1
                }));
            });
        }
    };

    const handleSaveAll = async () => {
        if (!localStep) return;

        try {
            // Update step basic info
            await updateStep({
                id: localStep.id,
                data: {
                    title: localStep.title,
                    description: localStep.description || '',
                    stepType: localStep.stepType,
                    isRequired: localStep.isRequired || false,
                    isCritical: localStep.isCritical || false
                }
            }).unwrap();

            // Update contents
            const contentsPayload = localContents.map((content, index) => ({
                ...content,
                contentOrder: index + 1
            }));
            await updateStepContents({ stepId: localStep.id, contents: contentsPayload }).unwrap();

            // Update actions
            const actionsPayload = localActions.map((action, index) => ({
                ...action,
                actionOrder: index + 1
            }));
            await updateStepActions({ stepId: localStep.id, actions: actionsPayload }).unwrap();

            onUpdate();
            onClose();
            setToastMessage('Step updated successfully!');
            setShowToast(true);
        } catch (error) {
            console.error('Failed to update step:', error);
            setToastMessage('Failed to update step');
            setShowToast(true);
        }
    };

    const renderPreview = () => {
        if (!localStep) return null;

        return (
            <div style={{ padding: '16px' }}>
                <IonCard>
                    <IonCardHeader style={{ paddingBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <IonIcon icon={play} color="primary" />
                            <IonCardTitle style={{ margin: 0, fontSize: '18px' }}>
                                {localStep.title}
                            </IonCardTitle>
                        </div>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {localStep.isRequired && (
                                <IonChip color="warning" style={{ height: '20px' }}>
                                    Required
                                </IonChip>
                            )}
                            {localStep.isCritical && (
                                <IonChip color="danger" style={{ height: '20px' }}>
                                    Critical
                                </IonChip>
                            )}
                            <IonChip style={{ height: '20px' }}>
                                {localStep.stepType}
                            </IonChip>
                        </div>
                    </IonCardHeader>
                    <IonCardContent>
                        {localStep.description && (
                            <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--ion-color-medium)' }}>
                                {localStep.description}
                            </div>
                        )}

                        {/* Content Preview */}
                        <div style={{ marginBottom: '16px' }}>
                            {localContents.map((content) => (
                                <SortableContentItem
                                    key={content.id}
                                    content={content}
                                    onEdit={() => { }}
                                    onDelete={() => { }}
                                    isPreview={true}
                                />
                            ))}
                        </div>

                        {/* Actions Preview */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                            {localActions
                                .filter(action => action.actionType === 'button' && action.isEnabled)
                                .map((action) => (
                                    <SortableActionItem
                                        key={action.id}
                                        action={action}
                                        onEdit={() => { }}
                                        onDelete={() => { }}
                                        isPreview={true}
                                    />
                                ))}
                        </div>
                    </IonCardContent>
                </IonCard>
            </div>
        );
    };

    if (!localStep) return null;

    return (
        <>
            <IonModal isOpen={isOpen} onDidDismiss={onClose}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Edit Step: {localStep.title}</IonTitle>
                        <IonButtons slot="end">
                            <IonButton fill="clear" onClick={onClose}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {/* Tab Navigation */}
                    <IonSegment
                        value={currentTab}
                        onIonChange={e => setCurrentTab(e.detail.value as any)}
                        style={{ margin: '8px' }}
                    >
                        <IonSegmentButton value="preview">
                            <IonLabel style={{ fontSize: '12px' }}>Preview</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="general">
                            <IonLabel style={{ fontSize: '12px' }}>General</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="content">
                            <IonLabel style={{ fontSize: '12px' }}>Content</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="actions">
                            <IonLabel style={{ fontSize: '12px' }}>Actions</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>

                    {/* Tab Content */}
                    {currentTab === 'preview' && <StepPreview step={{
                        ...localStep,
                        stepContents: localContents,
                        stepActions: localActions
                    }} header={(step) =>
                        <IonCardHeader style={{ paddingBottom: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
                                    <IonIcon icon={play} color="primary" style={{ fontSize: '18px', flexShrink: 0 }} />
                                    <IonCardTitle style={{ margin: 0, fontSize: '16px', wordBreak: 'break-word' }}>
                                        {step.title}
                                    </IonCardTitle>
                                </div>
                            </div>
                        </IonCardHeader>
                    } />}

                    {currentTab === 'general' && (
                        <div style={{ padding: '16px' }}>
                            <IonList>
                                <IonItem>
                                    <IonLabel position="stacked">Title *</IonLabel>
                                    <IonInput
                                        value={localStep.title}
                                        onIonInput={e => setLocalStep({ ...localStep, title: e.detail.value! })}
                                        placeholder="Enter step title"
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="stacked">Description</IonLabel>
                                    <IonTextarea
                                        value={localStep.description}
                                        onIonInput={e => setLocalStep({ ...localStep, description: e.detail.value! })}
                                        placeholder="Enter step description"
                                        rows={3}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="stacked">Step Type</IonLabel>
                                    <IonSelect
                                        value={localStep.stepType}
                                        onIonChange={e => setLocalStep({ ...localStep, stepType: e.detail.value })}
                                    >
                                        <IonSelectOption value="manual">Manual</IonSelectOption>
                                        <IonSelectOption value="automated">Automated</IonSelectOption>
                                        <IonSelectOption value="approval">Approval</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Required Step</IonLabel>
                                    <IonCheckbox
                                        checked={localStep.isRequired}
                                        onIonChange={e => setLocalStep({ ...localStep, isRequired: e.detail.checked })}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>Critical Step</IonLabel>
                                    <IonCheckbox
                                        checked={localStep.isCritical}
                                        onIonChange={e => setLocalStep({ ...localStep, isCritical: e.detail.checked })}
                                    />
                                </IonItem>
                            </IonList>
                        </div>
                    )}

                    {currentTab === 'content' && (
                        <div style={{ padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <h3 style={{ margin: 0 }}>Content ({localContents.length})</h3>
                                <IonButton size="small" onClick={() => setShowContentForm(true)}>
                                    <IonIcon icon={add} slot="start" />
                                    Add Content
                                </IonButton>
                            </div>

                            {localContents.length === 0 ? (
                                <IonCard>
                                    <IonCardContent style={{ textAlign: 'center', padding: '40px' }}>
                                        <IonIcon icon={information} style={{ fontSize: '48px', color: 'var(--ion-color-light)', marginBottom: '16px' }} />
                                        <p style={{ margin: 0, color: 'var(--ion-color-medium)' }}>
                                            No content added yet. Add your first content item to get started.
                                        </p>
                                    </IonCardContent>
                                </IonCard>
                            ) : (
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleContentDragEnd}
                                >
                                    <SortableContext
                                        items={localContents.map(content => content.id)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {localContents.map((content) => (
                                            <SortableContentItem
                                                key={content.id}
                                                content={content}
                                                onEdit={(content) => {
                                                    setEditingContent(content);
                                                    setNewContent({
                                                        contentOrder: content.contentOrder,
                                                        contentType: content.contentType,
                                                        contentData: content.contentData || ''
                                                    });
                                                    setShowContentForm(true);
                                                }}
                                                onDelete={(id) => {
                                                    setLocalContents(prev => prev.filter(c => c.id !== id));
                                                }}
                                            />
                                        ))}
                                    </SortableContext>
                                </DndContext>
                            )}
                        </div>
                    )}

                    {currentTab === 'actions' && (
                        <div style={{ padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <h3 style={{ margin: 0 }}>Actions ({localActions.length})</h3>
                                <IonButton size="small" onClick={() => setShowActionForm(true)}>
                                    <IonIcon icon={add} slot="start" />
                                    Add Action
                                </IonButton>
                            </div>

                            {localActions.length === 0 ? (
                                <IonCard>
                                    <IonCardContent style={{ textAlign: 'center', padding: '40px' }}>
                                        <IonIcon icon={checkmark} style={{ fontSize: '48px', color: 'var(--ion-color-light)', marginBottom: '16px' }} />
                                        <p style={{ margin: 0, color: 'var(--ion-color-medium)' }}>
                                            No actions added yet. Add your first action to get started.
                                        </p>
                                    </IonCardContent>
                                </IonCard>
                            ) : (
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleActionDragEnd}
                                >
                                    <SortableContext
                                        items={localActions.map(action => action.id)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {localActions.map((action) => (
                                            <SortableActionItem
                                                key={action.id}
                                                action={action}
                                                onEdit={(action) => {
                                                    setEditingAction(action);
                                                    setNewAction({
                                                        actionOrder: action.actionOrder,
                                                        actionType: action.actionType,
                                                        label: action.label,
                                                        buttonStyle: action.buttonStyle || 'primary',
                                                        isEnabled: action.isEnabled || false,
                                                        actionConfig: action.actionConfig || ''
                                                    });
                                                    setShowActionForm(true);
                                                }}
                                                onDelete={(id) => {
                                                    setLocalActions(prev => prev.filter(a => a.id !== id));
                                                }}
                                            />
                                        ))}
                                    </SortableContext>
                                </DndContext>
                            )}
                        </div>
                    )}

                    {/* Save Button */}
                    <div style={{ padding: '16px', borderTop: '1px solid var(--ion-color-light)' }}>
                        <IonButton expand="block" onClick={handleSaveAll}>
                            Save All Changes
                        </IonButton>
                    </div>
                </IonContent>
            </IonModal>

            {/* Content Form Modal */}
            <IonModal isOpen={showContentForm} onDidDismiss={() => setShowContentForm(false)}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{editingContent ? 'Edit' : 'Add'} Content</IonTitle>
                        <IonButtons slot="end">
                            <IonButton fill="clear" onClick={() => setShowContentForm(false)}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div style={{ padding: '16px' }}>
                        <IonList>
                            <IonItem>
                                <IonLabel position="stacked">Content Type</IonLabel>
                                <IonSelect
                                    value={newContent.contentType}
                                    onIonChange={e => setNewContent({ ...newContent, contentType: e.detail.value })}
                                >
                                    <IonSelectOption value="text">Text</IonSelectOption>
                                    <IonSelectOption value="link">Link</IonSelectOption>
                                    <IonSelectOption value="image">Image</IonSelectOption>
                                    <IonSelectOption value="video">Video</IonSelectOption>
                                    <IonSelectOption value="file">File</IonSelectOption>
                                    <IonSelectOption value="template_variable">Template Variable</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Content Data</IonLabel>
                                <IonTextarea
                                    value={newContent.contentData}
                                    onIonInput={e => setNewContent({ ...newContent, contentData: e.detail.value! })}
                                    placeholder={`Enter ${newContent.contentType} content`}
                                    rows={4}
                                />
                            </IonItem>
                        </IonList>
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                            <IonButton
                                expand="block"
                                onClick={() => {
                                    if (editingContent) {
                                        setLocalContents(prev => prev.map(c =>
                                            c.id === editingContent.id
                                                ? {
                                                    ...c,
                                                    contentType: newContent.contentType as any,
                                                    contentData: newContent.contentData
                                                }
                                                : c
                                        ));
                                    } else {
                                        const newContentItem: StepContent = {
                                            id: Date.now(),
                                            stepId: localStep!.id,
                                            contentOrder: Math.max(...localContents.map(c => c.contentOrder), 0) + 1,
                                            contentType: newContent.contentType as any,
                                            contentData: newContent.contentData
                                        };
                                        setLocalContents(prev => [...prev, newContentItem]);
                                    }
                                    setEditingContent(null);
                                    setNewContent({ contentOrder: 1, contentType: 'text', contentData: '' });
                                    setShowContentForm(false);
                                }}
                            >
                                {editingContent ? 'Update' : 'Add'} Content
                            </IonButton>
                            <IonButton
                                expand="block"
                                fill="outline"
                                onClick={() => setShowContentForm(false)}
                            >
                                Cancel
                            </IonButton>
                        </div>
                    </div>
                </IonContent>
            </IonModal>

            {/* Action Form Modal */}
            <IonModal isOpen={showActionForm} onDidDismiss={() => setShowActionForm(false)}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{editingAction ? 'Edit' : 'Add'} Action</IonTitle>
                        <IonButtons slot="end">
                            <IonButton fill="clear" onClick={() => setShowActionForm(false)}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div style={{ padding: '16px' }}>
                        <IonList>
                            <IonItem>
                                <IonLabel position="stacked">Action Type</IonLabel>
                                <IonSelect
                                    value={newAction.actionType}
                                    onIonChange={e => setNewAction({ ...newAction, actionType: e.detail.value })}
                                >
                                    <IonSelectOption value="button">Button</IonSelectOption>
                                    <IonSelectOption value="automation">Automation</IonSelectOption>
                                    <IonSelectOption value="approval">Approval</IonSelectOption>
                                    <IonSelectOption value="next_step">Next Step</IonSelectOption>
                                    <IonSelectOption value="complete_process">Complete Process</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            {newAction.actionType === 'button' && (
                                <>
                                    <IonItem>
                                        <IonLabel position="stacked">Button Text *</IonLabel>
                                        <IonInput
                                            value={newAction.label}
                                            onIonInput={e => setNewAction({ ...newAction, label: e.detail.value! })}
                                            placeholder="Enter button text"
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="stacked">Button Style</IonLabel>
                                        <IonSelect
                                            value={newAction.buttonStyle}
                                            onIonChange={e => setNewAction({ ...newAction, buttonStyle: e.detail.value })}
                                        >
                                            <IonSelectOption value="primary">Primary</IonSelectOption>
                                            <IonSelectOption value="secondary">Secondary</IonSelectOption>
                                            <IonSelectOption value="success">Success</IonSelectOption>
                                            <IonSelectOption value="warning">Warning</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </>
                            )}
                            <IonItem>
                                <IonLabel>Enabled</IonLabel>
                                <IonCheckbox
                                    checked={newAction.isEnabled}
                                    onIonChange={e => setNewAction({ ...newAction, isEnabled: e.detail.checked })}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Action Configuration (JSON)</IonLabel>
                                <IonTextarea
                                    value={newAction.actionConfig}
                                    onIonInput={e => setNewAction({ ...newAction, actionConfig: e.detail.value! })}
                                    placeholder="Enter JSON configuration"
                                    rows={3}
                                />
                            </IonItem>
                        </IonList>
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                            <IonButton
                                expand="block"
                                onClick={() => {
                                    if (newAction.actionType === 'button' && !newAction.label.trim()) {
                                        setToastMessage('Button text is required for button actions');
                                        setShowToast(true);
                                        return;
                                    }

                                    if (editingAction) {
                                        setLocalActions(prev => prev.map(a =>
                                            a.id === editingAction.id
                                                ? { ...a, ...newAction }
                                                : a
                                        ));
                                    } else {
                                        const newActionItem: StepAction = {
                                            id: Date.now(),
                                            stepId: localStep!.id,
                                            actionOrder: Math.max(...localActions.map(a => a.actionOrder), 0) + 1,
                                            actionType: newAction.actionType,
                                            label: newAction.label,
                                            buttonStyle: newAction.buttonStyle,
                                            isEnabled: newAction.isEnabled,
                                            actionConfig: newAction.actionConfig,
                                            actionTriggers: []
                                        };
                                        setLocalActions(prev => [...prev, newActionItem]);
                                    }
                                    setEditingAction(null);
                                    setNewAction({ actionOrder: 1, actionType: 'button', label: '', buttonStyle: 'primary', isEnabled: true, actionConfig: '' });
                                    setShowActionForm(false);
                                }}
                            >
                                {editingAction ? 'Update' : 'Add'} Action
                            </IonButton>
                            <IonButton
                                expand="block"
                                fill="outline"
                                onClick={() => setShowActionForm(false)}
                            >
                                Cancel
                            </IonButton>
                        </div>
                    </div>
                </IonContent>
            </IonModal>

            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={3000}
                position="top"
            />
        </>
    );
};

export default StepEditorModal;
