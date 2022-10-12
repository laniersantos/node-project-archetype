import cors from 'cors';
import express from 'express';
import { Application } from 'express';
import { APP_CONFIG } from './config/app.config';
import { StatusController } from './modules/status/status.controller';

export class Server {

    public server: Application;

    init = async () => {
        const statusController = new StatusController();

        this.server = express();
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));

        this.server.use(statusController.router());
        console.debug('Status Controller started');

        this.server.listen(APP_CONFIG.server.port, () => {
            console.log(`Server running on: ${APP_CONFIG.server.host}:${APP_CONFIG.server.port}`);
        });
    }
}
