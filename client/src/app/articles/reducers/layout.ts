import { LayoutActionTypes, LayoutActions } from "./../actions/layout"

export interface State {
    isGridView: boolean
    isListView: boolean
}

const initialState: State = {
    isGridView: true,
    isListView: false,
}

export function reducer(state: State = initialState, action: LayoutActions): State {
    switch(action.type) {
        case LayoutActionTypes.GridView: {
            return {
                isGridView: true,
                isListView: false,
            }
        }

        case LayoutActionTypes.ListView: {
            return {
                isGridView: false,
                isListView: true,
            }
        }

        default: return state;
    }
}