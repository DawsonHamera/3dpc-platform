import { IonProgressBar } from "@ionic/react";
import { useState } from "react";
import { useAddRequestMutation } from "../../../features/crud/requestsApi";
import CompletionStep from "./CompletionStep";
import CustomizeStep from "./CustomizeStep";
import DeliveryStep from "./DeliveryStep";
import LandingPage from "./LandingPage";
import ModelStep from "./ModelStep";


export type StepProps = {
    data: any;
    updateData: (key: string, value: any) => void;
    nextStep: () => void;
    previousStep: () => void;
    handleSubmit?: () => void;
}

const formDataInitial = {
    model_id: 0,
    quantity: 1,
    quality: 'standard',
    submitted_by: '',
    email: '',
    comments: '',
    requested_date: '',
    material_slots: []
};

type MaterialSlot = {
    slot: string;
    material_id: number;
}

type FormData = {
    model_id: number;
    quantity: number;
    quality: string;
    submitted_by: string;
    email: string;
    comments: string;
    requested_date: string;
    material_slots: MaterialSlot[]
}

const OrderPage: React.FC = () => {
    const [step, setStep] = useState<number>(0)
    const [formData, setFormData] = useState(formDataInitial);
    const [addRequest, {isSuccess, data }] = useAddRequestMutation()

    const nextStep = () => setStep((s) => s + 1);
    const previousStep = () => {setStep((s) => s - 1); console.log('prev')};

    const updateData = (key: string, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async () => {
        const response = await addRequest(formData)
        console.log('Request submitted', response);
        nextStep()
    }
    
    const renderStep = () => {
        switch (step) {
            case 0: return <LandingPage nextStep={nextStep} />
            case 1: return <ModelStep nextStep={nextStep} previousStep={previousStep} data={formData} updateData={updateData}/>
            case 2: return <CustomizeStep nextStep={nextStep} previousStep={previousStep} data={formData} updateData={updateData}/>
            case 3: return <DeliveryStep nextStep={nextStep} previousStep={previousStep} data={formData} updateData={updateData} handleSubmit={handleSubmit}/>
            case 4: return  isSuccess ? <CompletionStep id={data?.id}/> : <IonProgressBar type="indeterminate"/>

        }
    }

    return (
        <div className="max-w-xl mx-auto">
        <IonProgressBar value={(step + 1) / 5} />
        {renderStep()}
      </div>
    )
}

export default OrderPage;