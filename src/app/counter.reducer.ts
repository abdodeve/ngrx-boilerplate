import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, login } from './counter.actions';

export const initialState: any = 0;

export const counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
  on(login, (state, { username, password }) => ({
    old_state: state,
    username: username,
    password: password
  }))
);