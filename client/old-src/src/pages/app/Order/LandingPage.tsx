import { IonButton, IonCard, IonCardContent, IonHeader, IonPage } from "@ionic/react";
import Card from "../../../components/UI/Card/Card";
type Props = {
    nextStep: () => void;
}

const LandingPage: React.FC<Props> = ({nextStep}) => {
    return (
        <IonPage>
            <div style={{
                backgroundImage: 'url(/images/abstractWhite.jpg)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}>
                <div style={{
                    width: '100%',
                    fontSize: '3rem',
                    fontWeight: '800',
                    fontFamily: `'Segoe UI', 'Helvetica Neue', sans-serif`,
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: 'white',
                    margin: '0',
                    padding: '16px 16px 30px 16px',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #334155 100%)',
                }}>
                    <h1>Explore the possibilities of</h1>
                    <i>3D Printing</i>
                    <h3 style={{
                      color: '#349beb',
                      textTransform: 'none',
                      fontWeight: 800,
                      margin: '4px'
                    }}>
                        Del Oro 3D Printing Club
                        </h3>
                </div>
                {/* <img
                src="/images/printerBackdrop.jpg"
                alt="backdrop"
                style={{
                    
                }}
            /> */}
                <Card style={{ margin: '30px', fontSize: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                    <p style={{fontSize: '20px'}}>Bring your ideas to life with custom 3D printing—perfect for gifts, classrooms, or personal projects!</p>
                    <p style={{fontSize: '20px'}}>Teachers and club members print for free. Students get exclusive discounts!</p>
                    <p style={{fontSize: '20px'}}>Every order supports our 3D printing club and school programs.</p>
                </div>
                </Card>

                {/* <h1>We offer free orders</h1>
                <div
                    style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '10px',
                    }}
                >
                    <h4 style={{ fontSize: '30px', margin: 0 }}>Teachers</h4>
                </div> */}

                <IonButton style={{fontSize: '20px', color: 'white', margin: 40}} onClick={nextStep}>Place your order</IonButton>
            </div>
        </IonPage>
    )
}

export default LandingPage;