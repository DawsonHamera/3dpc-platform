import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonList,
    IonListHeader,
    IonModal,
    IonSearchbar,
    IonText,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { timeAgo } from "../../../../shared/utility/timeago";
import { useGetActivityLogsQuery } from "../../../features/activity/activityApi";
import styles from "./ActivityWidget.module.css";
import { filter, filterCircleOutline } from "ionicons/icons";

const ActivityWidget: React.FC = () => {
    const [filterText, setFilterText] = useState("");
    const {
        data: activities,
        isLoading,
        isError,
        refetch,
    } = useGetActivityLogsQuery({ limit: 20, filter: filterText });

    const [activeActivity, setActiveActivity] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 5000);

        return () => clearInterval(interval);
    }, [refetch]);

    const customMessage = (activity: any, user?: any) => {
        switch (activity.action_type) {
            case "login":
                return `${user?.name} logged in`;
            case "register":
                return `${user?.name} registered a new account`;
            case "workstation_login":
                return `Workstation logged in`;
            default:
                return activity.details?.message || "Performed an action";
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <IonSearchbar
                    searchIcon={filter}
                    placeholder="Filter activity..."
                    value={filterText}
                    onIonInput={(e) => setFilterText(e.detail.value!)}
                />
            </div>
            <div className={styles.listContainer}>
                <IonList className={styles.list}>
                    {isLoading ? (
                        <div>Loading activity...</div>
                    ) : isError ? (
                        <div>Error loading activity</div>
                    ) : (
                        <>
                            {activities?.map((activity) => (
                                <IonItem
                                    key={activity.id}
                                    onClick={() => setActiveActivity(activity)}
                                >
                                    <strong>
                                        {customMessage(activity, activity.user)}
                                    </strong>
                                    <IonText slot="end" color="medium">
                                        {timeAgo(activity.created_at!)}
                                    </IonText>
                                </IonItem>
                            ))}
                        </>
                    )}
                </IonList>
            </div>
            <IonModal
                className={styles.modal}
                isOpen={activeActivity != null}
                onDidDismiss={() => setActiveActivity(null)}
            >
                <IonList>
                    {activeActivity?.details && (
                        <>
                            <IonListHeader color="primary">
                                {activeActivity.action_type}
                            </IonListHeader>
                            <IonItem>{activeActivity.details.message}</IonItem>
                            <IonItem>
                                <strong>Timestamp:</strong>{" "}
                                <IonText slot="end">
                                    {new Date(
                                        activeActivity.created_at,
                                    ).toLocaleString()}
                                </IonText>
                            </IonItem>
                            {Object.entries(activeActivity.details)
                                .filter(([key]) => key !== "message")
                                .map(([key, value]) => (
                                    <IonItem key={key}>
                                        <strong>{key}:</strong>
                                        <IonText slot="end">
                                            {String(value)}
                                        </IonText>
                                    </IonItem>
                                ))}
                        </>
                    )}
                </IonList>
            </IonModal>
        </div>
    );
};

export default ActivityWidget;
