import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonProgressBar,
  IonRouterOutlet,
  IonTab,
  IonLabel,
} from "@ionic/react";
import {
  analyticsOutline,
  home,
  chatboxEllipsesOutline,
  calendarOutline,
  checkmarkCircleOutline,
  cogOutline,
  listOutline,
  gitNetworkOutline,
  shieldOutline,
  cartOutline,
  leafOutline,
} from "ionicons/icons";
import { Redirect, Route } from "react-router";
import useNetworkStatus from "../../services/NetworkService";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApi";
import MaterialPage from "./Inventory/MaterialPage";
import ModelPage from "./Inventory/ModelPage";
import PrinterPage from "./Inventory/PrinterPage";
import ProcessesPage from "./Inventory/ProcessPage";
import UserManagementPage from "./UserManagment";
import RequestManagementPage from "./ManageRequests/RequestManagmentPage";
import useHeartbeat from "../../services/HeartbeatService";
import ChatPage from "./Chat/ChatPage";
import HomePage from "./Home/HomePage";
import GuidePage from "./Inventory/GuideForm/GuidePage";
import FilesPage from "./Inventory/FilesPage";
import ProcessPage from "./Process/ProcessPage";
import ProcessInstancesPage from "./Process/ProcessInstances/ProcessInstancesPage";
import MyProcessesPage from "./Process/MyProcesses/MyProcessesPage";
import ProcessDetailPage from "./Process/MyProcesses/ProcessDetailPage";
import ScheduleTaskForm from "./Volunteer/Volunteer";
import WorkflowManagement from "./WorkflowManagement";
import "./Dashboard.css";
import EventPage from "./Events/EventPage";
import AdminPage from "./Admin/AdminDashboardPage";
import EventsManagementPage from "./Inventory/EventsManagementPage";
import ConstructionPage from "../ConstructionPage";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedTab from "./ProtectedTab";
import PointsPage from "./Inventory/PointsPage";
import Admin from "./Admin/Admin";
import RecyclePage from "./RecyclePage";

const Dashboard: React.FC = () => {
  const user = useSelector(selectCurrentUser);
  const authenticated = !!user;
  const [login, { isLoading }] = useLoginMutation();
  const networkStatus = useNetworkStatus();
  useHeartbeat(user?.id);
  if (!isLoading && !authenticated) {
    console.log("Unauthenticated, redirecting to login");
    return <Redirect to="/login" />;
  }
  1;
  if (isLoading) {
    return <IonProgressBar type="indeterminate" />;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          exact
          path="/dashboard"
          render={() => <Redirect to="/dashboard/home" />}
        />
        <Route exact path="/dashboard/home" component={HomePage} />
        <Route
          exact
          path="/dashboard/construction"
          component={ConstructionPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/materials"
          allowedRoles={["admin"]}
          component={MaterialPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/models"
          allowedRoles={["admin"]}
          component={ModelPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/printers"
          allowedRoles={["admin"]}
          component={PrinterPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/processes"
          allowedRoles={["admin"]}
          component={ProcessesPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/guides"
          allowedRoles={["admin"]}
          component={GuidePage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/chat/:id"
          allowedRoles={["member", "admin", "viewer"]}
          component={ChatPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/chat"
          allowedRoles={["member", "admin", "viewer"]}
          component={ChatPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/files"
          allowedRoles={["admin"]}
          component={FilesPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/points"
          allowedRoles={["admin"]}
          component={PointsPage}
        />
        <Route exact path="/dashboard/events" component={EventPage} />
        <Route exact path="/dashboard/process/:id" component={ProcessPage} />
        <Route
          exact
          path="/dashboard/process-instances"
          component={ProcessInstancesPage}
        />
        <Route
          exact
          path="/dashboard/my-processes"
          component={MyProcessesPage}
        />
        <Route
          exact
          path="/dashboard/my-processes/:id"
          component={ProcessDetailPage}
        />
        <Route
          exact
          path="/dashboard/workflow-management"
          component={WorkflowManagement}
        />
        <ProtectedRoute
          exact
          path="/dashboard/volunteer/task/:id"
          allowedRoles={["member", "admin"]}
          component={ScheduleTaskForm}
        />
        <ProtectedRoute
          exact
          path="/dashboard/user-management"
          allowedRoles={["admin"]}
          component={UserManagementPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/events/management"
          allowedRoles={["admin"]}
          component={EventsManagementPage}
        />
        <ProtectedRoute
          exact
          path="/dashboard/request-management"
          allowedRoles={["admin"]}
          component={RequestManagementPage}
        />
        <Route path="/dashboard/admin" component={Admin} />
        <Route path="/dashboard/recycle" component={RecyclePage} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" id="ion-tab-bar">
        <IonTabButton tab="home" href="/dashboard/home">
          <IonIcon aria-hidden="true" icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="events" href="/dashboard/events">
          <IonIcon aria-hidden="true" icon={calendarOutline} />
          <IonLabel>Events</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="shop"
          href={user?.role?.name === "admin" ? "/shop/admin" : "/shop"}
        >
          <IonIcon aria-hidden="true" icon={cartOutline} />
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="recycle" href="/dashboard/recycle">
          <IonIcon aria-hidden="true" icon={leafOutline} />
          <IonLabel>Recycle</IonLabel>
        </IonTabButton>

        {user && user.role?.name === "admin" && (
          <IonTabButton tab="admin" href="/dashboard/admin">
            <IonIcon aria-hidden="true" icon={shieldOutline} />
            <IonLabel>Admin</IonLabel>
          </IonTabButton>
        )}
        {user && ["member", "admin", "viewer"].includes(user.role?.name) && (
          <IonTabButton tab="chat" href="/dashboard/chat">
            <IonIcon aria-hidden="true" icon={chatboxEllipsesOutline} />
            <IonLabel>Chat</IonLabel>
          </IonTabButton>
        )}
      </IonTabBar>
    </IonTabs>
  );
};

export default Dashboard;
