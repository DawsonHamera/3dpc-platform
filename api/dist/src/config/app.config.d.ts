declare const _default: (() => {
    port: number;
    nodeEnv: string;
    frontendUrl: string;
    uploadPath: string;
    maxFileSize: number;
    bcryptRounds: number;
    rateLimitWindowMs: number;
    rateLimitMaxRequests: number;
    streamApiKey: string;
    streamApiSecret: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    nodeEnv: string;
    frontendUrl: string;
    uploadPath: string;
    maxFileSize: number;
    bcryptRounds: number;
    rateLimitWindowMs: number;
    rateLimitMaxRequests: number;
    streamApiKey: string;
    streamApiSecret: string;
}>;
export default _default;
