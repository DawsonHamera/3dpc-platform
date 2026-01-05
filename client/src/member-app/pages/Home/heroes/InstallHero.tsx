import React, { FC, useRef, useState } from "react";
import { IonButton, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const videoSrc = "/videos/install-ios.mp4";

const InstallHero: FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);

    const handleOpenVideo = () => {
        setShowVideo(true);
        setVideoEnded(false);
        setTimeout(() => {
            videoRef.current?.play();
        }, 100);
    };

    const handleVideoEnded = () => {
        setShowVideo(false);
        setVideoEnded(true);
    };

    return (
        <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
            <h1 style={{
                position: 'absolute',
                top: 24,
                left: 0,
                right: 0,
                textAlign: 'center',
                fontSize: '2.2rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                fontFamily: "'Outfit', sans-serif",
                zIndex: 10,
                color: '#fff',
                pointerEvents: 'none'
            }}>
                3D Printing Club
            </h1>
            {/* Starting Text and Button */}
            {!showVideo && !videoEnded && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 3,
                        background: "rgba(0,0,0,0.6)",
                        padding: "2rem 3rem",
                        width: '80%',
                        borderRadius: "1rem",
                        color: "#fff",
                        textAlign: "center",
                    }}
                >
                    <h2>Install the app to get club alerts anytime and a homescreen icon. </h2>
                    <p>If you need help installing on IOS follow the instructions in a video walkthrough by clicking below.</p>
                    <IonButton
                        color="primary"
                        style={{
                            marginTop: "1rem",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                        }}
                        onClick={handleOpenVideo}
                    >
                        Install on iOS
                    </IonButton>
                </div>
            )}
            {/* Fullscreen Video */}
            {showVideo && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "#000",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        autoPlay
                        controls
                        playsInline
                        style={{
                            width: "100vw",
                            height: "100vh",
                            objectFit: "contain",
                            background: "#000",
                        }}
                        onEnded={handleVideoEnded}
                    />
                </div>
            )}
            {/* Redo button, shown when video ends */}
            {videoEnded && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <IonButton
                        color="primary"
                        size='large'
                        style={{
                            marginTop: "2rem",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                        }}
                        onClick={handleOpenVideo}
                    >
                        Watch Again
                    </IonButton>
                </div>
            )}
        </div>
    );
};

export default InstallHero;
