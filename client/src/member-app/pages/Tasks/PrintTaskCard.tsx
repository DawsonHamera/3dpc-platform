import { useState } from "react";
import {
    IonAccordion,
    IonBadge,
    IonButton,
    IonChip,
    IonIcon,
    IonItem,
    IonLabel,
    IonSpinner,
} from "@ionic/react";
import {
    checkmarkCircle,
    construct,
    cube,
    lockClosed,
    print,
    warning,
    timeOutline,
    addCircleOutline,
} from "ionicons/icons";
import { useGetPrinterByIdQuery } from "../../../member-app/features/printers/printersApi";
import { useGetMaterialByIdQuery } from "../../../member-app/features/materials/materialsApi";
import { useGetModelByIdQuery } from "../../../member-app/features/models/modelsApi";
import {
    useClaimTaskMutation,
    useReleaseTaskMutation,
    useUpdateTaskStatusMutation,
} from "../../../member-app/features/tasks/tasksApi";
import Avatar from "../../../shared/components/Avatar/Avatar";
import ErrorReportModal from "./ErrorReportModal";
import "./PrintTaskCard.css";

const PrintTaskCard: React.FC<{
    task: any;
    type: string;
    userShown?: boolean;
}> = ({ task, type, userShown = false }) => {
    const getCustomTimeLabel = (dateTime: Date): string => {
        const timeRanges = [
            { start: "07:30", end: "08:30", label: "before school" },
            { start: "09:53", end: "10:00", label: "at brunch" },
            { start: "11:35", end: "12:11", label: "at intervention" },
            { start: "12:12", end: "12:41", label: "at lunch" },
        ];

        const currentTime = dateTime.toTimeString().slice(0, 5); // Get time in HH:mm format

        for (const range of timeRanges) {
            if (currentTime >= range.start && currentTime <= range.end) {
                return range.label;
            }
        }

        return (
            "at " +
            dateTime.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
            })
        );
    };
    const [isErrorReportModalOpen, setIsErrorReportModalOpen] = useState(false);

    const typeIcon: { [key: string]: string } = {
        print_job: print,
        maintenance: construct,
        inventory_management: cube,
    };

    const statusColorMap: { [key: string]: string } = {
        pending: "warning",
        in_progress: "primary",
        completed: "success",
        cancelled: "medium",
        failed: "danger",
    };

    const {
        data: printerData,
        isError: printerError,
        isLoading: printerLoading,
    } = useGetPrinterByIdQuery(task.details.printer_id);
    const {
        data: materialData,
        isError: materialError,
        isLoading: materialLoading,
    } = useGetMaterialByIdQuery(task.details.material_id);
    const {
        data: modelData,
        isError: modelError,
        isLoading: modelLoading,
    } = useGetModelByIdQuery(task.details.model_id);

    const [claimTask] = useClaimTaskMutation();
    const [releaseTask] = useReleaseTaskMutation();

    const [updateTaskStatus] = useUpdateTaskStatusMutation();

    const handleComplete = () => {
        updateTaskStatus({ id: task.id, status: "completed" });
    };

    const handleCancel = () => {
        updateTaskStatus({ id: task.id, status: "cancelled" });
    };

    const handleError = () => {
        setIsErrorReportModalOpen(true);
        updateTaskStatus({ id: task.id, status: "failed" });
    };

    const handleClaimTask = () => {
        claimTask({ id: task.id });
    };

    const handleReleaseTask = () => {
        releaseTask({ id: task.id });
    };

    const isLoading = printerLoading || materialLoading || modelLoading;
    const isError = printerError || materialError || modelError;
    const isDataMissing = !printerData || !materialData || !modelData;

    const isLocked =
        task.scheduled_date && new Date(task.scheduled_date) > new Date();

    if (isLoading) {
        return (
            <IonAccordion className="print-task-card">
                <IonItem slot="header" className="print-task-header">
                    <div className="print-task-loading">
                        <IonSpinner />
                        <span>Loading task details...</span>
                    </div>
                </IonItem>
            </IonAccordion>
        );
    }

    if (isError || isDataMissing) {
        return (
            <IonAccordion className="print-task-card">
                <IonItem slot="header" className="print-task-header">
                    <div className="print-task-error">
                        Error loading task details
                    </div>
                </IonItem>
            </IonAccordion>
        );
    }

    return (
        <IonAccordion className="print-task-card">
            <IonItem slot="header" className="print-task-header">
                <div className="print-task-header-content">
                    <IonIcon
                        icon={typeIcon[task.type]}
                        className="print-task-icon"
                        color="primary"
                    />
                    <div className="print-task-title-container">
                        <h3 className="print-task-title">{task.title}</h3>
                        {printerData && (
                            <p className="print-task-subtitle">
                                {printerData.name}
                            </p>
                        )}
                    </div>
                    <div className="print-task-badges">
                        {type !== "open" && (
                            <IonChip
                                color={statusColorMap[task.status]}
                                outline
                            >
                                <IonLabel>{task.status}</IonLabel>
                            </IonChip>
                        )}
                        {isLocked && !task.is_open && (
                            <IonIcon icon={lockClosed} color="warning" />
                        )}
                        {userShown && task.assigned_user && (
                            <Avatar name={task.assigned_user.name} />
                        )}
                    </div>
                </div>
            </IonItem>
            <div slot="content" className="print-task-content">
                {isLocked && !task.is_open && (
                    <div className="print-task-schedule">
                        <IonIcon
                            icon={lockClosed}
                            className="print-task-schedule-icon"
                        />
                        <div className="print-task-schedule-text">
                            <p className="print-task-schedule-title">
                                Scheduled For
                            </p>
                            <p className="print-task-schedule-date">
                                {new Date(task.scheduled_date).toLocaleString(
                                    "en-US",
                                    {
                                        day: "numeric",
                                        month: "long",
                                    }
                                )}{" "}
                                {getCustomTimeLabel(
                                    new Date(task.scheduled_date)
                                )}
                            </p>
                        </div>
                        <IonButton
                            size="small"
                            fill="outline"
                            color="dark"
                            onClick={handleReleaseTask}
                        >
                            Unassign
                        </IonButton>
                    </div>
                )}

                <div className="print-task-details">
                    <div className="print-task-printer">
                        {printerData?.image_file?.path ? (
                            <img
                                src={printerData.image_file.path}
                                alt={printerData.name}
                                className="print-task-printer-image"
                            />
                        ) : (
                            <div className="print-task-printer-image">
                                <IonIcon icon={print} />
                            </div>
                        )}
                        <p className="print-task-printer-name">
                            {printerData?.name}
                        </p>
                    </div>

                    <div className="print-task-info">
                        <div className="print-task-info-item">
                            {modelData?.image_file?.path ? (
                                <img
                                    src={modelData.image_file.path}
                                    alt={modelData.name}
                                    className="print-task-info-image"
                                />
                            ) : (
                                <div className="print-task-info-image">
                                    <IonIcon icon={cube} />
                                </div>
                            )}
                            <div className="print-task-info-text">
                                <p className="print-task-info-label">Model</p>
                                <p className="print-task-info-value">
                                    {modelData?.name}
                                </p>
                            </div>
                        </div>

                        <div className="print-task-info-item">
                            {materialData?.image_file?.path ? (
                                <img
                                    src={materialData.image_file.path}
                                    alt={materialData.name}
                                    className="print-task-info-image"
                                />
                            ) : (
                                <div className="print-task-info-image">
                                    <IonIcon icon={construct} />
                                </div>
                            )}
                            <div className="print-task-info-text">
                                <p className="print-task-info-label">
                                    Material
                                </p>
                                <p className="print-task-info-value">
                                    {materialData?.name}
                                </p>
                            </div>
                        </div>

                        <div className="print-task-info-item">
                            <div
                                className="print-task-info-image"
                                style={{
                                    background:
                                        "linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <IonIcon
                                    icon={timeOutline}
                                    style={{ color: "white" }}
                                />
                            </div>
                            <div className="print-task-info-text">
                                <p className="print-task-info-label">
                                    Estimated Time
                                </p>
                                <p className="print-task-info-value">
                                    {task.details.estimated_hours} hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {task.is_open === true && (
                    <IonButton
                        expand="block"
                        onClick={handleClaimTask}
                        style={{ marginTop: "16px" }}
                    >
                        <IonIcon icon={addCircleOutline} slot="start" />
                        Add to My Tasks
                    </IonButton>
                )}

                {type === "editable" && !isLocked && (
                    <div className="print-task-actions">
                        <IonButton color="success" onClick={handleComplete}>
                            <IonIcon icon={checkmarkCircle} slot="start" />
                            Complete
                        </IonButton>
                        <IonButton color="danger" disabled onClick={handleError}>
                            <IonIcon icon={warning} slot="start" />
                            Report Issue
                        </IonButton>
                        <IonButton
                            color="medium"
                            fill="outline"
                            onClick={handleCancel}
                        >
                            Cancel
                        </IonButton>
                    </div>
                )}
            </div>
            <ErrorReportModal
                isOpen={isErrorReportModalOpen}
                onClose={() => setIsErrorReportModalOpen(false)}
            />
        </IonAccordion>
    );
};

export default PrintTaskCard;
