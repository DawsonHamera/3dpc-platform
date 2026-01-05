import "./QuickActionsBar.css";

interface QuickActionsBarProps {
    onOpenModal: (type: "printer" | "material" | "model") => void;
}

const QuickActionsBar: React.FC<QuickActionsBarProps> = ({ onOpenModal }) => {
    return (
        <div className="quick-actions-bar">
            <button
                className="quick-action-button printer"
                onClick={() => onOpenModal("printer")}
            >
                <span className="quick-action-icon">🖨️</span>
                <span className="quick-action-text">Add Printer</span>
            </button>
            <button
                className="quick-action-button material"
                onClick={() => onOpenModal("material")}
            >
                <span className="quick-action-icon">🧵</span>
                <span className="quick-action-text">Add Material</span>
            </button>
            <button
                className="quick-action-button model"
                onClick={() => onOpenModal("model")}
            >
                <span className="quick-action-icon">📦</span>
                <span className="quick-action-text">Add Model</span>
            </button>
        </div>
    );
};

export default QuickActionsBar;
