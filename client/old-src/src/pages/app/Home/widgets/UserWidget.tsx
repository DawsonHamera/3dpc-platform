import React from "react";
import { IonChip, IonIcon, IonLabel, IonSpinner } from "@ionic/react";
import { checkmarkCircle, closeCircle } from "ionicons/icons";
import Card from "../../../../components/UI/Card/Card";
import { useGetUsersQuery } from "../../../../features/crud/users/usersApi";

const UserWidget: React.FC = () => {
    const { data: users, isLoading, error } = useGetUsersQuery();
    console.log(users)
    const now = new Date();

    const recentUsers = (users || []).filter((user) => {
        const last = new Date(user.lastActive);
        return !isNaN(last.getTime()) && (now.getTime() - last.getTime() < 24 * 60 * 60 * 1000);
    });

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

    if (isLoading) return <IonSpinner name="dots" />;
    if (error) return <p>Error loading users.</p>;
    if (recentUsers.length === 0) return <p>No recent user activity.</p>;

    return (
        <Card title="User Activity">
            {recentUsers.map((user) => {
                const isOnline =
                    Date.now() - new Date(user.lastActive).getTime() <= 5 * 60 * 1000;

                return (
                    <div
                        key={user.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                            borderBottom: "1px solid #ccc",
                        }}
                    >
                        <div>
                            <h3 style={{ margin: 0 }}>{user.name}</h3>
                            <p style={{ margin: "4px 0", fontSize: "0.9em", color: "#666" }}>
                                {getLastActiveStatus(user.lastActive)}
                            </p>
                        </div>
                        <IonChip color={isOnline ? "success" : "medium"}>
                            <IonIcon icon={isOnline ? checkmarkCircle : closeCircle} />
                            <IonLabel>{isOnline ? "Online" : "Offline"}</IonLabel>
                        </IonChip>
                    </div>
                );
            })}
        </Card>
    );
};

export default UserWidget;
