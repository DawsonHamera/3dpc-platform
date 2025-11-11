import React from 'react';
import { IonButton, IonIcon, IonChip } from '@ionic/react';
import { pencil, trash, colorPalette, thermometer } from 'ionicons/icons';
import { Material } from '../../../../../types';

interface MaterialInventoryCardProps {
  material: Material;
  onEdit: (material: Material) => void;
  onDelete: (materialId: number) => void;
}

const MaterialInventoryCard: React.FC<MaterialInventoryCardProps> = ({ 
  material, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div style={{ 
      padding: '16px', 
      backgroundColor: 'white', 
      borderRadius: '12px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'relative'
    }}>
      {/* Action Buttons */}
      <div style={{ 
        position: 'absolute', 
        top: '12px', 
        right: '12px', 
        display: 'flex', 
        gap: '8px' 
      }}>
        <IonButton 
          fill="clear" 
          size="small"
          onClick={() => onEdit(material)}
        >
          <IonIcon icon={pencil} />
        </IonButton>
        <IonButton 
          fill="clear" 
          size="small" 
          color="danger" 
          onClick={() => onDelete(material.id)}
        >
          <IonIcon icon={trash} />
        </IonButton>
      </div>

      {/* Material Image */}
      {material.image && (
        <div style={{ 
          width: '100%', 
          height: '120px', 
          borderRadius: '8px', 
          overflow: 'hidden',
          marginBottom: '12px'
        }}>
          <img 
            src={material.image.url} 
            alt={material.name}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
      )}

      {/* Material Info */}
      <div style={{ marginTop: '12px' }}>
        <h3 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '18px', 
          fontWeight: '600' 
        }}>
          {material.name}
        </h3>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '8px' 
        }}>
          <IonChip color="primary" style={{ fontSize: '12px' }}>
            {material.type}
          </IonChip>
          {material.hex && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px' 
            }}>
              <IonIcon icon={colorPalette} size="small" />
              <div style={{ 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                backgroundColor: material.hex,
                border: '2px solid #ddd'
              }} />
            </div>
          )}
        </div>

        {material.vendor && (
          <p style={{ 
            margin: '4px 0', 
            fontSize: '14px', 
            color: 'var(--ion-color-medium)' 
          }}>
            <strong>Vendor:</strong> {material.vendor}
          </p>
        )}

        {(material.minTemp || material.maxTemp) && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px', 
            margin: '4px 0' 
          }}>
            <IonIcon icon={thermometer} size="small" />
            <span style={{ 
              fontSize: '14px', 
              color: 'var(--ion-color-medium)' 
            }}>
              {material.minTemp && material.maxTemp 
                ? `${material.minTemp}°C - ${material.maxTemp}°C`
                : material.minTemp 
                ? `Min: ${material.minTemp}°C`
                : `Max: ${material.maxTemp}°C`
              }
            </span>
          </div>
        )}

        {material.details && (
          <p style={{ 
            margin: '8px 0 0 0', 
            fontSize: '14px', 
            color: 'var(--ion-color-medium)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {material.details}
          </p>
        )}
      </div>
    </div>
  );
};

export default MaterialInventoryCard;
