import {
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonRadio,
    IonRadioGroup,
    IonText,
} from "@ionic/react";
import React from "react";
import FileSelector from "../../../../../shared/components/FileSelector/FileSelector";
import { LocalVariant } from "./types";

interface VariantEditorProps {
    variant: LocalVariant;
    onUpdate: (updates: Partial<LocalVariant>) => void;
    onDone: () => void;
}

const VariantEditor: React.FC<VariantEditorProps> = ({
    variant,
    onUpdate,
    onDone,
}) => {
    return (
        <div className="variant-editor-card">
            <div className="variant-editor-header">
                <IonText>
                    <h3>{variant.id ? "Edit Variant" : "New Variant"}</h3>
                </IonText>
            </div>

            <IonItem>
                <IonLabel position="stacked">Name *</IonLabel>
                <IonInput
                    value={variant.name}
                    onIonInput={(e) =>
                        onUpdate({
                            name: e.detail.value || "",
                        })
                    }
                    placeholder="e.g., Red, Large, Standard"
                />
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Price ($) *</IonLabel>
                <IonInput
                    type="number"
                    value={variant.price.toString()}
                    onIonInput={(e) =>
                        onUpdate({
                            price: parseFloat(e.detail.value || "0"),
                        })
                    }
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                />
            </IonItem>

            <IonItem>
                <IonLabel>Variant Type</IonLabel>
                <IonRadioGroup
                    value={variant.type}
                    onIonChange={(e) =>
                        onUpdate({
                            type: e.detail.value as "DEFAULT" | "STANDARD",
                        })
                    }
                >
                    <IonRadio slot="start" value="STANDARD">
                        Standard
                    </IonRadio>
                    <IonRadio slot="start" value="DEFAULT">
                        Default (shown first)
                    </IonRadio>
                </IonRadioGroup>
            </IonItem>

            <div className="color-inputs">
                <div className="color-input-wrapper">
                    <IonLabel>Label Color</IonLabel>
                    <input
                        type="color"
                        value={variant.color}
                        onChange={(e) =>
                            onUpdate({
                                color: e.target.value,
                            })
                        }
                        className="color-picker"
                    />
                </div>

                <div className="color-input-wrapper">
                    <IonLabel>Background Color</IonLabel>
                    <input
                        type="color"
                        value={variant.background_color}
                        onChange={(e) =>
                            onUpdate({
                                background_color: e.target.value,
                            })
                        }
                        className="color-picker"
                    />
                </div>
            </div>

            <div className="image-selector-section">
                <IonLabel>Variant Image</IonLabel>
                <FileSelector
                    filter={(file) =>
                        file.mime_type?.startsWith("image/") || false
                    }
                    onChange={(file) =>
                        onUpdate({
                            image_file_id: file.id,
                            image: {
                                path: file.path,
                                original_name: file.original_name,
                            },
                        })
                    }
                />
            </div>

            <div className="variant-editor-actions">
                <IonButton expand="block" onClick={onDone}>
                    Done
                </IonButton>
            </div>
        </div>
    );
};

export default VariantEditor;
