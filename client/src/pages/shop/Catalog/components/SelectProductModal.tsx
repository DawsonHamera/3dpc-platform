import { IonButton, IonModal, IonToolbar } from "@ionic/react";
import {
    Product,
    useGetProductsQuery,
} from "../../../../features/products/productsApi";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { set } from "date-fns";

const SelectProductModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSelect: (productId: number, variantId: number) => void;
}> = ({ isOpen, onClose, onSelect }) => {
    const { data: products } = useGetProductsQuery();

    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );
    const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
        null
    );

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <div className="product-list">
                {products?.map((product) => (
                    <div>
                        <h3>{product.name}</h3>
                        {product.variants.map((variant) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                active={selectedProductId === product.id && selectedVariantId === variant.id}
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
                    expand='block'
                    disabled={selectedProductId === null || selectedVariantId === null}
                    onClick={() => {
                        if (selectedProductId && selectedVariantId) {
                            onSelect(selectedProductId, selectedVariantId);
                            onClose();
                        }
                    }}
                >
                    Select Product
                </IonButton>
                <IonButton slot="end" expand='block' onClick={onClose} color='medium'>
                    Cancel
                </IonButton>
            </IonToolbar>
        </IonModal>
    );
};

export default SelectProductModal;
