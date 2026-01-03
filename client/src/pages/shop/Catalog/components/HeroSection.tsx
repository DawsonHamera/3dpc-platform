import {
    IonCard,
    IonImg,
    IonCardContent,
    IonText,
    IonButton,
    IonIcon,
    IonChip,
    IonLabel,
} from "@ionic/react";
import {
    cartOutline,
    calendarOutline,
    locationOutline,
    timeOutline,
    peopleOutline,
} from "ionicons/icons";
import "./HeroSection.css";

interface HeroSectionProps {
    onStartShopping?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartShopping }) => {
    const upcomingEvents = [
        {
            name: "Spring Maker Fair",
            date: "March 15, 2026",
            time: "10:00 AM - 4:00 PM",
            location: "Downtown Community Center",
            description:
                "See live 3D printing demos and shop exclusive products",
        },
        {
            name: "Earth Day Recycling Drive",
            date: "April 22, 2026",
            time: "9:00 AM - 2:00 PM",
            location: "City Park Pavilion",
            description:
                "Bring old plastics, get discounts on eco-friendly prints",
        },
        {
            name: "Tech Innovation Showcase",
            date: "May 8, 2026",
            time: "2:00 PM - 7:00 PM",
            location: "University Campus Hall",
            description: "New product launches and custom design consultations",
        },
    ];

    return (
        <section className="hero-section">
            <IonImg
                src="/images/printerBackdrop.jpg"
                className="hero-backdrop"
            />
            <div className="hero-section-content">
                <div className="hero-main-content">
                    <IonText className="hero-title">
                        <h1>Welcome to the 3DPC Shop</h1>
                    </IonText>
                    <IonText className="hero-description">
                        <p>
                            Browse our collection of innovative 3D printed
                            products and order for pickup at Del Oro High
                            School.
                        </p>
                    </IonText>
                    <IonButton
                        expand="block"
                        color="primary"
                        className="shop-now-btn"
                        onClick={onStartShopping}
                    >
                        <IonIcon slot="start" icon={cartOutline} />
                        Start Shopping
                    </IonButton>{" "}
                    <IonText className="hero-payment-note">
                        <p>
                            <IonIcon icon={cartOutline} /> Cash only • Pay upon
                            pickup
                        </p>
                    </IonText>
                </div>
                {/* 
                <div className="events-section">
                    <IonText className="events-header">
                        <h2>
                            <IonIcon
                                icon={calendarOutline}
                                className="section-icon"
                            />
                            Meet Us In Person
                        </h2>
                        <p>
                            Join us at upcoming fundraising events to see our
                            products live and support our community initiatives!
                        </p>
                    </IonText>

                    <div className="events-list">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="event-item">
                                <div className="event-header">
                                    <IonText color="primary">
                                        <h3>{event.name}</h3>
                                    </IonText>
                                </div>
                                <div className="event-details">
                                    <div className="event-detail">
                                        <IonIcon
                                            icon={calendarOutline}
                                            color="medium"
                                        />
                                        <IonText color="medium">
                                            <span>{event.date}</span>
                                        </IonText>
                                    </div>
                                    <div className="event-detail">
                                        <IonIcon
                                            icon={timeOutline}
                                            color="medium"
                                        />
                                        <IonText color="medium">
                                            <span>{event.time}</span>
                                        </IonText>
                                    </div>
                                    <div className="event-detail">
                                        <IonIcon
                                            icon={locationOutline}
                                            color="medium"
                                        />
                                        <IonText color="medium">
                                            <span>{event.location}</span>
                                        </IonText>
                                    </div>
                                </div>
                                <IonText className="event-description">
                                    <p>{event.description}</p>
                                </IonText>
                            </div>
                        ))}
                    </div> */}
                {/* </div> */}
            </div>
        </section>
    );
};

export default HeroSection;
