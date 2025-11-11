// import React, { useEffect, useState, useMemo } from 'react';
// import {
//     IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
//     IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon,
//     IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
//     IonPage, IonProgressBar, IonRow, IonSearchbar, IonTitle, IonToolbar
// } from '@ionic/react';
// import { trash } from 'ionicons/icons';
// import { useGetEventDaysQuery, useGetEventsQuery } from '../../features/events/eventsApi';
// import { useAuth } from '../../hooks/useAuth';
// import Calendar from '../../components/Calendar/Calendar';
// import { EventItem } from '../../features/events/eventsTypes';
// import FilteredList from '../../components/FilteredList/FilteredList';

// const CalendarPage: React.FC = () => {
//     const { user } = useAuth();
//     const { data: eventDays, isLoading: eventDaysLoading } = useGetEventDaysQuery();
//     const { data: events = [], isLoading: eventsLoading } = useGetEventsQuery();

//     const [selected, setSelected] = useState<number | null>(null)


//     return (
//         <IonPage>
//             <IonHeader>
//                 <IonToolbar>
//                     <IonTitle>Calendar</IonTitle>
//                 </IonToolbar>
//             </IonHeader>

//             {!eventDaysLoading && eventDays &&
//                 <Calendar eventDays={eventDays} setSelected={setSelected} selected={selected} />}
//             Selected: {selected}
//             {eventsLoading ? (
//                 <IonProgressBar type="indeterminate" />
//             ) : (
//                 <FilteredList
//                     items={events}
//                     selected={selected}
//                     setSelected={setSelected}
//                     renderItem={
//                         (eventItems, selected, setSelected) => eventItems.map((eventItem: EventItem) => (
//                             <IonCard key={eventItem.id} onClick={() => setSelected(eventItem.id)}>
//                                 <IonCardHeader>
//                                     <IonCardTitle>{eventItem.name}</IonCardTitle>
//                                 </IonCardHeader>
//                                 <IonCardContent>
//                                     {eventItem.id}
//                                     {eventItem.event_days.map((eventDay, idx) => (
//                                         <h1 key={idx}>{new Date(eventDay.date).toDateString()}</h1>
//                                     ))}
//                                 </IonCardContent>
//                             </IonCard>
//                         ))
//                     }
//                 />
//             )}


//                 {/* Optional: Uncomment if you want the card sliding version */}
//                 {/*
//                 <div style={{ paddingTop: '20px' }}>
//                     {eventsLoading ? (
//                         <IonProgressBar type="indeterminate" />
//                     ) : events.length ? (
//                         events.map((event) => (
//                             <IonItemSliding key={event.id}>
//                                 <IonItem lines="none">
//                                     <IonCard
//                                         style={{ borderLeft: `10px solid var(--ion-color-primary)`, width: '100%' }}
//                                         className='glassmorphism'
//                                     >
//                                         <IonGrid>
//                                             <IonRow>
//                                                 <IonCol>
//                                                     <IonCardHeader>
//                                                         <IonCardTitle>{event.name}</IonCardTitle>
//                                                         <IonCardSubtitle>{event.details}</IonCardSubtitle>
//                                                     </IonCardHeader>
//                                                 </IonCol>
//                                             </IonRow>
//                                         </IonGrid>
//                                     </IonCard>
//                                 </IonItem>
//                                 {user?.role === 'member' && (
//                                     <IonItemOptions side="end">
//                                         <IonItemOption color="danger">
//                                             <IonIcon slot="icon-only" icon={trash} />
//                                         </IonItemOption>
//                                     </IonItemOptions>
//                                 )}
//                             </IonItemSliding>
//                         ))
//                     ) : (
//                         <h1>No events</h1>
//                     )}
//                 </div>
//                 */}
//         </IonPage>
//     );
// };

// export default CalendarPage;
