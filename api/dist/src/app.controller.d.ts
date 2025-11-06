import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHealth(): {
        message: string;
        version: string;
        status: string;
        timestamp: string;
    };
}
