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
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../prisma/prisma.service");
let EventsService = class EventsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.event.findMany({
            orderBy: { start_time: 'desc' },
            include: {
                image_file: true,
                attendances: { include: { user: true } },
            },
        });
    }
    findOne(id) {
        return this.prisma.event.findUnique({
            where: { id },
            include: {
                image_file: true,
                attendances: { include: { user: true } },
            },
        });
    }
    findEventCode(id) {
        return this.prisma.event.findUnique({
            where: { id },
            select: { verification_code: true },
        });
    }
    findAttendance(eventId, userId) {
        return this.prisma.attendance.findUnique({
            where: {
                event_id_user_id: {
                    event_id: eventId,
                    user_id: userId,
                },
            },
        });
    }
    findCurrent() {
        return this.prisma.event.findFirst({
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
    create(data, created_by) {
        const verification_code = Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();
        const eventData = {
            title: data.title,
            description: data.description,
            location: data.location,
            image_file: {
                connect: { id: data.image_file_id },
            },
            start_time: new Date(data.start_time),
            end_time: new Date(data.end_time),
            verification_code,
            created_by: { connect: { id: created_by } },
        };
        return this.prisma.event.create({ data: eventData });
    }
    update(id, data) {
        if (data.image_file_id) {
            data.image_file = { connect: { id: data.image_file_id } };
            delete data.image_file_id;
        }
        return this.prisma.event.update({ where: { id }, data });
    }
    remove(id) {
        return this.prisma.event.delete({ where: { id } });
    }
    async attendEvent(eventId, userId, code, status) {
        const existingAttendance = await this.prisma.attendance.findUnique({
            where: {
                event_id_user_id: {
                    event_id: eventId,
                    user_id: userId,
                },
            },
        });
        const event = await this.prisma.event.findUnique({
            where: { id: eventId },
            select: {
                verification_code: true,
                start_time: true,
                end_time: true,
            },
        });
        if (!event) {
            throw new common_1.ConflictException('Event does not exist');
        }
        if (status && !['going', 'maybe', 'not_going'].includes(status)) {
            throw new common_1.ConflictException('Invalid RSVP status');
        }
        if (existingAttendance) {
            if (existingAttendance.status === client_1.attendance_status.attended) {
                throw new common_1.ConflictException('You have already attended this event');
            }
            if (event.start_time <= new Date() && event.end_time >= new Date()) {
                if (event.verification_code !== code) {
                    throw new common_1.ConflictException('Invalid event code');
                }
                return this.prisma.attendance.update({
                    where: {
                        event_id_user_id: {
                            event_id: eventId,
                            user_id: userId,
                        },
                    },
                    data: {
                        status: client_1.attendance_status.attended,
                        arrival_time: new Date(),
                    },
                });
            }
            if (event.start_time > new Date() && status) {
                return this.prisma.attendance.update({
                    where: {
                        event_id_user_id: {
                            event_id: eventId,
                            user_id: userId,
                        },
                    },
                    data: {
                        status: client_1.attendance_status[status],
                    },
                });
            }
        }
        else {
            if (event.start_time <= new Date() && event.end_time >= new Date()) {
                if (event.verification_code !== code) {
                    throw new common_1.ConflictException('Invalid event code');
                }
                return this.prisma.attendance.create({
                    data: {
                        user: { connect: { id: userId } },
                        event: { connect: { id: eventId } },
                        status: client_1.attendance_status.attended,
                        arrival_time: new Date(),
                    },
                });
            }
            if (event.start_time > new Date() && status) {
                return this.prisma.attendance.create({
                    data: {
                        user: { connect: { id: userId } },
                        event: { connect: { id: eventId } },
                        status: client_1.attendance_status[status],
                    },
                });
            }
            throw new common_1.ConflictException('Event has already ended');
        }
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventsService);
//# sourceMappingURL=events.service.js.map