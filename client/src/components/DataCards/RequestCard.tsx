import React, { useState } from 'react';
import { Request, useRemoveRequestMutation } from '../../features/crud/requestsApi';
import {
  IonBadge,
  IonButton,
  IonLabel,
  IonModal,
  useIonRouter,
} from '@ionic/react';
import Card from '../UI/Card/Card';

interface RequestCardProps {
  request: Request;
  selected?: boolean;
  onClick?: (request: Request) => void;
}

const RequestCard: React.FC<RequestCardProps> = ({ request, selected, onClick }) => {


  if (request == null) {
    return (
      <Card>
        <IonLabel>Request is unavailable or malformed</IonLabel>
      </Card>
    );
  }

  // Minimal card content
  return (
    <>
      <Card highlight={selected} onClick={() => onClick && onClick(request)} style={{ width: '40%'}}>
        <IonBadge color={request.print_task ? 'success' : 'medium'}>
          {request.status?.name.charAt(0).toUpperCase() + request.status?.name.slice(1)}
        </IonBadge>

        <div style={{
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}>
          <img
            src={request.tasks[0].model.imageFile.url}
            alt="Preview"
            style={{
              objectFit: 'contain',
              display: 'block',
            }}
            loading="lazy"
          />
        </div>

        <IonLabel style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <h3
            style={{
              margin: 0,
              fontWeight: 600,
              fontSize: '1rem',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            {request.tasks[0].model.name}
          </h3>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.8rem',
              color: 'var(--ion-text-color-secondary)',
            }}
          >
            {/* <div>
              {request.tasks[0].material_slots.map((slot, i) => (
                <p key={i} style={{ marginRight: '0.2rem' }}>
                  - {slot.material.name}
                </p>
              ))}
            </div> */}
          </div>
        </IonLabel>
      </Card>

      
    </>
  );
};

export default RequestCard;
