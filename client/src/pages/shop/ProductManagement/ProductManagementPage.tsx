import React, { useState } from "react";
import {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    IonText,
    IonSpinner,
    IonFab,
    IonFabButton,
    IonAlert,
    IonChip,
} from "@ionic/react";
import {
    addOutline,
    createOutline,
    trashOutline,
    starOutline,
} from "ionicons/icons";
import ShopHeader from "../ShopHeader";
import ProductModal from "./components/ProductModal";
import {
    useGetProductsQuery,
    useDeleteProductMutation,
    Product,
} from "../../../features/products/productsApi";
import "./ProductManagementPage.css";

const ProductManagementPage: React.FC = () => {
    const { data: products, isLoading } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [deleteAlert, setDeleteAlert] = useState<{
        isOpen: boolean;
        product: Product | null;
    }>({ isOpen: false, product: null });

    const handleCreateProduct = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleDeleteProduct = async () => {
        if (deleteAlert.product) {
            try {
                await deleteProduct(deleteAlert.product.id).unwrap();
                setDeleteAlert({ isOpen: false, product: null });
            } catch (error) {
                console.error("Failed to delete product:", error);
            }
        }
    };

    if (isLoading) {
        return (
            <IonPage>
                <ShopHeader title="Product Management" backArrow />
                <IonContent className="ion-padding ion-text-center">
                    <IonSpinner />
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <ShopHeader title="Product Management" backArrow />
            <IonContent>
                <div className="product-management-container">
                    <div className="product-management-header">
                        <IonText>
                            <h1>Product Management</h1>
                            <p>Manage your shop's product catalog</p>
                        </IonText>
                    </div>

                    {products && products.length === 0 ? (
                        <div className="empty-state">
                            <IonText color="medium">
                                <h3>No products yet</h3>
                                <p>Create your first product to get started</p>
                            </IonText>
                            <IonButton onClick={handleCreateProduct}>
                                <IonIcon slot="start" icon={addOutline} />
                                Create Product
                            </IonButton>
                        </div>
                    ) : (
                        <div className="products-list">
                            {products?.map((product) => (
                                <div key={product.id} className="product-item">
                                    <div className="product-item-header">
                                        <IonText>
                                            <h3>{product.name}</h3>
                                            <p className="product-description">
                                                {product.description ||
                                                    "No description"}
                                            </p>
                                        </IonText>
                                        <div className="product-item-actions">
                                            <IonButton
                                                fill="clear"
                                                onClick={() =>
                                                    handleEditProduct(product)
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
                                                        product,
                                                    })
                                                }
                                            >
                                                <IonIcon
                                                    slot="icon-only"
                                                    icon={trashOutline}
                                                />
                                            </IonButton>
                                        </div>
                                    </div>

                                    <div className="variants-grid">
                                        {product.variants.map((variant) => (
                                            <div
                                                key={variant.id}
                                                className="variant-card"
                                            >
                                                <div className="variant-image">
                                                    {variant.image?.path ? (
                                                        <img
                                                            src={
                                                                variant.image
                                                                    .path
                                                            }
                                                            alt={variant.name}
                                                        />
                                                    ) : (
                                                        <div className="placeholder-image">
                                                            <IonText color="medium">
                                                                <small>
                                                                    No image
                                                                </small>
                                                            </IonText>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="variant-info">
                                                    <h4>
                                                        {variant.name}
                                                        {variant.type ===
                                                            "DEFAULT" && (
                                                            <IonChip
                                                                color="primary"
                                                                style={{
                                                                    marginLeft:
                                                                        "4px",
                                                                    fontSize:
                                                                        "0.7rem",
                                                                    height: "20px",
                                                                }}
                                                            >
                                                                <IonIcon
                                                                    icon={
                                                                        starOutline
                                                                    }
                                                                    style={{
                                                                        fontSize:
                                                                            "0.8rem",
                                                                    }}
                                                                />
                                                                Default
                                                            </IonChip>
                                                        )}
                                                    </h4>
                                                    <p className="variant-price">
                                                        $
                                                        {variant.price.toFixed(
                                                            2
                                                        )}
                                                    </p>
                                                    <div className="variant-colors">
                                                        <span
                                                            className="color-dot"
                                                            style={{
                                                                backgroundColor:
                                                                    variant.background_color,
                                                                border: `2px solid ${variant.color}`,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton onClick={handleCreateProduct}>
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={editingProduct}
            />

            <IonAlert
                isOpen={deleteAlert.isOpen}
                onDidDismiss={() =>
                    setDeleteAlert({ isOpen: false, product: null })
                }
                header="Delete Product"
                message={`Are you sure you want to delete "${deleteAlert.product?.name}"? This will remove all variants and cannot be undone.`}
                buttons={[
                    {
                        text: "Cancel",
                        role: "cancel",
                    },
                    {
                        text: "Delete",
                        role: "destructive",
                        handler: handleDeleteProduct,
                    },
                ]}
            />
        </IonPage>
    );
};

export default ProductManagementPage;
