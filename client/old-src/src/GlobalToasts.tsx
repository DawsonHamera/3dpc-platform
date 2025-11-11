import { IonToast } from "@ionic/react";
import { globeOutline, refreshOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
import { useServiceWorkerUpdate } from "./hooks/useServiceWorkerUpdate";
import useNetworkStatus from "./services/NetworkService";

const GlobalToasts: React.FC = () => {
    const networkStatus = useNetworkStatus();
    const [wasOffline, setWasOffline] = useState(false);
    const [showOnlineToast, setShowOnlineToast] = useState(false);
    const [showUpdateToast, setShowUpdateToast] = useState(false);
    const { updateAvailable, reloadPage } = useServiceWorkerUpdate();



    const handleOfflineToast = () => {
        if (networkStatus === 'offline') {
            setWasOffline(true);
        } else if (networkStatus === 'online' && wasOffline) {
            setShowOnlineToast(true);
            setWasOffline(false);
        }
    }

    const handleUpdateToast = () => {
        if (updateAvailable) {
            setShowUpdateToast(true);
        }
    }


    useEffect(() => {
        handleOfflineToast();
        handleUpdateToast();
    }, [networkStatus, updateAvailable]);

    return (
        <>
            <IonToast
                isOpen={networkStatus === 'offline'}
                message="Offline Mode: You are currently disconnected. Some features may be unavailable until you're back online."
                icon={globeOutline}
                duration={5000}
                position="top"
            />
            <IonToast
                isOpen={showOnlineToast}
                message="You're back online!"
                duration={3000}
                position="top"
                icon={globeOutline}
                onDidDismiss={() => setShowOnlineToast(false)}
            />
            <IonToast
                isOpen={showUpdateToast}
                message="A new update is available"
                icon={refreshOutline}
                position="top"
                buttons={[
                    {
                        text: 'Reload',
                        handler: reloadPage
                    },
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: () => setShowUpdateToast(false)
                    }
                ]}
            />
        </>
    )
}

export default GlobalToasts;