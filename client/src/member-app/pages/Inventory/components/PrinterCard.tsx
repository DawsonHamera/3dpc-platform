import {
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonIcon,
    IonLabel,
} from "@ionic/react";
import {
    createOutline,
    imageOutline,
    locationOutline,
    trashOutline,
} from "ionicons/icons";
import React from "react";
import { Printer } from "../../../../shared/types";
import "./Card.css";

interface PrinterCardProps {
    printer: Printer;
    onEdit: () => void;
    onDelete: () => void;
}

const PrinterCard: React.FC<PrinterCardProps> = ({
    printer,
    onEdit,
    onDelete,
}) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "available":
                return "success";
            case "in_use":
                return "warning";
            case "maintenance":
                return "medium";
            case "out_of_order":
                return "danger";
            case "queued":
                return "primary";
            default:
                return "medium";
        }
    };

    const formatStatus = (status: string) => {
        return status
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <IonCard className="inventory-card" button={false}>
            <div className="inventory-card-image-container">
                {printer.image_file?.path ? (
                    <img
                        src={printer.image_file.path}
                        alt={printer.name}
                        className="inventory-card-image"
                    />
                ) : (
                    <div className="inventory-card-image-placeholder">
                        <IonIcon icon={imageOutline} />
                    </div>
                )}
                <div className="inventory-card-overlay">
                    <IonButton
                        fill="clear"
                        size="small"
                        className="inventory-card-action-btn"
                        onClick={onEdit}
                    >
                        <IonIcon icon={createOutline} slot="icon-only" />
                    </IonButton>
                    <IonButton
                        fill="clear"
                        size="small"
                        color="danger"
                        className="inventory-card-action-btn"
                        onClick={onDelete}
                    >
                        <IonIcon icon={trashOutline} slot="icon-only" />
                    </IonButton>
                </div>
            </div>
            <IonCardHeader>
                <IonCardTitle className="inventory-card-title">
                    {printer.name}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="inventory-card-content">
                <div className="inventory-card-info-row">
                    <span className="inventory-card-label">Model:</span>
                    <span className="inventory-card-value">
                        {printer.model}
                    </span>
                </div>
                {printer.location && (
                    <div
                        className="inventory-card-info-row"
                        style={{ marginTop: "8px" }}
                    >
                        <IonIcon
                            icon={locationOutline}
                            style={{ marginRight: "4px" }}
                        />
                        <span className="inventory-card-value">
                            {printer.location}
                        </span>
                    </div>
                )}
                <div style={{ marginTop: "12px" }}>
                    <IonBadge color={getStatusColor(printer.status)}>
                        {formatStatus(printer.status)}
                    </IonBadge>
                </div>
                {printer.loaded_material && (
                    <IonChip
                        color="tertiary"
                        className="inventory-card-chip"
                        style={{ marginTop: "8px" }}
                    >
                        <IonLabel>
                            Loaded: {printer.loaded_material.name}
                        </IonLabel>
                    </IonChip>
                )}
            </IonCardContent>
        </IonCard>
    );
};

export default PrinterCard;
