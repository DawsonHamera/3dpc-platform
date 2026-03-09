import { IonList, IonItem, IonInput, IonButton, IonSegment, IonSegmentButton, IonText } from "@ionic/react";

const NotificationSettings = ({ id }: { id: number }) => {
    return (
        <div>
            <IonList>
                <IonText><b>Broadcast Notification Message</b></IonText>
                <IonText><p><i>*Not functional yet, testing purposes only</i></p></IonText>

                <IonItem>
                    <IonInput placeholder="custom message" />
                </IonItem>

                <IonSegment>
                    <IonSegmentButton>Going</IonSegmentButton>
                    <IonSegmentButton>Maybe</IonSegmentButton>
                    <IonSegmentButton>Not Going</IonSegmentButton>
                    <IonSegmentButton>Unknown</IonSegmentButton>
                </IonSegment>
                
            </IonList>
        </div>
    );
};

export default NotificationSettings;
