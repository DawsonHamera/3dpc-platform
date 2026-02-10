import {
    IonButton,
    IonButtons,
    IonChip,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonThumbnail,
} from "@ionic/react";
import { createOutline, trashOutline } from "ionicons/icons";
import React from "react";
import { LocalVariant } from "./types";

interface VariantListItemProps {
    variant: LocalVariant;
    onEdit: () => void;
    onDelete: () => void;
}

const VariantListItem: React.FC<VariantListItemProps> = ({
    variant,
    onEdit,
    onDelete,
}) => {
    return (
        <IonItem className="variant-list-item">
            <IonThumbnail slot="start">
                {variant.image?.path ? (
                    <IonImg src={variant.image.path} alt={variant.name} />
                ) : (
                    <div className="placeholder-thumbnail" />
                )}
            </IonThumbnail>
            <IonLabel>
                <h3>
                    {variant.name || "Unnamed Variant"}
                    {variant.type === "DEFAULT" && (
                        <IonChip
                            color="primary"
                            style={{
                                marginLeft: "8px",
                                fontSize: "0.75rem",
                            }}
                        >
                            Default
                        </IonChip>
                    )}
                </h3>
                <p className="variant-price">${variant.price.toFixed(2)}</p>
                <div className="color-preview">
                    <span
                        className="color-dot"
                        style={{
                            backgroundColor: variant.background_color,
                            border: `2px solid ${variant.color}`,
                        }}
                    />
                    <span className="color-label">
                        {variant.color} / {variant.background_color}
                    </span>
                </div>
            </IonLabel>
            <IonButtons slot="end">
                <IonButton fill="clear" onClick={onEdit}>
                    <IonIcon slot="icon-only" icon={createOutline} />
                </IonButton>
                <IonButton fill="clear" color="danger" onClick={onDelete}>
                    <IonIcon slot="icon-only" icon={trashOutline} />
                </IonButton>
            </IonButtons>
        </IonItem>
    );
};

export default VariantListItem;
