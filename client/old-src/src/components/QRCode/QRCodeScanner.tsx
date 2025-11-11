import React, { useState } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';
import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton as IonCloseButton, IonIcon, IonCard } from '@ionic/react';
import { qrCode } from 'ionicons/icons';

interface QRCodeScannerProps {
    onScan: (text: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
    const [showModal, setShowModal] = useState(false);

    const handleScan = async () => {
        const codeReader = new BrowserQRCodeReader();
        setShowModal(true);

        try {
            const result = await codeReader.decodeOnceFromVideoDevice(undefined, 'video');
            onScan(result.getText());
            setShowModal(false);
        } catch (err) {
            console.error(err);
            setShowModal(false);
        }
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height:'80vh'
            }}>

                    <IonButton style={{fontSize: 20}} className='center' onClick={handleScan}>
                        Scan QR Code
                    </IonButton>
            </div>
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Scan QR Code</IonTitle>
                        <IonButtons slot="end">
                            <IonCloseButton onClick={() => setShowModal(false)}>Close</IonCloseButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    background: 'black'
                }}>
                    <video
                        id="video"
                        autoPlay
                        style={{
                            width: '100vw',
                            height: '100vh',
                            objectFit: 'cover'
                        }}
                    ></video>
                </div>
            </IonModal>
        </div>
    );
};

export default QRCodeScanner;
