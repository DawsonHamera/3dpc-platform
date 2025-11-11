import { useState } from "react";
import { LoginRequest } from "../../../features/auth/authTypes";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
    useRegisterMutation,
    useLoginMutation,
} from "../../../features/auth/authApi";
import {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonText,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonFooter,
    IonAlert,
} from "@ionic/react";

type SignUpFormProps = {
    switchToSignIn: () => void;
    onSubmit: (data: any) => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({
    switchToSignIn,
    onSubmit,
}) => {
    const [formState, setFormState] = useState<any>({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        grade: 0,
    });

    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleInputChange = (field: string, value: string) => {
        setFormState({ ...formState, [field]: value });
    };

    return (
        <div>
            <h1>Sign Up</h1>

            <IonItem>
                <IonLabel position="stacked">Name</IonLabel>
                <IonInput
                    type="text"
                    placeholder="Enter your full name"
                    value={formState.name}
                    onIonInput={(e) =>
                        handleInputChange("name", e.detail.value!)
                    }
                    required
                />
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                    type="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onIonInput={(e) =>
                        handleInputChange("email", e.detail.value!)
                    }
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
                        handleInputChange("password", e.detail.value!)
                    }
                    required
                />
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Verify Password</IonLabel>
                <IonInput
                    type="password"
                    placeholder="Verify your password"
                    value={formState.confirm_password}
                    onIonInput={(e) =>
                        handleInputChange("confirm_password", e.detail.value!)
                    }
                    required
                />
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Grade</IonLabel>
                <IonSelect
                    value={formState.grade}
                    placeholder="Select your grade"
                    onIonChange={(e) =>
                        handleInputChange("grade", e.detail.value)
                    }
                >
                    <IonSelectOption value={1}>Freshman</IonSelectOption>
                    <IonSelectOption value={2}>Sophomore</IonSelectOption>
                    <IonSelectOption value={3}>Junior</IonSelectOption>
                    <IonSelectOption value={4}>Senior</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonButton expand="full" onClick={() => onSubmit(formState)}>
                Sign Up
            </IonButton>

            <IonText color="medium">
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Already have an account?{" "}
                    <a onClick={switchToSignIn}>Sign in</a>
                </p>
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Back to <a href="/">home</a>
                </p>
            </IonText>
        </div>
    );
};

export default SignUpForm;
