import {
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonSpinner,
} from "@ionic/react";
import { checkmarkCircle, closeCircle } from "ionicons/icons";
import React, { useEffect } from "react";
import { useGetUsersQuery } from "../../../../../shared/features";
import styles from "./widget.module.css";

const UserWidget: React.FC = () => {
    const { data: users, isLoading, error, refetch } = useGetUsersQuery();
    const now = new Date();

    const recentUsers = (users || []).filter((user: any) => {
        const last = new Date(user.lastActive);
        return (
            !isNaN(last.getTime()) &&
            now.getTime() - last.getTime() < 24 * 60 * 60 * 1000
        );
    });

    useEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 5000);

        return () => clearInterval(interval);
    }, [refetch]);

    const getLastActiveStatus = (lastActive: string) => {
        const last = new Date(lastActive);
        if (isNaN(last.getTime())) return "Unknown";

        const diffMs = now.getTime() - last.getTime();
        const diffMin = Math.floor(diffMs / 60000);
        const diffHr = Math.floor(diffMin / 60);

        if (diffMin < 1) return "Active now";
        if (diffMin < 60) return `${diffMin} min ago`;
        if (diffHr < 24) return `${diffHr} hr ago`;
        return "Over a day ago";
    };

    if (isLoading) {
        return (
            <IonCard className={styles.userWidget}>
                <div className={styles.userWidgetLoading}>
                    <IonSpinner name="dots" />
                </div>
            </IonCard>
        );
    }

    if (error) {
        return (
            <IonCard className={styles.userWidget}>
                <div className={styles.userWidgetError}>
                    Error loading users.
                </div>
            </IonCard>
        );
    }

    if (recentUsers.length === 0) {
        return (
            <IonCard className={styles.userWidget}>
                <div className={styles.userWidgetEmpty}>
                    No recent user activity in the last 24 hours.
                </div>
            </IonCard>
        );
    }

    return (
        <IonCard className={styles.userWidget}>
            <IonCardHeader className={styles.userWidgetHeader}>
                <IonCardTitle className={styles.userWidgetTitle}>
                    Active in Last 24 Hours
                </IonCardTitle>
            </IonCardHeader>
            <IonList className={styles.userWidgetList}>
                {recentUsers.map((user: any) => {
                    const isOnline =
                        Date.now() - new Date(user.lastActive).getTime() <=
                        5 * 60 * 1000;

                    return (
                        <IonItem
                            key={user.id}
                            className={styles.userWidgetItem}
                        >
                            <IonAvatar
                                slot="start"
                                className={styles.userWidgetAvatar}
                            >
                                {user.name
                                    .split(" ")
                                    .map((n: string) =>
                                        n.charAt(0).toUpperCase(),
                                    )
                                    .join("")}
                            </IonAvatar>
                            <div className={styles.userWidgetInfo}>
                                <h3 className={styles.userWidgetName}>
                                    {user.name}
                                </h3>
                                <p className={styles.userWidgetStatus}>
                                    {getLastActiveStatus(user.lastActive)}
                                </p>
                            </div>
                            <IonChip
                                color={isOnline ? "success" : "medium"}
                                className={styles.userWidgetChip}
                            >
                                <IonIcon
                                    icon={
                                        isOnline ? checkmarkCircle : closeCircle
                                    }
                                />
                                <IonLabel>
                                    {isOnline ? "Online" : "Offline"}
                                </IonLabel>
                            </IonChip>
                        </IonItem>
                    );
                })}
            </IonList>
        </IonCard>
    );
};

export default UserWidget;
