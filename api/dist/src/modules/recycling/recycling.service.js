"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecyclingService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../prisma/prisma.service");
let RecyclingService = class RecyclingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStats() {
        const result = await this.prisma.recycling_log.groupBy({
            by: ['type'],
            _sum: {
                amount: true,
            },
        });
        const stats = {
            bottles: 0,
            filamentCreated: 0,
            filamentUsed: 0,
        };
        for (const row of result) {
            if (row.type === client_1.recycling_type.bottle) {
                stats.bottles = row._sum.amount ?? 0;
            }
            else if (row.type === client_1.recycling_type.filament_created) {
                stats.filamentCreated = row._sum.amount ?? 0;
            }
            else if (row.type === client_1.recycling_type.filament_used) {
                stats.filamentUsed = row._sum.amount ?? 0;
            }
        }
        return stats;
    }
    findAll() {
        return this.prisma.recycling_log.findMany({
            orderBy: { created_at: 'desc' },
            include: { created_by: true },
        });
    }
    findOne(id) {
        return this.prisma.recycling_log.findUnique({ where: { id } });
    }
    logRecycling(userId, data) {
        return this.prisma.recycling_log.create({
            data: {
                amount: data.amount,
                type: data.type,
                created_by: { connect: { id: userId } },
            },
        });
    }
    remove(id) {
        return this.prisma.recycling_log.delete({ where: { id } });
    }
};
exports.RecyclingService = RecyclingService;
exports.RecyclingService = RecyclingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecyclingService);
//# sourceMappingURL=recycling.service.js.map