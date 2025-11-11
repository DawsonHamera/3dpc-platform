import React from 'react';
import { IonButton, IonIcon, IonChip } from '@ionic/react';
import { pencil, trash, location, person, informationCircle, cube } from 'ionicons/icons';
import { Printer } from '../../../../../types';

interface PrinterInventoryCardProps {
  printer: Printer;
  onEdit: (printer: Printer) => void;
  onDelete: (printerId: number) => void;
}

const PrinterInventoryCard: React.FC<PrinterInventoryCardProps> = ({ 
  printer, 
  onEdit, 
  onDelete 
}) => {
  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'available':
        return 'success';
      case 'printing':
        return 'warning';
      case 'maintenance':
        return 'danger';
      case 'offline':
        return 'medium';
      default:
        return 'medium';
    }
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
          onClick={() => onEdit(printer)}
        >
          <IonIcon icon={pencil} />
        </IonButton>
        <IonButton 
          fill="clear" 
          size="small" 
          color="danger" 
          onClick={() => onDelete(printer.id)}
        >
          <IonIcon icon={trash} />
        </IonButton>
      </div>

      {/* Printer Image */}
      {printer.imageFile && (
        <div style={{ 
          width: '100%', 
          height: '120px', 
          borderRadius: '8px', 
          overflow: 'hidden',
          marginBottom: '12px',
          backgroundColor: '#f5f5f5'
        }}>
          <img 
            src={printer.imageFile.url} 
            alt={printer.name}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
      )}

      {/* Printer Info */}
      <div style={{ marginTop: '12px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '8px'
        }}>
          <h3 style={{ 
            margin: '0', 
            fontSize: '18px', 
            fontWeight: '600' 
          }}>
            {printer.name}
          </h3>
          
          {printer.status && (
            <IonChip 
              color={getStatusColor(printer.status.name)} 
              style={{ fontSize: '12px' }}
            >
              {printer.status.name}
            </IonChip>
          )}
        </div>

        {/* Location */}
        {printer.location && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px',
            marginBottom: '4px'
          }}>
            <IonIcon icon={location} size="small" color="medium" />
            <span style={{ 
              fontSize: '14px', 
              color: 'var(--ion-color-medium)' 
            }}>
              {printer.location}
            </span>
          </div>
        )}

        {/* Owner */}
        {printer.owner && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px',
            marginBottom: '4px'
          }}>
            <IonIcon icon={person} size="small" color="medium" />
            <span style={{ 
              fontSize: '14px', 
              color: 'var(--ion-color-medium)' 
            }}>
              {printer.owner}
            </span>
          </div>
        )}

        {/* Current Material */}
        {printer.material && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px',
            marginBottom: '8px'
          }}>
            <IonIcon icon={cube} size="small" color="medium" />
            <span style={{ 
              fontSize: '14px', 
              color: 'var(--ion-color-medium)' 
            }}>
              <strong>Material:</strong> {printer.material.name}
            </span>
            {printer.material.hex && (
              <div style={{ 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                backgroundColor: printer.material.hex,
                border: '1px solid #ddd'
              }} />
            )}
          </div>
        )}

        {printer.details && (
          <p style={{ 
            margin: '8px 0 0 0', 
            fontSize: '14px', 
            color: 'var(--ion-color-medium)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {printer.details}
          </p>
        )}
      </div>
    </div>
  );
};

export default PrinterInventoryCard;
