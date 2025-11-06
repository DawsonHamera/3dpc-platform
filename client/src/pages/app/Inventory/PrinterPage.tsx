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
    IonNote,
} from "@ionic/react";
import { close, add, trash } from "ionicons/icons";
import Header from "../../../components/Header/Header";
import Card from "../../../components/UI/Card/Card";
import FileSelector from "../../../components/FileSelector";
import {
    useAddPrinterMutation,
    useGetPrintersQuery,
    useRemovePrinterMutation,
    useUpdatePrinterMutation,
    Printer
} from "../../../features/crud/printersApi";
import { useGetMaterialsQuery } from "../../../features/crud/materialsApi";
import { useGetFilesQuery } from "../../../features/crud/filesApi";
import { PrinterInventoryCard } from "./components/cards";

interface PrinterForm {
    name: string;
    location: string;
    owner: string;
    details: string;
    statusId: number | null;
    imageId: number | null;
    currentMaterialId: number | null;
    processTemplateId: number | null;
}

const defaultPrinterForm: PrinterForm = {
    name: '',
    location: '',
    owner: '',
    details: '',
    statusId: null,
    imageId: null,
    currentMaterialId: null,
    processTemplateId: null,
};

// Mock printer statuses - these should ideally come from an API
const printerStatuses = [
    { id: 1, name: 'Available', color: 'success' },
    { id: 2, name: 'Printing', color: 'warning' },
    { id: 3, name: 'Maintenance', color: 'danger' },
    { id: 4, name: 'Offline', color: 'medium' },
];

const PrinterPage: React.FC = () => {
    const { data: printers, isLoading: printersLoading } = useGetPrintersQuery();
    const { data: materials } = useGetMaterialsQuery();
    const { data: files } = useGetFilesQuery();
    const [addPrinter, { isLoading: isAdding }] = useAddPrinterMutation();
    const [updatePrinter, { isLoading: isUpdating }] = useUpdatePrinterMutation();
    const [removePrinter] = useRemovePrinterMutation();
    
    const [printerForm, setPrinterForm] = useState<PrinterForm>(defaultPrinterForm);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [toast, setToast] = useState<{ show: boolean, message: string, color?: string }>({ 
        show: false, 
        message: '', 
        color: 'success' 
    });

    const resetForm = () => {
        setPrinterForm(defaultPrinterForm);
        setEditingId(null);
        setFormOpen(false);
    };

    const handleInputChange = (key: keyof PrinterForm, value: any) => {
        setPrinterForm((prev: PrinterForm) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleEdit = (printer: Printer) => {
        setPrinterForm({
            name: printer.name,
            location: printer.location || '',
            owner: printer.owner || '',
            details: printer.details || '',
            statusId: printer.status?.id || null,
            imageId: printer.imageFile?.id || null,
            currentMaterialId: printer.material?.id || null,
            processTemplateId: null, // TODO: Add process template support when API is available
        });
        setEditingId(printer.id);
        setFormOpen(true);
    };

    const handleFormSubmit = async () => {
        try {
            const submissionData = {
                ...printerForm,
                statusId: printerForm.statusId || undefined,
                imageId: printerForm.imageId || undefined,
                currentMaterialId: printerForm.currentMaterialId || undefined,
                processTemplateId: printerForm.processTemplateId || undefined,
            };

            if (editingId) {
                await updatePrinter({ id: editingId, body: submissionData }).unwrap();
                setToast({ show: true, message: 'Printer updated successfully!', color: 'success' });
            } else {
                await addPrinter(submissionData).unwrap();
                setToast({ show: true, message: 'Printer added successfully!', color: 'success' });
            }
            resetForm();
        } catch (error) {
            const action = editingId ? 'updating' : 'adding';
            setToast({ show: true, message: `Error ${action} printer. Try again.`, color: 'danger' });
        }
    };

    const handleDelete = async (printerId: number) => {
        if (window.confirm('Are you sure you want to delete this printer?')) {
            try {
                await removePrinter(printerId).unwrap();
                setToast({ show: true, message: 'Printer deleted successfully!', color: 'success' });
            } catch (error) {
                setToast({ show: true, message: 'Error deleting printer. Try again.', color: 'danger' });
            }
        }
    };

    return (
        <IonPage>
            <Header title="3D Printers" type='back' />
            <IonContent fullscreen>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Add New Printer Card */}
                    <Card title="Add New Printer" style={{ cursor: 'pointer' }}>
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
                            <h3>Add New Printer</h3>
                        </div>
                    </Card>

                    {/* Printers Grid */}
                    {printersLoading ? (
                        <div style={{ textAlign: 'center', padding: '20px' }}>Loading printers...</div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                            {printers?.map(printer => (
                                <PrinterInventoryCard
                                    key={printer.id}
                                    printer={printer}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Add/Edit Printer Modal */}
                <IonModal isOpen={formOpen} onDidDismiss={resetForm}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>{editingId ? 'Edit' : 'Add'} 3D Printer</IonTitle>
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
                            {/* Printer Name */}
                            <IonItem>
                                <IonLabel position="stacked">Printer Name</IonLabel>
                                <IonInput
                                    value={printerForm.name}
                                    placeholder="Enter printer name"
                                    onIonInput={(e) => handleInputChange('name', e.detail.value)}
                                />
                            </IonItem>

                            {/* Location */}
                            <IonItem>
                                <IonLabel position="stacked">Location</IonLabel>
                                <IonInput
                                    value={printerForm.location}
                                    placeholder="Enter printer location"
                                    onIonInput={(e) => handleInputChange('location', e.detail.value)}
                                />
                            </IonItem>

                            {/* Owner */}
                            <IonItem>
                                <IonLabel position="stacked">Owner</IonLabel>
                                <IonInput
                                    value={printerForm.owner}
                                    placeholder="Enter owner name"
                                    onIonInput={(e) => handleInputChange('owner', e.detail.value)}
                                />
                            </IonItem>

                            {/* Status */}
                            <IonItem>
                                <IonLabel position="stacked">Status</IonLabel>
                                <IonSelect
                                    value={printerForm.statusId}
                                    placeholder="Select printer status"
                                    onIonChange={(e) => handleInputChange('statusId', e.detail.value)}
                                >
                                    {printerStatuses.map(status => (
                                        <IonSelectOption key={status.id} value={status.id}>
                                            {status.name}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>

                            {/* Current Material */}
                            <IonItem>
                                <IonLabel position="stacked">Current Material</IonLabel>
                                <IonSelect
                                    value={printerForm.currentMaterialId}
                                    placeholder="Select current material"
                                    onIonChange={(e) => handleInputChange('currentMaterialId', e.detail.value)}
                                >
                                    {materials?.map(material => (
                                        <IonSelectOption key={material.id} value={material.id}>
                                            {material.name} ({material.type})
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>

                            {/* TODO: Process Template Selection */}
                            <IonNote style={{ padding: '16px', backgroundColor: 'var(--ion-color-light)', margin: '16px 0', borderRadius: '8px' }}>
                                <strong>Note:</strong> Process template selection will be available once the process templates API is implemented.
                            </IonNote>

                            {/* Details */}
                            <IonItem>
                                <IonLabel position="stacked">Details</IonLabel>
                                <IonTextarea
                                    value={printerForm.details}
                                    placeholder="Enter printer specifications, notes, or other details"
                                    rows={3}
                                    onIonInput={(e) => handleInputChange('details', e.detail.value)}
                                />
                            </IonItem>

                            {/* Image File Selector */}
                            <IonItem>
                                <IonLabel position="stacked">Printer Image</IonLabel>
                                <FileSelector 
                                    onChange={(file) => handleInputChange('imageId', file.id)} 
                                    filter={(file) => file.mimeType?.startsWith('image') || false}
                                />
                            </IonItem>

                            {/* Submit Buttons */}
                            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                                <IonButton 
                                    expand="block" 
                                    onClick={handleFormSubmit}
                                    disabled={(isAdding || isUpdating) || !printerForm.name.trim()}
                                >
                                    {(isAdding || isUpdating) ? (editingId ? 'Updating...' : 'Adding...') : (editingId ? 'Update Printer' : 'Add Printer')}
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

export default PrinterPage;
