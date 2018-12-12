import {
  Request,
  Response,
  NextFunction
} from 'express';
import UserModel, { IUser } from '../../model/user';

// method: put
export function Update(req: Request, res: Response, next: NextFunction) {

  console.log('user:', req.user);

  UserModel.findById(req.user._id)
  .then((user: any) => {
    
    

    user.first_name = req.body.first_name || user.first_name,
    user.last_name = req.body.last_name || user.last_name    

    if (req.body.password) {
      user.password = req.body.password;
    }

    user.save()
    .then(() => {
      res.json({ success: true });
    })
    .catch((e: any) => {
      console.log(e);
      res.status(500).json({ success: false, error: e });
    });
    
  })
  .catch(e => {
    console.log(e);
    res.status(500).json({ success: false, error: e });
  });
}
