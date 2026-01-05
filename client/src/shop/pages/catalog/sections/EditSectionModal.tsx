import { IonButton, IonButtons, IonInput, IonItem, IonModal } from "@ionic/react";
import { useState } from "react";

const EditSectionModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    section: any | null;
    onSave?: () => void;
}> = ({ isOpen, onClose, section, onSave }) => {
    // Modal content and logic for editing a section would go here

    const [sectionName, setSectionName] = useState(section ? section.name : '');

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <div>
                <h2>Edit Section {section?.name}</h2>
                <IonItem>
                    <IonInput
                        label="Section Name"
                        value={sectionName}
                        onIonChange={(e) => setSectionName(e.detail.value!)}
                    />
                    <IonButtons slot="end">
                        <IonButton onClick={() => {}}>Save</IonButton>
                        <IonButton onClick={onClose}>Cancel</IonButton>
                        <IonButton onClick={onClose}>Delete</IonButton>
                    </IonButtons>
                </IonItem>
            </div>
        </IonModal>
    );
    }

    export default EditSectionModal;