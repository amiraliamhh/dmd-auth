import mongoose, { Document, Schema } from 'mongoose';
import { genSalt, hash } from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  account_type?: 'free'|'premium';
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: emailValidator,
      msg: 'email validation failed.'
    }
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  account_type: {
    type: String,
    enum: [
      'free',
      'premium'
    ],
    default: 'free'
  }
});

UserSchema.pre('save', function(done) {
  let _this = <IUser>this;

  Promise.all([
    hashPass(_this),
    emailToLower(_this)
  ])
  .then(() => {done()})
  .catch(console.error);

});

function emailValidator(email: string): boolean {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// t: "this" in context
function hashPass(t: IUser): Promise<any> {
  return new Promise((resolve, reject) => {
    if ((<string>t.password).length < 8) {
      reject('weakpass');

      return;
    }

    genSalt(10)
    .then((salt: string) => {
      hash(<string>t.password, salt)
      .then((hash: string) => {
        t.password = hash;
        resolve();
      })
      .catch(reject);
    })
    .catch(reject);
  });
}

function emailToLower(t: IUser): Promise<any> {
  return new Promise((resolve, reject) => {
    t.email = t.email.toLowerCase();
    resolve();
  });
}

export default mongoose.model('users', UserSchema);