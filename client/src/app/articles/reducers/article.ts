import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity"
import { Article, ARTICLE_SORTS } from "./../models/article"
import { ArticleActions, ArticleActionTypes } from "./../actions/article"

export interface State extends EntityState<Article> {
    currentArticleId: string | null
    error: string | null
    loading: boolean
    sortBy: ARTICLE_SORTS
    limit: number
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
    selectId: (article: Article) => article._id,
    sortComparer: false
})

export const initialState: State = adapter.getInitialState({
    currentArticleId: null,
    error: null,
    loading: false,
    sortBy: ARTICLE_SORTS.LATEST,
    limit: 9
})

export function reducer(state = initialState, action: ArticleActions): State {
    switch(action.type) {
        case ArticleActionTypes.Load: {
            return { 
                ...state, 
                loading: true 
            }
        }

        case ArticleActionTypes.LoadSuccess: {
            return adapter.addOne(action.payload, {
                ...state,
                error: null,
                loading: false
            })
        }

        case ArticleActionTypes.LoadError: {
            return {
                ...state, 
                error: action.payload,
                loading: false
            }
        }

        case ArticleActionTypes.LoadAll: {
            return {
                ...state,
                loading: true
            }
        }

        case ArticleActionTypes.LoadAllSuccess: {
            return adapter.addMany(action.payload, {
                ...state,
                error: null,
                loading: false
            })
        }

        case ArticleActionTypes.LoadAllError: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case ArticleActionTypes.SortBy: {
            return {
                ...state,
                sortBy: action.payload
            }
        }

        case ArticleActionTypes.IncreaseLimit: {
            return {
                ...state,
                limit: state.limit + action.payload
            }
        }

        case ArticleActionTypes.SetCurrentArticleId: {
            return {
                ...state,
                currentArticleId: action.payload
            }
        }

        default: return state
    }

}