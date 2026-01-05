import {
    IonContent,
    IonPage,
    IonCard,
    IonIcon,
    useIonRouter,
} from "@ionic/react";
import { cubeOutline, trophyOutline, peopleOutline, storefrontOutline } from "ionicons/icons";
import Header from "../../../shared/components/Header/Header";
import UserWidget from "./widgets/UserWidget";
import "./AdminPage.css";

const AdminPage: React.FC = () => {
    const router = useIonRouter();

    const adminActions = [
        {
            title: "Manage Inventory",
            description: "View and manage models, materials, and printers",
            icon: cubeOutline,
            route: "/dashboard/inventory",
            color: "primary",
        },
        {
            title: "Edit Points",
            description: "Manage user points and rewards",
            icon: trophyOutline,
            route: "/dashboard/admin/points",
            color: "success",
        },
        {
            title: "User Management",
            description: "View and manage user accounts",
            icon: peopleOutline,
            route: "/dashboard/admin/users",
            color: "tertiary",
        },
        {
            title: "Orders",
            description: "View and manage orders",
            icon: storefrontOutline,
            route: "/dashboard/admin/orders",
            color: "warning",
        }
    ];

    return (
        <IonPage>
            <Header title="Admin" />
            <IonContent className="admin-page-content">
                <div className="admin-header">
                    <h1 className="admin-header-title">Admin Dashboard</h1>
                    <p className="admin-header-subtitle">
                        Manage your 3D printing platform
                    </p>
                </div>

                <div className="admin-section">
                    <h2 className="admin-section-title">Quick Actions</h2>
                    <div className="admin-actions-grid">
                        {adminActions.map((action, index) => (
                            <IonCard
                                key={index}
                                className="admin-action-card"
                                onClick={() => {
                                    if (action.route !== "#") {
                                        router.push(action.route);
                                    }
                                }}
                                button
                            >
                                <div className="admin-action-card-content">
                                    <div className="admin-action-icon">
                                        <IonIcon icon={action.icon} />
                                    </div>
                                    <h3 className="admin-action-title">
                                        {action.title}
                                    </h3>
                                    <p className="admin-action-description">
                                        {action.description}
                                    </p>
                                </div>
                            </IonCard>
                        ))}
                    </div>
                </div>

                <div className="admin-section">
                    <h2 className="admin-section-title">Recent Activity</h2>
                    <div className="admin-widgets-container">
                        <UserWidget />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AdminPage;
