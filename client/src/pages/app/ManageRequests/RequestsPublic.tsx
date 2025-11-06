import { RouteComponentProps } from "react-router";
import { useGetRequestQuery } from "../../../features/crud/requestsApi";
import { IonContent, IonPage, IonProgressBar } from "@ionic/react";
import RequestCard from "../../../components/DataCards/RequestCard";

interface RequestsPublicProps
    extends RouteComponentProps<{
        id: string;
    }> { }

const RequestsPublic: React.FC<RequestsPublicProps> = ({ match }) => {
    
    const { data: request, isLoading } = useGetRequestQuery(parseInt(match.params.id))
    if (isLoading) return <IonProgressBar type="indeterminate" />
    console.log('Request data:', request)
    if (request) return (
        <IonPage>
            <IonContent>
                <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
                <RequestCard request={request}/>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default RequestsPublic;