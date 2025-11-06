import React, { useMemo } from "react";
import {
  IonCard,
  IonCardContent,
  IonChip,
  IonText,
  IonImg,
  IonIcon,
} from "@ionic/react";
import { Printer } from "../../features/crud/printersApi";
import { useGetTasksQuery } from "../../features/crud/tasksApi";
import { isSameDay, parseISO } from "date-fns";
import { cubeOutline, hammerOutline } from "ionicons/icons";
import './PrinterCard.css';

type Props = {
  printer: Printer;
};

const getStatusColor = (status: string) => {
  // switch (status) {
  //   case "printing":
  //     return "success";
  //   case "idle":
  //     return "tertiary";
  //   case "scheduled":
  //     return "primary";
  //   default:
  //     return "medium";
  // }

  return 'success'
};

const PrinterCard: React.FC<Props> = ({ printer }) => {
  const { data: tasks } = useGetTasksQuery();

  // Handle both old format (string) and new format (object)
  const printerStatus = printer.status?.name || 'unknown';

  const currentTask = useMemo(() => {
    return tasks?.find(
      (task) =>
        task.printer?.id === printer.id &&
        task.scheduledDate &&
        typeof task.scheduledDate === 'string' &&
        task.scheduledDate.trim() !== '' &&
        isSameDay(parseISO(task.scheduledDate), new Date())
    );
  }, [tasks, printer]);

  return (
    <div style={{ marginTop: '6rem' }}>

      {/* Printer Image */}

      <IonImg
        src={printer.imageFile?.url || "/images/printerBackdrop.jpg"}
        alt={printer.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />


      {/* Printer name + status */}
      <IonText color='light' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "1.6rem",
            fontWeight: 700,
            flexGrow: 1,
          }}
        >
          {printer.name}
        </h2>
        <IonChip color={getStatusColor(printerStatus)}>{printerStatus}</IonChip>
      </IonText>

      {/* Material info */}
      {printer.material && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IonIcon color='light' icon={cubeOutline} />
          <IonText color='light'>
            <strong>Material:</strong> {printer.material.name}
          </IonText>
        </div>
      )}

      {/* If printing, show job info */}
      <div>
        {currentTask && printerStatus == 'in_progress' && (
          <div>
            <div className="animated-border-box-glow" />
            <div
              className="animated-border-box"
              style={{

              }}
            >
              <img
                src={currentTask.model?.image?.url || "/images/model.png"}
                alt="Model"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div style={{ flex: 1 }}>
                <IonText color="light">
                  <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
                    {currentTask.model?.name || "Unnamed Model"}
                  </h3>
                </IonText>
                <IonText color="medium">
                  <small>
                    Scheduled:{" "}
                    {currentTask.scheduledDate && new Date(currentTask.scheduledDate).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </small>
                </IonText>
              </div>
              <IonChip color="primary" style={{ fontSize: "0.75rem" }}>
                <IonIcon icon={hammerOutline} slot="start" />
                {currentTask.quality}
              </IonChip>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrinterCard;
