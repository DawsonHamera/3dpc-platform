import {
    IonAlert,
    IonButton,
    IonCard,
    IonContent,
    IonIcon,
    IonPage,
    IonSkeletonText,
    IonToast,
} from "@ionic/react";
import {
    addOutline,
    colorPaletteOutline,
    constructOutline,
    cubeOutline,
    layersOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import Header from "../../../shared/components/Header/Header";
import {
    useCreateMaterialMutation,
    useCreateModelMutation,
    useCreatePrinterMutation,
    useDeleteMaterialMutation,
    useDeleteModelMutation,
    useDeletePrinterMutation,
    useGetMaterialsQuery,
    useGetModelsQuery,
    useGetPrintersQuery,
    useUpdateMaterialMutation,
    useUpdateModelMutation,
    useUpdatePrinterMutation,
} from "../../../shared/features";
import { Material, Model, Printer } from "../../../shared/types";
import MaterialCard from "./components/MaterialCard";
import ModelCard from "./components/ModelCard";
import PrinterCard from "./components/PrinterCard";
import "./InventoryPage.css";
import MaterialModal from "./modals/MaterialModal";
import ModelModal from "./modals/ModelModal";
import PrinterModal from "./modals/PrinterModal";

const InventoryPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<
        "model" | "material" | "printer" | null
    >(null);
    const [editItem, setEditItem] = useState<Model | Material | Printer | null>(
        null,
    );
    const [toastMessage, setToastMessage] = useState<string>("");
    const [showToast, setShowToast] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<{
        type: "model" | "material" | "printer";
        id: number;
        name: string;
    } | null>(null);

    // Queries
    const {
        data: models,
        isLoading: modelsLoading,
        error: modelsError,
    } = useGetModelsQuery();
    const {
        data: materials,
        isLoading: materialsLoading,
        error: materialsError,
    } = useGetMaterialsQuery();
    const {
        data: printers,
        isLoading: printersLoading,
        error: printersError,
    } = useGetPrintersQuery();

    // Mutations
    const [createModel] = useCreateModelMutation();
    const [updateModel] = useUpdateModelMutation();
    const [deleteModel] = useDeleteModelMutation();
    const [createMaterial] = useCreateMaterialMutation();
    const [updateMaterial] = useUpdateMaterialMutation();
    const [deleteMaterial] = useDeleteMaterialMutation();
    const [createPrinter] = useCreatePrinterMutation();
    const [updatePrinter] = useUpdatePrinterMutation();
    const [deletePrinter] = useDeletePrinterMutation();

    const handleOpenModal = (
        type: "model" | "material" | "printer",
        item: Model | Material | Printer | null = null,
    ) => {
        setModalType(type);
        setEditItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalType(null);
        setEditItem(null);
    };

    const handleSave = async (data: any) => {
        try {
            if (modalType === "model") {
                if (editItem) {
                    await updateModel({ id: editItem.id, ...data }).unwrap();
                    setToastMessage("Model updated successfully");
                } else {
                    await createModel(data).unwrap();
                    setToastMessage("Model created successfully");
                }
            } else if (modalType === "material") {
                if (editItem) {
                    await updateMaterial({ id: editItem.id, ...data }).unwrap();
                    setToastMessage("Material updated successfully");
                } else {
                    await createMaterial(data).unwrap();
                    setToastMessage("Material created successfully");
                }
            } else if (modalType === "printer") {
                if (editItem) {
                    await updatePrinter({ id: editItem.id, ...data }).unwrap();
                    setToastMessage("Printer updated successfully");
                } else {
                    await createPrinter(data).unwrap();
                    setToastMessage("Printer created successfully");
                }
            }
            setShowToast(true);
            handleCloseModal();
        } catch (error) {
            setToastMessage("An error occurred. Please try again.");
            setShowToast(true);
        }
    };

    const handleDeleteClick = (
        type: "model" | "material" | "printer",
        id: number,
        name: string,
    ) => {
        setDeleteTarget({ type, id, name });
        setShowDeleteAlert(true);
    };

    const handleDeleteConfirm = async () => {
        if (!deleteTarget) return;

        try {
            if (deleteTarget.type === "model") {
                await deleteModel(deleteTarget.id).unwrap();
                setToastMessage("Model deleted successfully");
            } else if (deleteTarget.type === "material") {
                await deleteMaterial(deleteTarget.id).unwrap();
                setToastMessage("Material deleted successfully");
            } else if (deleteTarget.type === "printer") {
                await deletePrinter(deleteTarget.id).unwrap();
                setToastMessage("Printer deleted successfully");
            }
            setShowToast(true);
        } catch (error) {
            setToastMessage("Failed to delete. Please try again.");
            setShowToast(true);
        } finally {
            setDeleteTarget(null);
        }
    };

    const renderSkeletonCards = () => (
        <>
            {[1, 2, 3].map((i) => (
                <IonCard key={i} className="inventory-skeleton-card">
                    <IonSkeletonText
                        animated
                        style={{ width: "100%", height: "180px" }}
                    />
                    <div style={{ padding: "16px" }}>
                        <IonSkeletonText
                            animated
                            style={{ width: "60%", height: "20px" }}
                        />
                        <IonSkeletonText
                            animated
                            style={{
                                width: "80%",
                                height: "16px",
                                marginTop: "8px",
                            }}
                        />
                        <IonSkeletonText
                            animated
                            style={{
                                width: "40%",
                                height: "16px",
                                marginTop: "8px",
                            }}
                        />
                    </div>
                </IonCard>
            ))}
        </>
    );

    const renderEmptyState = (message: string) => (
        <div className="inventory-empty-state">
            <IonIcon icon={layersOutline} className="inventory-empty-icon" />
            <p className="inventory-empty-text">{message}</p>
        </div>
    );

    return (
        <IonPage>
            <Header title="Inventory" type="back" />
            <IonContent className="inventory-page">
                {/* Models Section */}
                <div className="inventory-section">
                    <div className="inventory-section-header">
                        <h2 className="inventory-section-title">
                            <IonIcon
                                icon={cubeOutline}
                                className="inventory-section-icon"
                            />
                            Models
                        </h2>
                        <IonButton
                            size="small"
                            className="inventory-add-button"
                            onClick={() => handleOpenModal("model")}
                        >
                            <IonIcon slot="start" icon={addOutline} />
                            Add Model
                        </IonButton>
                    </div>
                    <div className="inventory-cards-container">
                        {modelsLoading
                            ? renderSkeletonCards()
                            : modelsError
                              ? renderEmptyState("Failed to load models")
                              : models && models.length > 0
                                ? models.map((model) => (
                                      <ModelCard
                                          key={model.id}
                                          model={model}
                                          onEdit={() =>
                                              handleOpenModal("model", model)
                                          }
                                          onDelete={() =>
                                              handleDeleteClick(
                                                  "model",
                                                  model.id,
                                                  model.name,
                                              )
                                          }
                                      />
                                  ))
                                : renderEmptyState(
                                      "No models yet. Add your first model!",
                                  )}
                    </div>
                </div>

                {/* Materials Section */}
                <div className="inventory-section">
                    <div className="inventory-section-header">
                        <h2 className="inventory-section-title">
                            <IonIcon
                                icon={colorPaletteOutline}
                                className="inventory-section-icon"
                            />
                            Materials
                        </h2>
                        <IonButton
                            size="small"
                            className="inventory-add-button"
                            onClick={() => handleOpenModal("material")}
                        >
                            <IonIcon slot="start" icon={addOutline} />
                            Add Material
                        </IonButton>
                    </div>
                    <div className="inventory-cards-container">
                        {materialsLoading
                            ? renderSkeletonCards()
                            : materialsError
                              ? renderEmptyState("Failed to load materials")
                              : materials && materials.length > 0
                                ? materials.map((material) => (
                                      <MaterialCard
                                          key={material.id}
                                          material={material}
                                          onEdit={() =>
                                              handleOpenModal(
                                                  "material",
                                                  material,
                                              )
                                          }
                                          onDelete={() =>
                                              handleDeleteClick(
                                                  "material",
                                                  material.id,
                                                  material.name,
                                              )
                                          }
                                      />
                                  ))
                                : renderEmptyState(
                                      "No materials yet. Add your first material!",
                                  )}
                    </div>
                </div>

                {/* Printers Section */}
                <div className="inventory-section">
                    <div className="inventory-section-header">
                        <h2 className="inventory-section-title">
                            <IonIcon
                                icon={constructOutline}
                                className="inventory-section-icon"
                            />
                            Printers
                        </h2>
                        <IonButton
                            size="small"
                            className="inventory-add-button"
                            onClick={() => handleOpenModal("printer")}
                        >
                            <IonIcon slot="start" icon={addOutline} />
                            Add Printer
                        </IonButton>
                    </div>
                    <div className="inventory-cards-container">
                        {printersLoading
                            ? renderSkeletonCards()
                            : printersError
                              ? renderEmptyState("Failed to load printers")
                              : printers && printers.length > 0
                                ? printers.map((printer) => (
                                      <PrinterCard
                                          key={printer.id}
                                          printer={printer}
                                          onEdit={() =>
                                              handleOpenModal(
                                                  "printer",
                                                  printer,
                                              )
                                          }
                                          onDelete={() =>
                                              handleDeleteClick(
                                                  "printer",
                                                  printer.id,
                                                  printer.name,
                                              )
                                          }
                                      />
                                  ))
                                : renderEmptyState(
                                      "No printers yet. Add your first printer!",
                                  )}
                    </div>
                </div>

                {/* Modals */}
                {modalType === "model" && (
                    <ModelModal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        onSave={handleSave}
                        initialData={editItem as Model | null}
                    />
                )}
                {modalType === "material" && (
                    <MaterialModal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        onSave={handleSave}
                        initialData={editItem as Material | null}
                    />
                )}
                {modalType === "printer" && (
                    <PrinterModal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        onSave={handleSave}
                        initialData={editItem as Printer | null}
                    />
                )}

                {/* Toast for notifications */}
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    position="bottom"
                    color={
                        toastMessage.includes("success") ? "success" : "danger"
                    }
                />

                {/* Delete confirmation alert */}
                <IonAlert
                    isOpen={showDeleteAlert}
                    onDidDismiss={() => setShowDeleteAlert(false)}
                    header="Confirm Delete"
                    message={
                        deleteTarget
                            ? `Are you sure you want to delete "${deleteTarget.name}"? This action cannot be undone.`
                            : ""
                    }
                    buttons={[
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: () => {
                                setDeleteTarget(null);
                            },
                        },
                        {
                            text: "Delete",
                            role: "destructive",
                            handler: handleDeleteConfirm,
                        },
                    ]}
                />
            </IonContent>
        </IonPage>
    );
};

export default InventoryPage;
