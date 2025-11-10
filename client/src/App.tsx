import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonToast,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { globeOutline, refreshOutline } from "ionicons/icons";
import OneSignal from "react-onesignal";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
// import '@ionic/react/css/palettes/dark.system.css';

import "./theme/variables.css";
import "./theme/ui.css";

import SignIn from "./pages/site/SignIn";
import Dashboard from "./pages/app/Dashboard";
import { useEffect, useState } from "react";
import useNetworkStatus from "./services/NetworkService";
import { Provider, useSelector } from "react-redux";
import { useServiceWorkerUpdate } from "./hooks/useServiceWorkerUpdate";
import GlobalToasts from "./GlobalToasts";
import { store } from "./redux/store";
import RequestsPublic from "./pages/app/ManageRequests/RequestsPublic";
import "./main.css";

import OrderPage from "./pages/app/Order/OrderPage";
import ConstructionPage from "./pages/ConstructionPage";
import useHeartbeat from "./services/HeartbeatService";
import { selectCurrentUser } from "./features/auth/authSlice";
import { OneSignalProvider } from "./services/OneSignalProvider";
import { set } from "date-fns";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import axios from "axios";
import Shop from "./pages/shop/Shop";
import HomePage from "./pages/site/HomePage";
import LoginPage from "./pages/site/LoginPage";
// import '@ionic/react/css/palettes/dark.always.css';

setupIonicReact();

const App: React.FC = () => {
  const [isApiHealthy, setIsApiHealthy] = useState<boolean>(true);

  const checkApiHealth = async () => {
    try {
      const res = await axios.get("/api", { timeout: 2000 });
      setIsApiHealthy(res.status === 200);
    } catch {
      setIsApiHealthy(false);
    }
  };

  useEffect(() => {
    checkApiHealth();
  }, []);

  // if (!isApiHealthy) {
  //   return <ConstructionPage />
  // }

  return (
    <IonApp>
      <OneSignalProvider>
        <Provider store={store}>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/login" component={LoginPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/shop/:id?" component={Shop} />
              <Route exact path="/" component={HomePage} />
              <Route path="/requests/:id" component={RequestsPublic} />
            </IonRouterOutlet>
          </IonReactRouter>
        </Provider>
      </OneSignalProvider>
      <GlobalToasts />
    </IonApp>
  );
};

export default App;
