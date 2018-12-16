export interface IResFormat {
  success: boolean;
  err?: string;
  errcode?: number;
  token?: string;
  [key: string]: any;
}