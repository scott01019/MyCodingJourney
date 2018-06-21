import { createSelector, createFeatureSelector, ActionReducerMap } from "@ngrx/store"
import * as fromDiscussion from "./discussion"
import * as fromLayout from "./layout"
import * as fromRoot from "./../../reducers"

export interface DiscussionState {
    discussions: fromDiscussion.State,
    layout: fromLayout.State
}

export interface State extends fromRoot.State {
    discussions: DiscussionState
}

export const reducers: ActionReducerMap<DiscussionState> = {
    discussions: fromDiscussion.reducer,
    layout: fromLayout.reducer
}

export const discussionFeatureSelector = createFeatureSelector<DiscussionState>("discussions")

// discussion selectors
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

export const getCurrentDiscussionId = createSelector(
    getDiscussionEntitiesState,
    state => state.currentDiscussionId
)

export const {
    selectIds: getDiscussionIds,
    selectEntities: getDiscussionEntities,
    selectAll: getAllDiscussions,
    selectTotal: getTotalDiscussions
} = fromDiscussion.adapter.getSelectors(getDiscussionEntitiesState)

export const getCurrentDiscussion = createSelector(
    getDiscussionEntities,
    getCurrentDiscussionId,
    (entities, id) => {
        console.log(entities, id)
        return entities[id]
    }
)

// layout selectors
export const getLayoutState = createSelector(
    discussionFeatureSelector,
    state => state.layout
)

export const getShowDiscussion = createSelector(
    getLayoutState,
    state => state.showDiscussion
)