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
import { createOutline, imageOutline, trashOutline } from "ionicons/icons";
import React from "react";
import { Material } from "../../../../shared/types";
import "./Card.css";

interface MaterialCardProps {
    material: Material;
    onEdit: () => void;
    onDelete: () => void;
}

const MaterialCard: React.FC<MaterialCardProps> = ({
    material,
    onEdit,
    onDelete,
}) => {
    return (
        <IonCard className="inventory-card" button={false}>
            <div className="inventory-card-image-container">
                {material.image_file?.path ? (
                    <img
                        src={material.image_file.path}
                        alt={material.name}
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
                    {material.name}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="inventory-card-content">
                <div className="inventory-card-info-row">
                    <IonChip color="primary" className="inventory-card-chip">
                        <IonLabel>{material.type}</IonLabel>
                    </IonChip>
                    <IonBadge color="secondary">
                        Qty: {material.quantity}
                    </IonBadge>
                </div>
                {material.color && (
                    <div
                        className="inventory-card-info-row"
                        style={{ marginTop: "8px" }}
                    >
                        <span className="inventory-card-label">Color:</span>
                        <div className="inventory-card-color-indicator">
                            <div
                                className="inventory-card-color-swatch"
                                style={{ backgroundColor: material.color }}
                            />
                            <span>{material.color}</span>
                        </div>
                    </div>
                )}
                {material.description && (
                    <p className="inventory-card-description">
                        {material.description.length > 60
                            ? `${material.description.substring(0, 60)}...`
                            : material.description}
                    </p>
                )}
            </IonCardContent>
        </IonCard>
    );
};

export default MaterialCard;
