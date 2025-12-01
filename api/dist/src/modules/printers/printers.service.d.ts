import { PrismaService } from '../../prisma/prisma.service';
export declare class PrintersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllPrinters(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findPrinterById(id: number): import("@prisma/client").Prisma.Prisma__printerClient<({
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
    createPrinter(data: any): import("@prisma/client").Prisma.Prisma__printerClient<{
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
    updatePrinter(id: number, data: any): import("@prisma/client").Prisma.Prisma__printerClient<{
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
    deletePrinter(id: number): import("@prisma/client").Prisma.Prisma__printerClient<{
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
