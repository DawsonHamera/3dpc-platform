import {
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonCard,
} from "@ionic/react";
import Card from "../../../components/Card/Card";

const RecycleJobs: React.FC = () => {
    return (
        <IonCard>
            <h1 style={{textAlign: 'center', margin: '20px'}}>Process</h1>
            <IonAccordionGroup>
                <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonLabel>
                            1. Bottle Heating and Pressurization
                        </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        We begin by placing the empty bottle in our workspace
                        and warming it evenly with a steady, controlled flow of
                        heat from the heat gun. As the water inside heats up,
                        gentle internal pressure builds and the plastic
                        gradually relaxes. We keep the heat moving until the
                        bottle becomes soft, flexible, and uniformly smooth,
                        with every crinkle flattened out. Once it looks clean,
                        sleek, and consistent, it's ready for the next stage.
                    </div>
                </IonAccordion>
                <IonAccordion value="second">
                    <IonItem slot="header" color="light">
                        <IonLabel>
                            2. Cutting the Bottle into Filament Strips
                        </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        After heating, we let the bottle cool until it’s
                        comfortably warm to handle. Using our precise,
                        well-aligned cutting jig, we slice the bottle into a
                        single continuous strip about 8 mm wide. We maintain
                        steady tension and clean alignment so the strip stays
                        uniform, tidy, and free of jagged edges. By the time the
                        whole bottle is converted, we're left with a long,
                        smooth ribbon of recyclable plastic.
                    </div>
                </IonAccordion>
                <IonAccordion value="third">
                    <IonItem slot="header" color="light">
                        <IonLabel>
                            3. Feeding the Strip Into the Extruder
                        </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        We trim the leading edge so it's straight and crisp,
                        then feed it into the extruder's intake. Once the drive
                        gears grab the strip, we guide it into position, making
                        sure everything stays centered and unobstructed. We
                        watch for smooth, consistent movement to ensure a clean
                        melt later.
                    </div>
                </IonAccordion>
                <IonAccordion value="fourth">
                    <IonItem slot="header" color="light">
                        <IonLabel>
                            4. Heating and Extruding the Melted Plastic
                        </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        With the strip feeding properly, we heat the extruder to
                        the precise, optimal temperature for our PET material.
                        As the plastic melts, we monitor the nozzle output for a
                        steady, glossy, and uniform flow. We fine-tune
                        temperature or speed so the filament maintains a clean,
                        reliable diameter without bubbles or inconsistencies.
                    </div>
                </IonAccordion>
                <IonAccordion value="fifth">
                    <IonItem slot="header" color="light">
                        <IonLabel>
                            5. Cooling and Stabilizing the Filament
                        </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        As the filament exits the nozzle, we guide it through
                        our controlled cooling setup—either airflow or water—to
                        help it solidify evenly and predictably. We track the
                        filament diameter and adjust settings to keep it
                        consistent, stable, and within tight tolerances. Once
                        everything is tuned, the filament comes out smooth,
                        straight, and highly uniform.
                    </div>
                </IonAccordion>
                <IonAccordion value="sixth">
                    <IonItem slot="header" color="light">
                        <IonLabel>6. Spooling the Finished Filament</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        Finally, we begin spooling the cooled filament with
                        gentle, even tension, creating neat, organized layers on
                        the spool. We watch for smooth winding and clean
                        alignment to prevent tangling. When the last section
                        feeds through, we cut the filament cleanly and
                        precisely, then secure the end for a polished,
                        ready-to-use spool of recycled  filament.
                    </div>
                </IonAccordion>
            </IonAccordionGroup>
        </IonCard>
    );
};

export default RecycleJobs;
