import Passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { compare } from 'bcryptjs';

import UserModel, { IUser } from '../model/user';

Passport.use('signup', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  userSignupStartegy
))

async function userSignupStartegy(email: string, password: string, done: Function): Promise<any> {

  try {
    const user = await UserModel.create({email, password});
    return done(null, user)

  } catch(e) {
    done(e);
  }
}

Passport.use('login', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  userLoginStrategy
))

function userLoginStrategy(email: string, password: string, done: Function) {

    UserModel.findOne({ email })
    .then((user: any) => {
      if (!user) {
        return done(null, false, { message: 'user not found' });
      }

      compare(password, user.password)
      .then(isValid => {
        if (!isValid) {
          done(null, false, { message: 'wrong password' });
        }
    
        done(null, user, { message: 'logged in successfully' });
      })
      .catch(e => {
        done(null, false, { message: 'An error occured' });
      })
    })
    .catch((e) => {
      done(e);
    })
}