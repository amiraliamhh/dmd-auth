import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import Passport from 'passport';

import { createProxy } from 'http-proxy';

const proxy = createProxy();
export const router = Router();
const alexawatcherBase = 'http://127.0.0.1:4001/';
const cryptoesBase = 'http://127.0.0.1:4002/';

router.get('/alexawatcher/get-by-widget/:id', Passport.authenticate('jwt', { session: false }), (req: Request, res: Response, next: NextFunction) => {
  proxy.web(req, res, { target: `${alexawatcherBase}` })
})

router.get('/cryptocurrencies/latest', Passport.authenticate('jwt', { session: false }), (req: Request, res: Response, next: NextFunction) => {
  proxy.web(req, res, { target: `${cryptoesBase}` })
})

router.get('/cryptocurrencies/info', Passport.authenticate('jwt', { session: false }), (req: Request, res: Response, next: NextFunction) => {
  proxy.web(req, res, { target: `${cryptoesBase}` })
})
