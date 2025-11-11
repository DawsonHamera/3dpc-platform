import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/react';
import StepManager from './StepManager/StepManager';
import Header from '../../../components/Header/Header';
import ProcessTemplateManager from './ProcessTemplateManager/ProcessTemplateManager';

const WorkflowManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'steps' | 'templates'>('steps');

  return (
    <IonPage>
      <Header title="Workflow Management" />
      <IonContent>
        {/* Segment Navigation */}
        <IonSegment
          value={activeTab}
          onIonChange={(e) => setActiveTab(e.detail.value as 'steps' | 'templates')}
          style={{ margin: '16px' }}
        >
          <IonSegmentButton value="steps">
            <IonLabel>Steps</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="templates">
            <IonLabel>Process Templates</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Tab Content */}
        <div style={{ padding: '0 16px' }}>
          {activeTab === 'steps' && <StepManager />}
          {activeTab === 'templates' && <ProcessTemplateManager />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WorkflowManagement;
