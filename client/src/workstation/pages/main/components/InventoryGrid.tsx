import { useState } from "react";
import { Material, Model } from "../../../../member-app/App";
import "./InventoryGrid.css";

interface InventoryGridProps {
    materials: Material[];
    models: Model[];
    onEditMaterial: (material: Material) => void;
    onEditModel: (model: Model) => void;
    onAddMaterial: () => void;
    onAddModel: () => void;
}

const InventoryGrid: React.FC<InventoryGridProps> = ({
    materials,
    models,
    onEditMaterial,
    onEditModel,
    onAddMaterial,
    onAddModel,
}) => {
    const [activeTab, setActiveTab] = useState<"materials" | "models">(
        "materials",
    );

    return (
        <div className="inventory-grid">
            <div className="inventory-grid-header">
                <div className="inventory-grid-tabs">
                    <button
                        className={`inventory-grid-tab ${
                            activeTab === "materials" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("materials")}
                    >
                        🧵 Materials ({materials.length})
                    </button>
                    <button
                        className={`inventory-grid-tab ${
                            activeTab === "models" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("models")}
                    >
                        📦 Models ({models.length})
                    </button>
                </div>
                <button
                    className="inventory-grid-add"
                    onClick={
                        activeTab === "materials" ? onAddMaterial : onAddModel
                    }
                >
                    + Add {activeTab === "materials" ? "Material" : "Model"}
                </button>
            </div>

            {activeTab === "materials" ? (
                <div className="inventory-grid-content">
                    {materials.length === 0 ? (
                        <div className="inventory-grid-empty">
                            <p>No materials found. Add one to get started!</p>
                        </div>
                    ) : (
                        <div className="inventory-grid-items">
                            {materials.map((material) => (
                                <div
                                    key={material.id}
                                    className="inventory-card"
                                    onClick={() => onEditMaterial(material)}
                                >
                                    <div className="inventory-card-image">
                                        {material.image_file?.path ? (
                                            <img
                                                src={material.image_file.path}
                                                alt={material.name}
                                            />
                                        ) : (
                                            <div className="inventory-card-placeholder">
                                                🧵
                                            </div>
                                        )}
                                    </div>
                                    <div className="inventory-card-content">
                                        <h4 className="inventory-card-name">
                                            {material.name}
                                        </h4>
                                        <p className="inventory-card-type">
                                            {material.type}
                                        </p>
                                        <div className="inventory-card-footer">
                                            {material.color && (
                                                <div
                                                    className="inventory-card-color"
                                                    style={{
                                                        backgroundColor:
                                                            material.color,
                                                    }}
                                                />
                                            )}
                                            <span className="inventory-card-quantity">
                                                Qty: {material.quantity}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className="inventory-grid-content">
                    {models.length === 0 ? (
                        <div className="inventory-grid-empty">
                            <p>No models found. Add one to get started!</p>
                        </div>
                    ) : (
                        <div className="inventory-grid-items">
                            {models.map((model) => (
                                <div
                                    key={model.id}
                                    className="inventory-card"
                                    onClick={() => onEditModel(model)}
                                >
                                    <div className="inventory-card-image">
                                        {model.image_file?.path ? (
                                            <img
                                                src={model.image_file.path}
                                                alt={model.name}
                                            />
                                        ) : (
                                            <div className="inventory-card-placeholder">
                                                📦
                                            </div>
                                        )}
                                    </div>
                                    <div className="inventory-card-content">
                                        <h4 className="inventory-card-name">
                                            {model.name}
                                        </h4>
                                        {model.description && (
                                            <p className="inventory-card-description">
                                                {model.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InventoryGrid;
