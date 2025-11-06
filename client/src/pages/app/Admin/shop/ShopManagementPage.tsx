import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage, IonToolbar, useIonRouter } from "@ionic/react";
import React from "react";
import Header from "../../../../components/Header/Header";
import { useGetProductsQuery, useRemoveProductMutation } from "../../../../features/crud/shop/shopApi";
import { addCircleOutline, trash, trashBinOutline } from "ionicons/icons";

const ShopManagementPage: React.FC = () => {

    const { data: products, isLoading } = useGetProductsQuery();
    const [removeProduct] = useRemoveProductMutation();
    const router = useIonRouter();

    return (
        <IonPage>
            <Header title="Shop Management" />
            <IonContent className="ion-padding">
                <IonToolbar>
                    <IonLabel>
                        <h1>Products</h1>
                    </IonLabel>
                    <IonButtons slot="end">
                        <IonButton color="primary" onClick={() => router.push('/dashboard/admin/shop/products/create')}>
                            <IonIcon icon={addCircleOutline} slot="end" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
                {
                    isLoading ? <p>Loading...</p> :
                        <IonList>
                            {products && products.map(product => (
                                <IonItem key={product.id}>
                                    <IonLabel>
                                        <IonToolbar>
                                            <h2>{product.name}</h2>
                                            <IonButtons slot="end">
                                                <IonButton slot="end" color="primary" onClick={() => router.push(`/dashboard/admin/shop/products/edit/${product.id}`)}>
                                                    Edit
                                                </IonButton>
                                                <IonButton slot="end" color="danger" onClick={() => removeProduct(product.id)}>
                                                    <IonIcon icon={trash} slot="end" />
                                                </IonButton>
                                            </IonButtons>
                                        </IonToolbar>
                                        <img src={product.image?.url} alt={product.name} style={{ maxWidth: '150px', maxHeight: '150px' }} />
                                        <p>Price: ${product.price}</p>
                                        <p>{product.description}</p>
                                    </IonLabel>
                                </IonItem>
                            ))}
                        </IonList>
                }
            </IonContent>

        </IonPage>
    );
};

export default ShopManagementPage;