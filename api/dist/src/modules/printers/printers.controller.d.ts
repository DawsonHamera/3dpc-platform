import { PrintersService } from './printers.service';
export declare class PrintersController {
    private readonly printersService;
    constructor(printersService: PrintersService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        image_file: {
            path: string;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
            id: number;
            description: string | null;
            type: import("@prisma/client").$Enums.file_type;
            original_name: string;
            stored_name: string;
            mime_type: string | null;
            size: number;
            uploaded_by: number | null;
        } | null;
        loaded_material: {
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            description: string | null;
            image_file_id: number | null;
            type: import("@prisma/client").$Enums.material_type;
            quantity: number;
            color: string | null;
        } | null;
    } & {
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        model: string;
        location: string | null;
        image_file_id: number | null;
        status: import("@prisma/client").$Enums.printer_status;
        loaded_material_id: number | null;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__printerClient<({
        image_file: {
            path: string;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
            id: number;
            description: string | null;
            type: import("@prisma/client").$Enums.file_type;
            original_name: string;
            stored_name: string;
            mime_type: string | null;
            size: number;
            uploaded_by: number | null;
        } | null;
        loaded_material: {
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            description: string | null;
            image_file_id: number | null;
            type: import("@prisma/client").$Enums.material_type;
            quantity: number;
            color: string | null;
        } | null;
    } & {
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        model: string;
        location: string | null;
        image_file_id: number | null;
        status: import("@prisma/client").$Enums.printer_status;
        loaded_material_id: number | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__printerClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        model: string;
        location: string | null;
        image_file_id: number | null;
        status: import("@prisma/client").$Enums.printer_status;
        loaded_material_id: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__printerClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        model: string;
        location: string | null;
        image_file_id: number | null;
        status: import("@prisma/client").$Enums.printer_status;
        loaded_material_id: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__printerClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        model: string;
        location: string | null;
        image_file_id: number | null;
        status: import("@prisma/client").$Enums.printer_status;
        loaded_material_id: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
