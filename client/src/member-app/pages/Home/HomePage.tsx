import {
    IonBadge,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
} from "@ionic/react";
import "./HomePage.css";
import { location } from "ionicons/icons";
import EventSlider from "../../../shared/components/EventSlider/EventSlider";
import Header from "../../../shared/components/Header/Header";
import LeaderboardWidget from "./widgets/LeaderBoardWidget";
import DevWidget from "./widgets/DevWidget";
import Card from "../../../shared/components/Card/Card";
import QuickLinksWidget from "./widgets/QuickLinksWidget";
import DefaultHero from "./heroes/DefaultHero";
import HeroDisplay from "./HeroDisplay";

const HomePage: React.FC = () => {

    return (
        <IonPage>
            <Header title="3D Printing Club"/>
            <IonContent>
                <HeroDisplay />
                <div className="home-page-content">
                    
                    <LeaderboardWidget />
                    <Card title="Earn Points">
                        <IonList>
                            <IonItem>
                                <IonLabel>Attend a fundraiser</IonLabel>
                                <IonBadge color="primary">50 points</IonBadge>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Attend a work day</IonLabel>
                                <IonBadge color="primary">25 points</IonBadge>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Attend a workshop</IonLabel>
                                <IonBadge color="primary">20 points</IonBadge>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Attend a meeting</IonLabel>
                                <IonBadge color="primary">10 points</IonBadge>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Donate a bottle</IonLabel>
                                <IonBadge color="primary">2 points</IonBadge>
                            </IonItem>
                           
                        </IonList>
                    </Card>
                    {/* <QuickLinksWidget /> */}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;
