"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcryptjs"));
const app_config_1 = __importDefault(require("../../config/app.config"));
const prisma_service_1 = require("../../prisma/prisma.service");
const response_1 = require("../../utils/response");
let AuthService = class AuthService {
    prisma;
    jwtService;
    appConfiguration;
    streamClient;
    constructor(prisma, jwtService, appConfiguration) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.appConfiguration = appConfiguration;
    }
    async register(registerDto) {
        const { name, email, password, grade_id } = registerDto;
        const existingUser = await this.prisma.users.findUnique({
            where: { email },
        });
        if (existingUser && !existingUser.deleted_at) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, this.appConfiguration.bcryptRounds);
        const userData = {
            name,
            email,
            password_hash: hashedPassword,
            grade: { connect: { id: grade_id ?? 1 } },
        };
        const user = await this.prisma.users.create({ data: userData });
        return user;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.prisma.users.findUnique({
            where: { email },
            include: { role: true },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        await this.prisma.users.update({
            where: { id: user.id },
            data: { last_active: new Date() },
        });
        const payload = {
            sub: user.id,
            email: user.email,
            roleId: user.role_id,
        };
        console.log(new Date().toISOString());
        const accessToken = this.jwtService.sign(payload);
        const decoded = this.jwtService.decode(accessToken);
        const expires_at = decoded && decoded.exp
            ? new Date(decoded.exp * 1000).toISOString()
            : null;
        return (0, response_1.success)({
            access_token: accessToken,
            stream_token: null,
            expires_at: expires_at,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                grade_id: user.grade_id,
                role: user.role,
            },
        }, 'Login successful');
    }
    createStreamToken(userId) {
        return this.streamClient.createToken(userId);
    }
    async validateUser(payload) {
        const user = await this.prisma.users.findUnique({
            where: { id: payload.sub },
            include: { role: true },
        });
        if (user) {
            delete user.password_hash;
            const result = user;
            return result;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(app_config_1.default.KEY)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService, void 0])
], AuthService);
//# sourceMappingURL=auth.service.js.map