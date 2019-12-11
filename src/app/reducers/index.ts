import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromUser from './user.reducer';

export interface State {
    users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
    users: fromUser.reducer,
};

export const selectUserState = createFeatureSelector<fromUser.State>('users');

export const selectUserIds = createSelector(
    selectUserState,
    fromUser.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectUserEntities = createSelector(
    selectUserState,
    fromUser.selectUserEntities
);
export const selectAllUsers = createSelector(
    selectUserState,
    fromUser.selectAllUsers
);
export const selectUserTotal = createSelector(
    selectUserState,
    fromUser.selectUserTotal
);
export const selectCurrentUserId = createSelector(
    selectUserState,
    fromUser.getSelectedUserId
);

export const selectCurrentUser = createSelector(
    selectUserEntities,
    selectCurrentUserId,
    (userEntities, userId) => userEntities[userId]
);

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument(),
    ],
})
export class AppStoreModule { }