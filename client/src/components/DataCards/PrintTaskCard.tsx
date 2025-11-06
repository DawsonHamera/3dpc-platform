import { IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';


type JobCardProps = {
    printTask: any;
};

const PrintTaskCard: React.FC<JobCardProps> = ({ printTask }) => {
    return (
        <IonItem>
            <IonToolbar>
                    <IonTitle slot='start'>{printTask.model?.name}</IonTitle>
                    <h2>
                        {new Date(`2025-06-23T${printTask.scheduled_start_time}`).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true,
                        })}
                    </h2>
            </IonToolbar>
        </IonItem>
    );
};

export default PrintTaskCard;