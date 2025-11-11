import React, { useState } from 'react';
import { Event } from '../../../features/crud/events/event.types';
import { IonIcon, IonSearchbar } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';

const EventList: React.FC<{ events: Event[] }> = ({ events }) => {
    const [searchText, setSearchText] = useState('');

    const filteredEvents = events?.filter(
        event =>
            event.title.toLowerCase().includes(searchText.toLowerCase()) ||
            event.location?.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <section
            style={{
                background: '#fff',
                padding: '32px 0',
            }}
        >
            <div
                style={{
                    width: 400,
                    margin: '0 auto',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100vh - 100px)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '18px',
                    }}
                >
                    <IonIcon icon={calendarOutline} style={{ fontSize: '1.7rem', color: 'var(--ion-color-primary)' }} />
                    <h2
                        style={{
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            letterSpacing: '0.5px',
                            color: '#2d3a4a',
                            margin: 0,
                        }}
                    >
                        Calendar
                    </h2>
                </div>
                <IonSearchbar
                    value={searchText}
                    onIonInput={e => setSearchText((e.target as HTMLInputElement).value)}
                    placeholder="Search events"
                    style={{
                        marginBottom: '18px',
                        '--background': '#f5f7fa',
                        '--color': '#2d3a4a',
                        '--placeholder-color': '#8395a7',
                        '--box-shadow': '0 2px 8px rgba(56,173,169,0.08)',
                        borderRadius: '8px',
                        fontSize: '1rem'
                    }}
                />
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {filteredEvents?.map(event => (
                            <li
                                key={event.id}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '16px 0',
                                    borderBottom: '1px solid #e3e6ee',
                                    transition: 'background 0.2s',
                                    cursor: 'pointer',
                                    position: 'relative',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = '#f5f7fa')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                            >
                                <div
                                    style={{
                                        background: 'linear-gradient(135deg, var(--ion-color-primary) 0%, #000 100%)',
                                        color: 'var(--ion-color-light)',
                                        borderRadius: '12px',
                                        padding: '0.5rem 1rem',
                                        textAlign: 'center',
                                        minWidth: '40px',
                                        boxShadow: '0 2px 8px rgba(30,41,59,0.10)',
                                        border: '1px solid var(--ion-color-primary-shade)',
                                    }}
                                >
                                    <div style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                                        {new Date(event.startTime).toLocaleString('en-US', { month: 'short' }).toUpperCase()}
                                    </div>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>
                                        {new Date(event.startTime).toLocaleString('en-US', { day: 'numeric' })}
                                    </div>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                    <span style={{ fontWeight: 700, color: '#2d3a4a', fontSize: '1.08rem', letterSpacing: '0.5px' }}>
                                        {event.title}
                                    </span>
                                    <span style={{ fontSize: '0.98rem', color: '#8395a7', fontWeight: 500 }}>
                                        {event.location}
                                    </span>
                                    <span style={{ fontSize: '0.97rem', color: 'var(--ion-color-primary)', fontWeight: 500 }}>
                                        {new Date(event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(event.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        marginLeft: 'auto',
                                        padding: '0 8px',
                                        color: 'var(--ion-color-primary)',
                                        fontSize: '1.2rem',
                                        opacity: 0.7,
                                    }}
                                >
                                    <IonIcon icon={calendarOutline} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EventList;
