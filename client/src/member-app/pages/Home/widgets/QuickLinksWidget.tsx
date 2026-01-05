import { IonButton, useIonRouter } from "@ionic/react";
import React from "react";
import Card from "../../../../shared/components/Card/Card";

const QuickLinksWidget: React.FC = () => {
  const router = useIonRouter();

  const handleRequestClick = () => {
    router.push('/order', 'forward');
  };

  return (
    <Card title="Quick links">
      <IonButton
        expand="block"
        fill="solid"
        color="primary"
        onClick={handleRequestClick}
        style={{ marginBottom: 12 }}
        aria-label="Go to Order Form"
      >
        Order Form
      </IonButton>
      <p
        style={{
          textAlign: 'center',
          color: 'var(--ion-text-color-secondary, #666)',
          fontSize: 14,
          margin: 0,
        }}
      >
        Use the order form to request supplies or send items directly to teachers.
      </p>
    </Card>
  );
};

export default QuickLinksWidget;
