declare const _default: (() => {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
    entities: string[];
    migrations: string[];
    timezone: string;
    acquireTimeout: number;
    timeout: number;
    extra: {
        connectionLimit: number;
        acquireTimeout: number;
        timeout: number;
        reconnect: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
    entities: string[];
    migrations: string[];
    timezone: string;
    acquireTimeout: number;
    timeout: number;
    extra: {
        connectionLimit: number;
        acquireTimeout: number;
        timeout: number;
        reconnect: boolean;
    };
}>;
export default _default;
