import React from 'react';
import { IonItem, IonInput, IonTextarea, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { reorderThree, trashOutline } from 'ionicons/icons';
import { ContentBlock } from '../types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const SortableContentBlock = ({
  block,
  onChange,
  onDelete,
}: {
  block: ContentBlock;
  onChange: (value: string) => void;
  onDelete: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: block.id });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const renderInput = () => {
    switch (block.type) {
      case 'title':
      case 'link':
        return (
          <IonInput
            value={block.value ?? ''}
            onIonInput={(e) => onChange(e.detail.value || '')}
            placeholder={block.type === 'title' ? 'Title' : 'Link URL'}
          />
        );
      case 'text':
        return (
          <IonTextarea
            value={block.value ?? ''}
            onIonInput={(e) => onChange(e.detail.value || '')}
            placeholder="Text"
          />
        );
      case 'image':
        return (
          <IonInput
            type="url"
            value={block.value ?? ''}
            onIonInput={(e) => onChange(e.detail.value || '')}
            placeholder="Image URL"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <IonItem lines="full" style={{ display: 'flex', alignItems: 'center' }}>
        <div {...listeners} style={{ marginRight: 8, cursor: 'grab' }}>
          <IonIcon icon={reorderThree} />
        </div>
        <IonLabel style={{ flex: 1 }}>{renderInput()}</IonLabel>
        <IonButton fill="clear" color="danger" onClick={onDelete} size="small">
          <IonIcon icon={trashOutline} slot="icon-only" />
        </IonButton>
      </IonItem>
    </div>
  );
};
