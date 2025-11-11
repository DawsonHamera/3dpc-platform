import {
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonFooter,
    IonText,
    IonAlert,
} from "@ionic/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLoginMutation } from "../../../features/auth/authApi";
import { setCredentials } from "../../../features/auth/authSlice";
import { LoginRequest } from "../../../features/auth/authTypes";

type SignInFormProps = {
    switchToSignUp: () => void;
    onSubmit: (credentials: LoginRequest) => void;
};

const SignInForm: React.FC<SignInFormProps> = ({
    switchToSignUp,
    onSubmit,
}) => {
    const [formState, setFormState] = useState<LoginRequest>({
        email: "",
        password: "",
    });

    const [login, { isLoading, error }] = useLoginMutation();

    const dispatch = useDispatch();
    const handleChange = (name: string, value: any) => {
        setFormState((prev: any) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h1>Sign In</h1>
            <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                    type="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onIonInput={(e) => handleChange("email", e.detail.value!)}
                    required
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput
                    type="password"
                    placeholder="Enter your password"
                    value={formState.password}
                    onIonInput={(e) =>
                        handleChange("password", e.detail.value!)
                    }
                    required
                />
            </IonItem>
            <IonButton expand="full" onClick={() => onSubmit(formState)}>
                Sign In
            </IonButton>
            <IonText color="medium">
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Don't have an account?{" "}
                    <a onClick={switchToSignUp}>Sign up</a>
                </p>
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Back to <a href="/">home</a>
                </p>
            </IonText>
        </div>
    );
};
export default SignInForm;
