import React, { useRef } from 'react';
import { IonPage, IonIcon, IonLabel, IonContent, IonButton } from '@ionic/react';
import { shield } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import InventoryWidget from './InventoryWidget';
import RequestsWidget from '../Home/widgets/RequestsWidget';
import UserWidget from '../Home/widgets/UserWidget';
import Card from '../../../components/UI/Card/Card';


const AdminDashboardPage: React.FC = () => {
    const router = useHistory();
    const widgetRefs = useRef<HTMLDivElement[]>([]);

    const addToWidgetRefs = (el: HTMLDivElement | null) => {
        if (el && !widgetRefs.current.includes(el)) {
            widgetRefs.current.push(el);
        }
    };

    return (
        <IonPage>
            <IonContent
                style={{
                    background: 'var(--gradient-primary)',
                }}
            >
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0 20px 0' }}>
                        <IonIcon style={{ marginRight: 10, fontSize: 40, color: 'var(--ion-color-light)' }} icon={shield} />
                        <IonLabel color="light">
                            <h1 style={{ fontWeight: 600, fontSize: 35, display: 'inline' }}>Admin</h1>
                        </IonLabel>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                        <Card title="Admin Dashboard" onClick={() => router.push('/dashboard')}>
                            <p>Manage users, requests, and more.</p>
                        </Card>
                    </div>

                    <InventoryWidget />
                    <UserWidget />
                    <RequestsWidget />
                    <Card title="Manage Processes">
                        <p>View and manage processes.</p>
                        <IonButton
                            style={{ marginTop: 10 }}
                            color="primary"
                            expand='block'
                            onClick={() => router.push('/dashboard/workflow-management')}
                        >
                            Manage Processes
                        </IonButton>
                    </Card>
            </IonContent>

        </IonPage>
    );
};

export default AdminDashboardPage;