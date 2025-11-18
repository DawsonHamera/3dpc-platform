import { RecyclingService } from './recycling.service';
import { LogRecyclingDto } from './dto/log-recycling.dto';
export declare class RecyclingController {
    private readonly recyclingService;
    constructor(recyclingService: RecyclingService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        created_by: {
            name: string;
            email: string;
            password_hash: string;
            grade: import("@prisma/client").$Enums.grade;
            points: number;
            last_active: Date | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
            id: number;
            role_id: number;
        };
    } & {
        created_at: Date;
        id: number;
        user_id: number;
        type: import("@prisma/client").$Enums.recycling_type;
        amount: number;
    })[]>;
    findStats(): Promise<{
        bottles: number;
        filamentCreated: number;
        filamentUsed: number;
    }>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__recycling_logClient<{
        created_at: Date;
        id: number;
        user_id: number;
        type: import("@prisma/client").$Enums.recycling_type;
        amount: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    logRecycling(user: any, body: LogRecyclingDto): import("@prisma/client").Prisma.Prisma__recycling_logClient<{
        created_at: Date;
        id: number;
        user_id: number;
        type: import("@prisma/client").$Enums.recycling_type;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__recycling_logClient<{
        created_at: Date;
        id: number;
        user_id: number;
        type: import("@prisma/client").$Enums.recycling_type;
        amount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
