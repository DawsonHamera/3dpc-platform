import {
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonList,
} from "@ionic/react";
import { useState } from "react";
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
    const [errors, setErrors] = useState({ email: "", password: "" });

    const handleChange = (name: string, value: string) => {
        setFormState((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = (): boolean => {
        const newErrors: { email: string; password: string } = {
            email: "",
            password: "",
        };

        let isValid = true;

        if (!formState.email) {
            newErrors.email = "Email is required.";
            isValid = false;

        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            newErrors.email = "Invalid email format.";
            isValid = false;
        }

        if (!formState.password) {
            newErrors.password = "Password is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit(formState);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <IonList lines='none'>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput
                        className={`${
                            errors.email ? "ion-invalid ion-touched" : "ion-valid"
                        }`}
                        type="email"
                        placeholder="Enter your email"
                        value={formState.email}
                        errorText={errors.email}
                        onIonInput={(e) => handleChange("email", e.detail.value!)}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput
                        className={`${
                            errors.password
                                ? "ion-invalid ion-touched"
                                : "ion-valid"
                        }`}
                        type="password"
                        placeholder="Enter your password"
                        value={formState.password}
                        errorText={errors.password}
                        onIonInput={(e) =>
                            handleChange("password", e.detail.value!)
                        }
                        required
                    />
                </IonItem>
            </IonList>
            <IonButton expand="full" onClick={handleSubmit}>
                Sign In
            </IonButton>
            <IonText color="medium">
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Don&apos;t have an account?{" "}
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
