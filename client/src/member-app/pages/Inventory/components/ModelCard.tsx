import {
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
import { Model } from "../../../../shared/types";
import "./Card.css";

interface ModelCardProps {
    model: Model;
    onEdit: () => void;
    onDelete: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onEdit, onDelete }) => {
    return (
        <IonCard className="inventory-card" button={false}>
            <div className="inventory-card-image-container">
                {model.image_file?.path ? (
                    <img
                        src={model.image_file.path}
                        alt={model.name}
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
                    {model.name}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="inventory-card-content">
                {model.description ? (
                    <p className="inventory-card-description">
                        {model.description.length > 80
                            ? `${model.description.substring(0, 80)}...`
                            : model.description}
                    </p>
                ) : (
                    <p className="inventory-card-description inventory-card-no-description">
                        No description
                    </p>
                )}
                {model.file && (
                    <IonChip color="primary" className="inventory-card-chip">
                        <IonLabel>{model.file.original_name}</IonLabel>
                    </IonChip>
                )}
            </IonCardContent>
        </IonCard>
    );
};

export default ModelCard;
