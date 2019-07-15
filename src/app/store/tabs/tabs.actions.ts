import { createAction, props } from '@ngrx/store';

export const tabChangedAction  = createAction('[Tabs action] tabChangedAction', props<{ selectedTab: string }>());
