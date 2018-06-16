import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from "@ngrx/store"
import { environment } from "./../../environments/environment"
import { RouterStateUrl } from "./../shared/utils"
import * as fromRouter from "@ngrx/router-store"

import { storeFreeze } from "ngrx-store-freeze"

// if we had layout state
// import * as fromLayout form "./../core/reducers/layout"

export interface State {
    // layout: fromLayout.State
    router: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
    // layout: fromLayout.reducer
    router: fromRouter.routerReducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State, action: any): State => {
        console.log("state", state)
        console.log("action", action)
        return reducer(state, action)
    }
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : []

// export const getLayoutState = createFeatureSelector<fromLayout.State>("layout")