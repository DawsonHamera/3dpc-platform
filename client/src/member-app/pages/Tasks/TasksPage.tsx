import {
    IonAccordionGroup,
    IonBadge,
    IonButton,
    IonContent,
    IonIcon,
    IonLabel,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonSpinner,
} from "@ionic/react";
import {
    addOutline,
    checkmarkDoneOutline,
    listOutline,
    optionsOutline,
    shieldCheckmarkOutline,
} from "ionicons/icons";
import { useMemo, useState } from "react";
import Header from "../../../shared/components/Header/Header";
import {
    UserTaskGroup,
    useGetAllByUsersQuery,
    useGetOpenTasksQuery,
    useGetUserTasksQuery,
} from "../../../shared/features";
import { selectCurrentUser } from "../../../shared/features/auth/authSlice";
import { useAppSelector } from "../../../shared/redux/hooks";
import CreateTaskModal from "./CreateTaskModal";
import PrintTaskCard from "./PrintTaskCard";
import styles from "./TasksPage.module.css";

type SortMode = "scheduled_asc" | "scheduled_desc" | "title_asc";
type TaskSection = "all" | "open" | "mine" | "admin";

const sortTasks = (tasks: any[], sortMode: SortMode) => {
    const safeTasks = [...tasks];

    safeTasks.sort((a, b) => {
        if (sortMode === "title_asc") {
            return (a.title ?? "").localeCompare(b.title ?? "");
        }

        const aDate = a.scheduled_date
            ? new Date(a.scheduled_date).getTime()
            : Number.MAX_SAFE_INTEGER;
        const bDate = b.scheduled_date
            ? new Date(b.scheduled_date).getTime()
            : Number.MAX_SAFE_INTEGER;

        if (sortMode === "scheduled_desc") {
            return bDate - aDate;
        }

        return aDate - bDate;
    });

    return safeTasks;
};

const TasksPage: React.FC = () => {
    const currentUser = useAppSelector(selectCurrentUser);
    const isAdmin = currentUser?.role?.name === "admin";

    const { data: tasks, error, isLoading, refetch } = useGetUserTasksQuery();
    const {
        data: allTasks,
        error: allTasksError,
        isLoading: allTasksLoading,
        refetch: refetchAllTasks,
    } = useGetAllByUsersQuery(undefined, { skip: !isAdmin });
    const {
        data: openTasks,
        error: openTasksError,
        isLoading: openTasksLoading,
        refetch: refetchOpenTasks,
    } = useGetOpenTasksQuery();

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [sortMode, setSortMode] = useState<SortMode>("scheduled_asc");
    const [activeSection, setActiveSection] = useState<TaskSection>("all");

    const handleRefresh = (event: CustomEvent) => {
        refetch();
        refetchOpenTasks();
        if (isAdmin) {
            refetchAllTasks();
        }
        event.detail.complete();
    };

    const renderTaskCard = (
        task: any,
        type: string,
        userShown: boolean = false,
    ) => {
        if (task.status === "completed") {
            return null;
        }

        switch (task.type) {
            case "print_job":
                return (
                    <PrintTaskCard
                        key={task.id}
                        task={task}
                        type={type}
                        userShown={userShown}
                    />
                );
            default:
                return null;
        }
    };

    const renderEmptyState = (message: string, icon: any) => (
        <div className={styles.tasksEmptyState}>
            <IonIcon icon={icon} className={styles.tasksEmptyIcon} />
            <h3 className={styles.tasksEmptyTitle}>No Tasks</h3>
            <p className={styles.tasksEmptyDescription}>{message}</p>
        </div>
    );

    const openTasksSorted = useMemo(
        () =>
            sortTasks(
                (openTasks ?? []).filter((task: any) => task.status !== "completed"),
                sortMode,
            ),
        [openTasks, sortMode],
    );

    const tasksSorted = useMemo(
        () =>
            sortTasks(
                (tasks ?? []).filter((task: any) => task.status !== "completed"),
                sortMode,
            ),
        [tasks, sortMode],
    );

    const flattenedAdminTasks = useMemo(() => {
        if (!allTasks) {
            return [];
        }

        return allTasks.flatMap((userTaskGroup: UserTaskGroup) =>
            (userTaskGroup.tasks ?? []).map((task: any) => ({
                ...task,
                assigned_user:
                    task.assigned_user ??
                    (userTaskGroup.name
                        ? { name: userTaskGroup.name, id: userTaskGroup.id }
                        : undefined),
            })),
        );
    }, [allTasks]);

    const adminTasksSorted = useMemo(
        () =>
            sortTasks(
                flattenedAdminTasks.filter((task: any) => task.status !== "completed"),
                sortMode,
            ),
        [flattenedAdminTasks, sortMode],
    );

    const showOpenSection = activeSection === "all" || activeSection === "open";
    const showMineSection = activeSection === "all" || activeSection === "mine";
    const showAdminSection =
        isAdmin && (activeSection === "all" || activeSection === "admin");

    return (
        <IonPage>
            <Header title="Tasks" />
            <IonContent className={styles.tasksPageContent}>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <div className={styles.tasksHeader}>
                    <div className={styles.tasksHeaderLeft}>
                        <h1>Tasks</h1>
                        <p>Manage your print jobs and assignments</p>
                    </div>
                    {isAdmin && (
                        <IonButton
                            onClick={() => setIsCreateModalOpen(true)}
                            size="default"
                        >
                            <IonIcon icon={addOutline} slot="start" />
                            Create Task
                        </IonButton>
                    )}
                </div>

                <div className={styles.tasksControls}>
                    <div className={styles.tasksSortControl}>
                        <IonIcon icon={optionsOutline} />
                        <IonLabel>Sort</IonLabel>
                        <IonSelect
                            value={sortMode}
                            interface="popover"
                            onIonChange={(event) =>
                                setSortMode(event.detail.value as SortMode)
                            }
                        >
                            <IonSelectOption value="scheduled_asc">
                                Soonest Scheduled
                            </IonSelectOption>
                            <IonSelectOption value="scheduled_desc">
                                Latest Scheduled
                            </IonSelectOption>
                            <IonSelectOption value="title_asc">
                                Title A-Z
                            </IonSelectOption>
                        </IonSelect>
                    </div>
                    <div className={styles.tasksControlHint}>
                        <IonLabel>
                            Showing non-completed print tasks. Pull to refresh.
                        </IonLabel>
                    </div>
                </div>

                <IonSegment
                    value={activeSection}
                    onIonChange={(event) =>
                        setActiveSection(event.detail.value as TaskSection)
                    }
                    className={styles.tasksSectionSegment}
                >
                    <IonSegmentButton value="all">
                        <IonLabel>All</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="open">
                        <IonLabel>Open</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="mine">
                        <IonLabel>Mine</IonLabel>
                    </IonSegmentButton>
                    {isAdmin && (
                        <IonSegmentButton value="admin">
                            <IonLabel>Admin</IonLabel>
                        </IonSegmentButton>
                    )}
                </IonSegment>

                {showOpenSection && (
                    <div className={styles.tasksSection}>
                        <div className={styles.tasksSectionHeader}>
                            <h2 className={styles.tasksSectionTitle}>
                                <IonIcon
                                    icon={listOutline}
                                    className={styles.tasksSectionTitleIcon}
                                />
                                Open Tasks
                            </h2>
                            {openTasksSorted.length > 0 && (
                                <IonBadge
                                    color="primary"
                                    className={styles.tasksSectionBadge}
                                >
                                    {openTasksSorted.length}
                                </IonBadge>
                            )}
                        </div>
                        {openTasksLoading ? (
                            <div className={styles.tasksLoading}>
                                <IonSpinner />
                            </div>
                        ) : openTasksError ? (
                            <div className={styles.tasksError}>
                                Error loading open tasks
                            </div>
                        ) : openTasksSorted.length > 0 ? (
                            <IonAccordionGroup
                                className={styles.tasksAccordionGroup}
                            >
                                {openTasksSorted.map((task: any) =>
                                    renderTaskCard(task, "open"),
                                )}
                            </IonAccordionGroup>
                        ) : (
                            renderEmptyState(
                                "No open tasks available to claim",
                                listOutline,
                            )
                        )}
                    </div>
                )}

                {showMineSection && (
                    <div className={styles.tasksSection}>
                        <div className={styles.tasksSectionHeader}>
                            <h2 className={styles.tasksSectionTitle}>
                                <IonIcon
                                    icon={checkmarkDoneOutline}
                                    className={styles.tasksSectionTitleIcon}
                                />
                                Your Tasks
                            </h2>
                            {tasksSorted.length > 0 && (
                                <IonBadge
                                    color="success"
                                    className={styles.tasksSectionBadge}
                                >
                                    {tasksSorted.length}
                                </IonBadge>
                            )}
                        </div>
                        {isLoading ? (
                            <div className={styles.tasksLoading}>
                                <IonSpinner />
                            </div>
                        ) : error ? (
                            <div className={styles.tasksError}>
                                Error loading your tasks
                            </div>
                        ) : tasksSorted.length > 0 ? (
                            <IonAccordionGroup
                                className={styles.tasksAccordionGroup}
                            >
                                {tasksSorted.map((task: any) =>
                                    renderTaskCard(task, "editable"),
                                )}
                            </IonAccordionGroup>
                        ) : (
                            renderEmptyState(
                                "You don't have any tasks assigned yet",
                                checkmarkDoneOutline,
                            )
                        )}
                    </div>
                )}

                {showAdminSection && (
                    <div className={styles.tasksSection}>
                        <div className={styles.tasksSectionHeader}>
                            <h2 className={styles.tasksSectionTitle}>
                                <IonIcon
                                    icon={shieldCheckmarkOutline}
                                    className={styles.tasksSectionTitleIcon}
                                />
                                All Tasks (Admin)
                            </h2>
                            {adminTasksSorted.length > 0 && (
                                <IonBadge
                                    color="tertiary"
                                    className={styles.tasksSectionBadge}
                                >
                                    {adminTasksSorted.length}
                                </IonBadge>
                            )}
                        </div>
                        {allTasksLoading ? (
                            <div className={styles.tasksLoading}>
                                <IonSpinner />
                            </div>
                        ) : allTasksError ? (
                            <div className={styles.tasksError}>
                                Error loading all tasks
                            </div>
                        ) : adminTasksSorted.length > 0 ? (
                            <IonAccordionGroup
                                className={styles.tasksAccordionGroup}
                            >
                                {adminTasksSorted.map((task: any) =>
                                    renderTaskCard(task, "editable", true),
                                )}
                            </IonAccordionGroup>
                        ) : (
                            renderEmptyState(
                                "No tasks in the system",
                                shieldCheckmarkOutline,
                            )
                        )}
                    </div>
                )}

                <CreateTaskModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            </IonContent>
        </IonPage>
    );
};

export default TasksPage;
