import { useGSAP } from "@gsap/react";
import {
    IonAlert,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonIcon,
    IonPage,
    IonTitle,
} from "@ionic/react";
import gsap from "gsap";
import { leaf } from "ionicons/icons";
import { useRef, useState } from "react";
import Header from "../../../shared/components/Header/Header";
import {
    useCreateRecyclingLogMutation,
    useGetRecyclingStatsQuery,
} from "../../../shared/features";
import { useAuth } from "../../../shared/hooks/useAuth";
import RecycleJobs from "./RecycleJobs";
import RecycleLogs from "./RecycleLogs";
import "./RecyclePage.css";

const RecyclePage: React.FC = () => {
    const [isAddBottleAlertOpen, setIsAddBottleAlertOpen] = useState(false);
    const [isAddGramsAlertOpen, setIsAddGramsAlertOpen] = useState(false);

    const user = useAuth().user;

    const {
        data: recyclingStats,
        isLoading,
        isFetching,
        isSuccess,
    } = useGetRecyclingStatsQuery();
    const [createRecycleLog] = useCreateRecyclingLogMutation();

    console.log("Recycling Stats:", recyclingStats);

    const recycledBottlesRef = useRef<HTMLDivElement>(null);
    const recycledGramsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!isLoading && !isFetching && isSuccess) {
                const start = {
                    bottles: parseInt(
                        recycledBottlesRef.current?.textContent || "0",
                    ),
                    grams: parseInt(
                        recycledGramsRef.current?.textContent || "0",
                    ),
                };

                let tl = gsap.timeline();
                tl.to(start, {
                    bottles: recyclingStats?.bottles || 0,
                    duration: 1,
                    ease: "power3.out",
                    onUpdate: () => {
                        if (recycledBottlesRef.current) {
                            recycledBottlesRef.current.textContent = Math.floor(
                                start.bottles,
                            ).toLocaleString();
                        }
                    },
                }).to(start, {
                    grams: recyclingStats?.filamentCreated || 0,
                    duration: 1,
                    ease: "power3.out",
                    onUpdate: () => {
                        if (recycledGramsRef.current) {
                            recycledGramsRef.current.textContent = Math.floor(
                                start.grams,
                            ).toLocaleString();
                        }
                    },
                });
            }
        },
        { dependencies: [isLoading, isFetching, isSuccess] },
    );

    return (
        <IonPage>
            <Header title="Recycle" color="success" />
            <IonContent>
                <div className="hero-container">
                    <img
                        src="/images/recycling_symbol.svg"
                        alt="Recycle Hero"
                        className="hero-image"
                    />
                    <h1 className="hero-text">Recreator</h1>
                    <p className="hero-subtitle">Recycling Project</p>
                    <div className="stat-box">
                        <h1 ref={recycledBottlesRef} className="hero-text">
                            0
                        </h1>
                        <h2
                            style={{
                                margin: "10px 0 0 0",
                                textAlign: "center",
                                fontSize: "1.5rem",
                                color: "white",
                            }}
                        >
                            <IonIcon icon={leaf} /> Bottles Recycled
                        </h2>
                    </div>
                    <div className="stat-box">
                        <h1 ref={recycledGramsRef} className="hero-text">
                            0
                        </h1>
                        <h2
                            style={{
                                margin: "10px 0 0 0",
                                textAlign: "center",
                                fontSize: "1.5rem",
                                color: "white",
                            }}
                        >
                            <IonIcon icon={leaf} /> Grams Recycled
                        </h2>
                    </div>
                </div>
                <div style={{ padding: "20px" }}>
                    <IonCard style={{ padding: "20px", marginBottom: "20px" }}>
                        <IonCardHeader>
                            <IonTitle>Actions</IonTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Log recycled bottles or grams of filament
                        </IonCardContent>
                        <IonButton
                            color="success"
                            fill="clear"
                            onClick={() => setIsAddBottleAlertOpen(true)}
                        >
                            + 1 Bottle
                        </IonButton>
                        <IonButton
                            color="success"
                            fill="clear"
                            onClick={() => setIsAddGramsAlertOpen(true)}
                        >
                            + Grams
                        </IonButton>
                    </IonCard>
                    <RecycleJobs />
                    {user?.role.name === "admin" && <RecycleLogs />}
                </div>
            </IonContent>
            <IonAlert
                isOpen={isAddBottleAlertOpen}
                onDidDismiss={() => setIsAddBottleAlertOpen(false)}
                header="Confirm Addition"
                message="Are you sure you want to add one more bottle?"
                buttons={[
                    {
                        text: "Cancel",
                        role: "cancel",
                    },
                    {
                        text: "Confirm",
                        handler: () => {
                            // Handle the confirmation logic here
                            createRecycleLog({ amount: 1, type: "bottle" });
                            setIsAddBottleAlertOpen(false);
                        },
                    },
                ]}
            />
            <IonAlert
                isOpen={isAddGramsAlertOpen}
                onDidDismiss={() => setIsAddGramsAlertOpen(false)}
                header="Confirm Addition"
                message="Enter the number of grams to add:"
                inputs={[
                    {
                        name: "amount",
                        type: "number",
                        placeholder: "Enter amount",
                    },
                ]}
                buttons={[
                    {
                        text: "Cancel",
                        role: "cancel",
                    },
                    {
                        text: "Confirm",
                        handler: (data) => {
                            const amount = parseInt(data.amount, 10);
                            if (!isNaN(amount) && amount > 0) {
                                createRecycleLog({
                                    amount,
                                    type: "filament_created",
                                });
                            }
                            setIsAddGramsAlertOpen(false);
                        },
                    },
                ]}
            />
        </IonPage>
    );
};

export default RecyclePage;
