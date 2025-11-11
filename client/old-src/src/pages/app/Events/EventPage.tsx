import { IonPage, IonContent, IonIcon } from '@ionic/react';
import EventWidget from './EventCarousel';
import Header from '../../../components/Header/Header';
import { starOutline, calendarOutline } from 'ionicons/icons';
import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import { useGetEventsQuery } from '../../../features/crud/events/eventsApi';
import EventCarousel from './EventCarousel';
import EventList from './EventList';

const EventPage: React.FC = () => {

    const { data: events, isLoading: isLoadingEvents } = useGetEventsQuery();
    const featuredEvents = events?.filter(event => event.isFeatured && new Date(event.endTime) > new Date()).sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
    const upcomingEvents = events?.filter(event => new Date(event.endTime) > new Date()).sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

    if (featuredEvents && featuredEvents?.length > 0 && upcomingEvents && upcomingEvents?.length > 0) {
        return (
            <IonPage>
                <Header title="Upcoming Events" />
                <IonContent>
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #fffbe6 0%, var(--ion-color-primary) 100%)',
                            padding: '32px 0',
                        }}
                    >
                        <div
                            style={{
                                margin: '0 auto',
                                borderRadius: '16px',
                                // padding: '24px',
                                // margin: '24px',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    marginBottom: '18px',
                                }}
                            >
                                <IonIcon icon={starOutline} style={{ fontSize: '1.7rem', color: '#e6b800' }} />
                                <h2
                                    style={{
                                        fontWeight: 700,
                                        fontSize: '1.25rem',
                                        letterSpacing: '0.5px',
                                        color: '#2d3a4a',
                                        margin: 0,
                                    }}
                                >
                                    Featured Events
                                </h2>
                            </div>
                            <EventCarousel events={featuredEvents} />
                        </div>
                    </div>
                    <EventList events={upcomingEvents || []} />
                </IonContent>
            </IonPage>
        );
    }

    if (!featuredEvents || featuredEvents?.length === 0 && upcomingEvents && upcomingEvents?.length > 0) {
        return (
            <IonPage>
                <Header title="Upcoming Events" />
                <EventList events={upcomingEvents || []} />
            </IonPage>
        );
    }

    if (!upcomingEvents || upcomingEvents?.length === 0) {
        return (
            <IonPage>
                <Header title="No Upcoming Events" />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%',
                        background: 'linear-gradient(135deg, #232526 0%, var(--ion-color-primary) 100%)',
                        margin: '32px auto'
                    }}
                >
                    <IonIcon icon={calendarOutline} style={{ fontSize: '2.5rem', color: 'var(--ion-color-primary)', marginBottom: '16px' }} />
                    <h2 style={{ color: '#232526', fontWeight: 700, marginBottom: '8px' }}>
                        No Upcoming Events
                    </h2>
                    <p style={{ color: '#4a6274', fontSize: '1rem', textAlign: 'center', margin: 0 }}>
                        There are currently no upcoming events.<br />
                        Please check back later!
                    </p>
                </div>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <Header title="Upcoming Events" />
            {featuredEvents && featuredEvents?.length > 0 && (
                <IonContent>


                </IonContent>
            )}
            {!featuredEvents || featuredEvents?.length === 0 && upcomingEvents && upcomingEvents?.length > 0 && (
                <EventList events={upcomingEvents || []} />
            )}

        </IonPage>
    );
};

export default EventPage;