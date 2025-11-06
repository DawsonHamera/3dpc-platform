import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonToast, useIonRouter } from '@ionic/react';
import React from 'react';
import Header from '../../../../components/Header/Header';
import FileSelector from '../../../../components/FileSelector';
import { h } from 'ionicons/dist/types/stencil-public-runtime';
import { useCreateProductMutation } from '../../../../features/crud/shop/shopApi';
import { save } from 'ionicons/icons';
import { set } from 'date-fns';
import ModelSelector from '../../../../components/ModelSelector';

const CreateProductPage: React.FC = () => {

    const [createProduct] = useCreateProductMutation();

    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        shortDescription: '',
        type: 'standard',
        price: '',
        modelId: 0,
        imageFileId: 0,
        customOptions: '',
    });

    const [invalidJSONError, setInvalidJSONError] = React.useState(false);
    const router = useIonRouter();

    const handleSubmit = () => {
        if (formData.customOptions != '') {

            try {
                formData.customOptions = JSON.stringify(JSON.parse(formData.customOptions));
            } catch (e) {
                setInvalidJSONError(true);
                return;
            }
        }
        else { 
            console.log('Submitting', {...formData, customOptions: {}});
            createProduct({ ...formData, customOptions: {} });
            router.push('/dashboard/admin/shop');

            return
        }

        console.log('Submitting', formData);
        createProduct(formData);
        router.push('/dashboard/admin/shop');
    }

    return (
        <IonPage>
            <Header title='Create Product' type='back' />
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
                    {/* <IonItem color='medium'>
                        <div>
                            <h2>Custom Options Format</h2>
                            <ul>
                                <li>id: int - unique id for the option</li>
                                <li>type: string - type of the option (see below)</li>
                                <li>[other type specific fields]</li>
                            </ul>
                            <h3>Option types:</h3>
                            <p><b>material</b> - allows user to select material from available materials</p>
                            <ul>
                                <li>label: string - label to show for the option</li>
                                <li>slot: string - name of the section of the model to use (built into the .glb file)</li>
                                <li>allowed: string[] - list of allowed material types (ex. PLA, PETG)</li>
                                <li>default: int - default material type (use the material id)</li>
                            </ul>
                            <p><b>text</b> - allows customer to write custom text for a print</p>
                            <ul>
                                <li>label: string - label to show for the option</li>
                                <li>default: string - default text to show</li>
                            </ul>
                        </div>
                    </IonItem> */}
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

export default CreateProductPage;           