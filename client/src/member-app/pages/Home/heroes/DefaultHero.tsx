import React from "react";

const DefaultHero: React.FC = () => {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "#f5f5f5",
                textAlign: "center",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Paint swipe pattern */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "320px",
                    zIndex: 1,
                    pointerEvents: "none",
                    background: "none",
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{ display: "block" }}
                >
                    <path
                        d="M0,160 C400,80 1040,240 1440,120 L1440,0 L0,0 Z"
                        fill="var(--ion-color-primary, #3880ff)"
                        opacity="0.8"
                    />
                    <path
                        d="M0,220 C500,320 940,100 1440,220 L1440,0 L0,0 Z"
                        fill="var(--ion-color-primary, #3880ff)"
                        opacity="0.5"
                    />
                </svg>
            </div>
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
                pointerEvents: 'none'
            }}>
                3D Printing Club
            </h1>
            <img
                src="/images/logo-transparent.png"
                alt="3D Printing Club Logo"
                style={{
                    width: "400px",
                    maxWidth: "90vw",
                    height: "auto",
                    marginTop: "1rem",
                    zIndex: 2,
                }}
            />
        </section>
    );
};

export default DefaultHero;