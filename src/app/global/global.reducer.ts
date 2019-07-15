import { createReducer, on } from '@ngrx/store';
import { username } from './global.actions';

export const initialState = "salam ";

export const counterReducer = createReducer(initialState,
  on(username, state => `${state} + adev`)
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/