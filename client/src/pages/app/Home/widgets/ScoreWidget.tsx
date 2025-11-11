// LeaderboardWidget.tsx
import React from 'react';
import { IonLabel, IonList, IonItem, IonIcon } from '@ionic/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from '../../../../components/UI/Card/Card';
import { useGetUserScoresQuery } from '../../../../features/crud/users/usersApi';
import { User } from '../../../../features/auth/authTypes';
import { selectCurrentUser } from '../../../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { calendar, chatbubble, hammer, hammerOutline, person } from 'ionicons/icons';

export const LeaderboardWidget: React.FC = () => {

    const { data: users, isLoading } = useGetUserScoresQuery();

    const currentUser = useSelector(selectCurrentUser);

    const isUser = (name: String) => {
        if (!currentUser) return false;
        return name === currentUser.name;
    }

    if (!users) return null;

    return (
        <Card>
            <div style={{ width: 160, height: 160, margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgressbar
                    value={users.find(user => isUser(user.name))?.score || 0}
                    text={`${users.find(user => isUser(user.name))?.score || 0}`}
                    styles={buildStyles({
                        textSize: '36px',
                        pathColor: 'var(--ion-color-primary)',
                        textColor: 'var(--ion-color-primary)',
                        trailColor: '#eee',
                    })}
                />
            </div>
            <IonLabel style={{ display: 'block', textAlign: 'center', fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
                Leaderboard
            </IonLabel>
            <IonList lines="none">
                {users && [...users].sort((a, b) => b.score - a.score).splice(0,6).map((user, idx) => (
                    <IonItem
                        key={user.name}
                        style={{
                            borderRadius: 8,
                            background: isUser(user.name)
                                ? 'rgba(var(--ion-color-primary-rgb), 0.13)'
                                : 'rgba(var(--ion-color-light-rgb), 1)',
                            marginBottom: 10,
                            boxShadow: isUser(user.name) ? '0 2px 8px rgba(var(--ion-color-primary-rgb), 0.13)' : undefined,
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <IonLabel style={{
                                fontWeight: isUser(user.name) ? 700 : 500,
                                color: isUser(user.name) ? 'var(--ion-color-primary)' : undefined,
                            }}>
                                {user.name}
                            </IonLabel>
                            <IonLabel style={{
                                fontWeight: isUser(user.name) ? 700 : 600,
                                color: 'var(--ion-color-primary)',
                            }}>
                                {user.score}
                            </IonLabel>
                        </div>
                    </IonItem>
                ))}
            </IonList>
        </Card>
    );
}

// TipsWidget.tsx
export const TipsWidget: React.FC = () => (
    <Card>
        <IonLabel style={{ display: 'block', textAlign: 'center', fontSize: 18, fontWeight: 600, margin: '18px 0 10px 0' }}>
            Tips to Improve Your Score
        </IonLabel>
        <IonList lines="none">
            <IonItem button routerLink="/dashboard/events" style={{ background: '#e3f2fd', borderRadius: 8, marginBottom: 8 }}>
                <IonIcon slot="start" icon={calendar} />
                <IonLabel>
                    <b>Go to meetings regularly</b>
                    <div style={{ fontSize: 13, color: '#666' }}>Stay updated and participate in club activities.</div>
                </IonLabel>
            </IonItem>
            <IonItem style={{ background: '#fce4ec', borderRadius: 8, marginBottom: 8 }}>
                <IonIcon slot="start" icon={person} />
                <IonLabel>
                    <b>Volunteer for 3D printing</b>
                    <div style={{ fontSize: 13, color: '#666' }}>Help with club projects and fundraisers. Our printing tab will be released in a few weeks, allowing you to volunteer and schedule 3D printing sessions.</div>
                </IonLabel>
            </IonItem>
            <IonItem button href="/dashboard/events" style={{ background: '#e8f5e9', borderRadius: 8, marginBottom: 8 }}>
                <IonIcon slot="start" icon={hammer} />
                <IonLabel>
                    <b>Attend workshops</b>
                    <div style={{ fontSize: 13, color: '#666' }}>Learn new skills and improve your knowledge by attending our workshops this year. Check out the events tab to see if there are any upcoming workshops that interest you.</div>
                </IonLabel>
            </IonItem>
            <IonItem button href="/dashboard/chat" style={{ background: '#fff3e0', borderRadius: 8, marginBottom: 8 }}>
                <IonIcon slot="start" icon={chatbubble} />
                <IonLabel>
                    <b>Connect with the community</b>
                    <div style={{ fontSize: 13, color: '#666' }}>
                        Support members, ask questions, and share ideas. Try out our chat feature to connect with other members!
                    </div>
                </IonLabel>
            </IonItem>
        </IonList>
    </Card>
);

export default LeaderboardWidget;
