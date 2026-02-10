import { IonButton, IonIcon, IonToolbar, useIonRouter } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Product, Section } from "../../../../shared/features";
import { useShop } from "../../shared";
import ProductSection from "./ProductSection";
import "./ProductSections.css";
import SelectProductModal from "./SelectProductModal";
import { useProductSections } from "./useProductSections";

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
    const { viewMode } = useShop();

    const {
        addSection,
        renameSection,
        removeSection,
        addProduct,
        removeProduct,
    } = useProductSections(sections);

    const [isSelectProductModalOpen, setIsSelectProductModalOpen] =
        useState(false);

    const [activeSectionId, setActiveSectionId] = useState<number | null>(null);

    const [editingSection, setEditingSection] = useState<number | null>(null);
    const [sectionName, setSectionName] = useState<string>("");

    return (
        <>
            {sections.map((section) => (
                <ProductSection
                    key={section.id}
                    section={section}
                    products={products}
                    mode={viewMode}
                    onAddProduct={(sectionId) => {
                        setActiveSectionId(sectionId);
                        setIsSelectProductModalOpen(true);
                    }}
                    onRemoveProduct={removeProduct}
                    onRenameSection={renameSection}
                    onRemoveSection={removeSection}
                />
            ))}
            {viewMode === "admin" && (
                <div className="ion-padding">
                    <IonToolbar>
                        <IonButton
                            slot="start"
                            fill="clear"
                            onClick={() => addSection()}
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
            )}
            <SelectProductModal
                isOpen={isSelectProductModalOpen}
                onClose={() => setIsSelectProductModalOpen(false)}
                onSelect={(productId, variantId) =>
                    addProduct(activeSectionId!, productId, variantId)
                }
            />
        </>
    );
};

export default ProductSections;
