import { IonContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonButton, useIonRouter, IonToast } from '@ionic/react';
import React, { useState } from 'react';
import ShopHeader from './ShopHeader';
import { useShop } from './ShopContext';
import { useCheckoutMutation, useGetCartItemsQuery } from '../../features/crud/shop/shopApi';

const CheckoutPage: React.FC = () => {

    const { activeOrder } = useShop();
    const router = useIonRouter();
    const [checkout] = useCheckoutMutation();
    const { data: cartItems } = useGetCartItemsQuery();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        deliveryMethod: 'pickup',
        address: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleDeliveryMethodChange = (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            deliveryMethod: value,
            // Clear address if switching to pickup
            address: value === 'pickup' ? '' : prevState.address
        }));
    };

    const calculateTotal = () => {
        if (!cartItems) return 0;
        return cartItems.reduce((total: number, item: any) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    };

    const handleSubmit = async () => {
        const totalPrice = calculateTotal();
        try {
            await checkout({
                ...formData,
                totalPrice: totalPrice
            }).unwrap();
            
            console.log('Checkout submitted:', {
                ...formData,
                totalPrice: totalPrice,
            });
            
            // Show success toast
            setToastMessage('Order placed successfully!');
            setToastColor('success');
            setShowToast(true);
            
            // Navigate after a short delay to let user see the toast
            setTimeout(() => {
                router.push('/shop');
            }, 1500);
        } catch (error) {
            console.error('Checkout failed:', error);
            
            // Show error toast
            setToastMessage('Failed to place order. Please try again.');
            setToastColor('danger');
            setShowToast(true);
        }
    };

    return (
        <IonPage>
            <ShopHeader title="Checkout" />
            <IonContent className="ion-padding">
                <h1>Checkout</h1>
                <p>Complete your purchase.</p>

                {/* Order Summary */}
                <IonList style={{ marginBottom: '50px' }}>
                    <IonItem style={{
                            backgroundColor: 'var(--ion-color-primary)',
                            padding: '4px',
                            borderRadius: '4px',
                        }}
                        lines='none'
                        >
                        <IonLabel color="light">
                            <b>Order Summary</b>
                            <p style={{ color: 'var(--ion-color-light-shade)' }}>Review your items below.</p>
                            <p></p>
                        </IonLabel>
                    </IonItem>
                    {cartItems && cartItems.map((item: any) => {
                        const subtotal = item.product.price * item.quantity;
                        return (
                            <IonItem key={item.id}>
                                <IonLabel>
                                    <h3>{item.quantity}x {item.product.name}</h3>
                                    <p>{item.product.short_description}</p>
                                </IonLabel>
                                <IonLabel slot="end" style={{ textAlign: 'right' }}>
                                    <h3>${subtotal.toFixed(2)}</h3>
                                    <p>${item.product.price.toFixed(2)} each</p>
                                </IonLabel>
                            </IonItem>
                        );
                    })}
                    <IonItem>
                        <IonLabel>
                            <b>Total</b>
                        </IonLabel>
                        <IonLabel slot="end" style={{ textAlign: 'right' }}>
                            <b>${calculateTotal().toFixed(2)}</b>
                        </IonLabel>
                    </IonItem>
                </IonList>

                <IonList style={{ marginBottom: '50px' }}>
                      <IonItem style={{
                            backgroundColor: 'var(--ion-color-primary)',
                            padding: '4px',
                            borderRadius: '4px',
                        }}
                        lines='none'>
                        <IonLabel color="light">
                            <b>Contact Details</b>
                            <p style={{ color: 'var(--ion-color-light-shade)' }}>Enter your contact details below.</p>
                            <p></p>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="First Name"
                            type="text"
                            value={formData.firstName}
                            onIonInput={(e) => handleInputChange('firstName', e.detail.value!)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="Last Name"
                            type="text"
                            value={formData.lastName}
                            onIonInput={(e) => handleInputChange('lastName', e.detail.value!)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="Email"
                            type="text"
                            value={formData.email}
                            onIonInput={(e) => handleInputChange('email', e.detail.value!)}
                        />
                    </IonItem>

                </IonList>
                <IonList style={{ marginBottom: '50px' }}>
                    <IonItem style={{
                            backgroundColor: 'var(--ion-color-primary)',
                            padding: '4px',
                            borderRadius: '4px',
                        }}
                        lines='none'>
                        <IonLabel color="light">
                            <b>Delivery details</b>
                            <p style={{ color: 'var(--ion-color-light-shade)' }}>Enter your delivery details below.</p>
                            <p></p>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonRadioGroup 
                            value={formData.deliveryMethod}
                            onIonChange={(e) => handleDeliveryMethodChange(e.detail.value)}
                        >
                            <IonRadio value="pickup" labelPlacement="end" justify="start" >
                                <b>Pickup</b>
                                <p className="ion-text-wrap">Have a your child or a student pick up the order from room 117 during lunch. We'll contact you when the order is ready to figure out a time that works best for you.</p>
                            </IonRadio>
                            <IonRadio value="delivery" labelPlacement="end" justify="start">
                                <b>Delivery (school only)</b>
                                <p className="ion-text-wrap">We can deliver the order during lunch or after school. We'll contact you when the order is ready to figure out a time that works best for you.</p>
                            </IonRadio>
                        </IonRadioGroup>
                    </IonItem>
                    {formData.deliveryMethod === 'delivery' && (
                        <IonItem>
                            <IonInput
                                label="Address"
                                placeholder="Enter your delivery address"
                                type="text"
                                value={formData.address}
                                onIonInput={(e) => handleInputChange('address', e.detail.value!)}
                            />
                        </IonItem>
                    )}
                </IonList>

                <IonButton 
                    expand="block" 
                    color="primary" 
                    onClick={handleSubmit}
                    style={{ marginTop: '20px' }}
                >
                    Complete Order
                </IonButton>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                    position="top"
                />

            </IonContent>
        </IonPage>
    );
};

export default CheckoutPage;