import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonLabel, IonTextarea, IonSelect, IonSelectOption } from "@ionic/react";

const ErrorReportModel = () => {
    return (
        <IonModal isOpen={ErrorReportModelVisible} onDidDismiss={() => setErrorReportModelVisible(false)}>
        <IonHeader>
          <IonToolbar color="danger">
            <IonTitle>Error Report</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setErrorReportModelVisible(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonLabel className="ion-text-wrap">
            <h2 className="ion-no-margin">Step with Error</h2>
            <p className="ion-text-primary">
              {steps && steps.find((step) => step.id === task.current_step.id)?.title || 'Unknown Step'}
            </p>
          </IonLabel>

          <div className="ion-margin-top">
            <IonLabel>Description of the Issue</IonLabel>
            <IonTextarea
              value={errorDescription}
              onIonChange={(e) => setErrorDescription(e.detail.value!)}
              placeholder="What went wrong?"
              rows={4}
              autoGrow
            />
          </div>

          <div className="ion-margin-top">
            <IonLabel>Steps to Reproduce</IonLabel>
            <IonTextarea
              value={reproduceSteps}
              onIonChange={(e) => setReproduceSteps(e.detail.value!)}
              placeholder="What did you do before the error occurred?"
              rows={3}
              autoGrow
            />
          </div>

          <div className="ion-margin-top">
            <IonLabel>Severity</IonLabel>
            <IonSelect
              value={severity}
              placeholder="Select severity level"
              onIonChange={(e) => setSeverity(e.detail.value)}
            >
              <IonSelectOption value="low">Low - Minor issue</IonSelectOption>
              <IonSelectOption value="medium">Medium - Affects quality, efficiency</IonSelectOption>
              <IonSelectOption value="high">High - Prevents all progress</IonSelectOption>
              <IonSelectOption value="critical">Critical - Damaged equipment</IonSelectOption>
            </IonSelect>
          </div>

          <div className="ion-margin-top">
            <IonLabel>Attach a Photo</IonLabel>
            <IonButton expand="block" fill="outline" onClick={() => document.getElementById('cameraInput')?.click()}>
              Open Camera
            </IonButton>
            <input
              id="cameraInput"
              type="file"
              accept="image/*"
              capture="environment"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPhoto(file);
                }
              }}
            />
            {photo && (
              <div style={{ marginTop: 10 }}>
                <p>Preview:</p>
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Captured"
                  style={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            )}
          </div>

          <IonButton
            expand="block"
            color="warning"
            className="ion-margin-top"
            onClick={() => {
              // TODO: Submit error report with description, severity, steps, and optional photo
              console.log({ errorDescription, reproduceSteps, severity, photo });
              setErrorReportModelVisible(false);
            }}
          >
            Submit Report
          </IonButton>
        </IonContent>
      </IonModal>
    )
}

export default ErrorReportModel;