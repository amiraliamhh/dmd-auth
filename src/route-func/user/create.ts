import {
  Request,
  Response,
  NextFunction
} from 'express';
import UserModel from '../../model/user';

import { IResFormat } from '../utils';

// method: post
export function SignUp(req: Request, res: Response, next: NextFunction) {
  console.log(req.body)
  UserModel.create(req.body)
  .then(() => {
    const response: IResFormat = {
      success: true
    };

    res.json(response);

  })
  .catch((err: string) => {
    const response: IResFormat = {
      success: false,
      err
    };

    console.error(err);

    res.status(401).json(response);
  })
}