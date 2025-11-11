import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    IonTextarea,
    IonToast,
    IonChip,
} from "@ionic/react";
import { close, add, trash } from "ionicons/icons";
import Header from "../../../components/Header/Header";
import Card from "../../../components/UI/Card/Card";
import FileSelector from "../../../components/FileSelector";
import ModelCard from "../../../components/DataCards/ModelCard";
import {
    useAddModelMutation,
    useGetModelsQuery,
    useUpdateModelMutation,
    useRemoveModelMutation,
    Model
} from "../../../features/crud/modelsApi";
import { useGetMaterialsQuery } from "../../../features/crud/materialsApi";
import { MaterialSlot } from "../../../types";
import { ModelInventoryCard } from "./components/cards";

interface ModelForm {
    name: string;
    estimatedDuration: number | null;
    estimatedFilament: number | null;
    description: string;
    tags: string[];
    imageFileId: number | null;
    modelFileId: number | null;
    materialSlots: MaterialSlot[];
}

const defaultModelForm: ModelForm = {
    name: '',
    estimatedDuration: null,
    estimatedFilament: null,
    description: '',
    tags: [],
    imageFileId: null,
    modelFileId: null,
    materialSlots: [],
};

const ModelPage: React.FC = () => {
    const { data: models, isLoading: modelsLoading } = useGetModelsQuery();
    const { data: materials } = useGetMaterialsQuery();
    const [addModel, { isLoading: isAdding }] = useAddModelMutation();
    const [updateModel, { isLoading: isUpdating }] = useUpdateModelMutation();
    const [removeModel] = useRemoveModelMutation();
    
    const [modelForm, setModelForm] = useState<ModelForm>(defaultModelForm);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newTag, setNewTag] = useState<string>('');
    const [toast, setToast] = useState<{ show: boolean, message: string, color?: string }>({ 
        show: false, 
        message: '', 
        color: 'success' 
    });

    const resetForm = () => {
        setModelForm(defaultModelForm);
        setEditingId(null);
        setFormOpen(false);
    };

    const handleInputChange = (key: keyof ModelForm, value: any) => {
        setModelForm((prev: ModelForm) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleEdit = (model: Model) => {
        setModelForm({
            name: model.name,
            estimatedDuration: model.estimatedDuration || null,
            estimatedFilament: model.estimatedFilament || null,
            description: model.description || '',
            tags: model.tags || [],
            imageFileId: model.image?.id || null,
            modelFileId: model.modelFile?.id || null,
            materialSlots: model.materialSlots || [],
        });
        setEditingId(model.id);
        setFormOpen(true);
    };

    const handleAddTag = () => {
        if (newTag.trim() && !modelForm.tags.includes(newTag.trim())) {
            setModelForm((prev: ModelForm) => ({
                ...prev,
                tags: [...prev.tags, newTag.trim()],
            }));
            setNewTag('');
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setModelForm((prev: ModelForm) => ({
            ...prev,
            tags: prev.tags.filter((tag: string) => tag !== tagToRemove),
        }));
    };

    const handleAddMaterialSlot = () => {
        setModelForm((prev: ModelForm) => ({
            ...prev,
            materialSlots: [...prev.materialSlots, { slot: `Slot ${prev.materialSlots.length + 1}`, defaultMaterialId: undefined }],
        }));
    };

    const handleRemoveMaterialSlot = (index: number) => {
        setModelForm((prev: ModelForm) => ({
            ...prev,
            materialSlots: prev.materialSlots.filter((_, i) => i !== index),
        }));
    };

    const handleMaterialSlotChange = (index: number, field: keyof MaterialSlot, value: any) => {
        setModelForm((prev: ModelForm) => ({
            ...prev,
            materialSlots: prev.materialSlots.map((slot, i) => 
                i === index ? { ...slot, [field]: value } : slot
            ),
        }));
    };

    const handleFormSubmit = async () => {
        try {
            const submissionData = {
                ...modelForm,
                estimatedDuration: modelForm.estimatedDuration || undefined,
                estimatedFilament: modelForm.estimatedFilament || undefined,
                imageFileId: modelForm.imageFileId || undefined,
                modelFileId: modelForm.modelFileId || undefined,
            };

            if (editingId) {
                await updateModel({ id: editingId, body: submissionData }).unwrap();
                setToast({ show: true, message: 'Model updated successfully!', color: 'success' });
            } else {
                await addModel(submissionData).unwrap();
                setToast({ show: true, message: 'Model added successfully!', color: 'success' });
            }
            resetForm();
        } catch (error) {
            const action = editingId ? 'updating' : 'adding';
            setToast({ show: true, message: `Error ${action} model. Try again.`, color: 'danger' });
        }
    };

    const handleDelete = async (modelId: number) => {
        if (window.confirm('Are you sure you want to delete this model?')) {
            try {
                await removeModel(modelId).unwrap();
                setToast({ show: true, message: 'Model deleted successfully!', color: 'success' });
            } catch (error) {
                setToast({ show: true, message: 'Error deleting model. Try again.', color: 'danger' });
            }
        }
    };

    return (
        <IonPage>
            <Header title="3D Models" type='back' />
            <IonContent fullscreen>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Add New Model Card */}
                    <Card title="Add New Model" style={{ cursor: 'pointer' }}>
                        <div
                            onClick={() => setFormOpen(true)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px'
                            }}
                        >
                            <IonIcon icon={add} style={{ fontSize: '48px', color: 'var(--ion-color-primary)', marginBottom: '10px' }} />
                            <h3>Add New Model</h3>
                        </div>
                    </Card>

                    {/* Models Grid */}
                    {modelsLoading ? (
                        <div style={{ textAlign: 'center', padding: '20px' }}>Loading models...</div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                            {models?.map(model => (
                                <ModelInventoryCard
                                    key={model.id}
                                    model={model}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Add/Edit Model Modal */}
                <IonModal isOpen={formOpen} onDidDismiss={resetForm}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>{editingId ? 'Edit' : 'Add'} 3D Model</IonTitle>
                            <IonButton
                                slot="end"
                                fill="clear"
                                onClick={resetForm}
                            >
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div style={{ padding: '16px' }}>
                            {/* Model Name */}
                            <IonItem>
                                <IonLabel position="stacked">Model Name</IonLabel>
                                <IonInput
                                    value={modelForm.name}
                                    placeholder="Enter model name"
                                    onIonInput={(e) => handleInputChange('name', e.detail.value)}
                                />
                            </IonItem>

                            {/* Description */}
                            <IonItem>
                                <IonLabel position="stacked">Description</IonLabel>
                                <IonTextarea
                                    value={modelForm.description}
                                    placeholder="Enter model description"
                                    rows={3}
                                    onIonInput={(e) => handleInputChange('description', e.detail.value)}
                                />
                            </IonItem>

                            {/* Estimated Duration */}
                            <IonItem>
                                <IonLabel position="stacked">Estimated Duration (minutes)</IonLabel>
                                <IonInput
                                    type="number"
                                    value={modelForm.estimatedDuration}
                                    placeholder="Estimated print time in minutes"
                                    onIonInput={(e) => handleInputChange('estimatedDuration', e.detail.value ? parseInt(e.detail.value) : null)}
                                />
                            </IonItem>

                            {/* Estimated Filament */}
                            <IonItem>
                                <IonLabel position="stacked">Estimated Filament (grams)</IonLabel>
                                <IonInput
                                    type="number"
                                    value={modelForm.estimatedFilament}
                                    placeholder="Estimated filament usage in grams"
                                    onIonInput={(e) => handleInputChange('estimatedFilament', e.detail.value ? parseInt(e.detail.value) : null)}
                                />
                            </IonItem>

                            {/* Tags */}
                            <IonItem>
                                <IonLabel position="stacked">Tags</IonLabel>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
                                    {modelForm.tags.map((tag: string, index: number) => (
                                        <IonChip key={index} onClick={() => handleRemoveTag(tag)}>
                                            {tag}
                                            <IonIcon icon={close} />
                                        </IonChip>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                                    <IonInput
                                        value={newTag}
                                        placeholder="Add a tag"
                                        onIonInput={(e) => setNewTag(e.detail.value || '')}
                                        onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                                    />
                                    <IonButton onClick={handleAddTag}>Add</IonButton>
                                </div>
                            </IonItem>

                            {/* Material Slots */}
                            <div style={{ marginTop: '20px' }}>
                                <IonLabel>Material Slots</IonLabel>
                                {modelForm.materialSlots.map((slot, index) => (
                                    <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
                                        <IonInput
                                            value={slot.slot}
                                            placeholder="Slot name"
                                            onIonInput={(e) => handleMaterialSlotChange(index, 'slot', e.detail.value)}
                                        />
                                        <IonSelect
                                            value={slot.defaultMaterialId}
                                            placeholder="Default material"
                                            onIonChange={(e) => handleMaterialSlotChange(index, 'defaultMaterialId', e.detail.value)}
                                        >
                                            {materials?.map(material => (
                                                <IonSelectOption key={material.id} value={material.id}>
                                                    {material.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                        <IonButton fill="clear" color="danger" onClick={() => handleRemoveMaterialSlot(index)}>
                                            <IonIcon icon={trash} />
                                        </IonButton>
                                    </div>
                                ))}
                                <IonButton fill="outline" onClick={handleAddMaterialSlot} style={{ marginTop: '10px' }}>
                                    Add Material Slot
                                </IonButton>
                            </div>

                            {/* Image File Selector */}
                            <IonItem>
                                <IonLabel position="stacked">Model Image</IonLabel>
                                <FileSelector 
                                    onChange={(file) => handleInputChange('imageFileId', file.id)} 
                                    filter={(file) => file.mimeType?.startsWith('image') || false}
                                />
                            </IonItem>

                            {/* Model File Selector */}
                            <IonItem>
                                <IonLabel position="stacked">3D Model File</IonLabel>
                                <FileSelector 
                                    onChange={(file) => handleInputChange('modelFileId', file.id)} 
                                    filter={(file) => file.mimeType?.includes('model/') || file.fileName?.endsWith('.stl') || file.fileName?.endsWith('.obj') || file.fileName?.endsWith('.glb') || false}
                                />
                            </IonItem>

                            {/* Submit Buttons */}
                            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                                <IonButton 
                                    expand="block" 
                                    onClick={handleFormSubmit}
                                    disabled={(isAdding || isUpdating) || !modelForm.name.trim()}
                                >
                                    {(isAdding || isUpdating) ? (editingId ? 'Updating...' : 'Adding...') : (editingId ? 'Update Model' : 'Add Model')}
                                </IonButton>
                                <IonButton 
                                    expand="block" 
                                    fill="outline" 
                                    onClick={resetForm}
                                >
                                    Cancel
                                </IonButton>
                            </div>
                        </div>
                    </IonContent>
                </IonModal>

                {/* Toast for notifications */}
                <IonToast
                    isOpen={toast.show}
                    message={toast.message}
                    color={toast.color}
                    duration={2000}
                    onDidDismiss={() => setToast({ ...toast, show: false })}
                />
            </IonContent>
        </IonPage>
    );
};

export default ModelPage;
