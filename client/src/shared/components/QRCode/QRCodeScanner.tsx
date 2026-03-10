import { BrowserQRCodeReader } from "@zxing/browser";
import React, { useEffect, useState } from "react";
import styles from "./QRCodeScanner.module.css";

interface QRCodeScannerProps {
    onScan: (text: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
    const [error, setError] = useState<string | null>(null);
    const [permissionGranted, setPermissionGranted] = useState(false);

    useEffect(() => {
        let codeReader: BrowserQRCodeReader | null = null;

        const scan = async () => {
            codeReader = new BrowserQRCodeReader();
            console.log("Starting QR code scan...");

            try {
                const result = await codeReader.decodeOnceFromVideoDevice(
                    undefined,
                    "video",
                );
                setPermissionGranted(true);
                onScan(result.getText());
                console.log("QR Code scanned: ", result.getText());
            } catch (err: any) {
                console.error("QR Code scan error:", err);

                if (
                    err.name === "NotAllowedError" ||
                    err.name === "PermissionDeniedError"
                ) {
                    setError(
                        "Camera permission denied. Please allow camera access to scan QR codes.",
                    );
                } else if (err.name === "NotFoundError") {
                    setError("No camera found on this device.");
                } else if (err.name === "NotReadableError") {
                    setError(
                        "Camera is already in use by another application.",
                    );
                } else {
                    setError("Failed to access camera. Please try again.");
                }
            }
        };

        scan();

        // Turn off the camera when the component unmounts (clean up)
        return () => {
            const videoElement = document.getElementById(
                "video",
            ) as HTMLVideoElement;
            if (videoElement?.srcObject) {
                const stream = videoElement.srcObject as MediaStream;
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, [onScan]);

    return (
        <div className={styles.container}>
            {error ? (
                <div className={styles.errorMessage}>
                    <p>{error}</p>
                    <p className={styles.errorHint}>
                        Check your browser settings to enable camera access.
                    </p>
                </div>
            ) : !permissionGranted ? (
                <div className={styles.promptMessage}>
                    <p>Please allow camera access to scan QR codes</p>
                </div>
            ) : null}
            <video id="video" autoPlay className={styles.video}></video>
        </div>
    );
};

export default QRCodeScanner;
