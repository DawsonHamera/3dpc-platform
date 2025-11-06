import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonItem, IonLabel, IonButton, IonFooter, IonText, IonAlert, IonSelect, IonSelectOption } from '@ionic/react';
import { useHistory } from 'react-router';
import { useLoginMutation, useRegisterMutation } from '../features/auth/authApi';
import { setCredentials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const SignUp: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        grade: 0,
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        emailInvalid: false,
        password: false,
        confirm_password: false,
        passwordMismatch: false,
        grade: false,
    });
    const [isInvalid, setIsInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation()
    const history = useHistory();
    const dispatch = useDispatch()

    const handleInputChange = (field: string, value: string) => {
        setForm({ ...form, [field]: value });
    };

    const handleSignUp = async () => {

        if (form.password !== form.confirm_password) {
            setErrors({ ...errors, passwordMismatch: true });
            return;
        }

        const result = await register({
            name: form.name,
            email: form.email,
            password: form.password,
            grade_id: form.grade
        });
        if ('error' in result && result.error && 'data' in result.error) {
            // Extract validation errors
            const apiErrors = (result.error.data as { messages?: { errors?: Record<string, string> } })?.messages?.errors;
            setIsInvalid(true);
            setErrorMessage(apiErrors ? Object.values(apiErrors)[0] : 'An error occurred.');
        } else {
            const response = await login({password: form.password, email: form.email}).unwrap();
            dispatch(setCredentials({
                user: response.user,
                access_token: response.access_token,
                stream_token: response.stream_token
            }));
            
            history.push('/dashboard');
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h1>Sign Up</h1>

                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput
                        type="text"
                        placeholder="Enter your full name"
                        value={form.name}
                        onIonInput={(e) => handleInputChange('name', e.detail.value!)}
                        required
                        className={errors.name ? 'ion-invalid' : 'ion-valid'}
                    />
                    {errors.name && <IonText color="danger">Name is required.</IonText>}
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onIonInput={(e) => handleInputChange('email', e.detail.value!)}
                        required
                        className={errors.email || errors.emailInvalid ? 'ion-invalid' : 'ion-valid'}
                    />
                    {errors.email && <IonText color="danger">Email is required.</IonText>}
                    {errors.emailInvalid && !errors.email && <IonText color="danger">Invalid email format.</IonText>}
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput
                        type="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onIonInput={(e) => handleInputChange('password', e.detail.value!)}
                        required
                        className={errors.password ? 'ion-invalid' : 'ion-valid'}
                    />
                    {errors.password && <IonText color="danger">Password is required.</IonText>}
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Verify Password</IonLabel>
                    <IonInput
                        type="password"
                        placeholder="Verify your password"
                        value={form.confirm_password}
                        onIonInput={(e) => handleInputChange('confirm_password', e.detail.value!)}
                        required
                        className={errors.confirm_password || errors.passwordMismatch ? 'ion-invalid' : 'ion-valid'}
                    />
                    {errors.confirm_password && <IonText color="danger">Verify password is required.</IonText>}
                    {errors.passwordMismatch && !errors.confirm_password && <IonText color="danger">Passwords do not match.</IonText>}
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Grade</IonLabel>
                    <IonSelect
                        value={form.grade}
                        placeholder="Select your grade"
                        onIonChange={(e) => handleInputChange('grade', e.detail.value)}
                        className={errors.grade ? 'ion-invalid' : 'ion-valid'}
                    >
                        <IonSelectOption value={1}>Freshman</IonSelectOption>
                        <IonSelectOption value={2}>Sophomore</IonSelectOption>
                        <IonSelectOption value={3}>Junior</IonSelectOption>
                        <IonSelectOption value={4}>Senior</IonSelectOption>
                    </IonSelect>
                    {errors.grade && <IonText color="danger">Grade is required.</IonText>}
                </IonItem>

                <IonButton expand="full" onClick={handleSignUp}>Sign Up</IonButton>

                <IonFooter className="ion-no-border">
                    <IonText color="medium">
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>
                            Already have an account? <a href="/sign-in">Sign in</a>
                        </p>
                    </IonText>
                </IonFooter>

                <IonAlert
                    isOpen={isInvalid}
                    onDidDismiss={() => setIsInvalid(false)}
                    header={'Error'}
                    message={errorMessage}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default SignUp;
