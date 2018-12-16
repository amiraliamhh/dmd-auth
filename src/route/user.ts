import {
  Router
} from 'express';
import Passport from 'passport';

import {
  SignUp,
  Login,
  UpdateUser,
} from '../route-func/user';

export const router = Router();

router.post('/signup', Passport.authenticate('signup', {session: false}), SignUp);

router.post('/login', Login);

router.put('/user/update', Passport.authenticate('jwt', { session: false }), UpdateUser);

router.get('/secure', Passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({success: true});
})