import React from "react";
import { IonIcon, IonSpinner } from "@ionic/react";
import { checkmarkCircle, imageOutline } from "ionicons/icons";
import "./ItemSelectField.css";

interface Item {
    id: number;
    url?: string;
    name?: string;
}

interface ItemSelectFieldProps {
    items: Item[] | undefined;
    selectedItem: number | null;
    onSelect: (id: number) => void;
}

const ItemSelectField: React.FC<ItemSelectFieldProps> = ({
    items,
    selectedItem,
    onSelect,
}) => {
    if (!items) {
        return (
            <div className="item-select-loading">
                <IonSpinner />
            </div>
        );
    }

    if (items.length === 0) {
        return <div className="item-select-empty">No items available</div>;
    }

    return (
        <div className="item-select-field">
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={`item-select-card ${
                        item.id === selectedItem ? "selected" : ""
                    }`}
                >
                    {item.url ? (
                        <img
                            src={item.url}
                            alt={item.name || `Item ${item.id}`}
                            className="item-select-image"
                        />
                    ) : (
                        <div className="item-select-placeholder">
                            <IonIcon icon={imageOutline} />
                        </div>
                    )}
                    {item.id === selectedItem && (
                        <div className="item-select-selected-badge">
                            <IonIcon icon={checkmarkCircle} />
                        </div>
                    )}
                    {item.name && (
                        <div className="item-select-name">{item.name}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemSelectField;
