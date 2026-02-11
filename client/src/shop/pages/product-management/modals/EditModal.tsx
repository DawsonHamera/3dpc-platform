import {
    IonAlert,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonList,
    IonModal,
    IonSpinner,
    IonText,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { addOutline, closeOutline, saveOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import {
    Product,
    useCreateProductMutation,
    useCreateVariantMutation,
    useDeleteVariantMutation,
    useUpdateProductMutation,
    useUpdateVariantMutation,
} from "../../../../shared/features";
import "./EditModal.css";
import {
    LocalVariant,
    ProductInfoForm,
    VariantEditor,
    VariantListItem,
} from "./edit-modal";

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
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
    const [type, setType] = useState("general");
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
                setType(product.type || "general");
                setVariants(
                    product.variants.map((v) => ({
                        id: v.id,
                        name: v.name,
                        color: v.color || "#000000",
                        background_color: v.background_color || "#ffffff",
                        price: v.price,
                        image_file_id: v.image_file_id,
                        image: v.image || undefined,
                        type: v.type as "DEFAULT" | "STANDARD",
                        isNew: false,
                    })),
                );
            } else {
                setName("");
                setDescription("");
                setType("general");
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
        updates: Partial<LocalVariant>,
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
                    data: { name, description, type },
                }).unwrap();
                productId = product.id;
            } else {
                const newProduct = await createProduct({
                    name,
                    description,
                    type,
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
                    <ProductInfoForm
                        name={name}
                        description={description}
                        onNameChange={setName}
                        onTypeChange={setType}
                        type={type}
                        onDescriptionChange={setDescription}
                        disabled={isSaving}
                    />

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
                                            <VariantEditor
                                                key={actualIndex}
                                                variant={variant}
                                                onUpdate={(updates) =>
                                                    handleUpdateVariant(
                                                        actualIndex,
                                                        updates,
                                                    )
                                                }
                                                onDone={() =>
                                                    setEditingVariantIndex(null)
                                                }
                                            />
                                        );
                                    }

                                    return (
                                        <VariantListItem
                                            key={actualIndex}
                                            variant={variant}
                                            onEdit={() =>
                                                setEditingVariantIndex(
                                                    actualIndex,
                                                )
                                            }
                                            onDelete={() =>
                                                setDeleteAlert({
                                                    isOpen: true,
                                                    index: actualIndex,
                                                })
                                            }
                                        />
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
