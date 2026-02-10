import { File } from "../../../../../shared/features";

export interface LocalVariant {
    id?: number;
    name: string;
    color: string;
    background_color: string;
    price: number;
    image_file_id: number | null;
    image: File | undefined;
    type: "DEFAULT" | "STANDARD";
    isNew?: boolean;
    toDelete?: boolean;
}
