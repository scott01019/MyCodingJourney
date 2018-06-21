import { LayoutActionTypes, LayoutActions } from "./../actions/layout"

export interface State {
    showDiscussion: boolean
}

const initialState: State = {
    showDiscussion: false
}

export function reducer(state: State = initialState, action: LayoutActions): State {
    switch(action.type) {
        case LayoutActionTypes.SetShowDiscussion: {
            return {
                ...state,
                showDiscussion: action.payload
            }
        }

        default: return state;
    }
}