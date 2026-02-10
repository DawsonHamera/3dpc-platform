import { IonButton, IonIcon, IonText } from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React from "react";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
    onCreateClick: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onCreateClick }) => {
    return (
        <div className={styles.emptyState}>
            <IonText color="medium">
                <h3>No products yet</h3>
                <p>Create your first product to get started</p>
            </IonText>
            <IonButton onClick={onCreateClick}>
                <IonIcon slot="start" icon={addOutline} />
                Create Product
            </IonButton>
        </div>
    );
};
