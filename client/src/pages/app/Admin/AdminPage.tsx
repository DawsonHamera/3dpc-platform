import { IonButton, IonContent, IonPage, IonRefresher, IonRefresherContent, useIonRouter } from "@ionic/react";
import Header from "../../../components/Header/Header";
import UserWidget from "./widgets/UserWidget";

const AdminPage: React.FC = () => {

     const router = useIonRouter();

    return (
        <IonPage>
            <Header title="Admin" />
            <IonContent>
                <IonButton onClick={() => router.push("/dashboard/admin/points")}>Edit Points</IonButton>
                <UserWidget />
            </IonContent>
        </IonPage>
    );
};

export default AdminPage;
