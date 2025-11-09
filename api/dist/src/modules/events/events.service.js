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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let EventsService = class EventsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.events.findMany();
    }
    findOne(id) {
        return this.prisma.events.findUnique({ where: { id } });
    }
    findCurrent() {
        return this.prisma.events.findFirst({
            where: {
                start_time: {
                    lte: new Date(),
                },
                end_time: {
                    gte: new Date(),
                },
            },
        });
    }
    create(data) {
        return this.prisma.events.create({ data });
    }
    update(id, data) {
        return this.prisma.events.update({ where: { id }, data });
    }
    remove(id) {
        return this.prisma.events.delete({ where: { id } });
    }
    async attendEvent(eventId, userId, code) {
        const existingAttendance = await this.prisma.attendances.findUnique({
            where: {
                event_id_user_id: {
                    event_id: eventId,
                    user_id: userId,
                },
            },
        });
        if (existingAttendance) {
            throw new common_1.ConflictException('User is already attending this event');
        }
        const event = await this.prisma.events.findUnique({
            where: { id: eventId },
        });
        if (!event) {
            throw new common_1.ConflictException('Event does not exist');
        }
        if (event.verification_code !== code) {
            throw new common_1.ConflictException('Invalid event code');
        }
        if (event.end_time < new Date()) {
            throw new common_1.ConflictException('Event has already ended');
        }
        if (event.start_time > new Date()) {
            throw new common_1.ConflictException('Event has not started yet');
        }
        const data = {
            user: { connect: { id: userId } },
            event: { connect: { id: eventId } },
        };
        return this.prisma.attendances.create({ data });
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventsService);
//# sourceMappingURL=events.service.js.map