import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { IonTabButton, IonIcon, IonLabel } from "@ionic/react";

interface ProtectedTabProps {
  allowedRoles: string[];
  tab: string;
  href: string;
  icon: string;
  label: string;
}

const ProtectedTab: React.FC<ProtectedTabProps> = ({ allowedRoles, tab, href, icon, label }) => {
  const user = useSelector(selectCurrentUser);
  if (!user) {
    console.error('ProtectedTab: user is undefined or null');
    return null;
  }
  if (!user.role) {
    console.error('ProtectedTab: user.role is undefined or null', user);
    return null;
  }
  if (!user.role.name) {
    console.error('ProtectedTab: user.role.name is undefined or null', user.role);
    return null;
  }
  if (!allowedRoles.includes(user.role.name)) {
    console.warn('ProtectedTab: user.role.name not in allowedRoles', user.role.name, allowedRoles);
    return null;
  }
  console.info('ProtectedTab: rendering tab for user', user);
  return (
    <IonTabButton tab={tab} href={href}>
      <IonIcon aria-hidden="true" icon={icon} />
      <IonLabel>{label}</IonLabel>
    </IonTabButton>
  );
};

export default ProtectedTab;
