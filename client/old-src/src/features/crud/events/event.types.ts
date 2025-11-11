import { User } from "../../auth/authTypes";
import { File } from "../filesApi";

export enum EventType {
    MEETING = 'meeting',
    WORKSHOP = 'workshop',
    COMPETITION = 'competition',
    MAINTENANCE = 'maintenance',
    OTHER = 'other',
}

export interface Event {
    id: number;
    title: string;
    description?: string;
    location?: string;
    startTime: Date;
    endTime: Date;
    type: EventType;
    imageFileId?: number;
    isFeatured: boolean;
    createdBy: number;
    creator?: User;
    imageFile?: File;
    createdAt: Date;
    updatedAt: Date;
}