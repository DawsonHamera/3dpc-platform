import { IonIcon, IonLabel } from "@ionic/react";
import { create, pencil, trash } from "ionicons/icons";
import { Material } from "../../features/crud/materialsApi";
import Card from "../UI/Card/Card";

type Props = {
    material: Material
    removeMaterial?: (id: number) => void
}

const MaterialCard: React.FC<Props> = ({ material, removeMaterial }) => {

    function getContrastColor(hex: string): string {
        // Remove the hash if present
        hex = hex.replace(/^#/, '');

        // Expand shorthand hex (e.g. "abc" → "aabbcc")
        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        // Calculate luminance per WCAG
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Return black or white depending on brightness
        return luminance > 0.5 ? 'var(--ion-card-color)' : '#ffffff';
    }


    return (
        <Card title={material.name} subtitle={material.type || ''}>
            <div>
                <div style={{ display: 'flex', gap: '20px' }}>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <img
                                src={material.imageFile?.url}
                                alt="Filament"
                                style={{ width: '100px', height: '100px' }}
                            />
                            <b style={{ margin: 4, backgroundColor: material.hex, color: getContrastColor(material.hex), borderRadius: 10, padding: 5 }}>{material.hex}</b>
                        </div>

                    </div>
                    <IonLabel>
                        <b>Minimum Temperature:</b>
                        <p style={{ margin: 5 }}>{material.min_temp}</p>
                        <b>Maximum Temperature:</b>
                        <p style={{ margin: 5 }}>{material.max_temp}</p>
                    </IonLabel>
                </div>
                {removeMaterial && <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}></div>
                    <IonIcon onClick={() => removeMaterial(material.id)} icon={trash} style={{ fontSize: '25px', color: 'red' }} />
                </div>}
            </div>
        </Card>
    )
}

export default MaterialCard;