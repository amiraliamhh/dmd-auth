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
    success: (req as any).user.success ? true : false,
    err: (req as any).user.error,
    errcode: (req as any).user.err_code
  };

  if (response.success) {
    res.json(response);
  } else {
    res.status(400).json(response);
  }
  
}

export function SinupPassport(req: Request, res: Response, next: NextFunction) {
  
}