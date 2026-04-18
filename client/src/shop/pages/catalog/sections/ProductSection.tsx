import {
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonText,
    IonToolbar,
    useIonAlert,
    useIonRouter,
} from "@ionic/react";
import {
    addCircleOutline,
    chevronDownOutline,
    chevronUpOutline,
    pencilOutline,
    peopleOutline,
    removeCircle,
    saveOutline,
    schoolOutline,
    trashOutline,
} from "ionicons/icons";
import { useState } from "react";
import { Product, Section } from "../../../../shared/features";
import { ProductCard } from "../product";
import styles from "./ProductSections.module.css";

const ProductSection = ({
    section,
    products,
    mode,
    onAddProduct,
    onRemoveProduct,
    onRenameSection,
    onUpdateSectionType,
    onRemoveSection,
    catalogType,
    isCollapsed,
    onToggleCollapsed,
}: {
    section: Section;
    products: Product[];
    mode: "admin" | "user";
    catalogType?: string;
    isCollapsed?: boolean;
    onToggleCollapsed?: () => void;
    onAddProduct: (sectionId: number) => void;
    onRemoveProduct: (
        sectionId: number,
        productId: number,
        variantId: number,
    ) => void;
    onRenameSection: (sectionId: number, newName: string) => void;
    onUpdateSectionType: (sectionId: number, newType: string) => void;
    onRemoveSection: (sectionId: number) => void;
}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [sectionName, setSectionName] = useState<string>(section.name);
    const [presentAlert] = useIonAlert();

    const router = useIonRouter();
    const sectionCatalogType =
        catalogType || (section.type === "teachers" ? "teachers" : "general");

    const handleConfirmDelete = () => {
        presentAlert({
            header: "Delete section?",
            message:
                "This will remove the section and its current section assignments.",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                },
                {
                    text: "Delete",
                    role: "destructive",
                    handler: () => onRemoveSection(section.id),
                },
            ],
        });
    };

    return (
        <div key={section.id} className={styles.productSection}>
            <IonToolbar className={styles.sectionToolbar}>
                {mode === "admin" && (
                    <IonButton
                        slot="start"
                        fill="clear"
                        size="small"
                        className={styles.deleteSectionButton}
                        onClick={handleConfirmDelete}
                    >
                        <IonIcon slot="icon-only" icon={trashOutline} />
                    </IonButton>
                )}
                {isEditing ? (
                    <IonItem lines="none" className={styles.editItem}>
                        <IonInput
                            value={sectionName}
                            onIonInput={(e) => setSectionName(e.detail.value!)}
                            className={styles.sectionNameInput}
                        />
                    </IonItem>
                ) : (
                    <div className={styles.sectionHeaderTitleBlock}>
                        <IonText>
                            <h2>{section.name}</h2>
                        </IonText>
                        <IonText
                            color="medium"
                            className={styles.sectionMetaText}
                        >
                            <p>
                                {section.items.length} item
                                {section.items.length === 1 ? "" : "s"}
                            </p>
                        </IonText>
                    </div>
                )}
                {onToggleCollapsed && (
                    <IonButton
                        slot="end"
                        fill="clear"
                        size="small"
                        className={styles.collapseToggleButton}
                        onClick={onToggleCollapsed}
                    >
                        <IonIcon
                            slot="icon-only"
                            icon={
                                isCollapsed
                                    ? chevronDownOutline
                                    : chevronUpOutline
                            }
                        />
                    </IonButton>
                )}
                {mode === "admin" && !isEditing && (
                    <IonButton
                        slot="end"
                        fill="clear"
                        size="small"
                        className={styles.sectionActionButton}
                        onClick={() => {
                            setSectionName(section.name);
                            setIsEditing(true);
                        }}
                    >
                        <IonIcon slot="icon-only" icon={pencilOutline} />
                    </IonButton>
                )}
                {mode === "admin" && isEditing && (
                    <IonButton
                        slot="end"
                        fill="clear"
                        size="small"
                        color="success"
                        className={styles.sectionActionButton}
                        onClick={() => {
                            onRenameSection(section.id, sectionName);
                            setIsEditing(false);
                        }}
                    >
                        <IonIcon slot="icon-only" icon={saveOutline} />
                    </IonButton>
                )}
            </IonToolbar>
            {mode === "admin" && isEditing && (
                <div className={styles.sectionEditMeta}>
                    <IonLabel className={styles.sectionTypeLabel}>
                        Section Type
                    </IonLabel>
                    <IonSelect
                        value={section.type}
                        toggleIcon={
                            section.type === "teachers"
                                ? schoolOutline
                                : peopleOutline
                        }
                        onIonChange={(e) =>
                            onUpdateSectionType(section.id, e.detail.value)
                        }
                    >
                        <IonSelectOption value="general">
                            General
                        </IonSelectOption>
                        <IonSelectOption value="teachers">
                            Teachers
                        </IonSelectOption>
                    </IonSelect>
                </div>
            )}

            {isCollapsed ? (
                <div className={styles.collapsedSummaryRow}>
                    <IonText color="medium">
                        <p>
                            Collapsed • {section.items.length} item
                            {section.items.length === 1 ? "" : "s"}
                        </p>
                    </IonText>
                </div>
            ) : (
                <div className={styles.productList}>
                    {section.items.map((item) => {
                        const product = products.find(
                            (p) => p.id === item.product_id,
                        );

                        const variant = product?.variants.find(
                            (v) => v.id === item.variant_id,
                        );

                        if (!product || !variant) return null;

                        return (
                            <ProductCard
                                key={`${product.id}-${variant.id}`}
                                product={product}
                                variantId={variant.id}
                                onClick={
                                    mode === "user"
                                        ? () =>
                                              router.push(
                                                  `/shop${
                                                      sectionCatalogType !==
                                                      "general"
                                                          ? `?type=${sectionCatalogType}&`
                                                          : "?"
                                                  }productId=${product.id}&variantId=${variant.id}`,
                                                  "none",
                                              )
                                        : undefined
                                }
                                renderButton={
                                    mode === "admin"
                                        ? (onButtonClick) => {
                                              return (
                                                  <IonButton
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          onButtonClick();
                                                      }}
                                                      fill="clear"
                                                  >
                                                      <IonIcon
                                                          icon={removeCircle}
                                                          slot="icon-only"
                                                          size="large"
                                                      />
                                                  </IonButton>
                                              );
                                          }
                                        : undefined
                                }
                                onButtonClick={() =>
                                    onRemoveProduct(
                                        section.id,
                                        product.id,
                                        variant.id,
                                    )
                                }
                            />
                        );
                    })}

                    {mode === "admin" && (
                        <div
                            className={styles.addCardPlaceholder}
                            onClick={() => {
                                onAddProduct(section.id);
                            }}
                        >
                            <IonIcon icon={addCircleOutline} />
                            <IonText>
                                <p>Add Product</p>
                            </IonText>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductSection;
