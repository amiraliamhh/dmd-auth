import {
  Router
} from 'express';
import Passport from 'passport';

import {
  CreateDashboard,
  ReadAllDashboards,
  ReadDashboard
} from '../route-func/dashboard';

export const router = Router();

router.post('/create', Passport.authenticate('jwt', { session: false }), CreateDashboard);

router.get('/read/:id', Passport.authenticate('jwt', { session: false }), ReadDashboard);

router.get('/read-all', Passport.authenticate('jwt', { session: false }), ReadAllDashboards);
