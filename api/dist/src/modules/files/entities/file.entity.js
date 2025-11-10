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
exports.File = exports.FileType = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/entities/base.entity");
var FileType;
(function (FileType) {
    FileType["IMAGE"] = "image";
    FileType["MODEL"] = "model";
    FileType["TEXTURE"] = "texture";
    FileType["DOCUMENT"] = "document";
    FileType["OTHER"] = "other";
})(FileType || (exports.FileType = FileType = {}));
let File = class File extends base_entity_1.BaseEntity {
    originalName;
    fileName;
    filePath;
    mimeType;
    fileSize;
    uploadedBy;
    type;
    description;
    deletedAt;
    uploader;
    get computedUrl() {
        return `/uploads/${this.fileName}`;
    }
    get fullUrl() {
        return `${process.env.BASE_URL || 'http://localhost'}${this.computedUrl}`;
    }
    get url() {
        return this.computedUrl;
    }
    toJSON() {
        return {
            ...this,
            url: this.computedUrl,
            fullUrl: this.fullUrl
        };
    }
};
exports.File = File;
__decorate([
    (0, typeorm_1.Column)({ name: 'original_name' }),
    __metadata("design:type", String)
], File.prototype, "originalName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'stored_name' }),
    __metadata("design:type", String)
], File.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'path' }),
    __metadata("design:type", String)
], File.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mime_type' }),
    __metadata("design:type", String)
], File.prototype, "mimeType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'size' }),
    __metadata("design:type", Number)
], File.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'uploaded_by', nullable: true }),
    __metadata("design:type", Number)
], File.prototype, "uploadedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: FileType,
        default: FileType.OTHER,
        nullable: true
    }),
    __metadata("design:type", String)
], File.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], File.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], File.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => require('../../users/entities/user.entity').User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'uploaded_by' }),
    __metadata("design:type", Object)
], File.prototype, "uploader", void 0);
exports.File = File = __decorate([
    (0, typeorm_1.Entity)('files')
], File);
//# sourceMappingURL=file.entity.js.map