import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonSelect, IonSelectOption, IonTextarea, IonToast, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { useAddMaterialMutation, useGetMaterialsQuery, useRemoveMaterialMutation, useUpdateMaterialMutation, Material } from "../../../features/crud/materialsApi";
import { useState } from "react";
import { close, add } from "ionicons/icons";
import Header from "../../../components/Header/Header";
import Card from "../../../components/UI/Card/Card";
import FileSelector from "../../../components/FileSelector";
import { File } from "../../../types";
import { MaterialInventoryCard } from "./components/cards";

interface MaterialForm {
    name: string;
    type: string;
    vendor: string;
    hex: string;
    textureFileId: number | null;
    imageFileId: number | null;
    minTemp: number | null;
    maxTemp: number | null;
    details: string;
}

const defaultMaterialForm: MaterialForm = {
    name: '',
    type: 'PLA',
    vendor: '',
    hex: '#FFFFFF',
    textureFileId: null,
    imageFileId: null,
    minTemp: null,
    maxTemp: null,
    details: '',
};

const materialTypes = ['PLA', 'ABS', 'PETG', 'TPU', 'HIPS', 'PVA', 'ASA', 'PC', 'Nylon', 'Wood', 'Metal', 'Carbon Fiber', 'Other'];


const MaterialPage: React.FC = () => {
    const { data: materials, isLoading: materialsLoading } = useGetMaterialsQuery();
    const [addMaterial, { isLoading: isUpdating }] = useAddMaterialMutation();
    const [updateMaterial, { isLoading: isUpdatingMaterial }] = useUpdateMaterialMutation();
    const [removeMaterial] = useRemoveMaterialMutation();
    const [materialForm, setMaterialForm] = useState<MaterialForm>(defaultMaterialForm);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);
    const [toast, setToast] = useState<{ show: boolean, message: string, color?: string }>({ show: false, message: '', color: 'success' });

    const handleInputChange = (key: keyof MaterialForm, value: any) => {
        setMaterialForm((prev: MaterialForm) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleFormSubmit = async () => {
        try {
            const submissionData = {
                ...materialForm,
                textureFileId: materialForm.textureFileId || undefined,
                imageFileId: materialForm.imageFileId || undefined,
                minTemp: materialForm.minTemp || undefined,
                maxTemp: materialForm.maxTemp || undefined,
            };
            
            if (editingMaterial) {
                await updateMaterial({ id: editingMaterial.id, body: submissionData }).unwrap();
                setToast({ show: true, message: 'Material updated successfully!', color: 'success' });
            } else {
                await addMaterial(submissionData).unwrap();
                setToast({ show: true, message: 'Material added successfully!', color: 'success' });
            }
            
            setMaterialForm(defaultMaterialForm);
            setEditingMaterial(null);
            setFormOpen(false);
        } catch (error) {
            setToast({ show: true, message: `Error ${editingMaterial ? 'updating' : 'adding'} material. Try again.`, color: 'danger' });
        }
    };

    const handleEdit = (material: Material) => {
        setEditingMaterial(material);
        setMaterialForm({
            name: material.name,
            type: material.type || 'PLA',
            vendor: material.vendor || '',
            hex: material.hex || '#FFFFFF',
            textureFileId: material.textureFileId || null,
            imageFileId: material.imageFileId || null,
            minTemp: material.minTemp || null,
            maxTemp: material.maxTemp || null,
            details: material.details || '',
        });
        setFormOpen(true);
    };

    const handleCloseForm = () => {
        setFormOpen(false);
        setEditingMaterial(null);
        setMaterialForm(defaultMaterialForm);
    };

    const handleDelete = async (materialId: number) => {
        try {
            await removeMaterial(materialId).unwrap();
            setToast({ show: true, message: 'Material deleted successfully!', color: 'success' });
        } catch (error) {
            setToast({ show: true, message: 'Error deleting material. Try again.', color: 'danger' });
        }
    };


    return (
        <IonPage>
            <Header title="Materials" type='back' />
            <IonContent fullscreen>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Card key={'add'} title="Add New Material" style={{ cursor: 'pointer' }}>
                        <div
                            onClick={() => setFormOpen(true)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img
                                src="/images/filament.png"
                                alt="Filament"
                                style={{ width: '100px', height: '100px' }}
                            />
                        </div>
                    </Card>
                    {/* Materials Grid */}
                    {materialsLoading ? (
                        <div style={{ textAlign: 'center', padding: '20px' }}>Loading materials...</div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                            {materials?.map(material => (
                                <MaterialInventoryCard
                                    key={material.id}
                                    material={material}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </IonContent>
            <IonModal isOpen={formOpen} onDidDismiss={handleCloseForm}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{editingMaterial ? 'Edit Material' : 'Add Material'}</IonTitle>
                        <IonButton fill="clear" slot="end" onClick={handleCloseForm}>
                            <IonIcon icon={close} />
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div style={{ padding: '16px' }}>
                        {/* Material Name */}
                        <IonItem>
                            <IonLabel position="stacked">Material Name</IonLabel>
                            <IonInput
                                value={materialForm.name}
                                placeholder="Enter material name"
                                onIonInput={(e) => handleInputChange('name', e.detail.value)}
                            />
                        </IonItem>

                        {/* Material Type */}
                        <IonItem>
                            <IonLabel position="stacked">Material Type</IonLabel>
                            <IonSelect
                                value={materialForm.type}
                                placeholder="Select material type"
                                onIonChange={(e) => handleInputChange('type', e.detail.value)}
                            >
                                {materialTypes.map(type => (
                                    <IonSelectOption key={type} value={type}>{type}</IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>

                        {/* Vendor */}
                        <IonItem>
                            <IonLabel position="stacked">Vendor</IonLabel>
                            <IonInput
                                value={materialForm.vendor}
                                placeholder="Enter vendor name"
                                onIonInput={(e) => handleInputChange('vendor', e.detail.value)}
                            />
                        </IonItem>

                        {/* Color Hex */}
                        <IonItem>
                            <IonLabel position="stacked">Color</IonLabel>
                            <input
                                type="color"
                                value={materialForm.hex}
                                onChange={(e) => handleInputChange('hex', e.target.value)}
                                style={{ width: '100%', height: '40px', border: 'none', borderRadius: '4px' }}
                            />
                        </IonItem>

                        {/* Temperature Range */}
                        <IonItem>
                            <IonLabel position="stacked">Min Temperature (°C)</IonLabel>
                            <IonInput
                                type="number"
                                value={materialForm.minTemp}
                                placeholder="Min printing temperature"
                                onIonInput={(e) => handleInputChange('minTemp', e.detail.value ? parseInt(e.detail.value) : null)}
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Max Temperature (°C)</IonLabel>
                            <IonInput
                                type="number"
                                value={materialForm.maxTemp}
                                placeholder="Max printing temperature"
                                onIonInput={(e) => handleInputChange('maxTemp', e.detail.value ? parseInt(e.detail.value) : null)}
                            />
                        </IonItem>

                        {/* Details */}
                        <IonItem>
                            <IonLabel position="stacked">Details</IonLabel>
                            <IonTextarea
                                value={materialForm.details}
                                placeholder="Enter material details, specifications, or notes"
                                rows={3}
                                onIonInput={(e) => handleInputChange('details', e.detail.value)}
                            />
                        </IonItem>

                        {/* Image File Selector */}
                        <IonItem>
                            <IonLabel position="stacked">Material Image</IonLabel>
                            <FileSelector 
                                onChange={(file) => handleInputChange('imageFileId', file.id)} 
                                filter={(file) => file.mimeType?.startsWith('image') || false}
                            />
                        </IonItem>

                        {/* Texture File Selector */}
                        <IonItem>
                            <IonLabel position="stacked">Texture Image</IonLabel>
                            <FileSelector 
                                onChange={(file) => handleInputChange('textureFileId', file.id)} 
                                filter={(file) => file.mimeType?.startsWith('image') || false}
                            />
                        </IonItem>

                        {/* Submit Buttons */}
                        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                            <IonButton 
                                expand="block" 
                                onClick={handleFormSubmit}
                                disabled={(isUpdating || isUpdatingMaterial) || !materialForm.name.trim()}
                            >
                                {(isUpdating || isUpdatingMaterial) 
                                    ? (editingMaterial ? 'Updating...' : 'Adding...') 
                                    : (editingMaterial ? 'Update Material' : 'Add Material')
                                }
                            </IonButton>
                            <IonButton 
                                expand="block" 
                                fill="outline" 
                                onClick={handleCloseForm}
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
        </IonPage>
    );
};

export default MaterialPage;