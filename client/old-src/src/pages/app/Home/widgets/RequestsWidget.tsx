import { IonButton, IonIcon, useIonRouter } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import RequestCard from "../../../../components/DataCards/RequestCard";
import { useGetTasksQuery } from "../../../../features/crud/tasksApi";
import { useGetRequestsQuery } from "../../../../features/crud/requestsApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import Card from "../../../../components/UI/Card/Card";

const RequestsWidget = () => {
  const router = useIonRouter();
  const { data: requests } = useGetRequestsQuery();
  const { data: tasks } = useGetTasksQuery();

  const pendingRequests =
    requests
      ? requests.filter((request) => request.status?.name == "pending")
      : [];

  const handleManageClick = () => {
    router.push("/dashboard/request-management", "forward");
  };

  return (
    <Card
      title="Pending Requests"
      subtitle={`You have ${pendingRequests.length} pending request${pendingRequests.length !== 1 ? "s" : ""}`}
    >
      {pendingRequests.length > 0 ? (
        <Swiper
          spaceBetween={12}
          slidesPerView="auto"
          style={{ paddingBottom: 12 }}
          freeMode={true}
        >
          {pendingRequests.map((request) => (
            <SwiperSlide key={request.id} style={{ width: "auto" }}>
              <div style={{ minWidth: 260 }}>
                <RequestCard request={request} type="small" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "var(--ion-text-color-secondary, #666)",
            fontSize: 14,
            padding: "20px 0",
          }}
        >
          No pending requests 🎉
        </p>
      )}

      <IonButton
        onClick={handleManageClick}
        expand="block"
        aria-label="Manage Requests"
      >
        Manage Requests
      </IonButton>
    </Card>
  );
};

export default RequestsWidget;
