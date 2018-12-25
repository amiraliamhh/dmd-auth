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
const baseUrl = 'http://127.0.0.1:4001/';

router.get('/get-by-widget/:id', Passport.authenticate('jwt', { session: false }), (req: Request, res: Response, next: NextFunction) => {
  proxy.web(req, res, { target: `${baseUrl}/alexawatcher/` })
})