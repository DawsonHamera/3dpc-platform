import {
    IonAlert,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonPage,
    IonSpinner,
    IonText,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React from "react";
import { ProductModal } from "../catalog";
import { ShopHeader } from "../shared";
import { EmptyProductsState } from "./EmptyPage";
import styles from "./Page.module.css";
import { ProductsList } from "./ProductsList";
import { useProductManagement } from "./useManagement";

const ProductManagementPage: React.FC = () => {
    const {
        products,
        isLoading,
        isModalOpen,
        editingProduct,
        deleteAlert,
        handleCreateProduct,
        handleEditProduct,
        handleDeleteProduct,
        openDeleteAlert,
        closeDeleteAlert,
        closeModal,
    } = useProductManagement();

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
                <div className={styles.productManagementContainer}>
                    <div className={styles.productManagementHeader}>
                        <IonText>
                            <h1>Product Management</h1>
                            <p>Manage product catalog</p>
                        </IonText>
                    </div>

                    {products && products.length === 0 ? (
                        <EmptyProductsState
                            onCreateClick={handleCreateProduct}
                        />
                    ) : (
                        <ProductsList
                            products={products || []}
                            onEditProduct={handleEditProduct}
                            onDeleteProduct={openDeleteAlert}
                        />
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
                onClose={closeModal}
                product={editingProduct}
            />

            <IonAlert
                isOpen={deleteAlert.isOpen}
                onDidDismiss={closeDeleteAlert}
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
