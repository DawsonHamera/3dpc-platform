import {
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonSearchbar,
    IonText,
    IonTitle,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import {
    cartOutline,
    chevronBack,
    home,
    person,
    searchOutline,
    settingsOutline,
    shield,
} from "ionicons/icons";
import React from "react";
import { useAuth } from "../../../shared/hooks/useAuth";
import { useShop } from "./ShopContext";
import styles from "./ShopHeader.module.css";

export type ShopBreadcrumb = {
    label: string;
    path?: string;
};

interface ShopHeaderProps {
    title: string;
    searchbar?: boolean;
    backArrow?: boolean;
    homeButton?: boolean;
    breadcrumbs?: ShopBreadcrumb[];
    contextLabel?: string;
    onSearchChange?: (value: string) => void;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({
    title,
    searchbar,
    onSearchChange,
    backArrow,
    homeButton,
    contextLabel,
}) => {
    const router = useIonRouter();
    const { user } = useAuth();

    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchExpanded, setSearchExpanded] = React.useState(false);

    const { cart, setViewMode, viewMode, setToast } = useShop();

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
                                    setViewMode(
                                        viewMode === "admin" ? "user" : "admin",
                                    );
                                    setToast({
                                        message:
                                            viewMode === "admin"
                                                ? "Switched to User View"
                                                : "Switched to Admin View",
                                        color: "primary",
                                        duration: 1500,
                                    });
                                }}
                            >
                                {viewMode === "user" ? (
                                    <IonIcon icon={person} />
                                ) : (
                                    <IonIcon icon={shield} />
                                )}
                            </IonButton>
                        )}
                        <IonTitle
                            className={styles.titleBlock}
                            onClick={() => router.push("/shop")}
                        >
                            <span className={styles.brandTitle}>3DPC Shop</span>
                        </IonTitle>
                        {isAdmin && viewMode === "admin" ? (
                            <IonButton
                                slot="end"
                                onClick={() => router.push("/shop/manage")}
                                className={styles.actionButton}
                            >
                                <IonIcon icon={settingsOutline} />
                            </IonButton>
                        ) : (
                            <IonButton
                                slot="end"
                                onClick={() => router.push("/shop/cart")}
                                className={styles.actionButton}
                            >
                                <IonIcon icon={cartOutline} />
                                <IonBadge
                                    color="light"
                                    className={styles.cartBadge}
                                >
                                    {cart.length}
                                </IonBadge>
                            </IonButton>
                        )}
                        {searchbar && (
                            <IonButton
                                slot="end"
                                onClick={() => setSearchExpanded((s) => !s)}
                                className={styles.actionButton}
                            >
                                <IonIcon icon={searchOutline} />
                            </IonButton>
                        )}
                        {contextLabel && (
                            <IonButtons
                                slot="end"
                                className={styles.contextWrap}
                            >
                                <IonText className={styles.contextLabel}>
                                    {contextLabel}
                                </IonText>
                            </IonButtons>
                        )}
                    </>
                ) : (
                    <>
                        <IonSearchbar
                            value={searchQuery}
                            onIonInput={(e) =>
                                handleSearchChange(
                                    (e.detail.value ?? "").toString(),
                                )
                            }
                            showCancelButton="never"
                            placeholder="Search..."
                            animated
                            className={styles.searchBar}
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
