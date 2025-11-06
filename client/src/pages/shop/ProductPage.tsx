import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react"
import { useParams } from "react-router";
import { useAddItemToCartMutation, useGetProductByIdQuery } from "../../features/crud/shop/shopApi";
import MaterialPicker from "./components/ColorPicker";
import { arrowBackOutline, cartOutline } from "ionicons/icons";
import { useMemo, useState } from "react";
import { useGetMaterialsQuery } from "../../features/crud/materialsApi";


const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const { data: product, error, isLoading } = useGetProductByIdQuery(id);
    const { data: materials } = useGetMaterialsQuery();
    const [selectedMaterialId, setSelectedMaterialId] = useState<number | undefined>(undefined);
    const [addItemToCart] = useAddItemToCartMutation();
    const router = useIonRouter();

    const selectedMaterial = useMemo(() => {
        if (selectedMaterialId) {
            console.log('Selected Material', materials?.find(m => m.id === selectedMaterialId));
            return materials?.find(m => m.id === selectedMaterialId);
        }
        return materials?.[0];
    }, [selectedMaterialId, materials]);


    const handleAddToCart = () => {
        if (!product) return;
        addItemToCart({
            productId: product.id,
            quantity: 1,
            // materialId: selectedMaterialId,
        });
        router.push('/shop/cart', 'forward', 'push');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" fill="clear" href="/shop">
                        <IonIcon icon={arrowBackOutline} />
                    </IonButton>
                    <IonTitle>{product?.name || 'Product'}</IonTitle>
                    <IonButton slot="end" fill="clear" href="/shop/cart">
                    <IonIcon icon={cartOutline} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {product && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyItems: 'space-between',
                    }}>
                        <img
                            src={product.image?.url}
                            alt={product.name || 'Product Image'}
                            style={{
                                width: '100%',
                                height: 'auto',
                                backgroundColor: product.backgroundColor ?? '#00bf6380',
                                borderRadius: '16px',
                                display: 'block',
                            }}
                        />
                        <div style={{ position: 'absolute', top: 16, right: 16 }}>
                            <MaterialPicker selectedMaterialId={selectedMaterialId} setSelectedMaterialId={setSelectedMaterialId} />
                        </div>
                        <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>{product.name}</h2>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <b style={{ fontSize: 20, color: 'var(--ion-color-primary)' }}>${product.price.toFixed(2)}</b>
                        </div>
                        <p style={{ fontSize: 14, color: 'var(--ion-color-medium)' }}>{product.description}</p>
                        <div 
                            style={{
                                border: '1px solid var(--ion-color-light-shade)',
                                borderRadius: '8px',
                                padding: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                
                            }}
                        >
                          <img src={selectedMaterial?.imageFile.url} alt={selectedMaterial?.name || 'Material Image'} style={{ width: 40, height: 40, borderRadius: '4px' }} />
                          <div>
                            <h4 style={{ margin: 0 }}>{selectedMaterial?.name || 'Select Material'}</h4>
                            <p style={{ margin: 0, fontSize: 12, color: 'var(--ion-color-medium)' }}>{selectedMaterial?.description}</p>
                          </div>
                        </div>
                        <div style={{ flex: 1 }}></div>
                        <IonButton expand="block" color="primary" onClick={handleAddToCart}>Add to Cart</IonButton>
                    </div>

                )}
                {isLoading && <p>Loading product...</p>}
            </IonContent>
        </IonPage>
    )
}

export default ProductPage;