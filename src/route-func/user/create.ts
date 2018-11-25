import {
  Request,
  Response,
  NextFunction
} from 'express';
import UserModel from '../../model/user';

import { IResFormat } from '../utils';

// method: post
export function SignUp(req: Request, res: Response, next: NextFunction) {
  
  const response: IResFormat = {
    success: true
  };
  
  res.json(response);
}

export function SinupPassport(req: Request, res: Response, next: NextFunction) {
  
}