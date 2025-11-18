import { IonAlert, IonPage, useIonRouter } from "@ionic/react";
import { useState } from "react";
import SignInForm from "./SignInForm";
import { LoginRequest } from "../../../features/auth/authTypes";
import { useLoginMutation } from "../../../features/auth/authApi";
import { setCredentials } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import SignUpForm from "./SignUpForm";

const LoginPage: React.FC = () => {
    const [mode, setMode] = useState<"signin" | "signup">("signin");
    const [login, { isLoading, error }] = useLoginMutation();
    const dispatch = useDispatch();
    const router = useIonRouter();
    const [alert, setAlert] = useState({
        isOpen: false,
        title: "",
        message: "",
    });

    const handleSignIn = async (credentials: LoginRequest) => {
        console.log("Signing in with", credentials);
        const response = await login(credentials);
        console.log(response);
        if (response.error) {
            console.log("Login error:", response.error);
            setAlert({
                isOpen: true,
                title: response.error.data.error,
                message: response.error.data.message,
            });
        } else {
            dispatch(
                setCredentials({
                    user: response.data.data.user,
                    expires_at: response.data.data.expires_at,
                    access_token: response.data.data.access_token,
                    stream_token: response.data.data.stream_token,
                })
            );
            router.push("/dashboard");
        }
    };

    const handleSignUp = async (credentials: LoginRequest) => {
        console.log("Signing up with", credentials);
        // Sign-up logic can be added here if needed
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
                            maxWidth: "100%", // full width
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
