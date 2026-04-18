import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonModal,
    IonNote,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTextarea,
    IonTitle,
    IonToast,
    IonToolbar,
} from "@ionic/react";
import React, { useEffect, useMemo, useState } from "react";
import { useCreateErrorReportMutation } from "../../../shared/features";
import styles from "./ErrorReportModal.module.css";

interface ErrorReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmitted?: () => void;
    taskId: number;
    taskTitle: string;
    orderKey?: string;
}

const ErrorReportModal: React.FC<ErrorReportModalProps> = ({
    isOpen,
    onClose,
    onSubmitted,
    taskId,
    taskTitle,
    orderKey,
}) => {
    const [report, setReport] = useState("");
    const [reportType, setReportType] = useState<
        "task_issue" | "bug" | "feature_request" | "other"
    >("task_issue");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [createErrorReport, { isLoading }] = useCreateErrorReportMutation();

    useEffect(() => {
        if (!isOpen) {
            setReport("");
            setReportType("task_issue");
        }
    }, [isOpen]);

    const taskContextLine = useMemo(
        () =>
            `Task #${taskId} (${taskTitle})${orderKey ? ` | Order #${orderKey}` : ""}`,
        [taskId, taskTitle, orderKey],
    );

    const handleSubmit = async () => {
        if (!report.trim()) {
            setToastMessage("Please describe the issue before submitting.");
            setShowToast(true);
            return;
        }

        const description = [
            taskContextLine,
            "",
            "Member report:",
            report.trim(),
        ].join("\n");

        try {
            await createErrorReport({
                description,
                type: reportType,
            }).unwrap();

            setToastMessage("Issue report submitted successfully.");
            setShowToast(true);
            onSubmitted?.();
            onClose();
        } catch (error) {
            setToastMessage("Unable to submit issue report. Please try again.");
            setShowToast(true);
        }
    };

    return (
        <>
            <IonModal isOpen={isOpen} onDidDismiss={onClose}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Report an Issue</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={onClose}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent className={styles.errorReportContent}>
                    <div className={styles.errorReportContainer}>
                        <IonText color="medium">
                            <p className={styles.errorReportHelpText}>
                                Share what went wrong so staff can review and
                                follow up.
                            </p>
                        </IonText>

                        <IonNote className={styles.errorReportContext}>
                            {taskContextLine}
                        </IonNote>

                        <IonItem>
                            <IonLabel position="stacked">Issue Type</IonLabel>
                            <IonSelect
                                value={reportType}
                                onIonChange={(event) =>
                                    setReportType(event.detail.value)
                                }
                            >
                                <IonSelectOption value="task_issue">
                                    Task Issue
                                </IonSelectOption>
                                <IonSelectOption value="bug">
                                    Bug
                                </IonSelectOption>
                                <IonSelectOption value="feature_request">
                                    Feature Request
                                </IonSelectOption>
                                <IonSelectOption value="other">
                                    Other
                                </IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Details</IonLabel>
                            <IonTextarea
                                rows={6}
                                value={report}
                                placeholder="Describe what happened, what you expected, and any relevant printer/model details."
                                onIonInput={(event) =>
                                    setReport(event.detail.value ?? "")
                                }
                            />
                        </IonItem>

                        <IonButton
                            expand="block"
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className={styles.errorReportSubmitButton}
                        >
                            {isLoading ? "Submitting..." : "Submit Report"}
                        </IonButton>
                    </div>
                </IonContent>
            </IonModal>

            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={2500}
                position="top"
                color={
                    toastMessage.includes("successfully") ? "success" : "danger"
                }
            />
        </>
    );
};

export default ErrorReportModal;
