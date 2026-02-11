import {
    IonButton,
    IonButtons,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonText,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import {
    addCircleOutline,
    create,
    peopleOutline,
    removeCircle,
    saveOutline,
    schoolOutline,
} from "ionicons/icons";
import { useState } from "react";
import { Product, Section } from "../../../../shared/features";
import { ProductCard } from "../product";

const ProductSection = ({
    section,
    products,
    mode,
    onAddProduct,
    onRemoveProduct,
    onRenameSection,
    onUpdateSectionType,
    onRemoveSection,
}: {
    section: Section;
    products: Product[];
    mode: "admin" | "user";
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

    const router = useIonRouter();

    return (
        <div key={section.id} className="product-section">
            <IonToolbar>
                {mode === "admin" && (
                    <IonButton
                        slot="start"
                        fill="clear"
                        onClick={() => {
                            setIsEditing(!isEditing);
                        }}
                    >
                        <IonIcon slot="icon-only" icon={create} size="large" />
                    </IonButton>
                )}
                {isEditing ? (
                    <IonItem>
                        <IonInput
                            value={sectionName}
                            onIonInput={(e) => setSectionName(e.detail.value!)}
                            onBlur={() => {
                                onRenameSection(section.id, sectionName);
                                setIsEditing(false);
                            }}
                        />
                        <IonButtons slot="end">
                            <IonButton
                                onClick={() => {
                                    onRenameSection(section.id, sectionName);
                                    setIsEditing(false);
                                }}
                                color="success"
                            >
                                <IonIcon slot="icon-only" icon={saveOutline} />
                            </IonButton>
                            <IonButton
                                color="danger"
                                onClick={() => onRemoveSection(section.id)}
                            >
                                <IonIcon slot="icon-only" icon={removeCircle} />
                            </IonButton>
                            {/* <IonButton onClick={() => setIsEditing(false)}>
                                <IonIcon slot="icon-only" icon={close} />
                            </IonButton> */}
                        </IonButtons>
                    </IonItem>
                ) : (
                    <IonText>
                        <h2 className="section-title">{section.name}</h2>
                    </IonText>
                )}
            </IonToolbar>
            {isEditing && (
                <IonSelect
                    slot="end"
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
                    <IonLabel>Section Type</IonLabel>
                    <IonSelectOption value="general">General</IonSelectOption>
                    <IonSelectOption value="teachers">Teachers</IonSelectOption>
                </IonSelect>
            )}

            <div className="product-list">
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
                                              `/shop/?productId=${product.id}&variantId=${variant.id}`,
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
                        className="add-card-placeholder"
                        onClick={() => {
                            onAddProduct(section.id);
                        }}
                    >
                        <IonIcon icon={addCircleOutline} />
                        <IonText>Add Product</IonText>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductSection;
