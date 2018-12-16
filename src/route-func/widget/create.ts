import {
  Request,
  Response,
  NextFunction
} from 'express';
import WidgetModel from '../../model/widget';
import UserModel, { IUser } from '../../model/user';
import { Document } from 'mongoose';
import { IResFormat } from '../utils';

interface IUserRes extends IUser, Document {}

export function CreateWidget(req: Request, res: Response, next: NextFunction) {
  /**
   * dashboard, name, type, data
   * 
   * widget types: alexa_watcher, 
   * 
   * data parameter for creating alexa_watcher widget:
   * site_url: string; 
   */

  UserModel.findById(req.user._id)
  .then((u: any) => {
    const user: IUserRes = u;

    const widget: any = {};

    widget.owner = user._id;
    widget.dashboard = req.body.dashboard;
    widget.name = req.body.name;
    widget.widget_type = req.body.type;
    widget.widget_data = req.body.data;
    
    if (user.account_type === 'free') {
      widget.interval = 'everyday';
    } else if (user.account_type === 'premium') {
      widget.interval = 'everyhour';
    }

    WidgetModel.create(widget)
    .then(() => {
      const response: IResFormat = {
        success: true
      };

      res.json(response);
    })
    .catch((e: any) => {
      const response: IResFormat = {
        success: false,
        err: e,
        errcode: 11004
      };

      res.status(400).json(response);
    });
  })
  .catch((e: any) => {
    const response: IResFormat = {
      success: false,
      err: e,
      errcode: 11002
    };

    res.status(500).json(response);
  })
}
