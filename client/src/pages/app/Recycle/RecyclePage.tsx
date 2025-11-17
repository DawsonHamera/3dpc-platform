import { IonContent, IonIcon, IonPage } from "@ionic/react";
import Header from "../../../components/Header/Header";
import { leaf } from "ionicons/icons";

const RecyclePage: React.FC = () => {
    return (
        <IonPage>
            <Header title="Recycle" />
            <IonContent>
                <div
                    style={{
                        padding: 50,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            width: "80%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <IonIcon icon={leaf} color="success" size="large" />
                        <h4>Work in progress</h4>
                        <p>When complete, you'll be able to</p>
                        <ul style={{ textAlign: "left", maxWidth: 400 }}>
                            <li>Log your recycling activities</li>
                            <li>Track your impact over time</li>
                            <li>Earn points for recycling</li>
                            <li>View leaderboards to see how you compare</li>
                        </ul>
                        <p>Stay tuned for updates!</p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default RecyclePage;
