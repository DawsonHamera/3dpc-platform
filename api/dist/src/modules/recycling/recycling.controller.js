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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecyclingController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const recycling_service_1 = require("./recycling.service");
const log_recycling_dto_1 = require("./dto/log-recycling.dto");
let RecyclingController = class RecyclingController {
    recyclingService;
    constructor(recyclingService) {
        this.recyclingService = recyclingService;
    }
    findAll() {
        return this.recyclingService.findAll();
    }
    findStats() {
        return this.recyclingService.getStats();
    }
    findOne(id) {
        return this.recyclingService.findOne(+id);
    }
    logRecycling(user, body) {
        return this.recyclingService.logRecycling(user.id, body);
    }
    remove(id) {
        return this.recyclingService.remove(+id);
    }
};
exports.RecyclingController = RecyclingController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(['admin']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecyclingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/stats'),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecyclingController.prototype, "findStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(['admin']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecyclingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(['admin', 'member']),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, log_recycling_dto_1.LogRecyclingDto]),
    __metadata("design:returntype", void 0)
], RecyclingController.prototype, "logRecycling", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(['admin']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecyclingController.prototype, "remove", null);
exports.RecyclingController = RecyclingController = __decorate([
    (0, common_1.Controller)('recycling'),
    __metadata("design:paramtypes", [recycling_service_1.RecyclingService])
], RecyclingController);
//# sourceMappingURL=recycling.controller.js.map