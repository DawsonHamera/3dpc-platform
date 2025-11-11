import {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonProgressBar,
    IonSelect,
    IonSelectOption,
} from '@ionic/react';
import React, { useState, useEffect, useMemo } from 'react';
import ModelViewer from './ModelViewer'; // Accepts regionColors: Record<string, {hex?:string; texture_url?:string}>
import Card from '../../../components/UI/Card/Card';
import Header from '../../../components/Header/Header';
import { StepProps } from './OrderPage';
import { useGetModelQuery } from '../../../features/crud/modelsApi';
import { useGetMaterialsQuery } from '../../../features/crud/materialsApi';
import { Material, MaterialSlot } from '../../../types';
import { chevronBack, chevronForward } from 'ionicons/icons';

const CustomizeStep: React.FC<StepProps> = ({ data, updateData, nextStep, previousStep }) => {
    const { data: materials } = useGetMaterialsQuery();
    const { data: model, isLoading } = useGetModelQuery(data.model_id || 0);
    const handleMaterialChange = (slot: string, materialId: number) => {
        updateData('material_slots', [
            ...data.material_slots.filter((entry: any) => entry.slot !== slot),
            { slot, material_id: materialId },
        ]);
    };

    const regionColors = useMemo(() => {
        const map: Record<string, { hex?: string; texture_url?: string }> = {};
        console.log("Region colors for customization", data.material_slots, "materials", materials, "model", model);
        if (!model || !data.material_slots || !materials) return map;

        for (const { slot, material_id } of data.material_slots) {
            const material = materials?.find((m) => m.id === material_id);
            if (material) {
                map[slot] = {
                    hex: material.hex,
                    texture_url: material.texture ? material.texture.url : undefined,
                };
            }
        }

        return map;
    }, [data.material_slots, materials, model]);


    if (isLoading) {
        return <IonProgressBar type="indeterminate" style={{ marginTop: '1rem' }} />;
    }

    console.log("model", model);

    if (!model) {
        console.error("Model not found for customization", data, "model", model);
        return (
            <IonPage>
                <Header title="Customize" type="back" onBack={previousStep} />
                <IonContent>
                    <p style={{ padding: '1rem' }}>Model not found.</p>
                    {JSON.stringify(model)}
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <Header title="Customize" type="back" onBack={previousStep} />
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
                    <ModelViewer
                        modelPath={model?.modelFile?.url || ''}
                        regionColors={regionColors}
                    />
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        left: 0,
                        bottom: 20,
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0 16px'
                    }}>
                        <IonButton fill='clear' onClick={() => updateData('quantity', Math.max(1, data.quantity - 1))}>
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
                        }}>{data.quantity}</h1>
                        <IonButton fill='clear' onClick={() => updateData('quantity', data.quantity + 1)}>
                            <IonIcon icon={chevronForward} size='large' />
                        </IonButton>
                    </div>
                </div>

                <Card title="Customize" style={{ margin: '0px 16px' }}>
                    <IonLabel><b>Materials</b></IonLabel>
                    <IonList>
                        {model?.materialSlots?.map((slot) => (
                            <IonItem key={slot.slot}>
                                <IonLabel>{slot.slot}</IonLabel>
                                <IonSelect
                                    value={
                                        data.material_slots.find((s: any) => s.slot === slot.slot)?.material_id
                                    }
                                    onIonChange={e => handleMaterialChange(slot.slot, parseInt(e.detail.value))}
                                >
                                    {materials && materials.map(material => (
                                        <IonSelectOption key={material.id} value={material.id}>
                                            {material.name}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>
                        ))}
                    </IonList>

                    <IonLabel><b>Other</b></IonLabel>
                    <IonList>
                        <IonItem>
                            <IonLabel>Quality</IonLabel>
                            <IonSelect
                                value={data.quality || ''}
                                placeholder="Select quality"
                                onIonChange={e => updateData('quality', e.detail.value)}
                            >
                                <IonSelectOption value="draft">Draft</IonSelectOption>
                                <IonSelectOption value="standard">Standard</IonSelectOption>
                                <IonSelectOption value="high">High</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>

                    <IonButton expand="block" onClick={nextStep} style={{ marginTop: '16px' }}>
                        Next
                    </IonButton>
                </Card>
            </div>
        </IonPage>
    );
};

export default CustomizeStep;
