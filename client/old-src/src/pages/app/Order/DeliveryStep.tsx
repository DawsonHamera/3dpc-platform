import { IonButton, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { StepProps } from "./OrderPage";
import { arrowBack } from "ionicons/icons";
import Header from "../../../components/Header/Header";

const DeliveryStep: React.FC<StepProps> = ({ data, updateData, nextStep, previousStep, handleSubmit }) => {
    return (
        <IonPage>
            <Header title="Delivery Information" type='back' onBack={previousStep} />
            <IonContent>
                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput
                        type="text"
                        placeholder="Enter your name"
                        value={data.submitted_by}
                        onIonInput={(e) => updateData('submitted_by', e.detail.value!)}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Contact Email</IonLabel>
                    <IonInput
                        type="email"
                        placeholder="(ex. john@doe.com)"
                        value={data.email}
                        onIonInput={(e) => updateData('email', e.detail.value!)}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Additional Comments</IonLabel>
                    <IonInput
                        type="text"
                        placeholder="Anything you would like to add?"
                        value={data.comments}
                        onIonInput={(e) => updateData('comments', e.detail.value!)}
                    />
                </IonItem>
                <IonItem>
                    <div style={{ marginTop: '20px' }}>
                        <b>Do you need this item by a certain date? </b>
                        <p>If so select it below and we will try our best to get it to you by then.</p>
                    </div>
                </IonItem>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <IonDatetime presentation="date"value={data.date} onIonChange={(e) => updateData('requested_date', e.detail.value!)}/>
                </div>
                <IonButton expand="full" onClick={handleSubmit}>Complete</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default DeliveryStep;