import { createSelector, createFeatureSelector, ActionReducerMap } from "@ngrx/store"
import * as fromArticles from "./article"
import * as fromRoot from "./../../reducers"

export interface ArticlesState {
    articles: fromArticles.State
}

export interface State extends fromRoot.State {
    articles: ArticlesState
}

export const reducers: ActionReducerMap<ArticlesState> = {
    articles: fromArticles.reducer
}

export const getArticlesState = createFeatureSelector<ArticlesState>("articles")

export const getArticleEntitiesState = createSelector(
    getArticlesState,
    state => state.articles
)

export const getCurrentArticleId = createSelector(
    getArticleEntitiesState,
    fromArticles.getCurrentArticleId
)

export const {
    selectIds: getArticlesIds,
    selectEntities: getArticleEntities,
    selectAll: getAllArticles,
    selectTotal: getTotalArticles
} = fromArticles.adapter.getSelectors(getArticleEntitiesState)