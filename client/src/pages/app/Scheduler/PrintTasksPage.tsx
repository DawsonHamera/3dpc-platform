import {
  IonPage,
  IonContent,
  IonProgressBar,
  IonIcon
} from "@ionic/react";

import { useEffect, useRef, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { trashBin } from "ionicons/icons";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

import { EventClickArg, EventDropArg } from "@fullcalendar/core";
import Header from "../../../components/Header/Header";

import {
  useGetTasksQuery,
  useRemoveTaskMutation,
  useScheduleTaskMutation} from "../../../features/crud/tasksApi";

import { selectCurrentUser } from "../../../features/auth/authSlice";
import "./PrintTasksPage.css";

const PrintTasksPage: React.FC = () => {
  const { data: tasks = [], isLoading } = useGetTasksQuery();
  const [scheduleTask] = useScheduleTaskMutation();
  const [deleteTask] = useRemoveTaskMutation();

  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const calendarRef = useRef<FullCalendar | null>(null);
  const externalElRef = useRef<HTMLDivElement | null>(null);

  const user = useSelector(selectCurrentUser);
  const isAdmin = user?.role === "admin";

  // Enable drag for unscheduled tasks (admins only)
  useEffect(() => {
    if (externalElRef.current && isAdmin) {
      new Draggable(externalElRef.current, {
        itemSelector: ".fc-draggable-task",
        eventData: (el) => ({
          id: el.getAttribute("data-id") || "",
          title: el.getAttribute("data-title") || ""
        })
      });
    }
  }, [tasks, isAdmin]);

  // Resize calendar after loading
  useEffect(() => {
    if (!isLoading && calendarRef.current) {
      setTimeout(() => calendarRef.current?.getApi().updateSize(), 100);
    }
  }, [isLoading]);

  // Calendar Events
  const events = useMemo(() => {
    return tasks
      .filter(task => task.scheduled_date)
      .map(task => ({
        id: task.id.toString(),
        title: task.model?.name || "Untitled",
        start: `${task.scheduled_date}T${task.scheduled_start_time}`,
        end: `${task.scheduled_date}T${task.scheduled_end_time}`,
        extendedProps: { ...task }
      }));
  }, [tasks]);

  const handleEventClick = (info: EventClickArg) => {
    setSelectedTask(info.event.extendedProps as any);
  };

  const handleEventDrop = async (info: EventDropArg) => {
    const id = parseInt(info.event.id);
    const newStart = info.event.start;
    const newEnd = info.event.end;
    if (!newStart || !newEnd) return;

    const date = newStart.toISOString().split("T")[0];
    const start_time = newStart.toTimeString().substring(0, 8);
    const end_time = newEnd.toTimeString().substring(0, 8);

    try {
      await scheduleTask({
        id,
        body: { scheduled_date: date, scheduled_start_time: start_time, scheduled_end_time: end_time }
      });
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  const handleExternalDrop = async (info: any) => {
    const id = parseInt(info.draggedEl.getAttribute("data-id"));
    const date = info.dateStr.split("T")[0];

    try {
      await scheduleTask({ id, body: { scheduled_date: date } });
    } catch (err) {
      console.error("Failed to update dropped task:", err);
    }
  };

  const handleEventDragStop = async (info: any) => {
    if (!isAdmin) return;

    const trashEl = document.getElementById("calendar-trash");
    trashEl?.classList.remove("drag-hover");

    const e = info.jsEvent;
    const clientX = 'clientX' in e ? e.clientX : e.changedTouches?.[0]?.clientX;
    const clientY = 'clientY' in e ? e.clientY : e.changedTouches?.[0]?.clientY;

    if (typeof clientX !== "number" || typeof clientY !== "number") return;

    const elUnderPointer = document.elementFromPoint(clientX, clientY);
    if (trashEl && elUnderPointer && trashEl.contains(elUnderPointer)) {
      info.event.remove();
      try {
        await deleteTask(parseInt(info.event.id));
      } catch (error) {
        console.error("Delete failed", error);
      }
    }
  };

  return (
    <IonPage>
      <IonContent>
        <Header title="Print Tasks" />

        {isLoading ? (
          <IonProgressBar type="indeterminate" />
        ) : (
          <div className="task-calendar-layout">
            <div className="calendar-container">
              <FullCalendar
                ref={calendarRef}
                key={tasks.length}
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: "",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,listWeek"
                }}
                height="auto"
                events={events}
                editable={isAdmin}
                droppable={isAdmin}
                eventDrop={isAdmin ? handleEventDrop : undefined}
                drop={isAdmin ? handleExternalDrop : undefined}
                eventClick={handleEventClick}
                eventClassNames={({ event }) => `event-${event.extendedProps.status || "default"}`}
                eventContent={({ event }) => <p>{event.title}</p>}
                eventDragStart={() => {
                  if (isAdmin) {
                    document.getElementById("calendar-trash")?.classList.add("drag-hover");
                  }
                }}
                eventDragStop={handleEventDragStop}
              />
            </div>

            {isAdmin && (
              <>
                <div className="external-events" ref={externalElRef}>
                  <h4>Unscheduled Tasks</h4>
                  <div className="external-events-flex-container">
                    {tasks.filter(task => !task.scheduled_date).map(task => (
                      <div
                        key={task.id}
                        className="fc-draggable-task"
                        data-id={task.id}
                        data-title={task.model.name}
                      >
                        {task.model.name}
                        <p>{new Date('2001-01-11T'+task.scheduled_start_time).toLocaleTimeString()}</p>
                        {task.id}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="calendar-trash-zone" id="calendar-trash">
                  <IonIcon style={{ fontSize: 50 }} icon={trashBin} />
                </div>
              </>
            )}
          </div>
        )}

        {/* <IonModal isOpen={!!selectedTask} onDidDismiss={() => setSelectedTask(null)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Task Details</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setSelectedTask(null)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {selectedTask && <PrintTaskCard task={selectedTask} />}
          </IonContent>
        </IonModal> */}
      </IonContent>
    </IonPage>
  );
};

export default PrintTasksPage;
