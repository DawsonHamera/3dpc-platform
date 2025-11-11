"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('jwt', () => ({
    secret: process.env.JWT_SECRET || 'jrewn423432bvklgrer23faefew',
    expiresIn: '10S',
}));
//# sourceMappingURL=jwt.config.js.map