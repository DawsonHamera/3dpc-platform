import React from "react";
import { IonButton, IonText } from "@ionic/react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../features/auth/authSlice";
import { useOneSignal } from "../../../../services/OneSignalProvider";

const SubscribeHero: React.FC = () => {
    const user = useSelector(selectCurrentUser)

    const { subscribe, unsubscribe, isSubscribed, loading } = useOneSignal();


    const handleSubscribe = async () => {
        try {
            if (!user?.id) throw new Error("User ID is not available. Try signing out and back in.");
            console.log("Subscribing user from hero with ID:", user.id);
            await subscribe(user);
            alert("Subscribed successfully!");
        } catch (error) {
            alert("Subscription failed. Please try again.");
        }
    };

    return (
        <div
            style={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            background: "linear-gradient(-45deg, #111 50%, var(--ion-color-primary) 100%)",
            }}
        >
            <img
            src="images/logo-transparent.png"
            alt="3D Printer"
            style={{
                position: "absolute",
                top: 80,
                left: "50%",
                transform: "translate(-50%)",
                width: "100%",
                objectFit: "cover",
                zIndex: 1,
            }}
            />
            <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem",
            }}
            >
            {/* Title at top */}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <IonText color="light">
                <h1
                    style={{
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    textAlign: "center",
                    letterSpacing: "2px",
                    color: "#fff",
                    textShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    marginTop: 0,
                    }}
                >
                    3D Printing Club
                </h1>
                </IonText>
            </div>
            {/* Content at bottom */}
            <div
                style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: "2rem",
                }}
            >
                <IonText>
                <h2
                    style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                    color: "var(--ion-color-primary)",
                    textShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    }}
                >
                    You haven't subscribed!
                </h2>
                </IonText>
                <IonText>
                <p
                    style={{
                    fontSize: "1.2rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                    maxWidth: "600px",
                    color: "#fff",
                    textShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    }}
                >
                    Don't miss out on important updates, club events, and exclusive 3D printing tips!
                    <br />
                    <strong>Subscribe now</strong> to become part of the community and stay in the loop.
                </p>
                </IonText>
                <IonButton
                expand="block"
                size="large"
                color="light"
                style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    maxWidth: "320px",
                    marginBottom: "2rem",
                    color: "#3880ff",
                }}
                onClick={() => handleSubscribe()}
                >
                Subscribe Now
                </IonButton>
            </div>
            </div>
        </div>
    );
}

export default SubscribeHero;