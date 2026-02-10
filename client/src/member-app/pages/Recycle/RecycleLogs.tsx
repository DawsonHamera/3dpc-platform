import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonIcon,
    IonItem,
    IonList,
} from "@ionic/react";
import { shieldHalfOutline } from "ionicons/icons";
import { useGetRecycleLogsQuery } from "../../../shared/features";

const RecycleLogs: React.FC = () => {
    const { data: recycleLogs, isLoading } = useGetRecycleLogsQuery();

    console.log("Recycle Logs:", recycleLogs);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <IonCard>
            <IonCardHeader>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <IonIcon
                        icon={shieldHalfOutline}
                        style={{ fontSize: "1.8rem", marginRight: "0.5rem" }}
                    />
                    <h1 style={{ margin: "0px" }}>Recycling Logs</h1>
                </div>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    {recycleLogs && recycleLogs.length > 0 ? (
                        recycleLogs.slice(0, 9).map((log) => (
                            <IonItem key={log.id}>
                                <p>
                                    {log.created_by.name} added{" "}
                                    <b>{log.amount}</b> to {log.type}
                                </p>
                            </IonItem>
                        ))
                    ) : (
                        <p>No recycling logs available.</p>
                    )}
                    {recycleLogs && recycleLogs.length > 9 && (
                        <IonItem>
                            <p>And more...</p>
                        </IonItem>
                    )}
                </IonList>
            </IonCardContent>
        </IonCard>
    );
};

export default RecycleLogs;
