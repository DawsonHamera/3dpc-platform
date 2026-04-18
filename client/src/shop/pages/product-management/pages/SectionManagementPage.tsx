import {
    DndContext,
    DragEndEvent,
    PointerSensor,
    TouchSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
    IonButton,
    IonContent,
    IonIcon,
    IonPage,
    IonSpinner,
    IonText,
    IonToast,
} from "@ionic/react";
import { checkmarkCircle, listOutline, saveOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../shared/hooks/useAuth";
import {
    Section,
    useGetSectionsQuery,
    useUpdateSectionOrderMutation,
} from "../../../../shared/features/products/productsApi";
import { ShopHeader } from "../../shared";
import AdminAccessDenied from "./AdminAccessDenied";
import styles from "./SectionManagementPage.module.css";
import { SortableSection } from "./SortableSection";

const SectionManagementPage: React.FC = () => {
    const { user } = useAuth();
    const isAdmin = user?.role?.name === "admin";

    const {
        data: sections,
        isLoading,
        isFetching,
        error,
        refetch,
    } = useGetSectionsQuery();
    const [updateSectionOrder, { isLoading: isSaving }] =
        useUpdateSectionOrderMutation();

    const [orderedSections, setOrderedSections] = useState<Section[]>([]);
    const [hasChanges, setHasChanges] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastColor, setToastColor] = useState<
        "success" | "danger" | "warning"
    >("success");

    // Initialize ordered sections when data loads
    useEffect(() => {
        if (sections) {
            const sorted = [...sections].sort(
                (a, b) =>
                    (a.display_order ?? Infinity) -
                    (b.display_order ?? Infinity),
            );
            setOrderedSections(sorted);
        }
    }, [sections]);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 200,
                tolerance: 8,
            },
        }),
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

        setOrderedSections((items) => {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);

            const newOrder = arrayMove(items, oldIndex, newIndex);
            setHasChanges(true);
            return newOrder;
        });
    };

    const handleSaveOrder = async () => {
        try {
            const sectionsWithOrder = orderedSections.map((section, index) => ({
                id: section.id,
                displayOrder: index,
            }));

            await updateSectionOrder({ sections: sectionsWithOrder }).unwrap();

            setToastMessage("Section order updated successfully!");
            setToastColor("success");
            setShowToast(true);
            setHasChanges(false);
        } catch (err) {
            const message =
                typeof err === "object" &&
                err !== null &&
                "data" in err &&
                typeof err.data === "object" &&
                err.data !== null &&
                "message" in err.data &&
                typeof err.data.message === "string"
                    ? err.data.message
                    : "Failed to update section order. Please try again.";
            setToastMessage(message);
            setToastColor("danger");
            setShowToast(true);
        }
    };

    const handleRevert = () => {
        if (sections) {
            const sorted = [...sections].sort(
                (a, b) =>
                    (a.display_order ?? Infinity) -
                    (b.display_order ?? Infinity),
            );
            setOrderedSections(sorted);
            setHasChanges(false);
        }
    };

    if (!isAdmin) {
        return <AdminAccessDenied />;
    }

    if (isLoading) {
        return (
            <IonPage>
                <ShopHeader
                    title="Section Management"
                    backArrow
                    breadcrumbs={[
                        { label: "Shop", path: "/shop" },
                        { label: "Section Management" },
                    ]}
                    contextLabel="Admin"
                />
                <IonContent className={styles.content}>
                    <div className={styles.loadingState}>
                        <IonSpinner />
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    if (error) {
        return (
            <IonPage>
                <ShopHeader
                    title="Section Management"
                    backArrow
                    breadcrumbs={[
                        { label: "Shop", path: "/shop" },
                        { label: "Section Management" },
                    ]}
                    contextLabel="Admin"
                />
                <IonContent className={styles.content}>
                    <div className={styles.errorState}>
                        <IonText>
                            <p className={styles.errorText}>
                                Failed to load sections. Please try again.
                            </p>
                        </IonText>
                        <IonButton
                            onClick={() => refetch()}
                            disabled={isFetching}
                        >
                            {isFetching ? (
                                <IonSpinner slot="start" />
                            ) : undefined}
                            Retry
                        </IonButton>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    if (!orderedSections || orderedSections.length === 0) {
        return (
            <IonPage>
                <ShopHeader
                    title="Section Management"
                    backArrow
                    breadcrumbs={[
                        { label: "Shop", path: "/shop" },
                        { label: "Section Management" },
                    ]}
                    contextLabel="Admin"
                />
                <IonContent className={styles.content}>
                    <div className={styles.emptyState}>
                        <IonIcon
                            icon={listOutline}
                            className={styles.emptyStateIcon}
                        />
                        <IonText>
                            <p className={styles.emptyStateText}>
                                No sections found. Create sections in the
                                catalog to manage their order.
                            </p>
                        </IonText>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <ShopHeader
                title="Section Management"
                backArrow
                breadcrumbs={[
                    { label: "Shop", path: "/shop" },
                    { label: "Section Management" },
                ]}
                contextLabel="Admin"
            />
            <IonContent className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <IonText>
                            <h1 className={styles.headerTitle}>
                                Section Order
                            </h1>
                            <p className={styles.headerSubtitle}>
                                Drag sections to reorder how they appear in the
                                catalog
                            </p>
                        </IonText>
                    </div>

                    <div className={styles.toolbar}>
                        <IonText className={styles.toolbarText}>
                            {hasChanges
                                ? "You have unsaved changes"
                                : `${orderedSections.length} section${
                                      orderedSections.length !== 1 ? "s" : ""
                                  }`}
                            {isSaving ? " • Saving..." : ""}
                        </IonText>
                        <div>
                            {hasChanges && (
                                <>
                                    <IonButton
                                        fill="clear"
                                        color="medium"
                                        onClick={handleRevert}
                                        disabled={isSaving}
                                    >
                                        Cancel
                                    </IonButton>
                                    <IonButton
                                        color="primary"
                                        onClick={handleSaveOrder}
                                        disabled={isSaving}
                                    >
                                        {isSaving ? (
                                            <IonSpinner slot="start" />
                                        ) : (
                                            <IonIcon
                                                slot="start"
                                                icon={saveOutline}
                                            />
                                        )}
                                        Save Order
                                    </IonButton>
                                </>
                            )}
                        </div>
                    </div>

                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={orderedSections.map((s) => s.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            <div className={styles.sectionList}>
                                {orderedSections.map((section, index) => (
                                    <SortableSection
                                        key={section.id}
                                        section={section}
                                        order={index + 1}
                                        disabled={isSaving}
                                    />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                </div>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={3000}
                    color={toastColor}
                    icon={
                        toastColor === "success" ? checkmarkCircle : undefined
                    }
                    position="top"
                />
            </IonContent>
        </IonPage>
    );
};

export default SectionManagementPage;
