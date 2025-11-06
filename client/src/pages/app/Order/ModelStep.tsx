import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useGetModelsQuery } from "../../../features/crud/modelsApi";
import { Model } from "../../../types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import { arrowBack, arrowBackOutline, arrowUpLeftBox, handLeftSharp } from "ionicons/icons";
import { useState } from "react";
import Header from "../../../components/Header/Header";
import Card from "../../../components/UI/Card/Card";
import { StepProps } from "./OrderPage";

const ModelStep: React.FC<StepProps> = ({ data, updateData, nextStep, previousStep }) => {
    const { data: models, isLoading } = useGetModelsQuery()

    const handleSubmit = (id: number) => {
        console.log("Selected model ID:", id);
        updateData('model_id', id)
        updateData('material_slots', models?.find((model: Model) => model.id === id)?.materialSlots?.map(slot => ({
            slot: slot.slot,
            material_id: slot.defaultMaterialId || slot.materialId,
        })) || []);
        nextStep()
    }

    return (
        <IonPage>
            <Header title="Select Model" type='back' onBack={previousStep} />
            <IonContent
                style={{
                    // backgroundImage: 'url(/images/abstractWhite.jpg)',
                    backgroundSize: 'cover',
                    height: '100%',
                }}
            >


                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '10px',
                        padding: '10px',
                    }}
                >
                    {!isLoading && models && models.map((model) => (
                        <div onClick={() => handleSubmit(model.id)} key={model.id} style={{ cursor: 'pointer' }}>
                            <Card title={model.name} fontSize="1.2rem">
                                <div
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={model.imageFile?.url}
                                        alt={model.name}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

            </IonContent>
        </IonPage>
    )
}

export default ModelStep;