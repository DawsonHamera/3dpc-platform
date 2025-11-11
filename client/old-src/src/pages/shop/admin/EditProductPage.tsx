import React, { useMemo, useRef } from 'react';
import { IonButton, IonCheckbox, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonToast, IonToolbar, useIonRouter } from '@ionic/react';
import Shop from '../Shop';
import ShopHeader from '../ShopHeader';
import FileSelector from '../../../components/FileSelector';
import MaterialPicker from '../components/ColorPicker';
import ColorPicker from '../components/ColorPicker';
import { useGetMaterialsQuery } from '../../../features/crud/materialsApi';
import { add } from 'ionicons/icons';
import MaterialSelector from '../../../components/MaterialSelector';
import { TwitterPicker } from 'react-color';
import { useCreateProductMutation, useGetProductByIdQuery, useUpdateProductMutation } from '../../../features/crud/shop/shopApi';
import ModelSelector from '../../../components/ModelSelector';
import { useParams } from 'react-router';
import { set } from 'date-fns';

type VariantEditorProps = {
    variants: Array<any>;
    setVariants: React.Dispatch<React.SetStateAction<Array<any>>>;
};

const VariantEditor: React.FC<VariantEditorProps> = ({ variants, setVariants }) => {
    const [selectedMaterialId, setSelectedMaterialId] = React.useState<number | undefined>(undefined);
    const [inputSelected, setInputSelected] = React.useState<string>('image');
    const [showColorPicker, setShowColorPicker] = React.useState<boolean>(false);

    const { data: materials } = useGetMaterialsQuery();


    const [currentVariantIndex, setCurrentVariantIndex] = React.useState<number>(0);

    const currentVariant = useMemo(() => {
        return variants.find(variant => variant.id === currentVariantIndex);
    }, [currentVariantIndex, variants]);

    const handleAddVariant = () => {
        console.log('Adding variant');
        const newId = variants.length > 0 ? Math.max(...variants.map(v => v.id)) + 1 : 1;
        setVariants([...variants, { id: newId, color: null, materialId: null, imageFile: null, isDefault: variants.length === 0, material: null }]);
        setCurrentVariantIndex(newId);
    };

    const handleUpdateVariantColor = (color: string) => {
        const updatedVariants = [...variants];
        const variant = updatedVariants.find(variant => variant.id === currentVariantIndex);
        if (variant) {
            variant.color = color;
            setVariants(updatedVariants);
        }
    }

    const handleUpdateVariantMaterial = (materialId: number) => {
        const updatedVariants = [...variants];
        const variant = updatedVariants.find(variant => variant.id === currentVariantIndex);
        if (variant) {
            variant.materialId = materialId;
            variant.material = materials?.find(material => material.id === materialId) || null;
            setVariants(updatedVariants);
        }
    }

    const handleUpdateVariantImage = (imageFile: any) => {
        const updatedVariants = [...variants];
        const variant = updatedVariants.find(variant => variant.id === currentVariantIndex);
        if (variant) {
            variant.imageFile = imageFile;
            setVariants(updatedVariants);
            console.log('Updated variants', updatedVariants);
        }
    }

    const handleUpdateVariantIsDefault = (isDefault: boolean) => {
        if (!currentVariant) return;
        const updatedVariants = variants.map(variant => ({
            ...variant,
            isDefault: variant.id === currentVariant.id ? isDefault : false
        }));
        setVariants(updatedVariants);
    }

    const materialSelectRef = useRef<HTMLIonSelectElement | null>(null);

    const customColors = [
        "#F28B82", // warm red
        "#F6AD55", // orange / tangerine
        "#FFD666", // sunny yellow
        "#81C995", // fresh green
        "#5AB0F2", // clear sky blue
        "#A78BFA", // soft violet
        "#F48FB1", // pink rose
        "#BDBDBD", // neutral gray
    ];




    if (variants.length === 0) {
        return (
            <div
                style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: '#ccc',
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <IonButton onClick={handleAddVariant} size='large'>
                    <IonIcon slot='icon-only' icon={add} size='large' />
                </IonButton>
            </div>
        );
    }

    if (!currentVariant) {
        // If somehow the current variant doesn't exist, reset to first variant
        if (variants.length > 0 && currentVariantIndex !== variants[0].id) {
            setCurrentVariantIndex(variants[0].id);
        }
        return null;
    }

    return (
        <div>
            <div
                style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: currentVariant?.color || '#ccc',
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <div style={{ width: '100%', padding: 10, position: 'relative' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '5px',
                        justifyContent: 'space-between'
                    }}>
                        <IonButton
                            onClick={() => setShowColorPicker((prev) => !prev)}
                            color="light"
                            size="small"
                        >
                            BG Color
                        </IonButton>
                        <IonCheckbox
                            checked={currentVariant?.isDefault || false}
                            onIonChange={() => handleUpdateVariantIsDefault(!currentVariant?.isDefault)}
                        >
                            Default
                        </IonCheckbox>
                    </div>
                    {showColorPicker && (
                        <div style={{ position: 'absolute', top: 53 }}>
                            <TwitterPicker width="200px" colors={customColors} color={currentVariant?.color || '#ffffff'} onChange={(color: string) => (handleUpdateVariantColor(color.hex), setShowColorPicker(false))} />
                        </div>
                    )}
                </div>
                {currentVariant?.materialId && (
                    <h3>{materials?.find(material => material.id === currentVariant.materialId)?.name}</h3>
                )}
                {currentVariant?.imageFile?.url ? (
                    <img style={{
                        width: '60%',
                        height: '60%',
                        borderRadius: '16px',
                    }} src={currentVariant?.imageFile?.url} />
                ) : (
                    <div style={{ width: '60%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p>Select an image below</p>
                    </div>
                )}

                <IonSegment value={inputSelected} onIonChange={(e) => setInputSelected(e.detail.value)}>
                    <IonSegmentButton value="image">
                        <IonLabel>Image</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="segment">
                        <IonLabel>Material</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                <div style={{ marginTop: 'auto', width: '90%' }}>
                    {inputSelected === 'image' ? (
                        <FileSelector onChange={(file) => handleUpdateVariantImage(file)} filter={(file) => file.mimeType.includes('image')} />
                    ) : (
                        <MaterialSelector onChange={(material) => handleUpdateVariantMaterial(material.id)} />
                    )}
                </div>

            </div>
            <div style={{ position: 'absolute', top: 100, right: 16 }}>
                <ColorPicker onCreate={handleAddVariant} selectedId={currentVariantIndex} setSelectedId={setCurrentVariantIndex} items={variants.map(variant => ({ id: variant.id, color: materials?.find(material => material.id === variant.materialId)?.hex }))} />
            </div>
        </div>
    );
};

type EditProductPageProps = {
    mode: 'edit' | 'create';
};

const EditProductPage: React.FC<EditProductPageProps> = ({ mode }) => {

    const [variants, setVariants] = React.useState<Array<any>>([]);
    const [formData, setFormData] = React.useState<any>({});
    const [error, setError] = React.useState<string | null>(null);
    const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
    const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
    const router = useIonRouter()
    const sectionId = useParams<{ sectionId: string }>().sectionId;
    const { productId } = useParams<{ productId: string }>();


    // Always call the query hook, but skip it when not in edit mode
    const { data: product } = useGetProductByIdQuery(productId ? parseInt(productId) : 0, {
        skip: mode !== 'edit' || !productId
    });

    React.useEffect(() => {
        if (mode === 'edit' && product) {
            setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                modelId: product.modelId,
            });
            setVariants(product.variants.map((variant: any) => ({
                id: variant.id,
                color: variant.backgroundColor,
                materialId: variant.materialId,
                imageFile: variant.imageFile,
                isDefault: variant.id === product.defaultVariant.id || false,
                material: variant.material,
            })));
        }
    }, [mode, product]);

    const handleSubmit = () => {

        const validations = [
            { condition: variants.length === 0, message: 'At least one variant is required' },
            { condition: !formData.name || formData.name.trim() === '', message: 'Product name is required' },
            { condition: !formData.description || formData.description.trim() === '', message: 'Product description is required' },
            { condition: !formData.price || isNaN(formData.price) || formData.price <= 0, message: 'Product price is required and must be a positive number' },
        ];

        const error = validations.find(validation => validation.condition)?.message;
        if (error) {
            setError(error);
            return;
        }



        if (mode === 'edit' && productId) {
            const productData = {
                ...formData,
                defaultVariantId: variants.find(variant => variant.isDefault)?.id || variants[0].id,
            }

            updateProduct({
                id: parseInt(productId),
                data: productData
            });
            console.log('Submitting:', productData);

        }
        else {
            const productData = {
                ...formData,
                sectionId,
                defaultVariantId: variants.find(variant => variant.isDefault)?.id || variants[0].id,
                variants: variants.map(variant => ({
                    id: variant.id,
                    name: variant.material?.name || '',
                    backgroundColor: variant.color,
                    modelColor: variant.material?.hex || '',
                    imageFileId: variant.imageFile?.id,
                    isDefault: variant.isDefault,
                    materialId: variant.materialId,
                })),
            }

            createProduct({
                ...productData
            });
        }

        router.goBack();
    }

    return (
        <IonPage>
            <ShopHeader backArrow title={mode === 'edit' ? "Edit Product" : "Create Product"} />
            <IonToast color='danger' message={error || ''} isOpen={!!error} duration={3000} onDidDismiss={() => setError(null)} />
            <IonContent className="ion-padding">
                <VariantEditor variants={variants} setVariants={setVariants} />
                <IonList>
                    <IonItem>
                        <IonInput
                            type='text'
                            label="Name"
                            placeholder='Product Name'
                            value={formData.name || ''}
                            onIonChange={(e) => setFormData({ ...formData, name: e.detail.value! })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type='text'
                            label="Description"
                            placeholder='Product Description'
                            value={formData.description || ''}
                            onIonChange={(e) => setFormData({ ...formData, description: e.detail.value! })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Model</IonLabel>
                        <ModelSelector
                            onChange={(model) => setFormData({ ...formData, modelId: model.id })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type='number'
                            label="Price"
                            placeholder='Product Price'
                            value={formData.price || ''}
                            onIonChange={(e) => setFormData({ ...formData, price: parseFloat(e.detail.value!) || 0 })}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type='text'
                            label='Tags'
                            placeholder='tags'
                            value={formData.tags || ''}
                            onIonChange={(e) => setFormData({ ...formData, tags: e.detail.value! })}
                        />
                    </IonItem>
                </IonList>
                <IonButton expand='block' style={{ marginTop: 16 }} onClick={() => handleSubmit()}>
                    Save Product
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default EditProductPage;