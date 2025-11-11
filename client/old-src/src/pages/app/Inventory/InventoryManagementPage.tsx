import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, useIonRouter } from '@ionic/react';
import { apertureOutline, cubeOutline, printOutline } from 'ionicons/icons';
import Header from '../../../components/Header/Header';

const backgroundStyle = {
    height: '100vh',
    backgroundImage: 'url(/images/parallax.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const containerStyle: React.CSSProperties = {
    gap: '10px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
};

const cardStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const iconStyle = {
    fontSize: 60,
};

const titleStyle = {
    fontSize: 30,
    fontWeight: 600,
};

const InventoryManagementPage: React.FC = () => {
    const router = useIonRouter();

    return (
        <IonPage>
            <Header title="Inventory management" />

            <div style={backgroundStyle}>
                <div style={containerStyle}>
                    <div style={cardStyle} onClick={() => router.push("/dashboard/models", "forward")}>
                        <IonIcon icon={cubeOutline} style={iconStyle} />
                        <h4 style={titleStyle}>Models</h4>
                    </div>
                    <div style={cardStyle} onClick={() => router.push("/dashboard/materials", "forward")}>
                        <IonIcon icon={apertureOutline} style={iconStyle} />
                        <h4 style={titleStyle}>Materials</h4>
                    </div>
                    {/* <div style={cardStyle} onClick={() => router.push("/dashboard/printer-jobs", "forward")}>
                        <IonIcon icon={printOutline} style={iconStyle} />
                        <h4 style={titleStyle}>Printers</h4>
                    </div> */}
                </div>
            </div>
        </IonPage>
    );
};

export default InventoryManagementPage;