import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class CorsMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (req, res, next) => {
            // list of domains
            res.header('Access-Control-Allow-Headers', '*');
            res.header('Origin', '*');
            res.header('Access-Control-Allow-Origin', '*');

            res.header('Access-Control-Expose-Headers', '*');
            // list of methods (e.g GET,HEAD,PUT,PATCH,POST,DELETE)
            res.header('Access-Control-Allow-Methods', '*');
            next();
        };
    }
}