import { IonIcon, useIonRouter } from "@ionic/react";
import {
    cubeOutline,
    peopleOutline,
    storefrontOutline,
    trophyOutline,
} from "ionicons/icons";
import styles from "./QuickActionsWidget.module.css";

interface QuickAction {
    title: string;
    description: string;
    icon: string;
    route: string;
    color: string;
}

const QuickActionsWidget: React.FC = () => {
    const router = useIonRouter();

    const adminActions: QuickAction[] = [
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
        },
    ];

    return (
        <div className={styles.grid}>
            {adminActions.map((action, index) => (
                <div
                    key={index}
                    className={styles.card}
                    onClick={() => {
                        if (action.route !== "#") {
                            router.push(action.route);
                        }
                    }}
                >
                    <div className={styles.iconWrapper}>
                        <IonIcon icon={action.icon} className={styles.icon} />
                    </div>
                    <h3 className={styles.title}>{action.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default QuickActionsWidget;
