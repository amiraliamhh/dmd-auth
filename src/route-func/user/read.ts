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
    if ((user as any).success) {
      try {
        if (err || !user) {
          next(err || 'user does not exist');
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
    } else {
      const response: IResFormat = {
        success: false,
        err: (user as any).err,
        errcode: (user as any).errcode
      }

      res.status(400).json(response);
    }
  })(req, res, next);
}
