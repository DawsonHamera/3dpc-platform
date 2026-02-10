import {
    IonIcon,
    IonLabel,
    IonProgressBar,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from "@ionic/react";
import {
    calendarOutline,
    chatboxEllipsesOutline,
    clipboardOutline,
    home,
    leafOutline,
    shieldOutline,
} from "ionicons/icons";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectCurrentUser, useLoginMutation } from "../shared/features";
import useHeartbeat from "../shared/services/HeartbeatService";
import useNetworkStatus from "../shared/services/NetworkService";
import AdminPage from "./pages/Admin/AdminPage";
import PointsPage from "./pages/Admin/PointsPage";
import UserManagementPage from "./pages/Admin/Users/UserManagementPage";
import ChatPage from "./pages/Chat/ChatPage";
import EventDetailsPage from "./pages/Events/EventDetailsPage";
import EventsPage from "./pages/Events/EventsPage";
import HomePage from "./pages/Home/HomePage";
import InventoryPage from "./pages/Inventory/InventoryPage";
import RecyclePage from "./pages/Recycle/RecyclePage";
import CreateTaskPage from "./pages/Tasks/CreatePrintTask";
import TasksPage from "./pages/Tasks/TasksPage";
import OrderManagementPage from "./pages/Admin/OrderManagement";

const App: React.FC = () => {
    const user = useSelector(selectCurrentUser);
    const authenticated = !!user;
    const [login, { isLoading }] = useLoginMutation();
    const networkStatus = useNetworkStatus();

    useHeartbeat(user?.id);
    const roleName = (user?.role as any)?.name;

    if (!isLoading && !authenticated) {
        console.log("Unauthenticated, redirecting to login");
        return <Redirect to="/login" />;
    }

    if (isLoading) {
        return <IonProgressBar type="indeterminate" />;
    }

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/dashboard" component={HomePage} />
                <Route exact path="/dashboard/events" component={EventsPage} />
                <Route exact path="/dashboard/admin" component={AdminPage} />
                <Route
                    exact
                    path="/dashboard/admin/points"
                    component={PointsPage}
                />
                <Route
                    exact
                    path="/dashboard/admin/users"
                    component={UserManagementPage}
                />
                <Route
                    exact
                    path="/dashboard/admin/shop"
                    component={OrderManagementPage}
                />
                <Route
                    exact
                    path="/dashboard/recycle"
                    component={RecyclePage}
                />
                <Route exact path="/dashboard/chat" component={ChatPage} />
                <Route
                    exact
                    path="/dashboard/events/:eventId"
                    component={EventDetailsPage}
                />
                <Route exact path="/dashboard/tasks" component={TasksPage} />
                <Route
                    exact
                    path="/dashboard/tasks/create"
                    component={CreateTaskPage}
                />
                <Route
                    exact
                    path="/dashboard/inventory"
                    component={InventoryPage}
                />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" id="ion-tab-bar">
                <IonTabButton tab="home" href="/dashboard">
                    <IonIcon aria-hidden="true" icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="events" href="/dashboard/events">
                    <IonIcon aria-hidden="true" icon={calendarOutline} />
                    <IonLabel>Events</IonLabel>
                </IonTabButton>
                {/* <IonTabButton
                    tab="shop"
                    href={roleName === "admin" ? "/shop/admin" : "/shop"}
                >
                    <IonIcon aria-hidden="true" icon={cartOutline} />
                    <IonLabel>Shop</IonLabel>
                </IonTabButton> */}
                <IonTabButton tab="recycle" href="/dashboard/recycle">
                    <IonIcon aria-hidden="true" icon={leafOutline} />
                    <IonLabel>Recycle</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tasks" href="/dashboard/tasks">
                    <IonIcon aria-hidden="true" icon={clipboardOutline} />
                    <IonLabel>Tasks</IonLabel>
                </IonTabButton>
                {user && roleName === "admin" && (
                    <IonTabButton tab="admin" href="/dashboard/admin">
                        <IonIcon aria-hidden="true" icon={shieldOutline} />
                        <IonLabel>Admin</IonLabel>
                    </IonTabButton>
                )}
                {user &&
                    ["member", "admin", "viewer"].includes(
                        roleName as string,
                    ) && (
                        <IonTabButton tab="chat" href="/dashboard/chat">
                            <IonIcon
                                aria-hidden="true"
                                icon={chatboxEllipsesOutline}
                            />
                            <IonLabel>Chat</IonLabel>
                        </IonTabButton>
                    )}
            </IonTabBar>
        </IonTabs>
    );
};

export default App;
