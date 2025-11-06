import React from 'react';
import { IonButton, IonIcon, IonChip } from '@ionic/react';
import { pencil, trash, time, scale, cube } from 'ionicons/icons';
import { Model } from '../../../../../types';

interface ModelInventoryCardProps {
  model: Model;
  onEdit: (model: Model) => void;
  onDelete: (modelId: number) => void;
}

const ModelInventoryCard: React.FC<ModelInventoryCardProps> = ({ 
  model, 
  onEdit, 
  onDelete 
}) => {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

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
          onClick={() => onEdit(model)}
        >
          <IonIcon icon={pencil} />
        </IonButton>
        <IonButton 
          fill="clear" 
          size="small" 
          color="danger" 
          onClick={() => onDelete(model.id)}
        >
          <IonIcon icon={trash} />
        </IonButton>
      </div>

      {/* Model Image/Preview */}
      {model.image && (
        <div style={{ 
          width: '100%', 
          height: '120px', 
          borderRadius: '8px', 
          overflow: 'hidden',
          marginBottom: '12px',
          backgroundColor: '#f5f5f5'
        }}>
          <img 
            src={model.image.url} 
            alt={model.name}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
      )}

      {/* Model Info */}
      <div style={{ marginTop: '12px' }}>
        <h3 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '18px', 
          fontWeight: '600' 
        }}>
          {model.name}
        </h3>

        {/* Tags */}
        {model.tags && model.tags.length > 0 && (
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '4px', 
            marginBottom: '8px' 
          }}>
            {model.tags.slice(0, 3).map((tag, index) => (
              <IonChip key={index} color="secondary" style={{ fontSize: '11px' }}>
                {tag}
              </IonChip>
            ))}
            {model.tags.length > 3 && (
              <IonChip color="light" style={{ fontSize: '11px' }}>
                +{model.tags.length - 3}
              </IonChip>
            )}
          </div>
        )}

        {/* Estimates */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          marginBottom: '8px' 
        }}>
          {model.estimatedDuration && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px' 
            }}>
              <IonIcon icon={time} size="small" color="medium" />
              <span style={{ 
                fontSize: '14px', 
                color: 'var(--ion-color-medium)' 
              }}>
                {formatDuration(model.estimatedDuration)}
              </span>
            </div>
          )}
          
          {model.estimatedFilament && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px' 
            }}>
              <IonIcon icon={scale} size="small" color="medium" />
              <span style={{ 
                fontSize: '14px', 
                color: 'var(--ion-color-medium)' 
              }}>
                {model.estimatedFilament}g
              </span>
            </div>
          )}
        </div>

        {/* Material Slots */}
        {model.materialSlots && model.materialSlots.length > 0 && (
          <div style={{ marginBottom: '8px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              marginBottom: '4px'
            }}>
              <IonIcon icon={cube} size="small" color="medium" />
              <span style={{ 
                fontSize: '12px', 
                color: 'var(--ion-color-medium)',
                fontWeight: '600'
              }}>
                Material Slots:
              </span>
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: 'var(--ion-color-medium)' 
            }}>
              {model.materialSlots.map(slot => slot.slot).join(', ')}
            </div>
          </div>
        )}

        {model.description && (
          <p style={{ 
            margin: '8px 0 0 0', 
            fontSize: '14px', 
            color: 'var(--ion-color-medium)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {model.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ModelInventoryCard;
