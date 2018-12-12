import Passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
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
    return done(null, {success: true, ...user})

  } catch(e) {
    done(null, {success: false, err_code: 11000, error: e});
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
          return done(null, { success: false, err: 'wrong pass', errcode: 11001 }, { message: 'wrong password' });
        } 
    
        return done(null, Object.assign(user, { success: true }), { message: 'logged in successfully' });
      })
      .catch(e => {
        return done(null, false, { message: 'An error occured' });
      })
    })
    .catch((e) => {
      return done(e);
    })
}

Passport.use(new JWTStrategy(
  {
    secretOrKey: process.env.PRIVATE_KEY_JWT || 'sample',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  jwtStrategy
))

function jwtStrategy(token: any, done: Function) {
  console.log('token:');

  try {
    done(null, token.user);
  } catch(e) {
    done(e);
  }
}