import React from 'react';
import { IonPage, IonContent, IonItem, IonList, IonButton, useIonRouter } from '@ionic/react';
import { useShop } from './ShopContext';
import ShopHeader from './ShopHeader';
import { useDeleteOrderItemMutation, useGetCartItemsQuery } from '../../features/crud/shop/shopApi';
import Card from '../../components/UI/Card/Card';

const CartPage: React.FC = () => {

    const { activeOrder } = useShop();
    const { data: cartItems, error, isLoading } = useGetCartItemsQuery();
    const [deleteOrderItem] = useDeleteOrderItemMutation();

    const router = useIonRouter();

    return (
        <IonPage>
            <ShopHeader title="Cart" />
            <IonContent className="ion-padding">
                <h2>Cart</h2>
                {isLoading && <p>Loading...</p>}
                {cartItems && cartItems.length > 0 && (
                    <div
                        style={{
                            // width: '50%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '16px',
                            padding: '16px',
                            paddingBottom: '32px'
                        }}
                    >
                        {cartItems.map(item => (
                            <Card>
                                <h2>{item.quantity}x {item.product.name}</h2>
                                <img
                                    src={item.product.image.url}
                                    alt={item.product.name}
                                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                                <p>{item.product.short_description}</p>
                                <p>Price: ${item.product.price.toFixed(2)}</p>
                                <IonButton expand="block" color="primary" onClick={() => deleteOrderItem({ orderId: item.orderId, itemId: item.id })}>
                                    Remove
                                </IonButton>
                            </Card>
                        ))}
                        <IonButton expand="block" onClick={() => router.push('/shop/checkout')}>
                            Proceed to Checkout
                        </IonButton>

                    </div>
                )}
                {cartItems && cartItems.length === 0 && (
                    <div>
                        <p>Your cart is empty.</p>
                        <IonButton expand="block" onClick={() => router.push('/shop')}>Explore the catalog</IonButton>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
}

export default CartPage;