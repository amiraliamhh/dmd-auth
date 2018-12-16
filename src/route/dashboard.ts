import {
  Router
} from 'express';
import Passport from 'passport';

import {
  CreateDashboard
} from '../route-func/dashboard';

export const router = Router();

router.post('/create', Passport.authenticate('jwt', { session: false }), CreateDashboard);
