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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllProducts() {
        return this.prisma.product.findMany({
            include: { variants: { include: { image: true } } },
        });
    }
    findAllSections() {
        return this.prisma.section.findMany();
    }
    findProductById(id) {
        return this.prisma.product.findUnique({
            where: { id },
            include: { variants: { include: { image: true } } },
        });
    }
    findVariantById(variantId) {
        return this.prisma.product_variant.findUnique({
            where: { id: variantId },
            include: { image: true },
        });
    }
    createSection(data) {
        return this.prisma.section.create({ data });
    }
    createProduct(data) {
        return this.prisma.product.create({ data });
    }
    createVariant(productId, data) {
        return this.prisma.product_variant.create({
            data: { ...data, product_id: productId },
        });
    }
    updateSection(id, data) {
        return this.prisma.section.update({ where: { id }, data });
    }
    updateProduct(id, data) {
        return this.prisma.product.update({ where: { id }, data });
    }
    updateVariant(variantId, data) {
        return this.prisma.product_variant.update({
            where: { id: variantId },
            data,
        });
    }
    deleteSection(id) {
        return this.prisma.section.delete({ where: { id } });
    }
    deleteProduct(id) {
        return this.prisma.product.delete({ where: { id } });
    }
    deleteVariant(id) {
        return this.prisma.product_variant.delete({ where: { id: id } });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map