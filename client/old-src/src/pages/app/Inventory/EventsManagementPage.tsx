import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal, IonInput, IonTextarea, IonFooter, IonIcon, IonImg, IonDatetime, IonRadio, IonRadioGroup } from '@ionic/react';
import { add } from 'date-fns';
import { create, trash, pencil, addCircle, close } from 'ionicons/icons';
import { useCreateEventMutation, useDeleteEventMutation, useGetEventsQuery, useUpdateEventMutation } from '../../../features/crud/events/eventsApi';
import FileSelector from '../../../components/FileSelector';
import QRCode from 'react-qr-code';

const EventsManagementPage: React.FC = () => {
    const { data: events = [], isLoading } = useGetEventsQuery();
    const [deleteEvent] = useDeleteEventMutation();
    const [createEvent] = useCreateEventMutation();
    const [updateEvent] = useUpdateEventMutation();


    const defaultForm = {
        title: '',
        description: '',
        location: '',
        imageFileId: undefined as number | undefined,
        start_time: '',
        end_time: '',
        isFeatured: false,
    };

    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<any | null>(null);
    const [form, setForm] = useState(defaultForm);
    const [openQrCode, setOpenQrCode] = useState<string | null>(null);

    const openCreateModal = () => {
        setEditingEvent(null);
        setForm(defaultForm);
        setShowModal(true);
    };

    const openEditModal = (event: any) => {
        setEditingEvent(event);
        setForm({
            title: event.title,
            description: event.description,
            location: event.location,
            imageFileId: event.imageFileId,
            start_time: event.start_time,
            end_time: event.end_time,
            isFeatured: event.isFeatured,
        });
        setShowModal(true);
    };

    const handleDelete = async (id: number) => {
        await deleteEvent(id);
    };

    const handleSubmit = async () => {
        // Ensure imageFileId is undefined if null
        const sanitizedForm = {
            ...form,
            imageFileId: form.imageFileId === null ? undefined : form.imageFileId,
            start_time: form.start_time ? new Date(form.start_time) : undefined,
            end_time: form.end_time ? new Date(form.end_time) : undefined,
        };
        if (editingEvent) {
            await updateEvent({ id: editingEvent.id, data: sanitizedForm });
        } else {
            await createEvent(sanitizedForm);
        }
        setShowModal(false);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <h3 style={{ margin: 10, fontWeight: 'bold' }}>Events Management</h3>
                    <IonButton slot="end" onClick={openCreateModal}>
                        <IonIcon icon={addCircle} />
                        Add Event
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {isLoading ? (
                    <IonLabel>Loading...</IonLabel>
                ) : (
                    <IonList>
                        {events.map((event: any) => (
                            <IonCard key={event.id}>
                                <IonCardHeader>
                                    <IonCardTitle>{event.title}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonImg src={event.imageFile?.url} alt={event.title} />
                                    <div>
                                        <p>{event.description}</p>
                                        <p>Location: {event.location}</p>
                                        <p>Start Time: {event.start_time?.toString()}</p>
                                        <p>End Time: {event.end_time?.toString()}</p>
                                        <p>Created By: {event.creator?.name}</p>
                                        <p>Is Featured: {event.isFeatured ? 'Yes' : 'No'}</p>
                                        <IonButton onClick={() => setOpenQrCode(event.verificationCode)}>Verification Code</IonButton>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                        <IonButton color="primary" onClick={() => openEditModal(event)}>
                                            <IonIcon icon={pencil} slot="start" />
                                            Edit
                                        </IonButton>
                                        <IonButton color="danger" onClick={() => handleDelete(event.id)}>
                                            <IonIcon icon={trash} slot="start" />
                                            Delete
                                        </IonButton>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        ))}
                    </IonList>
                )}
                <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>{editingEvent ? 'Edit Event' : 'Create Event'}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonItem>
                            <IonLabel position="stacked">Title</IonLabel>
                            <IonInput
                                value={form.title}
                                onIonInput={e => setForm(f => ({ ...f, title: e.detail.value! }))}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Description</IonLabel>
                            <IonTextarea
                                value={form.description}
                                onIonInput={e => setForm(f => ({ ...f, description: e.detail.value! }))}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Location</IonLabel>
                            <IonInput
                                value={form.location}
                                onIonInput={e => setForm(f => ({ ...f, location: e.detail.value! }))}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Start Time</IonLabel>
                            <IonDatetime
                                value={form.start_time}
                                onIonChange={e => setForm(f => ({ ...f, start_time: Array.isArray(e.detail.value) ? e.detail.value[0] ?? '' : (e.detail.value ?? '') }))}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">End Time</IonLabel>
                            <IonDatetime
                                value={form.end_time}
                                onIonChange={e => setForm(f => ({ ...f, end_time: Array.isArray(e.detail.value) ? e.detail.value[0] ?? '' : (e.detail.value ?? '') }))}
                            />
                        </IonItem>
                        <IonItem>
                            <FileSelector onChange={(file) => setForm(f => ({ ...f, imageFileId: file.id }))}/>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Featured Event?</IonLabel>
                            <IonRadioGroup
                                value={form.isFeatured}
                                onIonChange={e => setForm(f => ({ ...f, isFeatured: e.detail.value }))}
                            >
                                <IonItem>
                                    <IonLabel>Yes</IonLabel>
                                    <IonRadio slot="start" value={true} />
                                </IonItem>
                                <IonItem>
                                    <IonLabel>No</IonLabel>
                                    <IonRadio slot="start" value={false} />
                                </IonItem>
                            </IonRadioGroup>
                        </IonItem>

                    </IonContent>
                    <IonFooter>
                        <IonToolbar>
                            <IonButton expand="block" onClick={handleSubmit}>
                                {editingEvent ? 'Update' : 'Create'}
                            </IonButton>
                            <IonButton expand="block" color="medium" onClick={() => setShowModal(false)}>
                                Cancel
                            </IonButton>
                        </IonToolbar>
                    </IonFooter>
                </IonModal>
                <IonModal isOpen={!!openQrCode} onDidDismiss={() => setOpenQrCode(null)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                {events.find((e: any) => e.verificationCode === openQrCode)?.title || 'Event'}
                            </IonTitle>
                            <IonButton slot="end" fill="clear" onClick={() => setOpenQrCode(null)}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {openQrCode && (
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <QRCode value={openQrCode} size={256} />
                                <h1>{openQrCode}</h1>
                            </div>
                        )}
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default EventsManagementPage;