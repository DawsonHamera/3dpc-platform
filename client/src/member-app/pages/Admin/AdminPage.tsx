import { IonContent, IonPage } from "@ionic/react";
import Header from "../../../shared/components/Header/Header";
import styles from "./AdminPage.module.css";
import ActivityWidget from "./widgets/Activity/widget";
import QuickActionsWidget from "./widgets/QuickActions/widget";
import UserWidget from "./widgets/User/widget";

const AdminPage: React.FC = () => {
    return (
        <IonPage>
            <Header title="Admin" />
            <IonContent className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.headerTitle}>Admin Dashboard</h1>
                    <p className={styles.headerSubtitle}>
                        Manage 3DPC platform
                    </p>
                </div>

                <div className={styles.section}>
                    <div style={{ padding: "0 16px" }}>
                        <QuickActionsWidget />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Recent Activity</h2>
                    <div className={styles.widgetsContainer}>
                        <ActivityWidget />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Active Users</h2>
                    <div className={styles.widgetsContainer}>
                        <UserWidget />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AdminPage;
