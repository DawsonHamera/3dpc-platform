import { IonButton, IonIcon } from "@ionic/react";
import { cloudOutline } from "ionicons/icons";
import { Printer } from "../../../../shared/features";
import "./PrinterHeroSection.css";

interface PrinterHeroSectionProps {
    printers: Printer[];
    selectedPrinterId: number | null;
    onPrinterSelect: (printer: Printer) => void;
    onStatusUpdate: (printerId: number, status: string) => void;
    onEditPrinter: (printer: Printer) => void;
}

const PrinterHeroSection: React.FC<PrinterHeroSectionProps> = ({
    printers,
    selectedPrinterId,
    onPrinterSelect,
    onStatusUpdate,
    onEditPrinter,
}) => {
    const activePrinter =
        printers.find((p) => p.id === selectedPrinterId) || printers[0];

    const statusOptions = [
        { value: "available", label: "Available", color: "#48bb78" },
        { value: "in_use", label: "In Use", color: "#4299e1" },
        { value: "queued", label: "Queued", color: "#ed8936" },
        { value: "maintenance", label: "Maintenance", color: "#ecc94b" },
        { value: "out_of_order", label: "Out of Order", color: "#f56565" },
    ];

    const getStatusColor = (status: string) => {
        return (
            statusOptions.find((s) => s.value === status)?.color || "#a0aec0"
        );
    };

    const getStatusLabel = (status: string) => {
        return (
            statusOptions.find((s) => s.value === status)?.label ||
            status.replace("_", " ")
        );
    };

    if (!printers || printers.length === 0) {
        return (
            <div className="printer-hero-section">
                <div className="printer-hero-empty">
                    <p>No printers available. Add a printer to get started.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="printer-hero-section">
            <div className="printer-hero-sidebar">
                <h3 className="printer-hero-sidebar-title">All Printers</h3>
                <div className="printer-list">
                    {printers.map((printer) => (
                        <div
                            key={printer.id}
                            className={`printer-list-item ${
                                printer.id === activePrinter?.id ? "active" : ""
                            }`}
                            onClick={() => onPrinterSelect(printer)}
                        >
                            <div
                                className="printer-list-status"
                                style={{
                                    backgroundColor: getStatusColor(
                                        printer.status,
                                    ),
                                }}
                            />
                            <div className="printer-list-info">
                                <p className="printer-list-name">
                                    {printer.name}
                                </p>
                                <p className="printer-list-model">
                                    {printer.model}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activePrinter && (
                <div className="printer-hero-main">
                    <div className="printer-hero-image">
                        {activePrinter.image_file?.path ? (
                            <img
                                src={activePrinter.image_file.path}
                                alt={activePrinter.name}
                            />
                        ) : (
                            <div className="printer-hero-placeholder">
                                <span>🖨️</span>
                            </div>
                        )}
                    </div>

                    <div className="printer-hero-details">
                        <div className="printer-hero-header">
                            <div>
                                <h2 className="printer-hero-name">
                                    {activePrinter.name}
                                </h2>
                                <p className="printer-hero-model">
                                    {activePrinter.model}
                                </p>
                            </div>
                            <button
                                className="printer-hero-edit"
                                onClick={() => onEditPrinter(activePrinter)}
                            >
                                ✏️ Edit
                            </button>
                        </div>

                        {activePrinter.control_interface_url && (
                            <IonButton
                                // fill="clear"
                                className="printer-hero-control-button"
                                href={activePrinter.control_interface_url}
                            >
                                <IonIcon slot="start" icon={cloudOutline} />
                                Open Control Interface
                            </IonButton>
                        )}

                        {activePrinter.location && (
                            <div className="printer-hero-location">
                                <span className="printer-hero-location-icon">
                                    📍
                                </span>
                                <span>{activePrinter.location}</span>
                            </div>
                        )}

                        {activePrinter.loaded_material && (
                            <div className="printer-hero-material">
                                <p className="printer-hero-material-label">
                                    Loaded Material
                                </p>
                                <div className="printer-hero-material-info">
                                    <div
                                        className="printer-hero-material-color"
                                        style={{
                                            backgroundColor:
                                                activePrinter.loaded_material
                                                    .color ?? undefined,
                                        }}
                                    />
                                    <span>
                                        {activePrinter.loaded_material.name}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="printer-hero-status-control">
                            <p className="printer-hero-status-label">
                                Printer Status
                            </p>
                            <div className="printer-hero-status-buttons">
                                {statusOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        className={`printer-hero-status-button ${
                                            activePrinter.status ===
                                            option.value
                                                ? "active"
                                                : ""
                                        }`}
                                        style={{
                                            backgroundColor:
                                                activePrinter.status ===
                                                option.value
                                                    ? option.color
                                                    : "transparent",
                                            borderColor: option.color,
                                            color:
                                                activePrinter.status ===
                                                option.value
                                                    ? "white"
                                                    : option.color,
                                        }}
                                        onClick={() =>
                                            onStatusUpdate(
                                                activePrinter.id,
                                                option.value,
                                            )
                                        }
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="printer-hero-quick-stats">
                            <div
                                className="printer-hero-stat"
                                style={{
                                    backgroundColor: getStatusColor(
                                        activePrinter.status,
                                    ),
                                }}
                            >
                                <p className="printer-hero-stat-label">
                                    Current Status
                                </p>
                                <p className="printer-hero-stat-value">
                                    {getStatusLabel(activePrinter.status)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrinterHeroSection;
