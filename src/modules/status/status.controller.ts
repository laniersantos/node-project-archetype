import { Request, Response, Router } from 'express';
import { Controller } from '../../common/controller';

export class StatusController implements Controller {
    
    router() {
        const route = Router();
        return route.get('/', this.getStatus);
    }

     // @ts-ignore
    getStatus = (req: Request, res: Response) => {
        try {
            //TODO - Request SQS list-queues

            return res.status(200).json({ statusCode: '200', status: 'Ok', statusMessage: 'Server Running' });
        } catch (e) {
            return res.status(503).json(
                {
                    statusCode: 503,
                    status: 'error',
                    statusMessage: `Service Unavailable: ${e.message}`
                }
            );
        }
    }
}