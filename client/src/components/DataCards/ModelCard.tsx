import { IonIcon } from "@ionic/react";
import { create, pencil, trash } from "ionicons/icons";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../features/crud/modelsApi";
import Card from "../UI/Card/Card";

type Props = {
  model: Model;
  removeModel?: (id: number) => void;
};

const ModelCard: React.FC<Props> = ({ model, removeModel }) => {
  return (
    <Card title={model.name}>
      <div>
        <div
          style={{
            fontSize: "14px",
            color: "#4B5563",
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <div style={{ width: "150px", height: "150px" }}>
                  <img
                    src={model.imageFile.url}
                    alt="Model preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
              </div>
            </div>
            <div>
              <div>
                <strong>Duration:</strong>
                <p style={{ margin: 5 }}>{model.estimated_duration}</p>
              </div>
                <div>
                <strong>Volume:</strong>
                <p style={{ margin: 5 }}>{model.estimated_volume}</p>
              </div>
              <div>
                <strong>Description:</strong>
                <p style={{ margin: 5 }}>{model.description}</p>
              </div>
              <div>
                <a href={model.file_url} style={{ margin: 5 }}>
                  Download Link
                </a>
              </div>
            </div>
          </div>
          {removeModel && (
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}></div>
              <IonIcon
                onClick={() => removeModel(model.id)}
                icon={trash}
                style={{ fontSize: "25px", color: "red" }}
              />
              {/* <IonIcon icon={create} style={{ fontSize: '25px', color: 'var(--ion-color-primary)' }} /> */}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ModelCard;
