import {
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonNote,
    IonSelect,
    IonSelectOption,
    IonText,
} from "@ionic/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
    useLoginMutation,
    useRegisterMutation,
} from "../../../shared/features";
import { isPWAInstalled } from "../../../shared/hooks/useUtils";

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
        grade_id: 0,
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        grade_id: "",
    });

    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleInputChange = (field: string, value: string) => {
        setFormState({ ...formState, [field]: value });
        setErrors({ ...errors, [field]: "" });
    };

    const validateForm = (): boolean => {
        const newErrors: any = {};
        let isValid = true;

        if (!formState.name) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

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
        } else if (formState.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            isValid = false;
        }

        if (formState.password !== formState.confirm_password) {
            newErrors.confirm_password = "Passwords do not match.";
            isValid = false;
        }

        if (!formState.grade_id) {
            newErrors.grade_id = "Grade selection is required.";
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
                {errors.name && <IonNote color="danger">{errors.name}</IonNote>}
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
                {errors.email && (
                    <IonNote color="danger">{errors.email}</IonNote>
                )}
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
                {errors.password && (
                    <IonNote color="danger">{errors.password}</IonNote>
                )}
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
                {errors.confirm_password && (
                    <IonNote color="danger">{errors.confirm_password}</IonNote>
                )}
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Grade</IonLabel>
                <IonSelect
                    value={formState.grade_id}
                    placeholder="Select your grade"
                    onIonChange={(e) =>
                        handleInputChange("grade_id", e.detail.value)
                    }
                >
                    <IonSelectOption value={1}>Freshman</IonSelectOption>
                    <IonSelectOption value={2}>Sophomore</IonSelectOption>
                    <IonSelectOption value={3}>Junior</IonSelectOption>
                    <IonSelectOption value={4}>Senior</IonSelectOption>
                </IonSelect>
                {errors.grade_id && (
                    <IonNote color="danger">{errors.grade_id}</IonNote>
                )}
            </IonItem>

            <IonButton expand="full" onClick={handleSubmit}>
                Sign Up
            </IonButton>

            <IonText color="medium">
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Already have an account?{" "}
                    <a onClick={switchToSignIn}>Sign in</a>
                </p>
                {!isPWAInstalled() && (
                    <p style={{ textAlign: "center", marginTop: "20px" }}>
                        Back to <a href="/">home</a>
                    </p>
                )}
            </IonText>
        </div>
    );
};

export default SignUpForm;
