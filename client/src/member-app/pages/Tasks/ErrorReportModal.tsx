import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonText, IonItem, IonLabel, IonTextarea } from "@ionic/react";
import React from "react";

interface ErrorReportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ErrorReportModal: React.FC<ErrorReportModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = React.useState({
        report: '',
    });

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Error Report Submitted:', formData.report);
        onClose();
    };

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Report an Error</IonTitle>
                <IonButtons slot="end">
                <IonButton onClick={onClose}>Close</IonButton>
                </IonButtons>
            </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonText>
                <h5>Please describe the issue you encountered:</h5>
            </IonText>
            <IonItem>
                <IonLabel position="stacked">Error Details</IonLabel>
                <IonTextarea
                rows={4}
                placeholder="Describe the error here..."
                onIonChange={(e) => setFormData({ report: e.detail.value })}
                />
            </IonItem>
            <IonButton expand="block" onClick={handleSubmit}>
                Submit
            </IonButton>
            </IonContent>
        </IonModal>
    );
};

export default ErrorReportModal;