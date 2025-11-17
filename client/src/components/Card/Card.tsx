import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Card.css';

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  highlight?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  fontSize?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, children, fontSize, className = '', highlight, onClick, style }) => {
  return (
    <IonCard
      className={`custom-card ${className} ${highlight ? 'highlight' : ''}`}
      onClick={() => onClick && onClick()}
      style={style}
    >
      {(title || subtitle) && (
        <IonCardHeader>
          {title && <IonCardTitle color="primary" style={fontSize ? {fontSize: fontSize} : {}}>{title}</IonCardTitle>}
          {subtitle && <IonCardSubtitle>{subtitle}</IonCardSubtitle>}
        </IonCardHeader>
      )}
      <IonCardContent>{children}</IonCardContent>
    </IonCard>
  );
};

export default Card;
