import React from "react";
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
} from "@ionic/react";
import {
    chevronBack,
    cartOutline,
    searchOutline,
    homeOutline,
    home,
} from "ionicons/icons";
import { useShop } from "./ShopContext";
import "./ShopHeader.css";

interface ShopHeaderProps {
    title: string;
    searchbar?: boolean;
    backArrow?: boolean;
    homeButton?: boolean;
    onSearchChange?: (value: string) => void;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({
    title,
    searchbar,
    onSearchChange,
    backArrow,
    homeButton,
}) => {
    const router = useIonRouter();

    const [searchQuery, setSearchQuery] = React.useState("");
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
                        {homeButton && (
                            <IonButton slot="start" onClick={() => router.push('/', "root")}>
                                <IonIcon icon={home} />
                            </IonButton>
                        )}
                        <IonTitle
                            slot="start"
                            className="shop-header-title"
                            onClick={() => router.push("/shop")}
                        >
                            3DPC Shop
                        </IonTitle>

                        {/* <p slot='primary' className="shop-header-subtitle">
                                {title}
                            </p> */}
                        <IonButtons slot="end">
                            <IonButton
                                onClick={() => router.push("/shop/cart")}
                                className="cart-button"
                            >
                                <IonIcon icon={cartOutline} />
                                <IonBadge color="light" className="cart-badge">
                                    {cart.length}
                                </IonBadge>
                            </IonButton>
                            {searchbar && (
                                <IonButton
                                    onClick={() => setSearchExpanded((s) => !s)}
                                    className="search-button"
                                >
                                    <IonIcon icon={searchOutline} />
                                </IonButton>
                            )}
                        </IonButtons>
                    </>
                ) : (
                    <>
                        <IonSearchbar
                            value={searchQuery}
                            onIonInput={(e) =>
                                handleSearchChange(
                                    (e.detail.value ?? "").toString()
                                )
                            }
                            showCancelButton="never"
                            placeholder="Search..."
                            animated
                            className="search-bar"
                            inputmode="search"
                            autoFocus
                            onBlur={() => setSearchExpanded(false)}
                        />
                    </>
                )}
            </IonToolbar>
        </IonHeader>
    );
};

export default ShopHeader;
