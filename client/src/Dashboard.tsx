import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonProgressBar,
    IonRouterOutlet,
    IonLabel,
} from "@ionic/react";
import {
    home,
    chatboxEllipsesOutline,
    calendarOutline,
    shieldOutline,
    cartOutline,
    leafOutline,
    clipboardOutline,
} from "ionicons/icons";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectCurrentUser } from "./features/auth/authSlice";
import { useLoginMutation } from "./features/auth/authApi";
import useNetworkStatus from "./services/NetworkService";
import useHeartbeat from "./services/HeartbeatService";
import HomePage from "./pages/app/Home/HomePage";
import Header from "./components/Header/Header";
import EventsPage from "./pages/app/Events/EventsPage";
import AdminPage from "./pages/app/Admin/AdminPage";
import PointsPage from "./pages/app/Admin/PointsPage";
import RecyclePage from "./pages/app/Recycle/RecyclePage";
import ChatPage from "./pages/app/Chat/ChatPage";
import EventAttendancePage from "./pages/app/Events/EventDetailsPage";
import EventDetailsPage from "./pages/app/Events/EventDetailsPage";
import TasksPage from "./pages/app/Tasks/TasksPage";
import CreateTaskPage from "./pages/app/Tasks/CreatePrintTask";
import InventoryPage from "./pages/app/Inventory/InventoryPage";

const Dashboard: React.FC = () => {
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
                <Route exact path="/dashboard/tasks/create" component={CreateTaskPage} />
                <Route exact path="/dashboard/inventory" component={InventoryPage} />
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
                        roleName as string
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

export default Dashboard;
