import {
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTextarea,
} from "@ionic/react";
import React from "react";

interface ProductInfoFormProps {
    name: string;
    description: string;
    onNameChange: (name: string) => void;
    onDescriptionChange: (description: string) => void;
    type: string;
    onTypeChange: (type: string) => void;
    disabled?: boolean;
}

const ProductInfoForm: React.FC<ProductInfoFormProps> = ({
    name,
    description,
    onNameChange,
    onDescriptionChange,
    type,
    onTypeChange,
    disabled = false,
}) => {
    return (
        <div className="product-info-section">
            <IonText>
                <h2>Product Information</h2>
            </IonText>

            <IonItem>
                <IonLabel position="stacked">Product Name *</IonLabel>
                <IonInput
                    value={name}
                    onIonInput={(e) => onNameChange(e.detail.value || "")}
                    placeholder="Enter product name"
                    disabled={disabled}
                />
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Description</IonLabel>
                <IonTextarea
                    value={description}
                    onIonInput={(e) =>
                        onDescriptionChange(e.detail.value || "")
                    }
                    placeholder="Enter product description"
                    rows={3}
                    disabled={disabled}
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Type</IonLabel>
                <IonSelect
                    value={type}
                    onIonChange={(e) => onTypeChange(e.detail.value)}
                    placeholder="Select type"
                    disabled={disabled}
                >
                    <IonSelectOption value="general">General</IonSelectOption>
                    <IonSelectOption value="teachers">Teachers</IonSelectOption>
                </IonSelect>
            </IonItem>
        </div>
    );
};

export default ProductInfoForm;
