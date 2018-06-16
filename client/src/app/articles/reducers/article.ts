import { createSelector } from "@ngrx/store"
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity"
import { Article } from "./../models/article"
import { ArticleActions, ArticleActionTypes } from "./../actions/article"

export interface State extends EntityState<Article> {
    currentArticleId: string | null
    error: string | null
    loading: boolean
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
    selectId: (article: Article) => article._id,
    sortComparer: false
})

export const initialState: State = adapter.getInitialState({
    currentArticleId: null,
    error: null,
    loading: false
})

export function reducer(state = initialState, action: ArticleActions): State {
    switch(action.type) {
        case ArticleActionTypes.Load: {
            return { 
                ...state, 
                currentArticleId: state.currentArticleId, 
                error: null, 
                loading: true 
            }
        }

        case ArticleActionTypes.LoadSuccess: {
            return adapter.addOne(action.payload, {
                ...state,
                currentArticleId: action.payload._id,
                error: null,
                loading: false
            })
        }

        case ArticleActionTypes.LoadError: {
            return {
                ...state, 
                currentArticleId: state.currentArticleId,
                error: action.payload,
                loading: false
            }
        }

        case ArticleActionTypes.LoadLatest: {
            return {
                ...state,
                currentArticleId: state.currentArticleId,
                error: null,
                loading: true
            }
        }

        case ArticleActionTypes.LoadLatestSuccess: {
            return adapter.addMany(action.payload, {
                ...state,
                currentArticleId: state.currentArticleId,
                error: null,
                loading: false
            })
        }

        case ArticleActionTypes.LoadLatestError: {
            return {
                ...state,
                currentArticleId: state.currentArticleId,
                error: action.payload,
                loading: false
            }
        }

        default: return state
    }

}

export const getCurrentArticleId = (state: State) => state.currentArticleId