import { IonCard, IonCardHeader, IonIcon, IonCardTitle, IonButton, IonCardContent, IonChip } from '@ionic/react';
import { play, create, trash } from 'ionicons/icons';
import React from 'react';
import { renderStepContent } from './hooks';
import { Step } from '../../../../features/crud/steps/types';

const StepPreview: React.FC<{ step: Step, header: (step: Step) => React.ReactNode }> = ({ step, header }) => {

    if (!step) return null;

    const hasContent = step.stepContents && step.stepContents.length > 0;
    const hasActions = step.stepActions && step.stepActions.length > 0;
    const enabledActions = step.stepActions?.filter(action => action.actionType === 'button') || [];


    return (
        <IonCard key={step.id} style={{ margin: '8px 0' }}>
            {header(step)}
            <IonCardContent style={{ paddingTop: 0 }}>
                {/* Content Preview */}
                {hasContent && (
                    <div style={{
                        marginBottom: '12px',
                        padding: '20px',
                        backgroundColor: 'var(--ion-color-light)',
                        borderRadius: '6px',
                        fontSize: '13px',
                        lineHeight: '1.3'
                    }}>
                        {step.stepContents!.slice(0, 6).map((content, index) => (
                            <div key={index}>
                                {renderStepContent(content)}
                            </div>
                        ))}
                        {step.stepContents!.length > 6 && (
                            <div style={{
                                fontSize: '12px',
                                color: 'var(--ion-color-medium)',
                                fontStyle: 'italic'
                            }}>
                                +{step.stepContents!.length - 6} more content item{step.stepContents!.length - 2 !== 1 ? 's' : ''}
                            </div>
                        )}
                    </div>
                )}

                {/* Actions Preview */}
                {enabledActions.length > 0 && (
                    <div style={{
                        borderTop: hasContent ? '1px solid var(--ion-color-light)' : 'none',
                        paddingTop: hasContent ? '12px' : '0'
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {enabledActions.slice(0, 3).map((action) => (
                                <IonButton
                                    key={action.id}
                                    color={action.buttonStyle || 'primary'}
                                    size="medium"
                                    disabled={!action.isEnabled}
                                >
                                    {action.label}
                                </IonButton>
                            ))}
                            {enabledActions.length > 3 && (
                                <IonChip style={{ height: '28px', fontSize: '11px' }}>
                                    +{enabledActions.length - 3} more
                                </IonChip>
                            )}
                        </div>
                    </div>
                )}
            </IonCardContent>
        </IonCard>
    );

};

export default StepPreview;