import { createSelector, createFeatureSelector, ActionReducerMap } from "@ngrx/store"
import * as fromDiscussion from "./discussion"
import * as fromRoot from "./../../reducers"

export interface DiscussionState {
    discussions: fromDiscussion.State
}

export interface State extends fromRoot.State {
    discussions: DiscussionState
}

export const reducers: ActionReducerMap<DiscussionState> = {
    discussions: fromDiscussion.reducer
}

export const discussionFeatureSelector = createFeatureSelector<DiscussionState>("discussions")

export const getDiscussionEntitiesState = createSelector(
    discussionFeatureSelector,
    state => state.discussions
)

export const getError = createSelector(
    getDiscussionEntitiesState,
    state => state.error
)

export const getLoading = createSelector(
    getDiscussionEntitiesState,
    state => state.loading
)

export const {
    selectIds: getDiscussionIds,
    selectEntities: getDiscussionEntities,
    selectAll: getAllDiscussions,
    selectTotal: getTotalDiscussions
} = fromDiscussion.adapter.getSelectors(getDiscussionEntitiesState)