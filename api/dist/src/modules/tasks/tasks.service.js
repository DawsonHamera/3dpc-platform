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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TasksService = class TasksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllTasks() {
        return this.prisma.task.findMany({ include: { assigned_user: true } });
    }
    findTaskById(id) {
        return this.prisma.task.findUnique({
            where: { id },
            include: { assigned_user: true },
        });
    }
    findTasksByUserId(userId) {
        return this.prisma.task.findMany({
            where: {
                assigned_to: userId,
            },
        });
    }
    findOpenTasks() {
        return this.prisma.task.findMany({
            where: {
                is_open: true,
            },
        });
    }
    findAllByUsers() {
        return this.prisma.user.findMany({
            where: {
                tasks: {
                    some: {},
                },
            },
            select: {
                id: true,
                name: true,
                tasks: true,
            },
        });
    }
    createTask(data) {
        if (data.assigned_to) {
            data.assigned_user = { connect: { id: data.assigned_to } };
            delete data.assigned_to;
        }
        return this.prisma.task.create({ data });
    }
    updateTask(id, data) {
        return this.prisma.task.update({ where: { id }, data });
    }
    deleteTask(id) {
        return this.prisma.task.delete({ where: { id } });
    }
    async claimTask(id, userId) {
        const task = await this.prisma.task.findUnique({ where: { id } });
        if (!task) {
            throw new Error('Task not found');
        }
        if (task.is_open === false) {
            throw new Error('Task is already claimed');
        }
        return this.prisma.task.update({
            where: { id },
            data: {
                assigned_to: userId,
                is_open: false,
            },
        });
    }
    async releaseTask(id, user) {
        const task = await this.prisma.task.findUnique({ where: { id } });
        if (!task) {
            throw new Error('Task not found');
        }
        if (task.assigned_to !== user.id && user.role !== 'admin') {
            throw new Error('You do not have permission to release this task');
        }
        return this.prisma.task.update({
            where: { id },
            data: {
                assigned_to: null,
                is_open: true,
            },
        });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map