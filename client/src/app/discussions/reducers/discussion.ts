import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity"
import { Discussion } from "./../models/discussion"
import { DiscussionActions, DiscussionActionTypes } from "./../actions/discussion"

export interface State extends EntityState<Discussion> {
    error: string | null
    loading: boolean
}

export const adapter: EntityAdapter<Discussion> = createEntityAdapter<Discussion>({
    selectId: (discussion: Discussion) => discussion._id,
    sortComparer: false
})

export const initialState: State = adapter.getInitialState({
    error: null,
    loading: false
})

export function reducer(state = initialState, action: DiscussionActions): State {
    switch(action.type) {
        case DiscussionActionTypes.Load: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }

        case DiscussionActionTypes.LoadSuccess: {
            return adapter.addOne(action.payload, {
                ...state,
                error: null,
                loading: false
            })
        }

        case DiscussionActionTypes.LoadError: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        default: return state
    }
}