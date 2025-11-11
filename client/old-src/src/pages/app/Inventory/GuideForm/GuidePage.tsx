import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonList, IonGrid, IonRow, IonCol
} from '@ionic/react';
import {
  DndContext, useSensor, useSensors, TouchSensor, closestCenter
} from '@dnd-kit/core';
import {
  SortableContext, verticalListSortingStrategy, arrayMove
} from '@dnd-kit/sortable';

import { Step, ContentBlock, ContentBlockType, generateId } from './types';
import { SortableStep } from './SortableStep';
import { SortableContentBlock } from './SortableContentBlock';

const GuidePage: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [editingStepId, setEditingStepId] = useState<string | null>(null);

  const sensors = useSensors(useSensor(TouchSensor));
  const editingStep = steps.find(s => s.id === editingStepId) || null;

  const onStepDragEnd = ({ active, over }: any) => {
    if (over && active.id !== over.id) {
      const oldIndex = steps.findIndex((s) => s.id === active.id);
      const newIndex = steps.findIndex((s) => s.id === over.id);
      setSteps((s) => arrayMove(s, oldIndex, newIndex));
    }
  };

  const onBlockDragEnd = ({ active, over }: any) => {
    if (!editingStep || active.id === over?.id) return;
    const oldIndex = editingStep.contentBlocks.findIndex(b => b.id === active.id);
    const newIndex = editingStep.contentBlocks.findIndex(b => b.id === over?.id);
    const newBlocks = arrayMove(editingStep.contentBlocks, oldIndex, newIndex);
    updateEditingStepBlocks(newBlocks);
  };

  const updateEditingStepBlocks = (blocks: ContentBlock[]) => {
    if (!editingStep) return;
    setSteps(steps.map(s => s.id === editingStep.id ? { ...s, contentBlocks: blocks } : s));
  };

  const onEditBlock = (id: string, value: string) => {
    if (!editingStep) return;
    updateEditingStepBlocks(editingStep.contentBlocks.map(b => b.id === id ? { ...b, value } : b));
  };

  const onDeleteBlock = (id: string) => {
    if (!editingStep) return;
    updateEditingStepBlocks(editingStep.contentBlocks.filter(b => b.id !== id));
  };

  const onAddBlock = (type: ContentBlockType) => {
    if (!editingStep) return;
    const newBlock: ContentBlock = { id: generateId(), type, value: '' };
    updateEditingStepBlocks([...editingStep.contentBlocks, newBlock]);
  };

  const onAddStep = () => {
    setSteps([...steps, { id: generateId(), contentBlocks: [] }]);
  };

  const onDeleteStep = (id: string) => {
    setSteps(steps.filter(s => s.id !== id));
    if (editingStepId === id) setEditingStepId(null);
  };

  const onSaveStep = () => {
    setEditingStepId(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Guide Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!editingStep && (
          <>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onStepDragEnd}>
              <SortableContext items={steps.map(s => s.id)} strategy={verticalListSortingStrategy}>
                <IonList>
                  {steps.map((step) => (
                    <SortableStep
                      key={step.id}
                      step={step}
                      onEdit={() => setEditingStepId(step.id)}
                      onDelete={() => onDeleteStep(step.id)}
                    />
                  ))}
                </IonList>
              </SortableContext>
            </DndContext>
            <IonButton expand="block" onClick={onAddStep} style={{ margin: 16 }}>
              Add Step
            </IonButton>
          </>
        )}

        {editingStep && (
          <>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onBlockDragEnd}>
              <SortableContext items={editingStep.contentBlocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
                <IonList>
                  {editingStep.contentBlocks.map((block) => (
                    <SortableContentBlock
                      key={block.id}
                      block={block}
                      onChange={(value) => onEditBlock(block.id, value)}
                      onDelete={() => onDeleteBlock(block.id)}
                    />
                  ))}
                </IonList>
              </SortableContext>
            </DndContext>

            <IonGrid style={{ padding: '0 16px' }}>
              <IonRow>
                {(['title', 'text', 'image', 'link'] as ContentBlockType[]).map((type) => (
                  <IonCol key={type} size="6" style={{ padding: 4 }}>
                    <IonButton expand="block" size="small" onClick={() => onAddBlock(type)}>
                      Add {type}
                    </IonButton>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>

            <IonButton expand="block" onClick={onSaveStep} style={{ margin: 16 }}>
              Save Step
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GuidePage;
