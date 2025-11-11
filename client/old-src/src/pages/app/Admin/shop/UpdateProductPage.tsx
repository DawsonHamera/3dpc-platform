import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonToast, useIonRouter } from '@ionic/react';
import React from 'react';
import Header from '../../../../components/Header/Header';
import FileSelector from '../../../../components/FileSelector';
import { useGetProductByIdQuery, useUpdateProductMutation } from '../../../../features/crud/shop/shopApi';
import { save } from 'ionicons/icons';
import ModelSelector from '../../../../components/ModelSelector';
import { useParams } from 'react-router';

const UpdateProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading } = useGetProductByIdQuery(id);
    const [updateProduct] = useUpdateProductMutation();

    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        shortDescription: '',
        type: '',
        price: '',
        modelId: 0,
        imageFileId: 0,
        customOptions: '',
    });

    const [invalidJSONError, setInvalidJSONError] = React.useState(false);
    const router = useIonRouter();

    React.useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                description: product.description || '',
                shortDescription: product.shortDescription || '',
                type: product.type || '',
                price: product.price?.toString() || '',
                modelId: product.modelId || 0,
                imageFileId: product.imageFileId || 0,
                customOptions: product.customOptions ? JSON.stringify(product.customOptions, null, 2) : '',
            });
        }
    }, [product]);

    const handleSubmit = () => {
        if (formData.customOptions != '') {
            try {
                formData.customOptions = JSON.stringify(JSON.parse(formData.customOptions));
            } catch (e) {
                setInvalidJSONError(true);
                return;
            }
        } else {
            console.log('Submitting', { ...formData, customOptions: {} });
            updateProduct({ id: parseInt(id), data: { ...formData, customOptions: {} } });
            router.push('/dashboard/admin/shop');
            return;
        }

        console.log('Submitting', formData);
        updateProduct({ id: parseInt(id), data: formData });
        router.push('/dashboard/admin/shop');
    }

    if (isLoading) {
        return (
            <IonPage>
                <Header title='Update Product' type='back' />
                <IonContent className='ion-padding'>
                    <p>Loading...</p>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <Header title='Update Product' type='back' />
            <IonButton
                shape='round'
                color='primary'
                size='large'
                onClick={handleSubmit}
                style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 1000 }}
            >
                <IonIcon icon={save} slot="icon-only" />
            </IonButton>
            <IonContent className='ion-padding'>
                <IonList>
                    <IonItem>
                        <IonInput
                            type='text'
                            value={formData.name}
                            label="Product Name"
                            placeholder='Product Name'
                            onIonInput={e => setFormData({ ...formData, name: e.detail.value! })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type='text'
                            value={formData.description}
                            label="Description"
                            placeholder='Product Description'
                            onIonInput={e => setFormData({ ...formData, description: e.detail.value! })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type='text'
                            value={formData.shortDescription}
                            label="Short Description"
                            placeholder='Product Name'
                            onIonInput={e => setFormData({ ...formData, shortDescription: e.detail.value! })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type="text"
                            value={formData.type}
                            label="Type"
                            placeholder='standard, custom, teacher-only, etc.'
                            onIonInput={e => setFormData({ ...formData, type: e.detail.value! })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type='number'
                            value={formData.price}
                            label="Price"
                            placeholder='Product Price'
                            min={0}
                            onIonInput={e => setFormData({ ...formData, price: e.detail.value! })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel style={{ marginRight: 10 }}>Model</IonLabel>
                        <ModelSelector
                            onChange={(file) => setFormData({ ...formData, modelId: file.id })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel style={{ marginRight: 10 }}>Image</IonLabel>
                        <FileSelector
                            onChange={(file) => setFormData({ ...formData, imageFileId: file.id })}
                            filter={(file) => file.mimeType?.startsWith('image') || false}
                        />
                    </IonItem>
                    <IonItem style={{ alignItems: 'stretch' }}>
                        <IonLabel position='floating' style={{ marginBottom: 10 }}>Custom Options (JSON)</IonLabel>
                        <IonTextarea
                            autoGrow={true}
                            value={formData.customOptions}
                            onIonInput={e => {
                                setFormData({ ...formData, customOptions: e.detail.value! });
                            }}
                            style={{ flex: 1, minHeight: 100 }}
                            placeholder="e.g. [{ id: 2, type: 'material', label: 'Base Material', slot: 'base', allowed: ['PLA', 'PETG', 'ABS'], default: 2 }]"
                        />
                    </IonItem>
                    <IonToast
                        isOpen={invalidJSONError}
                        onDidDismiss={() => setInvalidJSONError(false)}
                        color="danger"
                        duration={3000}
                        message="Invalid JSON in Custom Options"
                    >
                    </IonToast>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default UpdateProductPage;
