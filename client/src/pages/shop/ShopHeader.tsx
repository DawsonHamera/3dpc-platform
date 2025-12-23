import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    useIonRouter,
    IonBackButton,
    IonBadge,
} from '@ionic/react';
import { chevronBack, cartOutline, searchOutline, exit, remove } from 'ionicons/icons';
import { useShop } from './ShopContext';

interface ShopHeaderProps {
    title: string;
    searchbar?: boolean;
    backArrow?: boolean;
    onSearchChange?: (value: string) => void;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ title, searchbar, onSearchChange, backArrow }) => {
    const router = useIonRouter();

    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchExpanded, setSearchExpanded] = React.useState(false);

    const { cart } = useShop();

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        onSearchChange?.(value);
    };

    return (
        <IonHeader>
            <IonToolbar color="primary">
                {!searchExpanded ? (
                    <>
                        {backArrow && (
                            <IonButtons slot="start">
                                <IonBackButton>
                                    <IonIcon icon={chevronBack} />
                                </IonBackButton>
                            </IonButtons>
                        )}
                        <IonTitle slot="start" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            3DPC
                            <span style={{ marginLeft: 16, fontSize: '1rem', verticalAlign: 'middle' }}>
                                {title}
                            </span>
                        </IonTitle>

                        

                        <IonButtons slot="end">
                            <IonButton onClick={() => router.push('/shop/cart')}>
                                <IonIcon icon={cartOutline} />
                                <IonBadge color='light'>{cart.length}</IonBadge>
                            </IonButton>
                            {searchbar && (
                                <IonButton onClick={() => setSearchExpanded((s) => !s)}>
                                    <IonIcon icon={searchOutline} />
                                </IonButton>
                            )}
                        </IonButtons>
                    </>
                ) : (
                    <>
                        <IonSearchbar
                            value={searchQuery}
                            onIonChange={(e) => handleSearchChange((e.detail.value ?? '').toString())}
                            showCancelButton="never"
                            placeholder="Search..."
                            animated
                            style={{ width: '100%' }}
                            inputmode="search"
                            autoFocus
                        />
                        <IonButtons slot="end">
                            <IonButton onClick={() => setSearchExpanded((s) => !s)}>
                                <IonIcon icon={searchOutline} />
                            </IonButton>
                        </IonButtons>
                    </>
                )}
            </IonToolbar>
        </IonHeader>
    );
};

export default ShopHeader;
