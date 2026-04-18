import {
    IonAccordion,
    IonButton,
    IonChip,
    IonIcon,
    IonItem,
    IonLabel,
    IonSpinner,
} from "@ionic/react";
import { skipToken } from "@reduxjs/toolkit/query";
import {
    addCircleOutline,
    checkmarkCircle,
    construct,
    cube,
    lockClosed,
    print,
    timeOutline,
    warning,
} from "ionicons/icons";
import { useState } from "react";
import Avatar from "../../../shared/components/Avatar/Avatar";
import {
    useClaimTaskMutation,
    useGetMaterialByIdQuery,
    useGetModelByIdQuery,
    useGetPrinterByIdQuery,
    useReleaseTaskMutation,
    useUpdateTaskStatusMutation,
} from "../../../shared/features";
import ErrorReportModal from "./ErrorReportModal";
import styles from "./PrintTaskCard.module.css";

const PrintTaskCard: React.FC<{
    task: any;
    type: string;
    userShown?: boolean;
}> = ({ task, type, userShown = false }) => {
    const details = (task?.details ?? {}) as Record<string, unknown>;

    const toPositiveNumber = (value: unknown): number | null => {
        if (typeof value === "number" && Number.isFinite(value) && value > 0) {
            return value;
        }

        if (typeof value === "string") {
            const parsed = Number(value);
            if (Number.isFinite(parsed) && parsed > 0) {
                return parsed;
            }
        }

        return null;
    };

    const printerId = toPositiveNumber(details.printer_id);
    const materialId = toPositiveNumber(details.material_id);
    const modelId = toPositiveNumber(details.model_id);

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
    } = useGetPrinterByIdQuery(printerId ?? skipToken);

    const {
        data: materialData,
        isError: materialError,
        isLoading: materialLoading,
    } = useGetMaterialByIdQuery(materialId ?? skipToken);

    const {
        data: modelData,
        isError: modelError,
        isLoading: modelLoading,
    } = useGetModelByIdQuery(modelId ?? skipToken);

    const [claimTask] = useClaimTaskMutation();
    const [releaseTask] = useReleaseTaskMutation();
    const [updateTaskStatus] = useUpdateTaskStatusMutation();

    const shouldResolvePrintResourceDetails =
        printerId !== null || materialId !== null || modelId !== null;

    const isLoading = shouldResolvePrintResourceDetails
        ? printerLoading || materialLoading || modelLoading
        : false;

    const isError = shouldResolvePrintResourceDetails
        ? printerError || materialError || modelError
        : false;

    const isDataMissing =
        shouldResolvePrintResourceDetails &&
        ((printerId !== null && !printerData) ||
            (materialId !== null && !materialData) ||
            (modelId !== null && !modelData));

    const handleComplete = () => {
        updateTaskStatus({ id: task.id, status: "completed" });
    };

    const handleCancel = () => {
        updateTaskStatus({ id: task.id, status: "cancelled" });
    };

    const handleError = () => {
        setIsErrorReportModalOpen(true);
    };

    const handleReportSubmitted = () => {
        updateTaskStatus({ id: task.id, status: "failed" });
    };

    const handleClaimTask = () => {
        claimTask({ id: task.id });
    };

    const handleReleaseTask = () => {
        releaseTask({ id: task.id });
    };

    const isLocked =
        task.scheduled_date && new Date(task.scheduled_date) > new Date();

    if (isLoading) {
        return (
            <IonAccordion className={styles.printTaskCard}>
                <IonItem slot="header" className={styles.printTaskHeader}>
                    <div className={styles.printTaskLoading}>
                        <IonSpinner />
                        <span>Loading task details...</span>
                    </div>
                </IonItem>
            </IonAccordion>
        );
    }

    if (isError || isDataMissing) {
        return (
            <IonAccordion className={styles.printTaskCard}>
                <IonItem slot="header" className={styles.printTaskHeader}>
                    <div className={styles.printTaskError}>
                        Error loading task details
                    </div>
                </IonItem>
            </IonAccordion>
        );
    }

    return (
        <IonAccordion className={styles.printTaskCard}>
            <IonItem slot="header" className={styles.printTaskHeader}>
                <div className={styles.printTaskHeaderContent}>
                    <IonIcon
                        icon={typeIcon[task.type]}
                        className={styles.printTaskIcon}
                        color="primary"
                    />
                    <div className={styles.printTaskTitleContainer}>
                        <h3 className={styles.printTaskTitle}>{task.title}</h3>
                        {printerData && (
                            <p className={styles.printTaskSubtitle}>
                                {printerData.name}
                            </p>
                        )}
                    </div>
                    <div className={styles.printTaskBadges}>
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
            <div slot="content" className={styles.printTaskContent}>
                {isLocked && !task.is_open && (
                    <div className={styles.printTaskSchedule}>
                        <IonIcon
                            icon={lockClosed}
                            className={styles.printTaskScheduleIcon}
                        />
                        <div className={styles.printTaskScheduleText}>
                            <p className={styles.printTaskScheduleTitle}>
                                Scheduled For
                            </p>
                            <p className={styles.printTaskScheduleDate}>
                                {new Date(task.scheduled_date).toLocaleString(
                                    "en-US",
                                    {
                                        day: "numeric",
                                        month: "long",
                                    },
                                )}{" "}
                                {getCustomTimeLabel(
                                    new Date(task.scheduled_date),
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

                <div className={styles.printTaskDetails}>
                    <div className={styles.printTaskPrinter}>
                        {printerData?.image_file?.path ? (
                            <img
                                src={printerData.image_file.path}
                                alt={printerData.name}
                                className={styles.printTaskPrinterImage}
                            />
                        ) : (
                            <div className={styles.printTaskPrinterImage}>
                                <IonIcon icon={print} />
                            </div>
                        )}
                        <p className={styles.printTaskPrinterName}>
                            {printerData?.name ?? "Printer not assigned"}
                        </p>
                    </div>

                    <div className={styles.printTaskInfo}>
                        <div className={styles.printTaskInfoItem}>
                            {modelData?.image_file?.path ? (
                                <img
                                    src={modelData.image_file.path}
                                    alt={modelData.name}
                                    className={styles.printTaskInfoImage}
                                />
                            ) : (
                                <div className={styles.printTaskInfoImage}>
                                    <IonIcon icon={cube} />
                                </div>
                            )}
                            <div className={styles.printTaskInfoText}>
                                <p className={styles.printTaskInfoLabel}>
                                    Model
                                </p>
                                <p className={styles.printTaskInfoValue}>
                                    {modelData?.name ?? "Model not assigned"}
                                </p>
                            </div>
                        </div>

                        <div className={styles.printTaskInfoItem}>
                            {materialData?.image_file?.path ? (
                                <img
                                    src={materialData.image_file.path}
                                    alt={materialData.name}
                                    className={styles.printTaskInfoImage}
                                />
                            ) : (
                                <div className={styles.printTaskInfoImage}>
                                    <IonIcon icon={construct} />
                                </div>
                            )}
                            <div className={styles.printTaskInfoText}>
                                <p className={styles.printTaskInfoLabel}>
                                    Material
                                </p>
                                <p className={styles.printTaskInfoValue}>
                                    {materialData?.name ??
                                        "Material not assigned"}
                                </p>
                            </div>
                        </div>

                        <div className={styles.printTaskInfoItem}>
                            <div
                                className={`${styles.printTaskInfoImage} ${styles.printTaskInfoTimeIconContainer}`}
                            >
                                <IonIcon
                                    icon={timeOutline}
                                    className={styles.printTaskInfoTimeIcon}
                                />
                            </div>
                            <div className={styles.printTaskInfoText}>
                                <p className={styles.printTaskInfoLabel}>
                                    Estimated Time
                                </p>
                                <p className={styles.printTaskInfoValue}>
                                    {typeof details.estimated_hours === "number"
                                        ? `${details.estimated_hours} hours`
                                        : "Not specified"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {task.order_item && (
                    <div className={styles.printTaskLinkedOrder}>
                        <p className={styles.printTaskLinkedOrderLabel}>
                            Linked Order
                        </p>
                        <div className={styles.printTaskLinkedOrderRow}>
                            <IonChip color="tertiary" outline>
                                <IonLabel>
                                    Order #{task.order_item.order?.key ?? "N/A"}
                                </IonLabel>
                            </IonChip>
                            <IonChip color="medium" outline>
                                <IonLabel>Item #{task.order_item.id}</IonLabel>
                            </IonChip>
                        </div>
                        <p className={styles.printTaskLinkedOrderValue}>
                            {task.order_item.product?.name ?? "Product"}{" "}
                            {task.order_item.product_variant?.name
                                ? `• ${task.order_item.product_variant.name}`
                                : ""}
                            {" • Qty "}
                            {task.order_item.quantity}
                        </p>
                    </div>
                )}

                {task.is_open === true && (
                    <IonButton
                        expand="block"
                        onClick={handleClaimTask}
                        className={styles.printTaskClaimButton}
                    >
                        <IonIcon icon={addCircleOutline} slot="start" />
                        Add to My Tasks
                    </IonButton>
                )}

                {type === "editable" && !isLocked && (
                    <div className={styles.printTaskActions}>
                        <IonButton color="success" onClick={handleComplete}>
                            <IonIcon icon={checkmarkCircle} slot="start" />
                            Complete
                        </IonButton>
                        <IonButton color="danger" onClick={handleError}>
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
                onSubmitted={handleReportSubmitted}
                taskId={task.id}
                taskTitle={task.title}
                orderKey={task.order_item?.order?.key}
            />
        </IonAccordion>
    );
};

export default PrintTaskCard;
