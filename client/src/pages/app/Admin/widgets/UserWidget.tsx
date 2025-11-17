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

const UserWidget: React.FC = () => {
    const { data: users, isLoading, error, refetch } = useGetUsersQuery();
    const now = new Date();

    const recentUsers = (users || []).filter((user) => {
        const last = new Date(user.last_active);
        return !isNaN(last.getTime()) && (now.getTime() - last.getTime() < 24 * 60 * 60 * 1000);
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

    if (isLoading) return <IonSpinner name="dots" />;
    if (error) return <p>Error loading users.</p>;
    if (recentUsers.length === 0) return <p>No recent user activity.</p>;

    return (
        <IonCard style={{ padding: "16px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <IonCardHeader>
            <IonCardTitle style={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>
                User Activity
            </IonCardTitle>
            </IonCardHeader>
            <IonList>
            {recentUsers.map((user) => {
                const isOnline =
                Date.now() - new Date(user.last_active).getTime() <= 5 * 60 * 1000;

                return (
                <IonItem
                    key={user.id}
                    lines="none"
                    style={{
                    borderBottom: "1px solid #ddd",
                    padding: "12px 8px",
                    alignItems: "center",
                    }}
                >
                    <IonAvatar
                    slot="start"
                    style={{
                        backgroundColor: "#3880ff",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "1em",
                    }}
                    >
                    {user.name
                        .split(" ")
                        .map((n) => n.charAt(0).toUpperCase())
                        .join("")}
                    </IonAvatar>
                    <div style={{ flex: 1, marginLeft: "12px" }}>
                    <h3
                        style={{
                        margin: 0,
                        fontSize: "1.1em",
                        fontWeight: "600",
                        color: "#333",
                        }}
                    >
                        {user.name}
                    </h3>
                    <p
                        style={{
                        margin: "4px 0",
                        fontSize: "0.9em",
                        color: "#666",
                        }}
                    >
                        {getLastActiveStatus(user.last_active)}
                    </p>
                    </div>
                    <IonChip
                    color={isOnline ? "success" : "medium"}
                    style={{
                        padding: "4px 8px",
                        fontSize: "0.85em",
                        fontWeight: "500",
                    }}
                    >
                    <IonIcon
                        icon={isOnline ? checkmarkCircle : closeCircle}
                        style={{ marginRight: "4px" }}
                    />
                    <IonLabel>{isOnline ? "Online" : "Offline"}</IonLabel>
                    </IonChip>
                </IonItem>
                );
            })}
            </IonList>
        </IonCard>
    );
};

export default UserWidget;
