import {
  Request,
  Response,
  NextFunction
} from 'express';
import { Document } from 'mongoose';

import DashboardModel from '../../model/dashboard';
import UserModel, { IUser } from '../../model/user';
import { IResFormat } from '../utils';

interface IUserIn extends IUser, Document {}

export function CreateDashboard(req: Request, res: Response, next: NextFunction) {
  DashboardModel.find({ owner: req.user._id })
  .then((dashboards: any[]) => {
    if (dashboards.length >= 1) {
      UserModel.findById(req.user._id)
      .then((u: any) => {
        const user: IUserIn = u;

        if (user.account_type === 'free') {
          const response: IResFormat = {
            success: false,
            err: 'You are using a free version. You are not allowed to have more than 1 dashboard.',
            errcode: 11003
          }
          return res.status(403).json(response);

        } else if (user.account_type === 'premium') {
          DashboardModel.create({
            owner: user._id,
            name: req.body.name,
            configs: req.body.configs,
          })
          .then((dashboard: Document) => {
            const response: IResFormat = {
              success: true,
              dashboard_id: dashboard._id
            };

            res.json(response);
            return;

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
      })
      .catch((e: any) => {
        const response: IResFormat = {
          success: false,
          err: e,
          errcode: 11002
        };

        res.status(500).json(response);
      })

    } else {
      DashboardModel.create({
        owner: req.user._id,
        name: req.body.name,
        configs: req.body.configs,
      })
      .then((dashboard: Document) => {
        const response: IResFormat = {
          success: true,
          dashboard_id: dashboard._id
        };

        res.json(response);

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
  })
}
