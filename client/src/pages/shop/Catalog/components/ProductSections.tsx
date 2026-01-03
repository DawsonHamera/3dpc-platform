import React, { useEffect, useRef, useState } from "react";
import {
    IonButton,
    IonButtons,
    IonIcon,
    IonInput,
    IonItem,
    IonText,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import ProductCard from "../../components/ProductCard";
import {
    Product,
    Section,
    useCreateSectionMutation,
    useDeleteSectionMutation,
    useUpdateSectionMutation,
} from "../../../../features/products/productsApi";
import "./ProductSections.css";
import {
    addCircleOutline,
    close,
    create,
    removeCircle,
    saveOutline,
} from "ionicons/icons";
import SelectProductModal from "./SelectProductModal";
import { useShop } from "../../ShopContext";
import EditSectionModal from "./EditSectionModal";

interface ProductSectionsProps {
    sections: Section[];
    products: Product[];
    isAdmin: boolean;
}

const ProductSections: React.FC<ProductSectionsProps> = ({
    sections,
    products,
    isAdmin,
}) => {
    const router = useIonRouter();
    const { setToast } = useShop();

    const [updateSection] = useUpdateSectionMutation();
    const [deleteSection] = useDeleteSectionMutation();
    const [createSection] = useCreateSectionMutation();

    const [isSelectProductModalOpen, setIsSelectProductModalOpen] =
        useState(false);

    const [activeSectionId, setActiveSectionId] = useState<number | null>(null);

    const [editingSection, setEditingSection] = useState<number | null>(null);
    const [sectionName, setSectionName] = useState<string>("");

    const handleRemoveProductFromSection = (
        sectionId: number,
        productId: number,
        variantId: number
    ) => {
        const section = sections.find((s) => s.id === sectionId);

        if (!section) return;

        const updatedItems = section.items.filter(
            (item) =>
                !(
                    item.product_id === productId &&
                    item.variant_id === variantId
                )
        );

        updateSection({
            id: sectionId,
            data: { items: updatedItems },
        });
    };

    const handleAddProductToSection = (
        sectionId: number,
        productId: number,
        variantId: number
    ) => {
        const section = sections.find((s) => s.id === sectionId);
        if (!section) return;

        if (
            section.items.find(
                (item) =>
                    item.product_id === productId &&
                    item.variant_id === variantId
            )
        ) {
            setToast({
                message: "Product variant already exists in section",
                color: "warning",
                duration: 2000,
            });
            return;
        }

        const updatedItems = [
            ...section.items,
            { product_id: productId, variant_id: variantId },
        ];

        updateSection({
            id: sectionId,
            data: { items: updatedItems },
        });
    };

    const handleEditSection = (sectionId: number, newName: string) => {
        updateSection({
            id: sectionId,
            data: { name: newName },
        });
        setEditingSection(null);
    };

    const handleRemoveSection = (sectionId: number) => {
        setEditingSection(null);
        deleteSection(sectionId);
    };

    const handleCreateSection = () => {
        createSection({ name: "New Section", items: [] });
    }

    return (
        <>
            {sections.map((section) => (
                <div key={section.name} className="product-section">
                    <IonToolbar>
                        <IonButton
                            slot="start"
                            fill="clear"
                            onClick={() => {
                                setEditingSection(
                                    editingSection === section.id
                                        ? null
                                        : section.id
                                );
                                setSectionName(section.name);
                            }}
                        >
                            <IonIcon
                                slot="icon-only"
                                icon={create}
                                size="large"
                            />
                        </IonButton>
                        {editingSection && editingSection === section.id ? (
                            <IonItem>
                                <IonInput
                                    value={sectionName}
                                    onIonInput={(e) =>
                                        setSectionName(e.detail.value!)
                                    }
                                    onBlur={() => setEditingSection(null)}
                                />
                                <IonButtons slot="end">
                                    <IonButton
                                        onClick={() =>
                                            handleEditSection(
                                                section.id,
                                                sectionName
                                            )
                                        }
                                        color="success"
                                    >
                                        <IonIcon
                                            slot="icon-only"
                                            icon={saveOutline}
                                        />
                                    </IonButton>
                                    <IonButton
                                        color="danger"
                                        onClick={() =>
                                            handleRemoveSection(section.id)
                                        }
                                    >
                                        <IonIcon
                                            slot="icon-only"
                                            icon={removeCircle}
                                        />
                                    </IonButton>
                                    <IonButton
                                        onClick={() => setEditingSection(null)}
                                    >
                                        <IonIcon
                                            slot="icon-only"
                                            icon={close}
                                        />
                                    </IonButton>
                                </IonButtons>
                            </IonItem>
                        ) : (
                            <IonText>
                                <h2 className="section-title">
                                    {section.name}
                                </h2>
                            </IonText>
                        )}
                    </IonToolbar>

                    <div className="product-list">
                        {section.items.map((item) => {
                            const product = products.find(
                                (p) => p.id === item.product_id
                            );

                            const variant = product?.variants.find(
                                (v) => v.id === item.variant_id
                            );

                            if (!product || !variant) return null;

                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    variantId={variant.id}
                                    onClick={
                                        !isAdmin
                                            ? () =>
                                                  router.push(
                                                      `/shop/?productId=${product.id}&variantId=${variant.id}`,
                                                      "none"
                                                  )
                                            : undefined
                                    }
                                    renderButton={
                                        isAdmin
                                            ? (onButtonClick) => {
                                                  return (
                                                      <IonButton
                                                          onClick={(e) => {
                                                              e.stopPropagation();
                                                              onButtonClick();
                                                          }}
                                                          fill="clear"
                                                      >
                                                          <IonIcon
                                                              icon={
                                                                  removeCircle
                                                              }
                                                              slot="icon-only"
                                                              size="large"
                                                          />
                                                      </IonButton>
                                                  );
                                              }
                                            : undefined
                                    }
                                    onButtonClick={() =>
                                        handleRemoveProductFromSection(
                                            section.id,
                                            product.id,
                                            variant.id
                                        )
                                    }
                                />
                            );
                        })}

                        {isAdmin && (
                            <div
                                className="add-card-placeholder"
                                onClick={() => {
                                    setIsSelectProductModalOpen(true);
                                    setActiveSectionId(section.id);
                                }}
                            >
                                <IonIcon icon={addCircleOutline} />
                                <IonText>Add Product</IonText>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <div className="product-section">
                <IonToolbar>
                    <IonButton
                        slot="start"
                        fill="clear"
                        onClick={() => handleCreateSection()}
                    >
                        <IonIcon
                            slot="icon-only"
                            icon={addCircleOutline}
                            size="large"
                        />
                        <p>Add New Section</p>
                    </IonButton>
                </IonToolbar>
            </div>
            <SelectProductModal
                isOpen={isSelectProductModalOpen}
                onClose={() => setIsSelectProductModalOpen(false)}
                onSelect={(productId, variantId) =>
                    handleAddProductToSection(
                        activeSectionId!,
                        productId,
                        variantId
                    )
                }
            />
        </>
    );
};

export default ProductSections;
