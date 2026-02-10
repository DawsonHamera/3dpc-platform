// LeaderboardWidget.tsx
import { IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import Card from "../../../../shared/components/Card/Card";
import {
    selectCurrentUser,
    useGetUserPointsQuery,
} from "../../../../shared/features";

export const LeaderboardWidget: React.FC = () => {
    const { data: users, isLoading } = useGetUserPointsQuery();

    const currentUser = useSelector(selectCurrentUser);

    const isUser = (name: String) => {
        if (!currentUser) return false;
        return name === currentUser.name;
    };

    if (!users) return null;

    return (
        <Card title="Leaderboard">
            <IonList lines="none">
                {users &&
                    [...users]
                        .sort((a, b) => b.points - a.points)
                        .splice(0, 6)
                        .map((user, idx) => (
                            <IonItem
                                key={user.name}
                                style={{
                                    borderRadius: 8,
                                    background: isUser(user.name)
                                        ? "rgba(var(--ion-color-primary-rgb), 0.13)"
                                        : "rgba(var(--ion-color-light-rgb), 1)",
                                    marginBottom: 10,
                                    boxShadow: isUser(user.name)
                                        ? "0 2px 8px rgba(var(--ion-color-primary-rgb), 0.13)"
                                        : undefined,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "100%",
                                    }}
                                >
                                    <IonLabel
                                        style={{
                                            fontWeight: isUser(user.name)
                                                ? 700
                                                : 500,
                                            color: isUser(user.name)
                                                ? "var(--ion-color-primary)"
                                                : undefined,
                                        }}
                                    >
                                        {user.name}
                                    </IonLabel>
                                    <IonLabel
                                        style={{
                                            fontWeight: isUser(user.name)
                                                ? 700
                                                : 600,
                                            color: "var(--ion-color-primary)",
                                        }}
                                    >
                                        {user.points}
                                    </IonLabel>
                                </div>
                            </IonItem>
                        ))}
            </IonList>
        </Card>
    );
};

export default LeaderboardWidget;
