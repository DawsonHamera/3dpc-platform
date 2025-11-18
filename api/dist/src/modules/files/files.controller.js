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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const files_service_1 = require("./files.service");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const multer_1 = require("multer");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const client_1 = require("@prisma/client");
let FilesController = class FilesController {
    filesService;
    constructor(filesService) {
        this.filesService = filesService;
    }
    upload(file, user) {
        console.log('file:', file);
        if (!file) {
            return { success: false, message: 'No file uploaded.' };
        }
        const filePath = `/api/uploads/${file.filename}`;
        let fileType = client_1.file_type.other;
        switch (file.mimetype) {
            case 'image/jpeg':
            case 'image/png':
            case 'image/gif':
                fileType = client_1.file_type.image;
                break;
            case 'model/gltf-binary':
            case 'application/octet-stream':
            case 'model/stl':
                fileType = client_1.file_type.model;
                break;
            case 'image/texture':
                fileType = client_1.file_type.texture;
                break;
            case 'application/pdf':
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                fileType = client_1.file_type.document;
                break;
            default:
                fileType = client_1.file_type.other;
        }
        const fileData = {
            original_name: file.originalname,
            stored_name: file.filename,
            mime_type: file.mimetype,
            size: file.size,
            path: filePath,
            type: fileType,
            uploader: {
                connect: { id: user?.id || null },
            },
        };
        return this.filesService.create(fileData);
    }
    findAll() {
        return this.filesService.findAll();
    }
    findOne(id) {
        return this.filesService.findOne(+id);
    }
    update(id, updateFileDto) {
        return this.filesService.update(+id, updateFileDto);
    }
    remove(id) {
        return this.filesService.remove(+id);
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(['admin']),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
                cb(null, `${uniqueSuffix}_${file.originalname}`);
            },
        }),
        limits: { fileSize: 100 * 1024 * 1024 },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(['admin']),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(['admin']),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(['admin']),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "remove", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map