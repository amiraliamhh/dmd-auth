import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    email: string;
    password?: string;
    first_name?: string;
    last_name?: string;
}
declare const _default: mongoose.Model<mongoose.Document, {}>;
export default _default;
