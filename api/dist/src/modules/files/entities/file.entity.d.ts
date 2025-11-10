import { BaseEntity } from '../../../common/entities/base.entity';
import type { User } from '../../users/entities/user.entity';
export declare enum FileType {
    IMAGE = "image",
    MODEL = "model",
    TEXTURE = "texture",
    DOCUMENT = "document",
    OTHER = "other"
}
export declare class File extends BaseEntity {
    originalName: string;
    fileName: string;
    filePath: string;
    mimeType: string;
    fileSize: number;
    uploadedBy?: number;
    type?: FileType;
    description?: string;
    deletedAt?: Date;
    uploader?: User;
    get computedUrl(): string;
    get fullUrl(): string;
    get url(): string;
    toJSON(): this & {
        url: string;
        fullUrl: string;
    };
}
