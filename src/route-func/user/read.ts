import {
  Request,
  Response,
  NextFunction
} from 'express';
import Passport from 'passport';
import { sign } from 'jsonwebtoken';

import { IUser } from '../../model/user';
import { IResFormat } from '../utils';

export async function Login(req: Request, res: Response, next: NextFunction) {
  Passport.authenticate('login', async (err: Error, user: IUser, info) => {
    try {
      if (err || !user) {
        // const error = new Error('An error occured.');
        next(err);
        return;
      }
  
      req.login(user, {session: false}, async (error) => {
        if (error) return next(error);
  
        const body = {_id: user._id, email: user.email};
  
        const token = sign({ user: body }, process.env.PRIVATE_KEY_JWT || 'sample');
  
        const response: IResFormat = {
          success: true,
          token
        }

        res.json(response);
      })
    } catch(e) {
      next(e);
    }
  })(req, res, next);
}
