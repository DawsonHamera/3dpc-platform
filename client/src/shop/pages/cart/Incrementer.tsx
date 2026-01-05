import React, { useState } from "react";
import { IonButton, IonIcon, IonInput, IonItem } from "@ionic/react";
import { addCircle, addCircleOutline, addOutline, removeCircle, removeCircleOutline, removeOutline } from "ionicons/icons";

interface IncrementerProps {
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    value?: number;
    type?: "small" | "large";
    onChange?: (value: number) => void;
}

const Incrementer: React.FC<IncrementerProps> = ({
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    label = "",
    type = "large",
    onChange,
}) => {
    const [count, setCount] = useState(value);

    const handleDecrement = () => {
        const newValue = Math.max(count - step, min);
        setCount(newValue);
        onChange?.(newValue);
    };

    const handleIncrement = () => {
        const newValue = Math.min(count + step, max);
        setCount(newValue);
        onChange?.(newValue);
    };

    const handleInputChange = (e: any) => {
        const newValue = parseInt(e.target.value, 10) || min;
        if (newValue >= min && newValue <= max) {
            setCount(newValue);
            onChange?.(newValue);
        }
    };

    if (type === "small")
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid var(--ion-color-light-shade)",
                    padding: 0,
                    borderRadius: "10px",
                }}
            >
                <IonIcon
                    icon={count <= min ? removeCircleOutline : removeCircle}
                    onClick={handleDecrement}
                    style={{
                        fontSize: "24px",
                        cursor: "pointer",
                        color: 'var(--ion-color-primary)',
                    }}
                />
                <p style={{ padding: '0 10px' }}>{count}</p>
                <IonIcon
                    icon={count >= max ? addCircleOutline : addCircle}
                    onClick={handleIncrement}
                    style={{
                        fontSize: "24px",
                        cursor: "pointer",
                        color: 'var(--ion-color-primary)',
                    }}
                />
            </div>
        );

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            <IonButton
                onClick={handleDecrement}
                fill="outline"
                size="small"
                disabled={count <= min}
            >
                <IonIcon icon={removeOutline} />
            </IonButton>
            <IonInput
                type="number"
                value={count}
                onIonChange={handleInputChange}
                style={{ textAlign: "center", width: "60px" }}
            />
            <IonButton
                onClick={handleIncrement}
                fill="outline"
                size="small"
                disabled={count >= max}
            >
                <IonIcon icon={addOutline} />
            </IonButton>
        </div>
    );
};

export default Incrementer;
