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
    home,
    settingsOutline,
    person,
    shield,
} from "ionicons/icons";
import { useShop } from "./ShopContext";
import { useAuth } from "../../../shared/hooks/useAuth";
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
    const { user } = useAuth();

    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchExpanded, setSearchExpanded] = React.useState(false);

    const { cart, setShowUserView, showUserView, setToast } = useShop();

    const isAdmin = user?.role?.name === "admin";

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
                            <IonButton
                                slot="start"
                                onClick={() => router.push("/", "root")}
                            >
                                <IonIcon icon={home} />
                            </IonButton>
                        )}
                        {isAdmin && !backArrow && (
                            <IonButton
                                slot="start"
                                onClick={() => {
                                    setShowUserView(!showUserView);
                                    setToast({
                                        message: showUserView
                                            ? "Switched to Admin View"
                                            : "Switched to User View",
                                        color: "primary",
                                        duration: 1500,
                                    });
                                }}
                            >
                                {showUserView ? (
                                    <IonIcon icon={person} />
                                ) : (
                                    <IonIcon icon={shield} />
                                )}
                            </IonButton>
                        )}
                        <IonTitle
                            slot="start"
                            className="shop-header-title"
                            onClick={() => router.push("/shop")}
                        >
                            3DPC Shop
                        </IonTitle>

                        {isAdmin && !showUserView ? (
                            <IonButton
                                slot="end"
                                onClick={() => router.push("/shop/manage")}
                                className="manage-button"
                            >
                                <IonIcon icon={settingsOutline} />
                            </IonButton>
                        ) : (
                            <IonButton
                                slot="end"
                                onClick={() => router.push("/shop/cart")}
                                className="cart-button"
                            >
                                <IonIcon icon={cartOutline} />
                                <IonBadge color="light" className="cart-badge">
                                    {cart.length}
                                </IonBadge>
                            </IonButton>
                        )}
                        {searchbar && (
                            <IonButton
                                slot="end"
                                onClick={() => setSearchExpanded((s) => !s)}
                                className="search-button"
                            >
                                <IonIcon icon={searchOutline} />
                            </IonButton>
                        )}
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
