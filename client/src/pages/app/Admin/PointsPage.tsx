import { IonButton, IonContent, IonItem, IonLabel, IonList, IonLoading, IonModal, IonPage, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import { useGetUserPointsLogsQuery, useGetUsersQuery, User, useUpdateUserPointsMutation } from '../../../features/users/usersApi';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const PointsPage: React.FC = () => {

    const { data: users, isLoading, isError } = useGetUsersQuery();
    const [updateUserpoints] = useUpdateUserPointsMutation();

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [pointsToAdd, setPointsToAdd] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [reasoning, setReasoning] = useState<string | null>(null);
    const [details, setDetails] = useState<string>('');
    const { data: userPointsLogs } = useGetUserPointsLogsQuery(
        selectedUser?.id ?? 0
    );
    const [sortedLogs, setSortedLogs] = useState(userPointsLogs || []);

    useEffect(() => {
        if (users && users.length > 0) {
            const sortedUsers = [...users].sort((a, b) => b.points - a.points);
            setSelectedUser(sortedUsers[0]);
        }
    }, [users]);

    useEffect(() => {
        if (userPointsLogs) {
            const sorted = [...userPointsLogs].sort((a, b) => new Date(b.logged_at).getTime() - new Date(a.logged_at).getTime());
            setSortedLogs(sorted);
        }
    }, [userPointsLogs]);

    const handleUpdatepoints = (userId: number, points: number, reason: string, details: string) => {
        updateUserpoints({ id: userId, points, reason, details });
    }

    if (isLoading || !users) {
        return (
            <IonPage>
                <Header title="Points" type='back' />
                <IonLoading isOpen={true} message={'Loading...'} />
            </IonPage>
        )

    }

    return (
        <IonPage>
            <Header title="Points" type='back' />
            <IonContent>
                <IonItem>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '16px' }}>
                        <div>
                            <h2 style={{ fontSize: 18, fontWeight: 400, color: 'var(--ion-color-medium)', marginBottom: 0 }}>Points</h2>
                            <h1 style={{ fontSize: 24, fontWeight: 600, marginTop: 0 }}>{selectedUser?.name}</h1>
                            <IonButton onClick={() => setIsModalOpen(true)}>Edit points</IonButton>
                            <IonButton onClick={() => setIsHistoryModalOpen(true)}>View History</IonButton>
                        </div>
                        <div style={{ width: 140, height: 140, margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <CircularProgressbar
                                value={selectedUser?.points || 0}
                                text={`${selectedUser?.points || 0}`}
                                styles={buildStyles({
                                    textSize: '30px',
                                    pathColor: 'var(--ion-color-primary)',
                                    textColor: 'var(--ion-color-primary)',
                                    trailColor: '#eee',
                                })}
                            />
                        </div>
                    </div>
                </IonItem>
                <IonList
                    style={{ padding: '16px 16px 16px 16px' }}>
                    {users && users.map(user => (
                        <IonItem
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                            style={{ boxShadow: user.id === selectedUser?.id ? '0 0 10px var(--ion-color-primary)' : undefined, borderRadius: 8, marginBottom: 8 }}
                        >
                            {user.name} - {user.points} points
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
            <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
                <Header title="Edit points" type='back' onBack={() => setIsModalOpen(false)} />
                <IonContent>
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <IonButton fill="outline" onClick={() => setPointsToAdd(pointsToAdd - increment)}>-</IonButton>
                            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{pointsToAdd > 0 ? '+' : ''}{pointsToAdd}</span>
                            <IonButton fill="outline" onClick={() => setPointsToAdd(pointsToAdd + increment)}>+</IonButton>
                        </div>

                        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
                            <IonButton
                                fill={increment === 1 ? "solid" : "outline"}
                                onClick={() => setIncrement(1)}
                            >
                                +1/-1
                            </IonButton>
                            <IonButton
                                fill={increment === 20 ? "solid" : "outline"}
                                onClick={() => setIncrement(20)}
                            >
                                +20/-20
                            </IonButton>
                        </div>

                        <IonItem>
                            <IonSelect
                                value={reasoning}
                                onIonChange={e => setReasoning(e.detail.value)}
                                placeholder="Select reason"
                            >
                                <IonSelectOption value="meeting">Meeting</IonSelectOption>
                                <IonSelectOption value="workshop">Workshop</IonSelectOption>
                                <IonSelectOption value="workday">Work day</IonSelectOption>
                                <IonSelectOption value="fundraiser">Fundraiser</IonSelectOption>
                                <IonSelectOption value="other">Other</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonTextarea
                                value={details}
                                onIonInput={e => setDetails(e.detail.value!)}
                                placeholder="Optional details..."
                                rows={3}
                            />
                        </IonItem>

                        <IonButton
                            expand="block"
                            style={{ marginTop: '20px' }}
                            disabled={!reasoning}
                            onClick={() => {
                                // Handle submit logic here
                                handleUpdatepoints(selectedUser!.id, pointsToAdd, reasoning!, details);
                                setIsModalOpen(false);
                            }}
                        >
                            Submit
                        </IonButton>
                    </div>
                </IonContent>
            </IonModal>
            <IonModal isOpen={isHistoryModalOpen} onDidDismiss={() => setIsHistoryModalOpen(false)}>
                <Header title="points History" type='back' onBack={() => setIsHistoryModalOpen(false)} />
                <IonContent>
                    <div style={{ padding: '20px' }}>
                        <IonList>
                            {sortedLogs && sortedLogs.length > 0 ? sortedLogs.map(log => (
                                <IonItem key={log.id}>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '16px 0 16px 0' }}>
                                            <IonLabel>
                                                <h2 style={{ fontWeight: 'bold' }}>{log.change > 0 ? '+' : ''}{log.change} points</h2>
                                                <p>{new Date(log.logged_at).toLocaleString()}</p>
                                            </IonLabel>
                                            <span style={{ fontStyle: 'italic', marginLeft: '16px' }}>{log.reason}</span>
                                        </div>
                                        {log.details && (
                                            <IonLabel style={{ marginTop: '8px', color: 'var(--ion-color-medium)', margin: '0 0 16px 0', background: 'var(--ion-color-light-shade)', borderRadius: 8, padding: '8px' }}>
                                                {log.details}
                                            </IonLabel>
                                        )}
                                    </div>
                                </IonItem>
                            )) : (
                                <IonItem>
                                    <p>No points history available.</p>
                                </IonItem>
                            )}
                        </IonList>
                    </div>
                </IonContent>
            </IonModal>
        </IonPage >
    );
};

export default PointsPage;