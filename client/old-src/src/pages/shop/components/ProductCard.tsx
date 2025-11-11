import { IonButton, IonIcon, IonToolbar } from '@ionic/react';
import { remove } from 'ionicons/icons';
import React, { useMemo } from 'react';

type ProductCardProps = {
    product: any;
    onClick?: () => void;
    onEditClick?: () => void;
    onRemoveClick?: () => void;
    size?: number;
    editing?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, size, editing, onEditClick, onRemoveClick }) => {
    
    return (
        <div
            style={{
                width: `${size || 200}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                boxSizing: 'border-box',
                flexShrink: 0,
            }}
        >
            <img
                src={product.defaultVariant?.imageFile?.url}
                alt={product.name || 'Product Image'}
                style={{
                    width: '100%',
                    height: '70%',
                    backgroundColor: product.defaultVariant?.backgroundColor ?? '#00bf6380',
                    borderRadius: '16px',
                    objectFit: 'cover',
                }}
            />
            <h4 style={{ fontSize: 15, margin: '10px 0' }}>{product.name}</h4>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <b style={{ fontSize: 20, color: 'var(--ion-color-primary)' }}>${product.price.toFixed(2)}</b>
                {editing ?
                    (
                        <div>
                            <IonButton shape='round' color="dark" size="small" onClick={onRemoveClick}>
                                <IonIcon slot="icon-only" icon={remove} />
                            </IonButton>
                            <IonButton shape='round' color="dark" size="small" onClick={onEditClick}>
                                Edit
                            </IonButton>
                        </div>
                    ) : (
                        <IonButton color="dark" size="small" onClick={onClick}>
                            Buy
                        </IonButton>
                    )}
            </div>
        </div>
    );
};

export default ProductCard;
