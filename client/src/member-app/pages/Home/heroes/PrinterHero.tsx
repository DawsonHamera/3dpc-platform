import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF, Environment, SpotLight, Billboard } from "@react-three/drei";
import * as THREE from "three";
import { Printer } from "../../../../member-app/features/crud/printersApi";
import { IonButton, IonImg, IonLoading, IonProgressBar } from "@ionic/react";

type Props = {
    printers: Printer[];
};

type POI = {
    name: string;
    position: [number, number, number];
    radius: number;
    description: string;
    cameraView: {
        position: [number, number, number];
        zoom?: number;
    };
};

const printerPOIs: POI[] = [
    {
        name: 'Extruder',
        position: [-0.28, 0.7, -0.09],
        radius: 0.007,
        description: 'The extruder is a critical component responsible for feeding filament into the hotend. It uses a motor-driven gear system to grip and push the filament through a tube and into the nozzle, ensuring consistent flow and pressure. Proper extruder tension and maintenance are essential for reliable prints, as any slippage or clogging can lead to under-extrusion or failed prints.',
        cameraView: {
            position: [-0.15, 1.1, -0.03],
            zoom: 1.1,
        },
    },
    {
        name: 'Nozzle',
        position: [0.017, 0.43, 0.19],
        radius: 0.003,
        description: 'The nozzle is the tip of the hotend where melted filament is precisely deposited onto the print bed. It is made of brass or hardened steel and comes in various diameters, affecting print resolution and speed. The nozzle must be kept clean and free of obstructions, as blockages can disrupt extrusion and compromise print quality.',
        cameraView: {
            position: [0, 0.3, 0.4],
            zoom: 1.2,
        },
    },
    {
        name: 'Bed',
        position: [0, 0.3, 0.3],
        radius: 0.02,
        description: 'The heated bed provides a stable, warm surface for the first layers of a print, helping filament adhere and preventing warping. It is often covered with glass, PEI, or other materials to improve adhesion. Proper bed leveling and temperature control are crucial for successful prints, as uneven or cold beds can cause prints to detach or deform.',
        cameraView: {
            position: [0.7, 1, 1.4],
            zoom: 1.1,
        },
    },
    {
        name: 'Control Panel',
        position: [0.49, 0.21, 0.28],
        radius: 0.02,
        description: 'The control panel is the user interface for the printer, allowing you to start, pause, and monitor prints, adjust settings, and view status information. It typically features a display and a rotary knob or touchscreen.',
        cameraView: {
            position: [0.5, 1.2, 1.2],
            zoom: 1.1,
        },
    },
    {
        name: 'Frame',
        position: [0.4, 1, 0.1],
        radius: 0.02,
        description: 'The frame provides the structural support for the printer, ensuring stability and precision during printing. A rigid frame minimizes vibrations and movements that can affect print quality. Common materials for frames include aluminum and steel extrusions.',
        cameraView: {
            position: [0.4, 1.5, 1],
            zoom: 1,
        },
    },
    {
        name: 'Power Supply',
        position: [0.32, 0.55, -0.15],
        radius: 0.02,
        description: 'The power supply provides the necessary electrical power for the printer’s components, including the hotend, heated bed, and motors. It is crucial for stable and reliable operation, and must be properly rated for the printer’s power requirements.',
        cameraView: {
            position: [-1, 1, -0.8],
            zoom: 1,
        },
    }
];

// Billboarded dot
function POIParticle({ poi, active, hidden, onClick }: { poi: POI; active: boolean; hidden: boolean; onClick: () => void }) {
    if (hidden) return null;
    return (
        <Billboard position={poi.position}>
            <mesh onClick={onClick}>
                <circleGeometry args={[active ? poi.radius : 0.03, 32]} />
                <Html
                    position={[0.01, 0, 0]}
                    style={{
                        background: 'rgba(30,30,40,0.85)',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: 6,
                        fontSize: 13,
                        fontFamily: 'Outfit, sans-serif',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px #0006',
                        border: active ? '1px solid orange' : '1px solid #00eaff',
                        marginLeft: 6,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        transform: 'translateY(-50%)',
                    }}
                >
                    {poi.name}
                </Html>
                <meshBasicMaterial
                    color={active ? 'orange' : '#00eaff'}
                />
            </mesh>
        </Billboard>
    );
}

function POIText({ poi, onClose }: { poi: POI | null; onClose: () => void }) {
    if (!poi) return (
        <div
            style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(30,30,40,0.97)',
            color: 'white',
            padding: '14px 22px',
            borderRadius: 16,
            boxShadow: '0 4px 24px #000a',
            fontFamily: 'Outfit, sans-serif',
            fontSize: 17,
            zIndex: 30,
            border: '2px solid var(--ion-color-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            alignItems: 'center',
            maxWidth: 340,
            width: 'calc(100vw - 60px)',
            }}
        >
            <strong style={{ color: 'var(--ion-color-primary)', fontWeight: 700, marginBottom: 6 }}>
            Tip
            </strong>
            <span>
            Click any of the glowing dots on the printer to learn more about its parts.
            </span>
        </div>
    )
    return (
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                background: 'rgba(30,30,40,0.97)',
                color: 'white',
                padding: '14px 22px',
                margin: 30,
                borderRadius: 16,
                boxShadow: '0 4px 24px #000a',
                fontFamily: 'Outfit, sans-serif',
                fontSize: 17,
                zIndex: 30,
                border: '2px solid orange',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ color: 'orange', fontWeight: 700 }}>{poi.name}</strong>
                <button
                    onClick={onClose}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: 18,
                        cursor: 'pointer',
                        marginLeft: 8,
                        fontWeight: 700,
                    }}
                    aria-label="Close"
                >
                    ×
                </button>
            </div>
            <div>{poi.description}</div>
        </div>
    );
}

function PrinterModel({ url, activePOI, setActivePOI, onLoad }: { url: string; activePOI: string | null; setActivePOI: (name: string | null) => void; onLoad: () => void }) {
    const group = useRef<any>();
    const { scene } = useGLTF(url);

    React.useEffect(() => {
        if (scene) {
            onLoad();
        }
    }, [scene, onLoad]);

    return (
        <group ref={group}>
            <primitive
                object={scene}
                onPointerOver={undefined}
            />
            {printerPOIs.map((poi) => (
                <POIParticle
                    key={poi.name}
                    poi={poi}
                    hidden={activePOI !== null && activePOI !== poi.name}
                    active={activePOI === poi.name}
                    onClick={() => {
                        if (activePOI === poi.name) {
                            setActivePOI(null);
                        } else {
                            setActivePOI(poi.name);
                        }
                    }}
                />
            ))}
        </group>
    );
}

// Camera animation helper
function AnimatedCamera({ targetPOI }: { targetPOI: POI | null }) {
    const { camera } = useThree();

    useFrame(() => {
        if (targetPOI) {
            // Animate camera position
            const targetPos = targetPOI.cameraView.position;
            camera.position.lerp(
                new THREE.Vector3(targetPos[0], targetPos[1], targetPos[2]),
                0.03
            );
            // Animate camera lookAt
            // const lookAt = targetPOI.cameraView.target;
            const lookAt = targetPOI.position;
            const camTarget = new THREE.Vector3(...lookAt);
            camera.lookAt(camTarget);
            // Animate zoom if provided
            // if (targetPOI.cameraView.zoom) {
            //     camera.zoom += (targetPOI.cameraView.zoom - camera.zoom) * 0.03;
            //     camera.updateProjectionMatrix();
            // }
        } else {
            // Default camera position and target
            camera.position.lerp(new THREE.Vector3(0, 0.8, 4), 0.03);
            camera.lookAt(new THREE.Vector3(0, 0.5, 0));
            // camera.zoom += (1 - camera.zoom) * 0.03;
            camera.updateProjectionMatrix();
        }
    });

    return null;
}

const PrinterHero: React.FC<Props> = ({ printers }) => {
    const [activePOI, setActivePOI] = useState<string | null>(null);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [showCanvas, setShowCanvas] = useState(false);

    const printerModelUrl = '/models/printer.glb';
    const activePOIObj = printerPOIs.find(p => p.name === activePOI) || null;
    const [cameraObj, setCameraObj] = useState<any>(null);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                boxShadow: '0 8px 32px #0008',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <IonImg
                src="/images/printerPlaceholder.png"
                style={{
                    position: 'absolute',
                    top: -70,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    background: 'transparent',
                    zIndex: 20,
                    pointerEvents: 'none',
                    transition: 'opacity 0.3s',
                    opacity: showCanvas && modelLoaded ? 0 : 1,
                }}
            />

            {!modelLoaded && (
                <div style={{ position: 'absolute', width: '100%', left: 0, bottom: 30, zIndex: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <IonButton
                        onClick={() => {
                            setShowCanvas(true);
                        }}
                        size="large"
                        expand="block"
                        shape="round"
                        style={{
                            width: '90%',
                        }}
                        disabled={showCanvas}
                    >
                        {!modelLoaded && showCanvas ? (
                            <>
                                <span>Loading...</span>
                            </>
                        ) : (
                            <span>Explore</span>
                        )}
                    </IonButton>
                    <div
                        style={{
                            background: 'rgba(30,30,40,0.97)',
                            margin: '8px 16px 16px 16px',
                            color: 'white',
                            padding: '18px 28px',
                            borderRadius: 32,
                            boxShadow: '0 4px 24px #000a',
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 18,
                            border: '2px solid var(--ion-color-primary)',
                            textAlign: 'center',
                        }}
                    >
                        <strong style={{ color: 'var(--ion-color-primary)', fontWeight: 700, fontSize: 20 }}>
                            New Immersive 3D Experience!
                        </strong>
                        <div style={{ marginTop: 10 }}>
                            Interact with the Ender-3 printer in an interactive 3D experience. Learn more about each part and its function.
                        </div>
                    </div>

                </div>

            )}

            {showCanvas && (
                <>
                    {/* Loading bar only while model is loading */}
                    {!modelLoaded && <IonProgressBar type="indeterminate" />}
                    <Canvas
                        style={{
                            position: 'absolute',
                            height: 'calc(100% + 70px)',
                            top: -70,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 20,
                        }}
                        camera={{
                            position: [0, 0.8, 4],
                            fov: 45,
                        }}
                        shadows
                        onCreated={({ camera }) => setCameraObj(camera)}
                    >
                        <SpotLight
                            position={[-2, 2, -2]}
                            angle={0.4}
                            penumbra={0.7}
                            intensity={1.2}
                            color="#aabbff"
                        />
                        <Environment preset="studio" />

                        <Suspense fallback={null}>
                            <PrinterModel
                                url={printerModelUrl}
                                activePOI={activePOI}
                                setActivePOI={setActivePOI}
                                onLoad={() => {
                                    setModelLoaded(true);
                                }}
                            />
                            <AnimatedCamera targetPOI={activePOIObj} />
                        </Suspense>
                    </Canvas>
                    {/* Overlay POI text and line */}
                    {cameraObj && modelLoaded && (
                        <div style={{
                            position: 'absolute',
                            bottom: 70,
                            left: 0,
                            right: 0,
                            zIndex: 20,
                        }}>
                            <POIText
                                poi={activePOIObj}
                                onClose={() => setActivePOI(null)}
                            />
                        </div>
                    )}
                </>
            )}
            <h1 style={{
                position: 'absolute',
                top: 24,
                left: 0,
                right: 0,
                textAlign: 'center',
                color: 'white',
                fontSize: '2.2rem',
                fontWeight: 800,
                textShadow: '0 4px 16px #000a',
                letterSpacing: '0.04em',
                fontFamily: "'Outfit', sans-serif",
                zIndex: 10,
                pointerEvents: 'none'
            }}>
                3D Printing Club
            </h1>
        </div>
    );
};

export default PrinterHero;
