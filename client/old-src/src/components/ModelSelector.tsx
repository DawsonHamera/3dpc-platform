import React, { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Model, useGetModelsQuery } from '../features/crud/modelsApi';
import ModelFilePreview from './ModelFilePreview';

const IMAGE_SIZE = 64;

type Props = {
    filter?: (model: Model) => boolean;
    onChange: (model: Model) => void;
};

const ModelSelector: React.FC<Props> = ({ filter = () => true, onChange }) => {
    const { data: models, isLoading } = useGetModelsQuery();
    const [selectedModel, setSelectedModel] = useState<Model | null>(null);

    const filteredModels = useMemo(
        () =>
            models
                ? [...models]
                    .filter(model => filter(model))
                    .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime())
                : [],
        [models, filter]
    );

    const handleChange = (model: Model) => {
        console.log('Model selected:', model);
        setSelectedModel(model);
        onChange(model);
    };

    const renderModel = (model: Model) => {
        const isSelected = selectedModel?.id === model.id;
        const modelUrl = model.modelFile?.url;

        if (modelUrl) {
            return (
                <div
                    style={{
                        width: IMAGE_SIZE,
                        height: IMAGE_SIZE,
                        borderRadius: 8,
                        overflow: 'hidden',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                        background: '#f8f8f8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: isSelected ? '2px solid var(--ion-color-primary)' : '',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleChange(model)}
                >
                    <ModelFilePreview modelUrl={modelUrl} />
                </div>
            );
        }

        // Fallback: render a placeholder with model name
        return (
            <div
                style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 8,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    background: '#f8f8f8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: isSelected ? '2px solid var(--ion-color-primary)' : '',
                    cursor: 'pointer',
                }}
                onClick={() => handleChange(model)}
            >
                <span style={{ fontSize: 10, color: '#666', textAlign: 'center', padding: 4 }}>
                    {model.name}
                </span>
            </div>
        );
    };

    return (
        <div style={{ width: '100%' }}>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <Swiper
                    spaceBetween={8}
                    slidesPerView="auto"
                    freeMode
                    style={{ padding: '8px', minHeight: IMAGE_SIZE + 16 }}
                >
                    {/* Render each model */}
                    {filteredModels.map(model => (
                        <SwiperSlide
                            key={model.id}
                            style={{ width: 'auto', display: 'flex', alignItems: 'center' }}
                        >
                            {renderModel(model)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default ModelSelector;
