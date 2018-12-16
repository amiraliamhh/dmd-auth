import {
  Router
} from 'express';
import Passport from 'passport';

import {
  CreateWidget
} from '../route-func/widget';

export const router = Router();

router.post('/create', Passport.authenticate('jwt', { session: false }), CreateWidget);
