import { IonButton, IonIcon, IonText, IonToast } from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useAuth } from "../../../../shared/hooks/useAuth";
import { useOneSignal } from "../../../../shared/services/OneSignalProvider";

const SubscribeHero: React.FC = () => {
    const { user } = useAuth();
    const { subscribe } = useOneSignal();
    const [toast, setToast] = useState<{
        message: string;
        color: "primary" | "danger" | "success";
        duration: number;
    }>({ message: "", color: "primary", duration: 2000 });

    const handleSubscribe = async () => {
        try {
            if (!user?.id)
                throw new Error(
                    "User ID is not available. Try signing out and back in."
                );
            await subscribe(user);
            setToast({
                message: "You have been subscribed to the 3D Printing Club!",
                color: "success",
                duration: 3000,
            });
        } catch (error) {
            setToast({
                message: "Subscription failed. Please try again later.",
                color: "danger",
                duration: 3000,
            });
        }
    };

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--ion-color-primary)",
                padding: "3rem 1.5rem",
            }}
        >
            <IonIcon
                icon={notificationsOutline}
                style={{
                    fontSize: "4rem",
                    color: "var(--ion-color-light)",
                    marginBottom: "1.5rem",
                }}
            />

            <IonText color="light">
                <h2
                    style={{
                        fontSize: "1.75rem",
                        fontWeight: "700",
                        marginBottom: "0.75rem",
                        textAlign: "center",
                    }}
                >
                    Stay in the Loop
                </h2>
            </IonText>

            <IonText color="light">
                <p
                    style={{
                        fontSize: "1rem",
                        marginBottom: "2rem",
                        textAlign: "center",
                        maxWidth: "500px",
                        opacity: 0.9,
                    }}
                >
                    Get notified about club events, project updates, and
                    important announcements.
                </p>
            </IonText>

            <IonButton
                expand="block"
                size="large"
                color="light"
                style={{
                    fontWeight: "600",
                    maxWidth: "280px",
                    width: "100%",
                }}
                onClick={handleSubscribe}
            >
                Enable Notifications
            </IonButton>

            <IonToast
                isOpen={toast.message !== ""}
                onDidDismiss={() =>
                    setToast({ message: "", color: "primary", duration: 2000 })
                }
                message={toast.message}
                color={toast.color}
                duration={toast.duration}
            />
        </div>
    );
};

export default SubscribeHero;
