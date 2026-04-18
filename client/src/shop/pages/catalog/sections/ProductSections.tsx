import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    PointerSensor,
    TouchSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    defaultAnimateLayoutChanges,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IonButton, IonIcon } from "@ionic/react";
import { addCircleOutline, reorderThreeOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Product, Section } from "../../../../shared/features";
import { useUpdateSectionOrderMutation } from "../../../../shared/features/products/productsApi";
import { useShop } from "../../shared";
import ProductSection from "./ProductSection";
import styles from "./ProductSections.module.css";
import SelectProductModal from "./SelectProductModal";
import { useProductSections } from "./useProductSections";

interface ProductSectionsProps {
    sections: Section[];
    products: Product[];
    isAdmin: boolean;
    catalogType?: string;
}

const ProductSections: React.FC<ProductSectionsProps> = ({
    sections,
    products,
    isAdmin,
    catalogType,
}) => {
    const {
        addSection,
        renameSection,
        removeSection,
        addProduct,
        removeProduct,
        updateSectionType,
    } = useProductSections(sections);
    const { setToast } = useShop();
    const [updateSectionOrder, { isLoading: isSavingOrder }] =
        useUpdateSectionOrderMutation();

    const [isSelectProductModalOpen, setIsSelectProductModalOpen] =
        useState(false);
    const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
    const [orderedSections, setOrderedSections] = useState<Section[]>([]);
    const [draggingSectionId, setDraggingSectionId] = useState<number | null>(
        null,
    );
    const [collapsedSectionById, setCollapsedSectionById] = useState<
        Record<number, boolean>
    >({});

    const canReorder = isAdmin;

    useEffect(() => {
        const sortedSections = [...sections].sort(
            (a, b) =>
                (a.display_order ?? Infinity) - (b.display_order ?? Infinity),
        );
        setOrderedSections(sortedSections);

        setCollapsedSectionById((current) => {
            const next: Record<number, boolean> = {};
            sortedSections.forEach((section) => {
                next[section.id] = current[section.id] ?? true;
            });
            return next;
        });
    }, [sections]);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 180,
                tolerance: 5,
            },
        }),
    );

    const activeSection = orderedSections.find(
        (section) => section.id === draggingSectionId,
    );

    const handleDragStart = (event: DragStartEvent) => {
        setDraggingSectionId(Number(event.active.id));
    };

    const handleDragCancel = () => {
        setDraggingSectionId(null);
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        setDraggingSectionId(null);

        if (!canReorder || isSavingOrder) {
            return;
        }

        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

        const oldIndex = orderedSections.findIndex(
            (item) => item.id === active.id,
        );
        const newIndex = orderedSections.findIndex(
            (item) => item.id === over.id,
        );

        if (oldIndex < 0 || newIndex < 0) {
            return;
        }

        const previousOrder = [...orderedSections];
        const nextOrder = arrayMove(orderedSections, oldIndex, newIndex);

        setOrderedSections(nextOrder);

        try {
            await updateSectionOrder({
                sections: nextOrder.map((section, index) => ({
                    id: section.id,
                    displayOrder: index,
                })),
                ...(catalogType ? { type: catalogType } : {}),
            }).unwrap();

            setToast({
                message: "Section order updated",
                color: "success",
                duration: 1800,
            });
        } catch (error) {
            setOrderedSections(previousOrder);

            const message =
                typeof error === "object" &&
                error !== null &&
                "data" in error &&
                typeof error.data === "object" &&
                error.data !== null &&
                "message" in error.data &&
                typeof error.data.message === "string"
                    ? error.data.message
                    : "Failed to save section order";

            setToast({
                message,
                color: "danger",
                duration: 2200,
            });
        }
    };

    return (
        <>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext
                    items={orderedSections.map((section) => section.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {orderedSections.map((section) => (
                        <SortableSectionContainer
                            key={section.id}
                            section={section}
                            isAdmin={isAdmin}
                            disabled={!canReorder || isSavingOrder}
                            showHandle={canReorder}
                        >
                            <ProductSection
                                section={section}
                                products={products}
                                mode={isAdmin ? "admin" : "user"}
                                catalogType={catalogType}
                                isCollapsed={
                                    isAdmin
                                        ? collapsedSectionById[section.id] ||
                                          false
                                        : undefined
                                }
                                onToggleCollapsed={
                                    isAdmin
                                        ? () =>
                                              setCollapsedSectionById(
                                                  (current) => ({
                                                      ...current,
                                                      [section.id]:
                                                          !current[section.id],
                                                  }),
                                              )
                                        : undefined
                                }
                                onAddProduct={(sectionId) => {
                                    setActiveSectionId(sectionId);
                                    setIsSelectProductModalOpen(true);
                                }}
                                onUpdateSectionType={updateSectionType}
                                onRemoveProduct={removeProduct}
                                onRenameSection={renameSection}
                                onRemoveSection={removeSection}
                            />
                        </SortableSectionContainer>
                    ))}
                </SortableContext>

                <DragOverlay>
                    {activeSection ? (
                        <div className={styles.dragOverlayCard}>
                            <div className={styles.dragOverlayTitleRow}>
                                <IonIcon icon={reorderThreeOutline} />
                                <span>{activeSection.name}</span>
                            </div>
                            <span className={styles.dragOverlayMeta}>
                                Move to reorder
                            </span>
                        </div>
                    ) : null}
                </DragOverlay>
            </DndContext>
            {isAdmin && (
                <div className={styles.adminActions}>
                    <IonButton fill="outline" onClick={() => addSection()}>
                        <IonIcon slot="start" icon={addCircleOutline} />
                        Add Section
                    </IonButton>
                </div>
            )}
            <SelectProductModal
                isOpen={isSelectProductModalOpen}
                onClose={() => setIsSelectProductModalOpen(false)}
                onSelect={(productId, variantId) =>
                    addProduct(activeSectionId!, productId, variantId)
                }
                type={catalogType}
            />
        </>
    );
};

const SortableSectionContainer: React.FC<{
    section: Section;
    isAdmin: boolean;
    disabled: boolean;
    showHandle: boolean;
    children: React.ReactNode;
}> = ({ section, isAdmin, disabled, showHandle, children }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: section.id,
        disabled: !isAdmin || disabled,
        animateLayoutChanges: (args) =>
            defaultAnimateLayoutChanges({
                ...args,
                wasDragging: true,
            }),
    });

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
            }}
            className={`${styles.sortableSectionContainer} ${
                isDragging ? styles.sortableSectionDragging : ""
            }`}
        >
            {isAdmin && showHandle && (
                <div className={styles.sectionOrderHandleRow}>
                    <button
                        type="button"
                        ref={setActivatorNodeRef}
                        className={styles.sectionOrderHandle}
                        disabled={disabled}
                        {...attributes}
                        {...listeners}
                    >
                        <IonIcon icon={reorderThreeOutline} />
                        <span>Drag to reorder</span>
                    </button>
                </div>
            )}
            {children}
        </div>
    );
};

export default ProductSections;
