"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTemplatesModule = void 0;
const common_1 = require("@nestjs/common");
const product_templates_service_1 = require("./product-templates.service");
const product_templates_controller_1 = require("./product-templates.controller");
const prisma_module_1 = require("../../prisma/prisma.module");
let ProductTemplatesModule = class ProductTemplatesModule {
};
exports.ProductTemplatesModule = ProductTemplatesModule;
exports.ProductTemplatesModule = ProductTemplatesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [product_templates_service_1.ProductTemplatesService],
        controllers: [product_templates_controller_1.ProductTemplatesController],
    })
], ProductTemplatesModule);
//# sourceMappingURL=product-templates.module.js.map