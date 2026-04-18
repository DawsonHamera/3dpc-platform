import { IonButton, IonIcon, IonImg, IonText } from "@ionic/react";
import {
    arrowForwardOutline,
    cartOutline,
    schoolOutline,
} from "ionicons/icons";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
    onStartShopping?: () => void;
    isTeacher?: boolean;
    onSwitchCatalog?: (nextType: "general" | "teachers") => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    onStartShopping,
    isTeacher,
    onSwitchCatalog,
}) => {
    if (isTeacher) {
        return (
            <section className={styles.heroSection}>
                <IonImg
                    src="/images/printerBackdrop.jpg"
                    className={styles.heroBackdrop}
                />
                <div className={styles.heroSectionContent}>
                    <div className={styles.heroMainContent}>
                        <div className={styles.heroEyebrow}>
                            Teacher catalog
                        </div>
                        <IonText className={styles.heroTitle}>
                            <h1>
                                Classroom-ready supplies, zero checkout cost
                            </h1>
                        </IonText>
                        <IonText className={styles.heroSubtitle}>
                            <IonIcon icon={schoolOutline} />
                            <p>Teachers</p>
                        </IonText>
                        <IonText className={styles.heroDescription}>
                            <p>
                                Browse supplies built by students and schedule
                                pickup at Del Oro High School.
                            </p>
                        </IonText>
                        <div className={styles.heroActions}>
                            <IonButton
                                expand="block"
                                color="light"
                                className={styles.shopNowButton}
                                onClick={onStartShopping}
                            >
                                <IonIcon slot="start" icon={cartOutline} />
                                Start Browsing
                            </IonButton>
                            <IonButton
                                expand="block"
                                fill="clear"
                                color="light"
                                className={styles.shopSecondaryButton}
                                onClick={() => onSwitchCatalog?.("general")}
                            >
                                View the main catalog
                                <IonIcon
                                    slot="end"
                                    icon={arrowForwardOutline}
                                />
                            </IonButton>
                        </div>
                        <IonText className={styles.heroPaymentNote}>
                            <p>Completely free for Del Oro teachers</p>
                        </IonText>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.heroSection}>
            <IonImg
                src="/images/printerBackdrop.jpg"
                className={styles.heroBackdrop}
            />
            <div className={styles.heroSectionContent}>
                <div className={styles.heroMainContent}>
                    <div className={styles.heroEyebrow}>
                        Student-made products
                    </div>
                    <IonText className={styles.heroTitle}>
                        <h1>Discover custom 3D prints for pickup at school</h1>
                    </IonText>
                    <IonText className={styles.heroDescription}>
                        <p>
                            Explore practical and creative designs from the 3D
                            Printing Club, then reserve your favorites.
                        </p>
                    </IonText>
                    <div className={styles.heroActions}>
                        <IonButton
                            expand="block"
                            color="light"
                            className={styles.shopNowButton}
                            onClick={onStartShopping}
                        >
                            <IonIcon slot="start" icon={cartOutline} />
                            Start Shopping
                        </IonButton>
                        <IonButton
                            expand="block"
                            fill="clear"
                            color="light"
                            className={styles.shopSecondaryButton}
                            onClick={() => onSwitchCatalog?.("teachers")}
                        >
                            Browse teacher catalog
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonButton>
                    </div>
                    <IonText className={styles.heroPaymentNote}>
                        <p>Cash only • Pay upon pickup</p>
                    </IonText>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
