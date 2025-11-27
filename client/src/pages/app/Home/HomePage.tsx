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
import EventSlider from "../../../components/EventSlider/EventSlider";
import Header from "../../../components/Header/Header";
import LeaderboardWidget from "./widgets/LeaderBoardWidget";
import DevWidget from "./widgets/DevWidget";
import Card from "../../../components/Card/Card";

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <Header title="3D Printing Club" />
            <IonContent>
                <div className="home-page-content">
                    <Card title="Upcoming Events" subtitle="Don't miss out on workshops, fundraisers, and more!">
                    </Card>
                    <EventSlider filter="upcoming" />
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
                    <DevWidget />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;
