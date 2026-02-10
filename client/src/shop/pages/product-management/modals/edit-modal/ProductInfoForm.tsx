import {
    IonInput,
    IonItem,
    IonLabel,
    IonText,
    IonTextarea,
} from "@ionic/react";
import React from "react";

interface ProductInfoFormProps {
    name: string;
    description: string;
    onNameChange: (name: string) => void;
    onDescriptionChange: (description: string) => void;
    disabled?: boolean;
}

const ProductInfoForm: React.FC<ProductInfoFormProps> = ({
    name,
    description,
    onNameChange,
    onDescriptionChange,
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
        </div>
    );
};

export default ProductInfoForm;
