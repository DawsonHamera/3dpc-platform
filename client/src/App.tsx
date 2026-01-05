import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { store } from "./shared/redux/store";
import { OneSignalProvider } from "./shared/services/OneSignalProvider";

import { Provider } from "react-redux";
import { Route } from "react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import HomePage from "./landing/pages/home/HomePage";
import LoginPage from "./landing/pages/login/LoginPage";
import Dashboard from "./member-app/Dashboard";
import "./shared/theme/variables.css";
import Shop from "./shop/pages/Shop";
import WorkstationPage from "./workstation/pages/main/WorkstationPage";

setupIonicReact();

const App: React.FC = () => {
    return (
        <IonApp>
            <OneSignalProvider>
                <Provider store={store}>
                    <IonReactRouter>
                        <IonRouterOutlet>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route
                                exact
                                path="/workstation"
                                component={WorkstationPage}
                            />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/shop" component={Shop} />
                        </IonRouterOutlet>
                    </IonReactRouter>
                </Provider>
            </OneSignalProvider>
        </IonApp>
    );
};

export default App;
