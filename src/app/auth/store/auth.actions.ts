import { Action } from '@ngrx/store';

export const TRY_SIGNUP = '[AUTH] TRY_SIGNUP';
export const SIGNUP = '[AUTH] SIGNUP';
export const TRY_SIGNIN = '[AUTH] TRY_SIGNING';
export const SIGNIN = '[AUTH] SIGNIN';
export const LOGOUT = '[AUTH] LOGOUT';
export const SET_TOKEN = '[AUTH] SET_TOKEN';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: {username: string, password: string}) {}
}

export class Signup implements Action {
  readonly type = SIGNUP;
}

export class TrySignin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: {username: string, password: string}) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions = Signup | Signin | Logout | SetToken | TrySignup | TrySignin;
