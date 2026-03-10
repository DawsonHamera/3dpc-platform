// LeaderboardWidget.tsx
import { IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import Card from "../../../../../shared/components/Card/Card";
import {
    selectCurrentUser,
    useGetUserPointsQuery,
} from "../../../../../shared/features";
import styles from "./LeaderBoardWidget.module.css";

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
                                className={`${styles.item} ${
                                    isUser(user.name)
                                        ? styles.itemCurrent
                                        : styles.itemDefault
                                }`}
                            >
                                <div className={styles.itemContent}>
                                    <IonLabel
                                        className={
                                            isUser(user.name)
                                                ? styles.labelCurrent
                                                : styles.labelDefault
                                        }
                                    >
                                        {user.name}
                                    </IonLabel>
                                    <IonLabel
                                        className={
                                            isUser(user.name)
                                                ? styles.pointsLabelCurrent
                                                : styles.pointsLabel
                                        }
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
