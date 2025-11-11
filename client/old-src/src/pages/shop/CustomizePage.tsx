import React, { useEffect } from 'react';
import { IonPage, IonContent, useIonRouter, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import ProductModelRenderer from './ProductModelRenderer';
import { useShop } from './ShopContext.js';
import { useGetMaterialsQuery } from '../../features/crud/materialsApi.js';
import ShopHeader from './ShopHeader';
import { useGetModelsQuery } from '../../features/crud/modelsApi';
import { useGetProductsQuery } from '../../features/crud/shop/shopApi';

const CustomizePage: React.FC = () => {


    const { activeOrder, setActiveOrder, saveActiveOrder, setCustomOptions, customOptions } = useShop();
    const router = useIonRouter();
    const { data: materials } = useGetMaterialsQuery();
    const { data: products } = useGetProductsQuery();
    const { data: models } = useGetModelsQuery();

    const [product, setProduct] = React.useState<any>(null);

    useEffect(() => {
        if (products && activeOrder.productId) {
            const foundProduct = products.find(p => p.id === activeOrder.productId);
            setProduct(foundProduct || null);
        } else {
            setProduct(null);
        }
    }, [products, activeOrder.productId]);

    if (activeOrder.productId === null) {
        return (
            <IonPage>
                <ShopHeader title="Customize" />
                <IonContent className="ion-padding">
                    <h2>No product selected</h2>
                    <p>Please select a product from the catalog first.</p>
                    <IonButton expand="block" color="primary" onClick={() => router.push('/shop', 'back', 'push')}>
                        Go to Catalog
                    </IonButton>
                </IonContent>
            </IonPage>
        )
    }

    const renderProductCustomOptions = () => {
        if (!product || !product.customOptions || !product.customOptions.length) return null;
        return product.customOptions.map((option: any) => {
            switch (option.type) {
                case 'material':
                    return (
                        <IonItem key={option.id}>
                            <IonLabel>{option.label}</IonLabel>
                            <IonSelect
                                value={customOptions?.[option.id] || product.customOptions.default}
                                placeholder="Select Material"
                                onIonChange={e => setCustomOptions({ ...customOptions, [option.id]: e.detail.value })}
                            >
                                {materials && materials.map(material => (
                                    <IonSelectOption key={material.id} value={material.id}>
                                        {material.name}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    );
                default:
                    return null;
            }
        });
    };

    const handleAddToCart = () => {
        router.push('/shop/cart', 'forward', 'push');
        saveActiveOrder();
    }

    if (!product) {
        return (
            <IonPage>
                <ShopHeader title="Customize" />
                <IonContent className="ion-padding">
                    <h2>Loading product...</h2>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <ShopHeader title="Customize" />
            <IonContent className="ion-padding">
            <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
                <h3>{product.name}</h3>
                {product?.modelFile && <ProductModelRenderer modelPath={product.modelFile.url} />}
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
            </div>

            <div>
                <h2>Customize Your Product</h2>
                {renderProductCustomOptions()}
            </div>
            <IonButton expand="block" color="primary" onClick={() => handleAddToCart()}>
                Add to Cart
            </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default CustomizePage;