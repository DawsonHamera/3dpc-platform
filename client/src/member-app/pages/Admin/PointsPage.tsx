import {
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonPage,
    IonProgressBar,
    IonRow,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTextarea,
    IonTitle,
    IonToast,
    IonToolbar,
} from "@ionic/react";
import { gsap } from "gsap";
import {
    addCircleOutline,
    calendarOutline,
    closeOutline,
    createOutline,
    documentTextOutline,
    listOutline,
    medalOutline,
    personOutline,
    removeCircleOutline,
    saveOutline,
    searchOutline,
    timeOutline,
    trophyOutline,
} from "ionicons/icons";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "../../../shared/components/Header/Header";
import {
    useGetUserPointsLogsQuery,
    useGetUsersQuery,
    User,
    useUpdateUserPointsMutation,
} from "../../../shared/features";

const POINT_REASONS = [
    { value: "meeting", label: "Meeting", icon: personOutline },
    { value: "workshop", label: "Workshop", icon: documentTextOutline },
    { value: "workday", label: "Work Day", icon: calendarOutline },
    { value: "fundraiser", label: "Fundraiser", icon: trophyOutline },
    { value: "other", label: "Other", icon: listOutline },
];

const PointsPage: React.FC = () => {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const { data: users, isLoading, isError } = useGetUsersQuery();
    const [updateUserPoints, { isLoading: isUpdating }] =
        useUpdateUserPointsMutation();

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [pointsToAdd, setPointsToAdd] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [reasoning, setReasoning] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [searchText, setSearchText] = useState("");
    const [sortBy, setSortBy] = useState<"points" | "name">("points");

    const [toast, setToast] = useState<{
        show: boolean;
        message: string;
        color?: string;
    }>({ show: false, message: "" });

    const { data: userPointsLogs, isLoading: isLoadingLogs } =
        useGetUserPointsLogsQuery(selectedUser?.id ?? 0, {
            skip: !selectedUser,
        });

    // Initialize selected user with top scorer
    useEffect(() => {
        if (users && users.length > 0 && !selectedUser) {
            const sortedUsers = [...users].sort((a, b) => b.points - a.points);
            setSelectedUser(sortedUsers[0]);
        }
    }, [users, selectedUser]);

    // Scroll to top when user changes with GSAP animation
    useEffect(() => {
        if (selectedUser && contentRef.current) {
            contentRef.current.getScrollElement().then((scrollElement) => {
                gsap.to(scrollElement, {
                    scrollTop: 0,
                    duration: 0.6,
                    ease: "power2.inOut",
                });
            });
        }
    }, [selectedUser]);

    // Sorted and filtered users
    const sortedUsers = useMemo(() => {
        if (!users) return [];

        let filtered = [...users];

        // Filter by search
        if (searchText.trim()) {
            const searchLower = searchText.toLowerCase();
            filtered = filtered.filter((user) =>
                user.name.toLowerCase().includes(searchLower),
            );
        }

        // Sort
        filtered.sort((a, b) => {
            if (sortBy === "points") {
                return b.points - a.points;
            }
            return a.name.localeCompare(b.name);
        });

        return filtered;
    }, [users, searchText, sortBy]);

    // Sorted logs
    const sortedLogs = useMemo(() => {
        if (!userPointsLogs) return [];
        return [...userPointsLogs].sort(
            (a, b) =>
                new Date(b.logged_at).getTime() -
                new Date(a.logged_at).getTime(),
        );
    }, [userPointsLogs]);

    // Get user rank
    const getUserRank = (userId: number): number => {
        if (!users) return 0;
        const sorted = [...users].sort((a, b) => b.points - a.points);
        return sorted.findIndex((u) => u.id === userId) + 1;
    };

    const getRankColor = (rank: number): string => {
        if (rank === 1) return "warning";
        if (rank === 2) return "medium";
        if (rank === 3) return "tertiary";
        return "primary";
    };

    const handleUpdatePoints = async () => {
        if (!selectedUser || !reasoning) {
            setToast({
                show: true,
                message: "Please select a reason",
                color: "warning",
            });
            return;
        }

        try {
            await updateUserPoints({
                id: selectedUser.id,
                points: pointsToAdd,
                reason: reasoning,
                details: details || "",
            }).unwrap();

            setIsEditModalOpen(false);
            setPointsToAdd(0);
            setReasoning("");
            setDetails("");
            setToast({
                show: true,
                message: `Successfully ${
                    pointsToAdd > 0 ? "added" : "removed"
                } ${Math.abs(pointsToAdd)} points!`,
                color: "success",
            });
        } catch (error) {
            setToast({
                show: true,
                message: "Failed to update points",
                color: "danger",
            });
        }
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);

        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
        if (diffMins < 10080) return `${Math.floor(diffMins / 1440)}d ago`;

        return date.toLocaleDateString();
    };

    if (isLoading || !users) {
        return (
            <IonPage>
                <Header title="Points Management" type="back" />
                <IonContent className="ion-padding">
                    <IonProgressBar type="indeterminate" />
                </IonContent>
            </IonPage>
        );
    }

    if (isError) {
        return (
            <IonPage>
                <Header title="Points Management" type="back" />
                <IonContent ref={contentRef} className="ion-padding">
                    <IonCard color="danger">
                        <IonCardContent>
                            <IonText color="light">
                                Error loading users. Please try again.
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <Header title="Points Management" type="back" />
            <IonContent ref={contentRef} className="ion-padding">
                {/* Selected User Card */}
                {selectedUser && (
                    <IonCard>
                        <IonCardHeader>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <IonCardTitle>{selectedUser.name}</IonCardTitle>
                                <IonBadge
                                    color={getRankColor(
                                        getUserRank(selectedUser.id),
                                    )}
                                >
                                    <IonIcon
                                        icon={medalOutline}
                                        style={{ marginRight: 4 }}
                                    />
                                    #{getUserRank(selectedUser.id)}
                                </IonBadge>
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size="12" sizeMd="6">
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "20px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "160px",
                                                    height: "160px",
                                                }}
                                            >
                                                <CircularProgressbar
                                                    value={selectedUser.points}
                                                    maxValue={Math.max(
                                                        selectedUser.points,
                                                        100,
                                                    )}
                                                    text={`${selectedUser.points}`}
                                                    styles={buildStyles({
                                                        textSize: "24px",
                                                        pathColor:
                                                            "var(--ion-color-primary)",
                                                        textColor:
                                                            "var(--ion-color-primary)",
                                                        trailColor:
                                                            "var(--ion-color-light)",
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </IonCol>
                                    <IonCol size="12" sizeMd="6">
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "12px",
                                                paddingTop: "20px",
                                            }}
                                        >
                                            <IonButton
                                                expand="block"
                                                onClick={() =>
                                                    setIsEditModalOpen(true)
                                                }
                                            >
                                                <IonIcon
                                                    icon={createOutline}
                                                    slot="start"
                                                />
                                                Edit Points
                                            </IonButton>
                                            <IonButton
                                                expand="block"
                                                fill="outline"
                                                onClick={() =>
                                                    setIsHistoryModalOpen(true)
                                                }
                                            >
                                                <IonIcon
                                                    icon={timeOutline}
                                                    slot="start"
                                                />
                                                View History
                                            </IonButton>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                )}

                {/* Search and Sort */}
                <IonCard>
                    <IonCardContent>
                        <IonSearchbar
                            value={searchText}
                            onIonInput={(e) => setSearchText(e.detail.value!)}
                            placeholder="Search users..."
                            animated
                        />
                        <IonSegment
                            value={sortBy}
                            onIonChange={(e) =>
                                setSortBy(e.detail.value as "points" | "name")
                            }
                        >
                            <IonSegmentButton value="points">
                                <IonLabel>By Points</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="name">
                                <IonLabel>By Name</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                {/* Users List */}
                <IonList>
                    {sortedUsers.length === 0 ? (
                        <IonCard>
                            <IonCardContent className="ion-text-center">
                                <IonIcon
                                    icon={searchOutline}
                                    style={{ fontSize: "64px", opacity: 0.3 }}
                                />
                                <IonText color="medium">
                                    <p>No users found</p>
                                </IonText>
                            </IonCardContent>
                        </IonCard>
                    ) : (
                        sortedUsers.map((user, index) => {
                            const rank = getUserRank(user.id);
                            const isSelected = selectedUser?.id === user.id;

                            return (
                                <IonItem
                                    key={user.id}
                                    button
                                    onClick={() => setSelectedUser(user)}
                                    color={isSelected ? "light" : undefined}
                                    lines="full"
                                >
                                    <IonBadge
                                        slot="start"
                                        color={getRankColor(rank)}
                                        style={{ minWidth: "32px" }}
                                    >
                                        {rank}
                                    </IonBadge>
                                    <IonLabel>
                                        <h2>
                                            <strong>{user.name}</strong>
                                        </h2>
                                        <p>{user.email}</p>
                                    </IonLabel>
                                    <IonChip slot="end" color="primary">
                                        <IonIcon icon={trophyOutline} />
                                        <IonLabel>{user.points}</IonLabel>
                                    </IonChip>
                                </IonItem>
                            );
                        })
                    )}
                </IonList>

                {/* Edit Points Modal */}
                <IonModal
                    isOpen={isEditModalOpen}
                    onDidDismiss={() => {
                        setIsEditModalOpen(false);
                        setPointsToAdd(0);
                        setReasoning("");
                        setDetails("");
                    }}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Edit Points</IonTitle>
                            <IonButtons slot="end">
                                <IonButton
                                    onClick={() => setIsEditModalOpen(false)}
                                >
                                    <IonIcon
                                        icon={closeOutline}
                                        slot="icon-only"
                                    />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {selectedUser && (
                            <>
                                <IonCard>
                                    <IonCardContent>
                                        <IonText color="medium">
                                            <p>Editing points for</p>
                                        </IonText>
                                        <h2>
                                            <strong>{selectedUser.name}</strong>
                                        </h2>
                                        <IonText color="primary">
                                            <p>
                                                Current: {selectedUser.points}{" "}
                                                points
                                            </p>
                                        </IonText>
                                    </IonCardContent>
                                </IonCard>

                                {/* Points Adjuster */}
                                <IonCard>
                                    <IonCardContent>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-around",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <IonButton
                                                fill="solid"
                                                color="danger"
                                                size="large"
                                                onClick={() =>
                                                    setPointsToAdd(
                                                        pointsToAdd - increment,
                                                    )
                                                }
                                            >
                                                <IonIcon
                                                    icon={removeCircleOutline}
                                                />
                                            </IonButton>
                                            <div
                                                style={{ textAlign: "center" }}
                                            >
                                                <IonText
                                                    color={
                                                        pointsToAdd > 0
                                                            ? "success"
                                                            : pointsToAdd < 0
                                                              ? "danger"
                                                              : "medium"
                                                    }
                                                >
                                                    <h1
                                                        style={{
                                                            fontSize: "48px",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {pointsToAdd > 0
                                                            ? "+"
                                                            : ""}
                                                        {pointsToAdd}
                                                    </h1>
                                                </IonText>
                                                <IonText color="medium">
                                                    <p>
                                                        New total:{" "}
                                                        {selectedUser.points +
                                                            pointsToAdd}
                                                    </p>
                                                </IonText>
                                            </div>
                                            <IonButton
                                                fill="solid"
                                                color="success"
                                                size="large"
                                                onClick={() =>
                                                    setPointsToAdd(
                                                        pointsToAdd + increment,
                                                    )
                                                }
                                            >
                                                <IonIcon
                                                    icon={addCircleOutline}
                                                />
                                            </IonButton>
                                        </div>

                                        <IonSegment
                                            value={increment.toString()}
                                            onIonChange={(e) =>
                                                setIncrement(
                                                    Number(e.detail.value),
                                                )
                                            }
                                        >
                                            <IonSegmentButton value="1">
                                                <IonLabel>±1</IonLabel>
                                            </IonSegmentButton>
                                            <IonSegmentButton value="5">
                                                <IonLabel>±5</IonLabel>
                                            </IonSegmentButton>
                                            <IonSegmentButton value="10">
                                                <IonLabel>±10</IonLabel>
                                            </IonSegmentButton>
                                            <IonSegmentButton value="20">
                                                <IonLabel>±20</IonLabel>
                                            </IonSegmentButton>
                                        </IonSegment>
                                    </IonCardContent>
                                </IonCard>

                                {/* Reason Selection */}
                                <IonList>
                                    <IonItem>
                                        <IonSelect
                                            label="Reason"
                                            labelPlacement="floating"
                                            value={reasoning}
                                            onIonChange={(e) =>
                                                setReasoning(e.detail.value)
                                            }
                                            placeholder="Select reason"
                                        >
                                            {POINT_REASONS.map((reason) => (
                                                <IonSelectOption
                                                    key={reason.value}
                                                    value={reason.value}
                                                >
                                                    {reason.label}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonTextarea
                                            label="Details (Optional)"
                                            labelPlacement="floating"
                                            value={details}
                                            onIonInput={(e) =>
                                                setDetails(e.detail.value!)
                                            }
                                            placeholder="Add optional details..."
                                            rows={3}
                                        />
                                    </IonItem>
                                </IonList>

                                <IonButton
                                    expand="block"
                                    className="ion-margin-top"
                                    disabled={
                                        !reasoning ||
                                        pointsToAdd === 0 ||
                                        isUpdating
                                    }
                                    onClick={handleUpdatePoints}
                                >
                                    <IonIcon icon={saveOutline} slot="start" />
                                    {isUpdating
                                        ? "Updating..."
                                        : "Save Changes"}
                                </IonButton>
                            </>
                        )}
                    </IonContent>
                </IonModal>

                {/* History Modal */}
                <IonModal
                    isOpen={isHistoryModalOpen}
                    onDidDismiss={() => setIsHistoryModalOpen(false)}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Points History</IonTitle>
                            <IonButtons slot="end">
                                <IonButton
                                    onClick={() => setIsHistoryModalOpen(false)}
                                >
                                    <IonIcon
                                        icon={closeOutline}
                                        slot="icon-only"
                                    />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {selectedUser && (
                            <IonCard>
                                <IonCardContent>
                                    <IonText>
                                        <h2>
                                            <strong>{selectedUser.name}</strong>
                                        </h2>
                                        <p>
                                            Total Points: {selectedUser.points}
                                        </p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        )}

                        {isLoadingLogs ? (
                            <IonProgressBar type="indeterminate" />
                        ) : sortedLogs.length === 0 ? (
                            <IonCard>
                                <IonCardContent className="ion-text-center">
                                    <IonIcon
                                        icon={timeOutline}
                                        style={{
                                            fontSize: "64px",
                                            opacity: 0.3,
                                        }}
                                    />
                                    <IonText color="medium">
                                        <p>No points history available</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        ) : (
                            <IonList>
                                {sortedLogs.map((log) => {
                                    const isPositive = log.change > 0;
                                    const reasonData = POINT_REASONS.find(
                                        (r) => r.value === log.reason,
                                    );

                                    return (
                                        <IonCard key={log.id}>
                                            <IonCardContent>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        alignItems:
                                                            "flex-start",
                                                        marginBottom: "8px",
                                                    }}
                                                >
                                                    <div>
                                                        <IonChip
                                                            color={
                                                                isPositive
                                                                    ? "success"
                                                                    : "danger"
                                                            }
                                                        >
                                                            <IonIcon
                                                                icon={
                                                                    isPositive
                                                                        ? addCircleOutline
                                                                        : removeCircleOutline
                                                                }
                                                            />
                                                            <IonLabel>
                                                                {isPositive
                                                                    ? "+"
                                                                    : ""}
                                                                {log.change}
                                                            </IonLabel>
                                                        </IonChip>
                                                        <IonChip color="medium">
                                                            <IonIcon
                                                                icon={
                                                                    reasonData?.icon ||
                                                                    listOutline
                                                                }
                                                            />
                                                            <IonLabel>
                                                                {reasonData?.label ||
                                                                    log.reason}
                                                            </IonLabel>
                                                        </IonChip>
                                                    </div>
                                                    <IonText color="medium">
                                                        <small>
                                                            {formatDate(
                                                                log.logged_at,
                                                            )}
                                                        </small>
                                                    </IonText>
                                                </div>
                                                {log.details && (
                                                    <IonText color="medium">
                                                        <p
                                                            style={{
                                                                background:
                                                                    "var(--ion-color-light)",
                                                                padding:
                                                                    "8px 12px",
                                                                borderRadius:
                                                                    "8px",
                                                                margin: 0,
                                                            }}
                                                        >
                                                            {log.details}
                                                        </p>
                                                    </IonText>
                                                )}
                                            </IonCardContent>
                                        </IonCard>
                                    );
                                })}
                            </IonList>
                        )}
                    </IonContent>
                </IonModal>

                {/* Toast */}
                <IonToast
                    isOpen={toast.show}
                    onDidDismiss={() => setToast({ show: false, message: "" })}
                    message={toast.message}
                    duration={3000}
                    color={toast.color}
                    position="bottom"
                />
            </IonContent>
        </IonPage>
    );
};

export default PointsPage;
