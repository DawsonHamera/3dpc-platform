// TypeScript interfaces based on Prisma schema for inventory items

export interface File {
    id: number;
    original_name: string;
    stored_name: string;
    mime_type?: string;
    size: number;
    path: string;
    uploaded_by?: number;
    created_at?: Date;
    updated_at?: Date;
    description?: string;
    type: "image" | "model" | "texture" | "document" | "other";
}

export interface Model {
    id: number;
    name: string;
    description?: string;
    file_id: number;
    image_file_id?: number;
    created_at?: Date;
    updated_at?: Date;
    file?: File;
    image_file?: File;
}

export type MaterialType =
    | "PLA"
    | "ABS"
    | "PETG"
    | "NYLON"
    | "TPU"
    | "WOODFILL"
    | "METALFILL"
    | "CARBONFIBER"
    | "HIPS"
    | "PVA"
    | "POLYCARBONATE"
    | "RINO"
    | "STANDARD_RESIN"
    | "TOUGH_RESIN"
    | "FLEXIBLE_RESIN"
    | "OTHER";

export interface Material {
    id: number;
    name: string;
    type: MaterialType;
    description?: string;
    image_file_id?: number;
    quantity: number;
    color?: string;
    created_at?: Date;
    updated_at?: Date;
    image_file?: File;
}

export type PrinterStatus =
    | "available"
    | "queued"
    | "in_use"
    | "maintenance"
    | "out_of_order";

export interface Printer {
    id: number;
    name: string;
    model: string;
    image_file_id?: number;
    location?: string;
    status: PrinterStatus;
    loaded_material_id?: number;
    created_at?: Date;
    updated_at?: Date;
    image_file?: File;
    loaded_material?: Material;
}

export interface CreateModelDto {
    name: string;
    description?: string;
    file_id: number;
    image_file_id?: number;
}

export interface UpdateModelDto {
    name?: string;
    description?: string;
    file_id?: number;
    image_file_id?: number;
}

export interface CreateMaterialDto {
    name: string;
    type: MaterialType;
    description?: string;
    image_file_id?: number;
    quantity: number;
    color?: string;
}

export interface UpdateMaterialDto {
    name?: string;
    type?: MaterialType;
    description?: string;
    image_file_id?: number;
    quantity?: number;
    color?: string;
}

export interface CreatePrinterDto {
    name: string;
    model: string;
    image_file_id?: number;
    location?: string;
    status: PrinterStatus;
    loaded_material_id?: number;
}

export interface UpdatePrinterDto {
    name?: string;
    model?: string;
    image_file_id?: number;
    location?: string;
    status?: PrinterStatus;
    loaded_material_id?: number;
}
