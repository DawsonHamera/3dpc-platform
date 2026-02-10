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
                        <p>Cash only • Pay upon pickup</p>
                    </IonText>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
