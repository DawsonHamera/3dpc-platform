// import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
// import QRCodeScanner from '../../components/QRCode/QRCodeScanner';
// import { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../providers/AuthProvider';
// import { alertCircle, alertCircleSharp, checkmarkCircle } from 'ionicons/icons';
// import ApiService from '../../services/ApiService';
// import { Page } from '../../types/shared';

// const ScannerPage: React.FC<Page> = () => {
//   const [isScanned, setIsScanned] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const { userState } = useAuth()
//   const { apiFetch, apiPost, apiLoading } = ApiService()


//   const handleScan = (text: string) => {
//     setIsScanned(true);
//     verifyCode(text)
//   };

//   const verifyCode = async (data: string) => {
//     try {
//       const response = await apiPost('attendance', { user_id: userState?.user_id, verification_code: data })
//       console.log(response)
//       if (!response.error) {
//         setIsError(false)
//         setMessage(response.data.event_name)
//       }
//       else {
//         setIsError(true)
//         setMessage(response.error)
//       }
//     } catch (e) {
//       setIsError(true)
//       setMessage(`${e}`)
//     }


//   }

//   const handleReset = () => {
//     verifyCode('')
//     setIsScanned(false);
//   }

//   return (
//     <IonPage>
//       {!isScanned && <QRCodeScanner onScan={handleScan} />}
//       <div className='ion-padding'>

//         {(isScanned && isError === false) && (
//           <div className='center' style={{ height: '80vh' }}>
//             <IonCard>

//               <IonIcon icon={checkmarkCircle} style={{ margin: 10, fontSize: 80, textAlign: 'center', width: '100%' }} />
//               <IonCardHeader><IonCardTitle style={{ textAlign: 'center' }}>Successfully registered for</IonCardTitle></IonCardHeader>
//               <IonCardContent>
//                 <h1 style={{ textAlign: 'center', color: 'var(--ion-color-success)' }}> {message}</h1>
//               </IonCardContent>
//             </IonCard>
//           </div>
//         )}
//         {(isScanned && isError === true) && (
//           <div className='center' style={{ height: '80vh' }}>
//             <IonCard>

//               <IonIcon icon={alertCircle} style={{ margin: 10, fontSize: 80, textAlign: 'center', width: '100%' }} />
//               <IonCardHeader><IonCardTitle style={{ textAlign: 'center' }}>Error scanning the code</IonCardTitle></IonCardHeader>
//               <IonCardContent>
//                 <p style={{ textAlign: 'center' }}> {message}</p>
//               </IonCardContent>
//               <IonButton fill='clear' className='center' onClick={handleReset}>Retry</IonButton>
//             </IonCard>
//           </div>
//         )}
//       </div>
//     </IonPage>
//   );
// };

// export default ScannerPage;
