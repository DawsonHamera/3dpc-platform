import { useState } from "react";
import WorkstationAuth from "../auth/WorkstationAuth";

import { IonContent, IonPage } from "@ionic/react";
import { useGetMaterialsQuery } from "../../../member-app/features/materials/materialsApi";
import { useGetModelsQuery } from "../../../member-app/features/models/modelsApi";
import {
    PrinterStatus,
    useGetPrintersQuery,
    useUpdatePrinterMutation,
} from "../../../member-app";
import InventoryGrid from "./components/InventoryGrid";
import PrinterHeroSection from "./components/PrinterHeroSection";
import QuickActionsBar from "./components/QuickActionsBar";
import MaterialModal from "./modals/MaterialModal";
import ModelModal from "./modals/ModelModal";
import PrinterModal from "./modals/PrinterModal";
import "./WorkstationPage.css";

const WorkstationPage: React.FC = () => {
    const [selectedPrinterId, setSelectedPrinterId] = useState<number | null>(
        null
    );
    const [activePrinter, setActivePrinter] = useState<any>(null);
    const [activeModal, setActiveModal] = useState<
        "printer" | "material" | "model" | null
    >(null);
    const [editingItem, setEditingItem] = useState<any>(null);

    const { data: printers, refetch: refetchPrinters } = useGetPrintersQuery();
    const { data: materials, refetch: refetchMaterials } =
        useGetMaterialsQuery();
    const { data: models, refetch: refetchModels } = useGetModelsQuery();

    const [updatePrinter] = useUpdatePrinterMutation();

    const handlePrinterSelect = (printer: any) => {
        setSelectedPrinterId(printer.id);
        setActivePrinter(printer);
    };

    const handleStatusUpdate = async (printerId: number, status: string) => {
        try {
            await updatePrinter({
                id: printerId,
                status: status as PrinterStatus,
            }).unwrap();
            refetchPrinters();
        } catch (error) {
            console.error("Failed to update printer status:", error);
        }
    };

    const handleOpenModal = (
        type: "printer" | "material" | "model",
        item?: any
    ) => {
        setActiveModal(type);
        setEditingItem(item || null);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
        setEditingItem(null);
        refetchPrinters();
        refetchMaterials();
        refetchModels();
    };

    return (
        <IonPage>
            <WorkstationAuth>
                <IonContent>
                    <div className="workstation-page">
                        <div className="workstation-header">
                            <div className="workstation-header-content">
                                <h1>3D Printing Workstation</h1>
                                <p>
                                    Real-time printer management and inventory
                                    control
                                </p>
                            </div>
                            <QuickActionsBar onOpenModal={handleOpenModal} />
                        </div>
                        <div className="workstation-content">
                            <PrinterHeroSection
                                printers={(printers as any) || []}
                                selectedPrinterId={selectedPrinterId}
                                onPrinterSelect={handlePrinterSelect}
                                onStatusUpdate={handleStatusUpdate}
                                onEditPrinter={(printer) =>
                                    handleOpenModal("printer", printer)
                                }
                            />
                            <div className="workstation-inventory">
                                <InventoryGrid
                                    materials={materials || []}
                                    models={models || []}
                                    onEditMaterial={(material) =>
                                        handleOpenModal("material", material)
                                    }
                                    onEditModel={(model) =>
                                        handleOpenModal("model", model)
                                    }
                                    onAddMaterial={() =>
                                        handleOpenModal("material")
                                    }
                                    onAddModel={() => handleOpenModal("model")}
                                />
                            </div>
                        </div>
                        {activeModal === "printer" && (
                            <PrinterModal
                                isOpen={true}
                                onClose={handleCloseModal}
                                printer={editingItem}
                            />
                        )}
                        {activeModal === "material" && (
                            <MaterialModal
                                isOpen={true}
                                onClose={handleCloseModal}
                                material={editingItem}
                            />
                        )}
                        {activeModal === "model" && (
                            <ModelModal
                                isOpen={true}
                                onClose={handleCloseModal}
                                model={editingItem}
                            />
                        )}
                    </div>
                </IonContent>
            </WorkstationAuth>
        </IonPage>
    );
};

export default WorkstationPage;
