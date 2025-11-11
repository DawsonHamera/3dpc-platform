import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSegment, IonSegmentButton, IonButton, IonButtons, useIonRouter, IonBadge, IonModal } from '@ionic/react';
import Header from '../../../components/Header/Header';
import { useApproveRequestMutation, useGetRequestsQuery, useRemoveRequestMutation, Request } from '../../../features/crud/requestsApi';
import RequestCard from '../../../components/DataCards/RequestCard';
import './RequestManagement.css'
import { useGetTasksQuery } from '../../../features/crud/tasksApi';
import { useParams } from 'react-router';
import { Card } from 'stream-chat-react';


const RequestManagementPage: React.FC = () => {

    const { data: requests, isLoading } = useGetRequestsQuery()
    const { data: tasks } = useGetTasksQuery()

    const [selected, setSelected] = useState('pending');
    const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
    const [filteredRequests, setRequests] = useState(requests);
    const statuses = ['all', 'pending', 'approved', 'printing', 'completed'];
    const router = useIonRouter()
    const [deleteRequest] = useRemoveRequestMutation();
    const [approveRequest] = useApproveRequestMutation();

    const handleApprove = async () => {
        if (selectedRequest?.id) {
            await approveRequest(selectedRequest.id);
            setSelectedRequest(null);
        }
    };

    const handleDelete = async () => {
        if (selectedRequest?.id) {
            await deleteRequest(selectedRequest.id);
            setSelectedRequest(null);
        }
    };

    useEffect(() => {
        if (requests) {
            const filteredRequests = requests.filter(request => request.status?.name === selected || selected === 'all');
            setRequests(filteredRequests);
        }
    }, [selected, requests]);

    return (
        <IonPage>
            <Header title="Request Management" />
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '16px ', backgroundColor: 'transparent' }}>
                {statuses.map(status => (
                    <IonButton
                        key={status}
                        fill='solid'
                        color={selected === status ? 'primary' : 'medium'}
                        onClick={() => setSelected(status)}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </IonButton>
                ))}
            </div>
            <IonContent>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {filteredRequests && filteredRequests.map((request) => (
                        <RequestCard key={request.id} request={request} onClick={(request) => setSelectedRequest(request)} />
                    ))}
                </div>
            </IonContent>
            <IonModal isOpen={selectedRequest != null} onDidDismiss={() => setSelectedRequest(null)}>
                <div style={{ padding: '1rem' }}>
                   {selectedRequest && <RequestCard request={selectedRequest} />}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <IonButton color="success" onClick={handleApprove}>
                            Approve
                        </IonButton>
                        <IonButton color="danger" onClick={handleDelete}>
                            Delete
                        </IonButton>
                        <IonButton fill="outline" onClick={() => setSelectedRequest(null)}>
                            Cancel
                        </IonButton>
                    </div>
                </div>
            </IonModal>
        </IonPage>
    );
};

export default RequestManagementPage;