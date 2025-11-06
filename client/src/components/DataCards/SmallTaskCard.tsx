import { IonLabel } from "@ionic/react"
import { Task } from "../../features/crud/tasksApi"

type Props = {
    task: Task
    isButton?: boolean
    buttonTitle?: string
    onClick?: (task: Task) => void
}

const SmallTaskCard: React.FC<Props> = ({ task, isButton = false, buttonTitle, onClick }) => {
    return (
        <div
            key={task.id}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1rem",
                padding: "0.75rem",
                background: "#f4f4f8",
                borderRadius: "12px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
        >
            <img
                // src={task.model?.imageFile.url}
                alt={task.model?.name}
                style={{
                    width: 50,
                    height: 50,
                    objectFit: "cover",
                    borderRadius: "8px",
                    backgroundColor: "#ddd",
                }}
            />
            <div style={{ flex: 1 }}>
                <IonLabel>
                    <h2 style={{ margin: 0 }}>{task.model?.name} x{task.quantity}</h2>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
                    </p>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#888" }}>
                        Quality: {task.quality}
                    </p>
                </IonLabel>
            </div>
            {isButton &&
                <button
                    style={{
                        background: "#2f95dc",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                    }}
                    onClick={() => onClick(task)}
                >
                    {buttonTitle}
                </button>
            }
        </div>
    )
}

export default SmallTaskCard;