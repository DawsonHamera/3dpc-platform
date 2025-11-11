import { IonIcon, useIonRouter } from "@ionic/react";
import {
  cubeOutline,
  apertureOutline,
  hardwareChipOutline,
  documentTextOutline,
  folderOpenOutline,
  gitNetworkOutline,
  calendarOutline,
  people,
  trophy,
  trophyOutline,
  peopleOutline,
  cart,
  cartOutline,
} from "ionicons/icons";
import Card from "../../../components/UI/Card/Card";

const InventoryItemCard = ({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    style={{
      cursor: "pointer",
      textAlign: "center",
      padding: "8px",
      
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      background: "rgba(255, 255, 255, 0.9)",
      transition: "box-shadow 0.2s",
      border: "1px solid #eee",
    }}
  >
    <IonIcon
      icon={icon}
      style={{
        fontSize: "28px",
        color: "var(--ion-color-primary)",
        marginBottom: "4px",
      }}
    />
    <div style={{ fontWeight: 600, color: "var(--ion-color-primary)", fontSize: "14px" }}>
      {label}
    </div>
  </div>
);

const InventoryWidget = () => {
  const router = useIonRouter();

  const items = [
    {
      label: "Models",
      icon: cubeOutline,
      route: "/dashboard/models",
    },
    {
      label: "Materials",
      icon: apertureOutline,
      route: "/dashboard/materials",
    },
    {
      label: "Printers",
      icon: hardwareChipOutline,
      route: "/dashboard/printers",
    },
    {
      label: "Processes",
      icon: gitNetworkOutline,
      route: "/dashboard/processes",
    },
    {
      label: "Files",
      icon: folderOpenOutline,
      route: "/dashboard/files",
    },
    {
      label: "Guides",
      icon: documentTextOutline,
      route: "/dashboard/guides",
    },
    {
      label: "Events",
      icon: calendarOutline,
      route: "/dashboard/events/management"
    },
    {
      label: "Users",
      icon: peopleOutline,
      route: "/dashboard/user-management"
    },
    {
      label: "Points",
      icon: trophyOutline,
      route: "/dashboard/points"
    },
    {
      label: "Shop",
      icon: cartOutline,
      route: "/dashboard/admin/shop"
    }
  ];

  const flexContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    paddingTop: "8px",
    paddingBottom: "4px",
    width: "100%",
    maxWidth: "480px", // match header/card width
    margin: "0 auto",
    justifyContent: "flex-start",
  };

  const itemCardStyle: React.CSSProperties = {
    flex: "1",
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "16px" }}>
      <Card title="Inventory" subtitle="Manage your resources" style={{margin: 0, marginBottom: "16px"}} />
      <div style={flexContainerStyle}>
        {items.map((item) => (
          <div style={itemCardStyle} key={item.label}>
            <InventoryItemCard
              icon={item.icon}
              label={item.label}
              onClick={() => router.push(item.route, "forward")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryWidget;
