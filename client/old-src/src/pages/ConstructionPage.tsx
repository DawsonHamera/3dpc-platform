import { IonPage } from "@ionic/react";
import React from "react";

const ConstructionPage: React.FC = () => (
    <IonPage>
    <div
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#f5f5f5",
            color: "#333",
            fontFamily: "sans-serif",
            textAlign: "center",
            padding: "2rem",
        }}
    >
        <h1>🚧 Site Under Construction</h1>
        <p>
            We're currently updating our site for a fresh new look.<br />
            Please check back in 5-10 minutes!
        </p>
        <div style={{ marginTop: "2rem", maxWidth: 400 }}>
            <h2>How to update the app (PWA):</h2>
            <ol style={{ textAlign: "left" }}>
                <li>Open the app.</li>
                <li>Wait a few seconds for updates to load.</li>
                <li>Close the app completely.</li>
                <li>Reopen the app to get the latest version.</li>
            </ol>
            <p style={{ fontSize: "0.9em", color: "#666" }}>
                This ensures you get the newest features and fixes!
            </p>
            <p style={{ fontSize: "0.9em", color: "#666" }}>
                If you encounter any issues, please contact hamerad27@puhsd.k12.ca.us.
            </p>
        </div>
    </div>
    </IonPage>
);

export default ConstructionPage;