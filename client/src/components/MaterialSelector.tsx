import React, { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Material, useGetMaterialsQuery } from '../features/crud/materialsApi';

const IMAGE_SIZE = 64;

type Props = {
    filter?: (material: Material) => boolean;
    onChange: (material: Material) => void;
};

const MaterialSelector: React.FC<Props> = ({ filter = () => true, onChange }) => {
    const { data: materials, isLoading } = useGetMaterialsQuery();
    const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

    const filteredMaterials = useMemo(
        () =>
            materials
                ? [...materials]
                    .filter(material => filter(material))
                    .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime())
                : [],
        [materials, filter]
    );

    const handleChange = (material: Material) => {
        console.log('Material selected:', material);
        setSelectedMaterial(material);
        onChange(material);
    };

    const renderMaterial = (material: Material) => {
        const isSelected = selectedMaterial?.id === material.id;
        const imageUrl = material.imageFile?.url;

        if (imageUrl) {
            return (
                <img
                    src={imageUrl}
                    alt={material.name}
                    style={{
                        width: IMAGE_SIZE,
                        height: IMAGE_SIZE,
                        objectFit: 'cover',
                        borderRadius: 8,
                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                        border: isSelected ? '2px solid var(--ion-color-primary)' : '',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleChange(material)}
                />
            );
        }

        // Fallback: render a colored square using the material's hex color
        return (
            <div
                style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 8,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    background: material.hex || '#f8f8f8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: isSelected ? '2px solid var(--ion-color-primary)' : '',
                    cursor: 'pointer',
                }}
                onClick={() => handleChange(material)}
            >
                <span style={{ fontSize: 10, color: '#666', textAlign: 'center', padding: 4 }}>
                    {material.name}
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
                    {/* Render each material */}
                    {filteredMaterials.map(material => (
                        <SwiperSlide
                            key={material.id}
                            style={{ width: 'auto', display: 'flex', alignItems: 'center' }}
                        >
                            {renderMaterial(material)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default MaterialSelector;
