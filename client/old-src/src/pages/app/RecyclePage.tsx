import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonFooter,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/react";

type RecyclePageProps = {
    className?: string;
};

const RecyclePage: React.FC<RecyclePageProps> = ({ className }) => {
    const [itemsRecycled, setItemsRecycled] = useState<number>(0);

    const handleRecycle = () => {
        setItemsRecycled((n) => n + 1);
    };

    return (
        <IonPage className={className}>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Recycle</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonText color="medium">
                                <h2 style={{ marginTop: 0 }}>Recycle</h2>
                                <p>Simple page template for recycle-related UI.</p>
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow style={{ marginTop: 8 }}>
                        <IonCol size="12">
                            <IonText>
                                <strong>Items recycled:</strong> {itemsRecycled}
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow style={{ marginTop: 12 }}>
                        <IonCol size="12">
                            <IonButton color="success" onClick={handleRecycle} expand="block" aria-label="Recycle an item">
                                Recycle an item
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonText color="medium" style={{ padding: 12, fontSize: 13 }}>
                        Placeholder footer — add navigation or details as needed.
                    </IonText>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default RecyclePage;