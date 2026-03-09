import QRCode from "react-qr-code";
import { useGetEventCodeQuery } from "../../../shared/features";

const EventVerification = ({ id }: { id: number }) => {

    const { data: verificationCodeData } = useGetEventCodeQuery(
            id,
            { skip: !id },
        );
    

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                height: "100%",
            }}
        >
            <QRCode
                value={
                    verificationCodeData?.verification_code || ""
                }
                size={200}
            />
            <p>{verificationCodeData?.verification_code}</p>
        </div>
    );
}
export default EventVerification;