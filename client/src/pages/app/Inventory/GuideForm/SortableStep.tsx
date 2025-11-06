import React from 'react';
import { IonButton, IonIcon, IonItem } from '@ionic/react';
import { trashOutline, createOutline, reorderThree } from 'ionicons/icons';
import { Step } from '../types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const SortableStep = ({
    step,
    onEdit,
    onDelete,
}: {
    step: Step;
    onEdit: () => void;
    onDelete: () => void;
}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: step.id });
    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes}>
            <IonItem lines="full" style={{ display: 'flex', alignItems: 'flex-start', padding: '8px' }}>
                <div {...listeners} style={{ cursor: 'grab', fontSize: '1.5rem', marginRight: 8, marginTop: 4 }}>
                    <IonIcon icon={reorderThree} />
                </div>
                <div style={{ flex: 1 }}>
                    {step.contentBlocks.length === 0 && <i>No content yet</i>}
                    {step.contentBlocks.map((block) => {
                        switch (block.type) {
                            case 'title':
                                return <h3 key={block.id}>{block.value}</h3>;
                            case 'text':
                                return <p key={block.id}>{block.value}</p>;
                            case 'image':
                                return <img key={block.id} src={block.value} alt="" style={{ maxHeight: 80 }} />;
                            case 'link':
                                return (
                                    <a key={block.id} href={block.value} target="_blank" rel="noopener noreferrer">
                                        {block.value}
                                    </a>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
                <IonButton fill="clear" onClick={onEdit} size="small" style={{ alignSelf: 'flex-start' }}>
                    <IonIcon icon={createOutline} slot="icon-only" />
                </IonButton>
                <IonButton fill="clear" color="danger" onClick={onDelete} size="small" style={{ alignSelf: 'flex-start' }}>
                    <IonIcon icon={trashOutline} slot="icon-only" />
                </IonButton>
            </IonItem>
        </div>
    );
};