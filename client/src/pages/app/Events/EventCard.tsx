import { Event } from "../../../features/crud/events/event.types";

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div
        key={event.id}
        style={{
            position: 'relative',
            margin: '2rem auto',
            border: 'none',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            width: '85%',
            minHeight: '480px',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <div
            style={{
                height: '320px', // Increased height to show more of the image
                width: '100%',
                backgroundImage: `url('${event.imageFile?.url}')`,
                backgroundSize: 'cover', // Changed from 'cover' to 'contain'
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderBottom: '1px solid #e5e7eb',
            }}
        />
        <div
            style={{
                flex: 1,
                padding: '1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.85)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div
                    style={{
                        background: 'linear-gradient(135deg, var(--ion-color-primary) 0%, #000 100%)',
                        color: 'var(--ion-color-light)',
                        borderRadius: '12px',
                        padding: '0.5rem 1rem',
                        textAlign: 'center',
                        minWidth: '60px',
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
                <div style={{ flex: 1 }}>
                    <h2 style={{
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        margin: 0,
                        color: '#312e81',
                        letterSpacing: '0.02em',
                    }}>
                        {event.title}
                    </h2>
                </div>
            </div>
            <p style={{
                marginTop: '1.5rem',
                fontSize: '1rem',
                color: '#4b5563',
                lineHeight: 1.6,
                fontWeight: 400,
            }}>
                {event.description}
            </p>
        </div>
    </div>
);

export default EventCard;