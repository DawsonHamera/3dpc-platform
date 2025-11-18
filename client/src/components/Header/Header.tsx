import React, { useEffect, useState } from 'react';
import { IonToolbar, IonTitle, IonButtons, IonIcon, IonItem, IonList, IonButton, IonPopover, IonLabel, IonHeader } from '@ionic/react';
import { arrowBack, personCircleOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../../features/auth/authSlice';
import OneSignal from 'react-onesignal';
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';

interface HeaderProps {
    title: string;
    type?: string;
    onBack?: () => void;
    color?: string;
}

const Header: React.FC<HeaderProps> = ({ title, type, onBack, color }) => {
    const dispatch = useDispatch();
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [popoverEvent, setPopoverEvent] = useState<MouseEvent | undefined>(undefined);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const user = useSelector(selectCurrentUser)

    const handleLogout = () => {
        dispatch(logout());
        setIsPopoverOpen(false); // Close the menu after logout
    };

    const openPopover = (event: React.MouseEvent) => {
        setPopoverEvent(event.nativeEvent);
        setIsPopoverOpen(true);
    };

    useEffect(() => {
        const checkSub = async () => {
            const sub = await OneSignal.User.PushSubscription.optedIn;
            setIsSubscribed(sub ?? false);
        };
        checkSub();
    }, []);


    if (type === 'back') {
        return (
            <IonHeader className='ion-header'>
                <IonToolbar color={color || 'primary'}>
                    <IonButtons slot="start">
                        <IonButton onClick={() => onBack ? onBack() : history.back()}>
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>

                    <IonTitle style={{ textAlign: 'center' }}>{title}</IonTitle>

                    <IonButtons slot="end">
                        <div style={{ width: '48px' }} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
        );
    }
    return (
        <IonHeader>
            <IonPopover
                isOpen={isPopoverOpen}
                event={popoverEvent}
                onDidDismiss={() => setIsPopoverOpen(false)}
                dismissOnSelect={true}
                style={{ "--width": "50px !important" }}
            >
                <IonList style={{ padding: "10px" }}>
                    <IonItem>
                        <IonToolbar>
                            <IonLabel>
                                <b>{user?.name}</b>
                            </IonLabel>
                            <IonLabel slot="end">
                                <i>{user?.role.name}</i>
                            </IonLabel>
                        </IonToolbar>
                    </IonItem>
                    <IonItem button lines="none" onClick={handleLogout}>
                        <IonLabel>Sign Out</IonLabel>
                    </IonItem>
                    <IonItem>
                        {isSubscribed ? (
                            <IonButton
                                onClick={async () => {
                                    await OneSignal.User.PushSubscription.optOut();
                                    console.log(
                                        "unsubscribed from push notifications"
                                    );
                                    await OneSignal.logout();
                                    console.log("logged out");

                                    // Optionally show a toast or update UI
                                }}
                            >
                                Disable Push Notifications
                            </IonButton>
                        ) : (
                            <IonButton
                                onClick={async () => {
                                    await OneSignal.User.PushSubscription.optIn();
                                    console.log(
                                        "subscribed to push notifications"
                                    );
                                    await OneSignal.login(String(user?.id));
                                    console.log("subscribed and logged in");

                                    // Optionally show a toast or update UI
                                }}
                            >
                                Enable Push Notifications
                            </IonButton>
                        )}
                    </IonItem>
                </IonList>
            </IonPopover>

            <IonToolbar
                color={color || "primary"}
                style={{ color: color === "success" ? "white" : "black" }}
            >
                <IonButtons slot="end">
                    <IonButton onClick={openPopover}>
                        <IonIcon icon={personCircleOutline} />
                    </IonButton>
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;