import React, { useEffect, useMemo } from 'react';
import { IonPage, IonContent, IonButton, IonSegment, IonSegmentButton, IonLabel, IonModal, IonButtons, IonIcon, IonItem, IonSelect, IonSelectOption, useIonRouter, IonCol, IonGrid, IonRow, IonToolbar, IonTitle } from '@ionic/react';
import { OrderFormStepProps } from './1212';
import { chevronBack, chevronForward, close } from 'ionicons/icons';
import { useShop } from './ShopContext';
import { useGetProductsQuery } from '../../features/crud/shop/shopApi';
import ShopHeader from './ShopHeader';
import { Product } from 'stream-chat';
import ProductCard from './components/ProductCard';

const CatalogPage: React.FC = () => {

    const [productFilter, setProductFilter] = React.useState('standard');

    const router = useIonRouter();
    const { saveActiveOrder, setActiveOrder, activeOrder } = useShop();

    const { data: products, error, isLoading } = useGetProductsQuery();

    const filteredProducts = useMemo(
        () => products ? products : [],
        [productFilter, products]
    );

    const handleCustomize = () => {
        router.push('/shop/customize');
    }

    const handleAddToCart = () => {
        saveActiveOrder();
        router.push('/shop/cart', 'forward', 'push');
    }

    const selectedProduct = products?.find((p: any) => p.id === activeOrder.productId);
    return (
        <IonPage>
            <ShopHeader title="Shop" searchbar onSearchChange={value => console.log(value)} />
            <IonContent>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', padding: '16px', paddingBottom: '32px' }}>
                    {filteredProducts?.map((product: any) => (
                        // <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
                        //     <h3>{product.name}</h3>
                        //     <img src={product.image.url} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                        //     <p>{product.short_description}</p>
                        //     <p>Price: ${product.price.toFixed(2)}</p>
                        //     <IonButton expand="block" color="primary" onClick={() => { setActiveOrder({ ...activeOrder, productId: product.id }); }}>
                        //         Select
                        //     </IonButton>
                        // </div>
                        <ProductCard key={product.id} product={product} onClick={() => { router.push(`/shop/product/${product.id}`) }} />
                    ))}
                </div>
            </IonContent>

            <IonModal isOpen={activeOrder.productId !== null} onDidDismiss={() => setActiveOrder({ ...activeOrder, productId: null })}>
                <div style={{ padding: '16px', maxHeight: '100vh', overflowY: 'auto' }}>
                    <IonToolbar>
                        <IonTitle>
                            {selectedProduct ? selectedProduct.name : 'Error loading product'}
                        </IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setActiveOrder({ ...activeOrder, productId: null })}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                    {selectedProduct && (
                        <div>
                            <img src={selectedProduct.image.url} alt={selectedProduct.name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                            <div style={{
                                right: 0,
                                left: 0,
                                bottom: 20,
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0 16px'
                            }}>
                                <IonButton fill='clear' onClick={() => setActiveOrder({ ...activeOrder, quantity: Math.max(1, activeOrder.quantity - 1) })}>
                                    <IonIcon icon={chevronBack} size='large' />
                                </IonButton>
                                <h1 style={{
                                    fontSize: '1.6rem',
                                    fontWeight: 600,
                                    color: 'var(--ion-color-primary)',
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    padding: '4px 10px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}>{activeOrder.quantity}</h1>
                                <IonButton fill='clear' onClick={() => setActiveOrder({ ...activeOrder, quantity: activeOrder.quantity + 1 })}>
                                    <IonIcon icon={chevronForward} size='large' />
                                </IonButton>
                            </div>
                            <IonLabel>
                                <hr style={{ border: 'none', borderTop: '2px solid var(--ion-color-light-shade)', margin: '16px 0' }} />
                                <h2>Details</h2>
                                <p>{selectedProduct.description}</p>
                                <b>Price: ${selectedProduct.price.toFixed(2)}</b>
                                <hr style={{ border: 'none', borderTop: '2px solid var(--ion-color-light-shade)', margin: '16px 0' }} />
                            </IonLabel>

                            <IonItem>
                                <IonLabel>Quality</IonLabel>
                                <IonSelect
                                    value={activeOrder.quality || ''}
                                    placeholder="Select quality"
                                    onIonChange={e => setActiveOrder({ ...activeOrder, quality: e.detail.value })}
                                >
                                    <IonSelectOption value="draft">Draft</IonSelectOption>
                                    <IonSelectOption value="standard">Standard</IonSelectOption>
                                    <IonSelectOption value="high">High</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            {selectedProduct.type === 'custom' && (
                                <IonButton disabled expand="block" color="primary" onClick={() => handleCustomize()}>
                                    Customize
                                </IonButton>
                            )}
                            <IonButton expand="block" color="primary" onClick={() => handleAddToCart()}>
                                Add to Cart
                            </IonButton>
                        </div>
                    )}

                </div>
            </IonModal>
        </IonPage>
    );
};

export default CatalogPage;