import React, { useEffect } from "react";
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonIcon,
    IonLabel,
    IonList,
    IonItem,
    IonAvatar,
    IonSpinner,
} from "@ionic/react";
import { checkmarkCircle, closeCircle } from "ionicons/icons";
import { useGetUsersQuery } from "../../../../features/users/usersApi";
import "./UserWidget.css";

const UserWidget: React.FC = () => {
    const { data: users, isLoading, error, refetch } = useGetUsersQuery();
    const now = new Date();

    const recentUsers = (users || []).filter((user) => {
        const last = new Date(user.last_active);
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

    const getLastActiveStatus = (last_active: string) => {
        const last = new Date(last_active);
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
            <IonCard className="user-widget">
                <div className="user-widget-loading">
                    <IonSpinner name="dots" />
                </div>
            </IonCard>
        );
    }

    if (error) {
        return (
            <IonCard className="user-widget">
                <div className="user-widget-error">Error loading users.</div>
            </IonCard>
        );
    }

    if (recentUsers.length === 0) {
        return (
            <IonCard className="user-widget">
                <div className="user-widget-empty">
                    No recent user activity in the last 24 hours.
                </div>
            </IonCard>
        );
    }

    return (
        <IonCard className="user-widget">
            <IonCardHeader className="user-widget-header">
                <IonCardTitle className="user-widget-title">
                    Active in Last 24 Hours
                </IonCardTitle>
            </IonCardHeader>
            <IonList className="user-widget-list">
                {recentUsers.map((user) => {
                    const isOnline =
                        Date.now() - new Date(user.last_active).getTime() <=
                        5 * 60 * 1000;

                    return (
                        <IonItem key={user.id} className="user-widget-item">
                            <IonAvatar
                                slot="start"
                                className="user-widget-avatar"
                            >
                                {user.name
                                    .split(" ")
                                    .map((n) => n.charAt(0).toUpperCase())
                                    .join("")}
                            </IonAvatar>
                            <div className="user-widget-info">
                                <h3 className="user-widget-name">
                                    {user.name}
                                </h3>
                                <p className="user-widget-status">
                                    {getLastActiveStatus(user.last_active)}
                                </p>
                            </div>
                            <IonChip
                                color={isOnline ? "success" : "medium"}
                                className="user-widget-chip"
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
