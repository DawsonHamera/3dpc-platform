import { IonAlert, IonPage, useIonRouter } from "@ionic/react";
import { useState } from "react";
import {
    LoginRequest,
    RegisterRequest,
    useLoginMutation,
    useRegisterMutation,
} from "../../../shared/features";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const LoginPage: React.FC = () => {
    const [mode, setMode] = useState<"signin" | "signup">("signin");
    const [login] = useLoginMutation();
    const [signup] = useRegisterMutation();
    const router = useIonRouter();
    const [alert, setAlert] = useState({
        isOpen: false,
        title: "",
        message: "",
    });

    const handleSignIn = async (credentials: LoginRequest) => {
        try {
            await login(credentials).unwrap();
            // Credentials are automatically set by the mutation's onQueryStarted
            router.push("/dashboard", "root");
        } catch (error: any) {
            console.log("ERROR", error);
            setAlert({
                isOpen: true,
                title: error.data?.error || "Login Failed",
                message: error.data?.message || "An unexpected error occurred.",
            });
        }
    };

    const handleSignUp = async (credentials: RegisterRequest) => {
        try {
            await signup(credentials).unwrap();
            await login({
                email: credentials.email,
                password: credentials.password,
            }).unwrap();
            // Credentials are automatically set by the mutation's onQueryStarted
            router.push("/dashboard", "root");
        } catch (error: any) {
            console.log("ERROR", error);
            setAlert({
                isOpen: true,
                title: error.data?.error || "Sign-Up Failed",
                message: error.data?.message || "An unexpected error occurred.",
            });
        }
    };

    return (
        <IonPage>
            <div
                style={{
                    backgroundColor: "var(--ion-color-primary)",
                    width: "100%",
                    padding: "20px",
                    height: "100vh",
                }}
            >
                <img
                    src="/images/logo-transparent.png"
                    alt="3DPC Logo"
                    style={{
                        maxWidth: "100%",
                        width: "auto",
                    }}
                />
                <div
                    style={{
                        padding: "20px",
                        borderRadius: "8px",
                        backgroundColor: "white",
                        width: "90%",
                        maxWidth: "100%",
                        position: "absolute",
                        margin: "0 auto",
                        bottom: "20px",
                        left: "0",
                        right: "0",
                    }}
                >
                    {mode === "signin" ? (
                        <SignInForm
                            switchToSignUp={() => setMode("signup")}
                            onSubmit={handleSignIn}
                        />
                    ) : (
                        <SignUpForm
                            switchToSignIn={() => setMode("signin")}
                            onSubmit={handleSignUp}
                        />
                    )}
                </div>
            </div>
            <IonAlert
                isOpen={alert.isOpen}
                onDidDismiss={() =>
                    setAlert({ isOpen: false, title: "", message: "" })
                }
                header={alert.title}
                message={alert.message}
                buttons={["OK"]}
            />
        </IonPage>
    );
};

export default LoginPage;
