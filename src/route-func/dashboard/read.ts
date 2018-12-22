import {
  Request,
  Response,
  NextFunction
} from 'express';
import DashboardModel from '../../model/dashboard';
import { IResFormat } from '../utils';

export function ReadDashboard(req: Request, res: Response, next: NextFunction) {
  DashboardModel.findById(req.params.id)
  .then((dashboard) => {
    if (!dashboard) {
      const response: IResFormat = {
        success: false,
        err: 'no dashboard with this id',
        errcode: 11005
      };

      res.status(400).json(response);

    } else {

      if (dashboard._id !== req.user._id) {
        const response: IResFormat = {
          success: false,
          err: 'you don\'t have permission to see this dashboard',
          errcode: 11007
        };

        res.status(403).json(response);

      } else {
        const response: IResFormat = {
          success: true,
          data: dashboard
        }

        res.json(response);
        
      }
    }
  })
  .catch(e => {
    const response: IResFormat = {
      success: false,
      err: e,
      errcode: 11006
    };

    res.status(500).json(response);
  })
}

export function ReadAllDashboards(req: Request, res: Response, next: NextFunction) {
  DashboardModel.find({ owner: req.user._id })
  .then((dashboards) => {
    if (!dashboards.length) {
      const response: IResFormat = {
        success: false,
        err: 'this user does not have any dashboards yet.',
        errcode: 11005
      };

      res.status(400).json(response);

    } else {
      const response: IResFormat = {
        success: true,
        data: dashboards
      };

      res.json(response);
    }
  })
  .catch((e: any) => {
    const response: IResFormat = {
      success: false,
      err: e,
      errcode: 11003
    }

    res.status(500).json(response);
  })
}
