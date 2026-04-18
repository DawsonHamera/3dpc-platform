import React from "react";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonPage,
    IonText,
    useIonRouter,
} from "@ionic/react";
import { ShopHeader } from "../../shared";
import styles from "./AdminAccessDenied.module.css";

const AdminAccessDenied: React.FC = () => {
    const router = useIonRouter();

    return (
        <IonPage>
            <ShopHeader
                title="Access Denied"
                backArrow
                breadcrumbs={[
                    { label: "Shop", path: "/shop" },
                    { label: "Access Denied" },
                ]}
            />
            <IonContent className={styles.content}>
                <div className={styles.container}>
                    <IonCard className={styles.card}>
                        <IonCardHeader>
                            <IonCardTitle className={styles.title}>
                                Admin access required
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonText>
                                <p className={styles.description}>
                                    You do not have permission to view this
                                    management page.
                                </p>
                            </IonText>
                            <IonButton
                                expand="block"
                                color="primary"
                                onClick={() => router.push("/shop", "root")}
                            >
                                Return to shop
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AdminAccessDenied;
