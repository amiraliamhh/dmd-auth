import {
  Router
} from 'express';

import {
  SignUp
} from '../route-func/user/create';

export const router = Router();

router.post('/signup', SignUp);