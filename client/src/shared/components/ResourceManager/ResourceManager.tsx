import {
    IonAlert,
    IonButton,
    IonButtons,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonModal,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { addOutline, closeOutline, trash } from "ionicons/icons";
import { useState } from "react";
import styles from "./modal.module.css";

type props = {
    items: any[];
    renderItem: (
        item: any,
        triggerEdit: (id: number) => void,
        triggerRemove: (id: number) => void,
        editAccess: boolean,
    ) => JSX.Element;
    customSettings?: { label: string; View: (id: number) => JSX.Element }[];
    Form: React.ComponentType<{
        formData: any;
        setFormData: (key: string, value: any) => void;
        onSubmit: (data: any) => void;
        onCancel: () => void;
    }>;
    editAccess?: boolean;
    onCreate: (data: any) => void;
    onUpdate: (id: number, data: any) => void;
    onDelete: (id: number) => void;
};

const ResourceManager: React.FC<props> = ({
    items,
    renderItem,
    Form,
    onCreate,
    onUpdate,
    onDelete,
    customSettings,
    editAccess=false,
}) => {
    const [action, setAction] = useState<{
        type: "create" | "edit" | "remove";
        id?: number;
    } | null>(null);

    const [formData, setFormData] = useState<any>(null);

    const [currentItem, setCurrentItem] = useState<any>(null);

    const [currentSetting, setCurrentSetting] = useState<any>("default");

    const create = () => {
        setFormData(null);
        setAction({ type: "create" });
    };

    const edit = (id: number) => {
        const item = items.find((i) => i.id === id);
        if (item) {
            setCurrentItem(item);
            setAction({ type: "edit", id });
        }
    };

    const remove = (id: number) => {
        setAction({ type: "remove", id });
    };

    const submit = () => {
        console.log(
            "Submitting form with data:",
            formData,
            "and action:",
            action,
        );
        if (!formData) {
            console.error("Form data is null or undefined. Cannot submit.");
            close();
            return;
        }
        if (action?.type === "create") {
            onCreate(formData);
        } else if (action?.type === "edit" && action.id) {
            onUpdate(action.id, formData);
        }
        close();
    };

    const close = () => {
        setAction(null);
        setCurrentItem(null);
        setFormData(null);
    };

    return (
        <>
            {editAccess && (
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={create}>
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>
            )}
            <IonList lines="none" className={styles.list}>
                {items.map((item) => (
                    <IonItem key={item.id} className={styles.item}>
                        {renderItem(
                            item,
                            (id) => edit(id),
                            (id) => remove(id),
                            editAccess,
                        )}
                    </IonItem>
                ))}{" "}
            </IonList>
            {action && action.type === "remove" && (
                <IonAlert
                    isOpen={true}
                    onDidDismiss={() => setAction(null)}
                    header="Confirm Delete"
                    message="Are you sure you want to delete this item?"
                    buttons={[
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: () => setAction(null),
                        },
                        {
                            text: "Delete",
                            handler: () => {
                                if (action.id) {
                                    onDelete(action.id);
                                }
                                close();
                            },
                        },
                    ]}
                />
            )}
            <IonModal
                isOpen={!!action}
                onDidDismiss={() => setAction(null)}
                className={styles.modal}
            >
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>
                           {currentItem?.title || currentItem?.name || "New Item"}
                        </IonTitle>
                        <IonButtons slot="end">
                             <IonButton onClick={() => remove(currentItem?.id)}>
                            <IonIcon icon={trash} />
                        </IonButton>
                            <IonButton onClick={() => close()}>
                                <IonIcon icon={closeOutline} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                        <IonSegment
                            value={currentSetting}
                            onIonChange={(e) =>
                                setCurrentSetting(e.detail.value)
                            }
                        >
                            <IonSegmentButton value="default">
                                {action?.type === "create"
                                    ? "Create Item"
                                    : action?.type === "edit"
                                      ? "Edit Item"
                                      : ""}
                            </IonSegmentButton>
                            {customSettings &&
                                customSettings.map((setting) => (
                                    <IonSegmentButton
                                        key={setting.label}
                                        value={setting.label}
                                    >
                                        {setting.label}
                                    </IonSegmentButton>
                                ))}
                        </IonSegment>
                    </IonToolbar>
                <div className={styles.content}>
                    {currentSetting === "default" && (
                        <Form
                            formData={{ ...currentItem, ...formData }}
                            setFormData={(key, value) =>
                                setFormData((f: any) => ({
                                    ...f,
                                    [key]: value,
                                }))
                            }
                            onSubmit={(data) => submit()}
                            onCancel={() => close()}
                        />
                    )}
                    {currentSetting &&
                        currentSetting !== "default" &&
                        customSettings
                            ?.find((s) => s.label === currentSetting)
                            ?.View(currentItem?.id)}
                </div>
            </IonModal>
        </>
    );
};

export default ResourceManager;
