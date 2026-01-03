import React, { useState, useEffect } from "react";
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonIcon,
    IonText,
    IonSpinner,
    IonList,
    IonThumbnail,
    IonImg,
    IonAlert,
    IonRadioGroup,
    IonRadio,
    IonChip,
} from "@ionic/react";
import {
    closeOutline,
    saveOutline,
    addOutline,
    createOutline,
    trashOutline,
} from "ionicons/icons";
import {
    Product,
    Variant,
    Image,
    useCreateProductMutation,
    useUpdateProductMutation,
    useCreateVariantMutation,
    useUpdateVariantMutation,
    useDeleteVariantMutation,
} from "../../../../features/products/productsApi";
import { File } from "../../../../features/files/filesApi";
import FileSelector from "../../../../components/FileSelector/FileSelector";
import "./ProductModal.css";

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

interface LocalVariant {
    id?: number;
    name: string;
    color: string;
    background_color: string;
    price: number;
    image_file_id: number | null;
    image?: Image;
    type: "DEFAULT" | "STANDARD";
    isNew?: boolean;
    toDelete?: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({
    isOpen,
    onClose,
    product,
}) => {
    const [createProduct, { isLoading: isCreating }] =
        useCreateProductMutation();
    const [updateProduct, { isLoading: isUpdating }] =
        useUpdateProductMutation();
    const [createVariant] = useCreateVariantMutation();
    const [updateVariant] = useUpdateVariantMutation();
    const [deleteVariant] = useDeleteVariantMutation();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [variants, setVariants] = useState<LocalVariant[]>([]);
    const [editingVariantIndex, setEditingVariantIndex] = useState<
        number | null
    >(null);
    const [deleteAlert, setDeleteAlert] = useState<{
        isOpen: boolean;
        index: number | null;
    }>({
        isOpen: false,
        index: null,
    });

    const isEditMode = !!product;
    const isSaving = isCreating || isUpdating;

    useEffect(() => {
        if (isOpen) {
            if (product) {
                setName(product.name);
                setDescription(product.description || "");
                setVariants(
                    product.variants.map((v) => ({
                        id: v.id,
                        name: v.name,
                        color: v.color || "#000000",
                        background_color: v.background_color || "#ffffff",
                        price: v.price,
                        image_file_id: v.image_file_id,
                        image: v.image,
                        type: v.type as "DEFAULT" | "STANDARD",
                        isNew: false,
                    }))
                );
            } else {
                setName("");
                setDescription("");
                setVariants([]);
            }
            setEditingVariantIndex(null);
        }
    }, [isOpen, product]);

    const handleAddVariant = () => {
        const newVariant: LocalVariant = {
            name: "",
            color: "#000000",
            background_color: "#ffffff",
            price: 0,
            image_file_id: null,
            type: "STANDARD",
            isNew: true,
        };
        setVariants([...variants, newVariant]);
        setEditingVariantIndex(variants.length);
    };

    const handleUpdateVariant = (
        index: number,
        updates: Partial<LocalVariant>
    ) => {
        const newVariants = [...variants];

        // If setting this variant to DEFAULT, set all others to STANDARD
        if (updates.type === "DEFAULT") {
            newVariants.forEach((v, i) => {
                if (i !== index) {
                    v.type = "STANDARD";
                }
            });
        }

        newVariants[index] = { ...newVariants[index], ...updates };
        setVariants(newVariants);
    };

    const handleDeleteVariant = () => {
        if (deleteAlert.index !== null) {
            const variant = variants[deleteAlert.index];
            if (variant.id && !variant.isNew) {
                // Mark for deletion
                handleUpdateVariant(deleteAlert.index, { toDelete: true });
            } else {
                // Remove from list
                setVariants(variants.filter((_, i) => i !== deleteAlert.index));
            }
            setDeleteAlert({ isOpen: false, index: null });
            if (editingVariantIndex === deleteAlert.index) {
                setEditingVariantIndex(null);
            }
        }
    };

    const handleSaveProduct = async () => {
        if (!name.trim()) return;

        try {
            let productId: number;

            // Step 1: Create or update the product
            if (isEditMode) {
                await updateProduct({
                    id: product.id.toString(),
                    data: { name, description },
                }).unwrap();
                productId = product.id;
            } else {
                const newProduct = await createProduct({
                    name,
                    description,
                }).unwrap();
                productId = newProduct.id;
            }

            // Step 2: Handle all variants
            for (const variant of variants) {
                if (variant.toDelete && variant.id) {
                    // Delete variant
                    await deleteVariant({
                        id: productId.toString(),
                        variantId: variant.id.toString(),
                    }).unwrap();
                } else if (variant.isNew || !variant.id) {
                    // Create new variant
                    const variantData: any = {
                        name: variant.name,
                        color: variant.color,
                        background_color: variant.background_color,
                        price: variant.price,
                        type: variant.type,
                    };
                    if (variant.image_file_id) {
                        variantData.image_file_id = variant.image_file_id;
                    }
                    await createVariant({
                        id: productId.toString(),
                        data: variantData,
                    }).unwrap();
                } else if (variant.id) {
                    // Update existing variant
                    const variantData: any = {
                        name: variant.name,
                        color: variant.color,
                        background_color: variant.background_color,
                        price: variant.price,
                        type: variant.type,
                    };
                    if (variant.image_file_id) {
                        variantData.image_file_id = variant.image_file_id;
                    }
                    await updateVariant({
                        id: productId,
                        variantId: variant.id,
                        data: variantData,
                    }).unwrap();
                }
            }

            onClose();
        } catch (error) {
            console.error("Failed to save product:", error);
        }
    };

    const activeVariants = variants.filter((v) => !v.toDelete);
    const editingVariant =
        editingVariantIndex !== null ? variants[editingVariantIndex] : null;

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>
                        {isEditMode ? "Edit Product" : "Create Product"}
                    </IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onClose}>
                            <IonIcon icon={closeOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="product-modal-content">
                    <div className="product-info-section">
                        <IonText>
                            <h2>Product Information</h2>
                        </IonText>

                        <IonItem>
                            <IonLabel position="stacked">
                                Product Name *
                            </IonLabel>
                            <IonInput
                                value={name}
                                onIonInput={(e) =>
                                    setName(e.detail.value || "")
                                }
                                placeholder="Enter product name"
                                disabled={isSaving}
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Description</IonLabel>
                            <IonTextarea
                                value={description}
                                onIonInput={(e) =>
                                    setDescription(e.detail.value || "")
                                }
                                placeholder="Enter product description"
                                rows={3}
                                disabled={isSaving}
                            />
                        </IonItem>
                    </div>

                    <div className="variants-section">
                        <div className="variants-section-header">
                            <IonText>
                                <h2>Product Variants</h2>
                                <p>
                                    Add different versions of this product
                                    (colors, sizes, etc.)
                                </p>
                            </IonText>
                            <IonButton
                                fill="outline"
                                size="small"
                                onClick={handleAddVariant}
                                disabled={isSaving}
                            >
                                <IonIcon slot="start" icon={addOutline} />
                                Add Variant
                            </IonButton>
                        </div>

                        {activeVariants.length === 0 ? (
                            <div className="empty-variants">
                                <IonText color="medium">
                                    <p>
                                        No variants yet. Add your first variant
                                        to get started.
                                    </p>
                                </IonText>
                            </div>
                        ) : (
                            <IonList className="variants-list">
                                {activeVariants.map((variant, index) => {
                                    const actualIndex =
                                        variants.indexOf(variant);
                                    const isEditing =
                                        editingVariantIndex === actualIndex;

                                    if (isEditing) {
                                        return (
                                            <div
                                                key={actualIndex}
                                                className="variant-editor-card"
                                            >
                                                <div className="variant-editor-header">
                                                    <IonText>
                                                        <h3>
                                                            {variant.id
                                                                ? "Edit Variant"
                                                                : "New Variant"}
                                                        </h3>
                                                    </IonText>
                                                </div>

                                                <IonItem>
                                                    <IonLabel position="stacked">
                                                        Name *
                                                    </IonLabel>
                                                    <IonInput
                                                        value={variant.name}
                                                        onIonInput={(e) =>
                                                            handleUpdateVariant(
                                                                actualIndex,
                                                                {
                                                                    name:
                                                                        e.detail
                                                                            .value ||
                                                                        "",
                                                                }
                                                            )
                                                        }
                                                        placeholder="e.g., Red, Large, Standard"
                                                    />
                                                </IonItem>

                                                <IonItem>
                                                    <IonLabel position="stacked">
                                                        Price ($) *
                                                    </IonLabel>
                                                    <IonInput
                                                        type="number"
                                                        value={variant.price.toString()}
                                                        onIonInput={(e) =>
                                                            handleUpdateVariant(
                                                                actualIndex,
                                                                {
                                                                    price: parseFloat(
                                                                        e.detail
                                                                            .value ||
                                                                            "0"
                                                                    ),
                                                                }
                                                            )
                                                        }
                                                        placeholder="0.00"
                                                        step="0.01"
                                                        min="0"
                                                    />
                                                </IonItem>

                                                <IonItem>
                                                    <IonLabel>
                                                        Variant Type
                                                    </IonLabel>
                                                    <IonRadioGroup
                                                        value={variant.type}
                                                        onIonChange={(e) =>
                                                            handleUpdateVariant(
                                                                actualIndex,
                                                                {
                                                                    type: e
                                                                        .detail
                                                                        .value as
                                                                        | "DEFAULT"
                                                                        | "STANDARD",
                                                                }
                                                            )
                                                        }
                                                    >
                                                        <IonItem lines="none">
                                                            <IonLabel>
                                                                Standard
                                                            </IonLabel>
                                                            <IonRadio
                                                                slot="start"
                                                                value="STANDARD"
                                                            />
                                                        </IonItem>
                                                        <IonItem lines="none">
                                                            <IonLabel>
                                                                Default (shown
                                                                first)
                                                            </IonLabel>
                                                            <IonRadio
                                                                slot="start"
                                                                value="DEFAULT"
                                                            />
                                                        </IonItem>
                                                    </IonRadioGroup>
                                                </IonItem>

                                                <div className="color-inputs">
                                                    <div className="color-input-wrapper">
                                                        <IonLabel>
                                                            Text Color
                                                        </IonLabel>
                                                        <input
                                                            type="color"
                                                            value={
                                                                variant.color
                                                            }
                                                            onChange={(e) =>
                                                                handleUpdateVariant(
                                                                    actualIndex,
                                                                    {
                                                                        color: e
                                                                            .target
                                                                            .value,
                                                                    }
                                                                )
                                                            }
                                                            className="color-picker"
                                                        />
                                                    </div>

                                                    <div className="color-input-wrapper">
                                                        <IonLabel>
                                                            Background Color
                                                        </IonLabel>
                                                        <input
                                                            type="color"
                                                            value={
                                                                variant.background_color
                                                            }
                                                            onChange={(e) =>
                                                                handleUpdateVariant(
                                                                    actualIndex,
                                                                    {
                                                                        background_color:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    }
                                                                )
                                                            }
                                                            className="color-picker"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="image-selector-section">
                                                    <IonLabel>
                                                        Variant Image
                                                    </IonLabel>
                                                    <FileSelector
                                                        filter={(file) =>
                                                            file.mime_type?.startsWith(
                                                                "image/"
                                                            ) || false
                                                        }
                                                        onChange={(file) =>
                                                            handleUpdateVariant(
                                                                actualIndex,
                                                                {
                                                                    image_file_id:
                                                                        file.id,
                                                                    image: {
                                                                        path: file.path,
                                                                        original_name:
                                                                            file.original_name,
                                                                    },
                                                                }
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className="variant-editor-actions">
                                                    <IonButton
                                                        expand="block"
                                                        onClick={() =>
                                                            setEditingVariantIndex(
                                                                null
                                                            )
                                                        }
                                                    >
                                                        Done
                                                    </IonButton>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <IonItem
                                            key={actualIndex}
                                            className="variant-list-item"
                                        >
                                            <IonThumbnail slot="start">
                                                {variant.image?.path ? (
                                                    <IonImg
                                                        src={variant.image.path}
                                                        alt={variant.name}
                                                    />
                                                ) : (
                                                    <div className="placeholder-thumbnail" />
                                                )}
                                            </IonThumbnail>
                                            <IonLabel>
                                                <h3>
                                                    {variant.name ||
                                                        "Unnamed Variant"}
                                                    {variant.type ===
                                                        "DEFAULT" && (
                                                        <IonChip
                                                            color="primary"
                                                            style={{
                                                                marginLeft:
                                                                    "8px",
                                                                fontSize:
                                                                    "0.75rem",
                                                            }}
                                                        >
                                                            Default
                                                        </IonChip>
                                                    )}
                                                </h3>
                                                <p className="variant-price">
                                                    ${variant.price.toFixed(2)}
                                                </p>
                                                <div className="color-preview">
                                                    <span
                                                        className="color-dot"
                                                        style={{
                                                            backgroundColor:
                                                                variant.background_color,
                                                            border: `2px solid ${variant.color}`,
                                                        }}
                                                    />
                                                    <span className="color-label">
                                                        {variant.color} /{" "}
                                                        {
                                                            variant.background_color
                                                        }
                                                    </span>
                                                </div>
                                            </IonLabel>
                                            <IonButtons slot="end">
                                                <IonButton
                                                    fill="clear"
                                                    onClick={() =>
                                                        setEditingVariantIndex(
                                                            actualIndex
                                                        )
                                                    }
                                                >
                                                    <IonIcon
                                                        slot="icon-only"
                                                        icon={createOutline}
                                                    />
                                                </IonButton>
                                                <IonButton
                                                    fill="clear"
                                                    color="danger"
                                                    onClick={() =>
                                                        setDeleteAlert({
                                                            isOpen: true,
                                                            index: actualIndex,
                                                        })
                                                    }
                                                >
                                                    <IonIcon
                                                        slot="icon-only"
                                                        icon={trashOutline}
                                                    />
                                                </IonButton>
                                            </IonButtons>
                                        </IonItem>
                                    );
                                })}
                            </IonList>
                        )}
                    </div>

                    <div className="save-section">
                        <IonButton
                            expand="block"
                            onClick={handleSaveProduct}
                            disabled={
                                !name.trim() ||
                                activeVariants.length === 0 ||
                                isSaving
                            }
                            color="success"
                            size="large"
                        >
                            {isSaving ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <>
                                    <IonIcon slot="start" icon={saveOutline} />
                                    {isEditMode
                                        ? "Save Changes"
                                        : "Create Product"}
                                </>
                            )}
                        </IonButton>
                        {activeVariants.length === 0 && (
                            <IonText color="danger" className="ion-text-center">
                                <p className="error-text">
                                    At least one variant is required
                                </p>
                            </IonText>
                        )}
                    </div>
                </div>
            </IonContent>

            <IonAlert
                isOpen={deleteAlert.isOpen}
                onDidDismiss={() =>
                    setDeleteAlert({ isOpen: false, index: null })
                }
                header="Delete Variant"
                message="Are you sure you want to delete this variant?"
                buttons={[
                    {
                        text: "Cancel",
                        role: "cancel",
                    },
                    {
                        text: "Delete",
                        role: "destructive",
                        handler: handleDeleteVariant,
                    },
                ]}
            />
        </IonModal>
    );
};

export default ProductModal;
