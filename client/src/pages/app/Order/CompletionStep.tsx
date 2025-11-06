import { IonButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { Link } from "react-router-dom";

type Props = {
    id: number
}

const CompletionStep: React.FC<Props> = ({id}) => {

    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(`${window.location.origin}/dashboard/requests/${id}`);
          console.log("Copied!");
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };
      

    return (
        <IonPage>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <div style={{textAlign: 'center'}}>
                    <h4>Request Submited</h4>
                    <p>Your order will be reviewed within 24 business hours!</p>
                    <p>Go <Link to={`/requests/${id}`}>here</Link> to check on it's progress, or copy the link somewhere safe for later.</p>
                    <IonButton onClick={() => handleCopy()}>Copy</IonButton>
                </div>
            </div>
        </IonPage>
    )
}

export default CompletionStep;