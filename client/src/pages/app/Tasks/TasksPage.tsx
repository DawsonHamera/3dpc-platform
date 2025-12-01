import { useState } from "react";
import {
    IonPage,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonAccordionGroup,
    IonIcon,
    IonButton,
    IonBadge,
    IonSpinner,
} from "@ionic/react";
import {
    addOutline,
    listOutline,
    checkmarkDoneOutline,
    shieldCheckmarkOutline,
} from "ionicons/icons";
import Header from "../../../components/Header/Header";
import {
    useGetAllByUsersQuery,
    useGetOpenTasksQuery,
    useGetUserTasksQuery,
} from "../../../features/tasks/tasksApi";
import PrintTaskCard from "./PrintTaskCard";
import CreateTaskModal from "./CreateTaskModal";
import "./TasksPage.css";

const TasksPage: React.FC = () => {
    const { data: tasks, error, isLoading, refetch } = useGetUserTasksQuery();
    const {
        data: allTasks,
        error: allTasksError,
        isLoading: allTasksLoading,
        refetch: refetchAllTasks,
    } = useGetAllByUsersQuery();
    const {
        data: openTasks,
        error: openTasksError,
        isLoading: openTasksLoading,
        refetch: refetchOpenTasks,
    } = useGetOpenTasksQuery();

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const handleRefresh = (event: CustomEvent) => {
        refetch();
        refetchOpenTasks();
        refetchAllTasks();
        event.detail.complete();
    };

    const renderTaskCard = (
        task: any,
        type: string,
        userShown: boolean = false
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
        <div className="tasks-empty-state">
            <IonIcon icon={icon} className="tasks-empty-icon" />
            <h3 className="tasks-empty-title">No Tasks</h3>
            <p className="tasks-empty-description">{message}</p>
        </div>
    );

    return (
        <IonPage>
            <Header title="Tasks" />
            <IonContent className="tasks-page-content">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <div className="tasks-header">
                    <div className="tasks-header-left">
                        <h1>Tasks</h1>
                        <p>Manage your print jobs and assignments</p>
                    </div>
                    <IonButton
                        onClick={() => setIsCreateModalOpen(true)}
                        size="default"
                    >
                        <IonIcon icon={addOutline} slot="start" />
                        Create Task
                    </IonButton>
                </div>

                {/* Open Tasks Section */}
                <div className="tasks-section">
                    <div className="tasks-section-header">
                        <h2 className="tasks-section-title">
                            <IonIcon
                                icon={listOutline}
                                style={{ marginRight: "8px" }}
                            />
                            Open Tasks
                        </h2>
                        {openTasks && openTasks.length > 0 && (
                            <IonBadge
                                color="primary"
                                className="tasks-section-badge"
                            >
                                {openTasks.length}
                            </IonBadge>
                        )}
                    </div>
                    {openTasksLoading ? (
                        <div className="tasks-loading">
                            <IonSpinner />
                        </div>
                    ) : openTasksError ? (
                        <div className="tasks-error">
                            Error loading open tasks
                        </div>
                    ) : openTasks && openTasks.length > 0 ? (
                        <IonAccordionGroup className="tasks-accordion-group">
                            {openTasks.map((task: any) =>
                                renderTaskCard(task, "open")
                            )}
                        </IonAccordionGroup>
                    ) : (
                        renderEmptyState(
                            "No open tasks available to claim",
                            listOutline
                        )
                    )}
                </div>

                {/* Your Tasks Section */}
                <div className="tasks-section">
                    <div className="tasks-section-header">
                        <h2 className="tasks-section-title">
                            <IonIcon
                                icon={checkmarkDoneOutline}
                                style={{ marginRight: "8px" }}
                            />
                            Your Tasks
                        </h2>
                        {tasks && tasks.length > 0 && (
                            <IonBadge
                                color="success"
                                className="tasks-section-badge"
                            >
                                {tasks.length}
                            </IonBadge>
                        )}
                    </div>
                    {isLoading ? (
                        <div className="tasks-loading">
                            <IonSpinner />
                        </div>
                    ) : error ? (
                        <div className="tasks-error">
                            Error loading your tasks
                        </div>
                    ) : tasks && tasks.length > 0 ? (
                        <IonAccordionGroup className="tasks-accordion-group">
                            {tasks.map((task: any) =>
                                renderTaskCard(task, "editable")
                            )}
                        </IonAccordionGroup>
                    ) : (
                        renderEmptyState(
                            "You don't have any tasks assigned yet",
                            checkmarkDoneOutline
                        )
                    )}
                </div>

                <hr className="tasks-divider" />

                {/* All Tasks (Admin) Section */}
                <div className="tasks-section">
                    <div className="tasks-section-header">
                        <h2 className="tasks-section-title">
                            <IonIcon
                                icon={shieldCheckmarkOutline}
                                style={{ marginRight: "8px" }}
                            />
                            All Tasks (Admin)
                        </h2>
                        {allTasks && allTasks.length > 0 && (
                            <IonBadge
                                color="tertiary"
                                className="tasks-section-badge"
                            >
                                {allTasks.length}
                            </IonBadge>
                        )}
                    </div>
                    {allTasksLoading ? (
                        <div className="tasks-loading">
                            <IonSpinner />
                        </div>
                    ) : allTasksError ? (
                        <div className="tasks-error">
                            Error loading all tasks
                        </div>
                    ) : allTasks && allTasks.length > 0 ? (
                        <IonAccordionGroup className="tasks-accordion-group">
                            {allTasks.map((task: any) =>
                                renderTaskCard(task, "editable", true)
                            )}
                        </IonAccordionGroup>
                    ) : (
                        renderEmptyState(
                            "No tasks in the system",
                            shieldCheckmarkOutline
                        )
                    )}
                </div>

                <CreateTaskModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            </IonContent>
        </IonPage>
    );
};

export default TasksPage;
