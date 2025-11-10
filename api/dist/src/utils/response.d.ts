export declare const success: (data: any, message?: string, statusCode?: number) => {
    statusCode: number;
    message: string;
    data: any;
};
export declare const error: (message: string, statusCode?: number, errors?: Record<string, any>) => {
    errors?: Record<string, any> | undefined;
    statusCode: number;
    message: string;
};
