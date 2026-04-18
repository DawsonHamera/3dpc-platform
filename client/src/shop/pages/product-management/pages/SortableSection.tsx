import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IonIcon, IonText } from "@ionic/react";
import { reorderThreeOutline } from "ionicons/icons";
import React from "react";
import { Section } from "../../../../shared/features/products/productsApi";
import styles from "./SectionManagementPage.module.css";

interface SortableSectionProps {
    section: Section;
    order: number;
    disabled?: boolean;
}

export const SortableSection: React.FC<SortableSectionProps> = ({
    section,
    order,
    disabled = false,
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: section.id,
        disabled,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`${styles.sectionItem} ${
                isDragging ? styles.sectionItemDragging : ""
            }`}
        >
            <div
                className={`${styles.dragHandle} ${
                    disabled ? styles.dragHandleDisabled : ""
                }`}
                {...attributes}
                {...listeners}
            >
                <IonIcon icon={reorderThreeOutline} />
            </div>
            <div className={styles.sectionInfo}>
                <IonText>
                    <h3 className={styles.sectionName}>{section.name}</h3>
                </IonText>
                <IonText>
                    <p className={styles.sectionMeta}>
                        {section.items?.length || 0} product
                        {section.items?.length !== 1 ? "s" : ""}
                    </p>
                </IonText>
            </div>
            <div className={styles.orderBadge}>
                {order}
            </div>
        </div>
    );
};
