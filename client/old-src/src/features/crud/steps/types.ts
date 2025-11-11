import { BaseEntity } from "../../../types";

export interface Step extends BaseEntity {
    title: string;
    description?: string;
    isRequired?: boolean;
    isCritical?: boolean;
    stepType?: 'manual' | 'automatic' | 'conditional' | 'timer';
    stepContents?: StepContent[];
    stepActions?: StepAction[];
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
}

export interface StepContent {
    id: number;
    stepId: number;
    contentOrder: number;
    contentType: 'text' | 'image' | 'video' | 'file' | 'link' | 'template_variable';
    contentData?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface StepAction {
    id: number;
    stepId: number;
    actionOrder: number;
    label: string;
    actionType: string; // Define the possible action types as needed
    actionConfig?: string; // JSON or other data related to the action
    buttonStyle?: 'primary' | 'secondary' | 'success' | 'warning'; // Define the possible button styles
    icon?: string; // Icon class or URL
    isEnabled?: boolean;
    confirmationMessage?: string; // Message to confirm the action
    actionTriggers?: StepTrigger[]; // Triggers associated with the action
    createdAt?: string;
    updatedAt?: string;
}

export interface StepTrigger {
    id: number;
    stepId: number;
    triggerOrder: number;
    triggerType: 'update_task_status' | 'update_printer_status' | 'send_notification' | 'schedule_timer' | 'create_subtask' | 'log_event'; // Define the possible trigger types
    triggerConfig?: string; // JSON or other data related to the trigger
    conditionRules?: string; // JSON or other data related to conditions
    is_enabled?: boolean;
    isEnabled?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateStep {
    title: string;
    description?: string;
    isRequired?: boolean;
    isCritical?: boolean;
    stepType?: 'manual' | 'automatic' | 'conditional' | 'timer';
}



