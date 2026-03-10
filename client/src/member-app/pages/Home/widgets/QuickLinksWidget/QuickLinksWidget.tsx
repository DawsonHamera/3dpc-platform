import { IonButton, useIonRouter } from "@ionic/react";
import React from "react";
import Card from "../../../../../shared/components/Card/Card";
import styles from "./QuickLinksWidget.module.css";

const QuickLinksWidget: React.FC = () => {
    const router = useIonRouter();

    const handleRequestClick = () => {
        router.push("/order", "forward");
    };

    return (
        <Card title="Quick links">
            <IonButton
                expand="block"
                fill="solid"
                color="primary"
                onClick={handleRequestClick}
                className={styles.orderButton}
                aria-label="Go to Order Form"
            >
                Order Form
            </IonButton>
            <p className={styles.description}>
                Use the order form to request supplies or send items directly to
                teachers.
            </p>
        </Card>
    );
};

export default QuickLinksWidget;
