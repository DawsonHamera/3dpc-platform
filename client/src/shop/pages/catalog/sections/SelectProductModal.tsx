import { IonButton, IonModal, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { useGetProductsQuery } from "../../../../shared/features";
import { ProductCard } from "../product";
import styles from "./ProductSections.module.css";

const SelectProductModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSelect: (productId: number, variantId: number) => void;
    type?: string;
}> = ({ isOpen, onClose, onSelect, type }) => {
    const { data: products } = useGetProductsQuery({ type: type || undefined });

    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null,
    );
    const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
        null,
    );

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <div className={styles.productList}>
                {products?.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        {product.variants.map((variant) => (
                            <ProductCard
                                key={`${product.id}-${variant.id}`}
                                product={product}
                                active={
                                    selectedProductId === product.id &&
                                    selectedVariantId === variant.id
                                }
                                variantId={variant.id}
                                onClick={() => {
                                    setSelectedProductId(product.id);
                                    setSelectedVariantId(variant.id);
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <IonToolbar>
                <IonButton
                    expand="block"
                    disabled={
                        selectedProductId === null || selectedVariantId === null
                    }
                    onClick={() => {
                        if (selectedProductId && selectedVariantId) {
                            onSelect(selectedProductId, selectedVariantId);
                            onClose();
                        }
                    }}
                >
                    Select Product
                </IonButton>
                <IonButton
                    slot="end"
                    expand="block"
                    onClick={onClose}
                    color="medium"
                >
                    Cancel
                </IonButton>
            </IonToolbar>
        </IonModal>
    );
};

export default SelectProductModal;
