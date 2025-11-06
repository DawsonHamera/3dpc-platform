import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonItem, IonLabel, IonButton, IonFooter, IonText, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../features/auth/authApi';
import { setCredentials } from '../features/auth/authSlice';
import { LoginRequest } from '../features/auth/authTypes';


const SignIn: React.FC = () => {
    const [formState, setFormState] = useState<LoginRequest>({
        email: '',
        password: '',
    })
    const [alert, setAlert] = useState({isOpen: false, title: '', message: ''});

    const [login, { isLoading, error }] = useLoginMutation()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (name: string, value: any) => {
        setFormState((prev: any) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async () => {
        try {
            const response = await login(formState).unwrap();
            dispatch(setCredentials({
                user: response.data.user,
                access_token: response.data.access_token,
                stream_token: response.data.stream_token
            }));
            history.push('/dashboard');
        } catch (e) {
            const errorResponse = e as { data : {error: string}, status: number };
            setAlert({ isOpen: true, title: 'Error', message: errorResponse.data.error });
        }
    };
    

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h1>Sign In</h1>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput
                        type="email"
                        placeholder="Enter your email"
                        value={formState.email}
                        onIonInput={(e) => handleChange('email', e.detail.value!)}
                        required
                    />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput
                        type="password"
                        placeholder="Enter your password"
                        value={formState.password}
                        onIonInput={(e) => handleChange('password', e.detail.value!)}
                        required
                    />
                </IonItem>

                <IonButton expand="full" onClick={handleSubmit}>Sign In</IonButton>

                <IonFooter className="ion-no-border">
                    <IonText color="medium">
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>
                            Don't have an account? <a href="/signup">Sign up</a>
                        </p>
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>
                            Back to <a href="/">home</a>
                        </p>
                    </IonText>
                </IonFooter>

                <IonAlert
                    isOpen={alert.isOpen}
                    onDidDismiss={() => setAlert({isOpen: false, title: '', message: ''})}
                    header={alert.title}
                    message={alert.message}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default SignIn;
