import React, { useEffect, useState, useMemo } from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonDatetime,
    IonItem,
    IonLabel,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonSpinner,
    IonText,
    useIonRouter,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { useGetPrintersQuery } from '../../../features/crud/printersApi';
import { useGetTaskQuery, useGetTasksQuery, useScheduleTaskMutation } from '../../../features/crud/tasksApi';


const ScheduleTaskForm: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // get task ID from route
    const taskId = parseInt(id, 10);
    const router = useIonRouter();
    const [selectedDate, setSelectedDate] = useState<string | undefined>();
    const [selectedPrinterId, setSelectedPrinterId] = useState<number | undefined>();

    const { data: allTasks, isLoading: tasksLoading } = useGetTasksQuery();
    const { data: task, isLoading: taskLoading } = useGetTaskQuery(taskId);
    const { data: printers, isLoading: printersLoading } = useGetPrintersQuery();
    const [scheduleTask] = useScheduleTaskMutation();

    // Block out dates only for the same printer
    const disabledDates = useMemo(() => {
        if (!allTasks || !selectedPrinterId) return [];
        console.log(allTasks)
        return Array.from(
            new Set(
                allTasks
                    .filter((t: any) => t.printer?.id === selectedPrinterId && t.scheduled_date)
                    .map((t: any) => new Date(t.scheduled_date).toISOString().split('T')[0])
            )
        );
    }, [allTasks, selectedPrinterId]);

    const isSubmitDisabled = !selectedDate || !selectedPrinterId;

    const handleSubmit = async () => {
        if (!isSubmitDisabled) {
            await scheduleTask({ id: taskId, body: { scheduled_start_time: selectedDate, printer_id: selectedPrinterId } })
            router.push('/dashboard')
        }
    };

    if (taskLoading || tasksLoading || printersLoading) {
        return (
            <IonPage>
                <IonContent>
                    <IonCard>
                        <IonCardContent>
                            <IonSpinner name="dots" />
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonItem>
                            <IonDatetime
                                presentation="date"
                                value={selectedDate}
                                onIonChange={(e) => setSelectedDate(e.detail.value as string)}
                                isDateEnabled={(dateStr) => {
                                    const iso = new Date(dateStr).toISOString().split('T')[0];
                                    return !disabledDates.includes(iso);
                                }}
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked">Select Printer</IonLabel>
                            <IonSelect
                                value={selectedPrinterId}
                                placeholder="Choose a printer"
                                onIonChange={(e) => setSelectedPrinterId(parseInt(e.detail.value, 10))}
                            >
                                {printers?.map((printer: any) => (
                                    <IonSelectOption key={printer.id} value={printer.id}>
                                        {printer.name}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>

                        <IonButton expand="block" onClick={handleSubmit} disabled={isSubmitDisabled}>
                            Schedule Task
                        </IonButton>

                        {isSubmitDisabled && (
                            <IonText color="medium">
                                <p className="ion-padding-top">Select both a date and printer to continue.</p>
                            </IonText>
                        )}
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ScheduleTaskForm;
