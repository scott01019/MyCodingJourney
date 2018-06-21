import { createSelector, createFeatureSelector, ActionReducerMap } from "@ngrx/store"
import * as fromArticles from "./article"
import * as fromLayout from "./layout"
import * as fromRoot from "./../../reducers"
import { ARTICLE_SORTS, latestCmp, oldestCmp, popularCmp } from "../models/article";

export interface ArticlesState {
    articles: fromArticles.State
    layout: fromLayout.State
}

export interface State extends fromRoot.State {
    articles: ArticlesState
}

export const reducers: ActionReducerMap<ArticlesState> = {
    articles: fromArticles.reducer,
    layout: fromLayout.reducer
}

// articles selectors
export const articlesFeatureSelector = createFeatureSelector<ArticlesState>("articles")

export const getArticleEntitiesState = createSelector(
    articlesFeatureSelector,
    state => state.articles
)

export const getCurrentArticleId = createSelector(
    getArticleEntitiesState,
    state => state.currentArticleId
)

export const getError = createSelector(
    getArticleEntitiesState,
    state => state.error
)

export const getLoading = createSelector(
    getArticleEntitiesState,
    state => state.loading
)

export const getSort = createSelector(
    getArticleEntitiesState,
    state => state.sortBy
)

export const getLimit = createSelector(
    getArticleEntitiesState,
    state => state.limit
)

export const {
    selectIds: getArticlesIds,
    selectEntities: getArticleEntities,
    selectAll: getAllArticles,
    selectTotal: getTotalArticles
} = fromArticles.adapter.getSelectors(getArticleEntitiesState)

export const getSortedArticles = createSelector(
    getAllArticles,
    getSort,
    (articles, sort) => {
        if (sort == ARTICLE_SORTS.LATEST) return articles.sort(latestCmp)
        if (sort == ARTICLE_SORTS.OLDEST) return articles.sort(oldestCmp)
        if (sort == ARTICLE_SORTS.POPULAR) return articles.sort(popularCmp)
        return articles
    }
)

export const getCurrentArticle = createSelector(
    getArticleEntities,
    getCurrentArticleId,
    (entities, id) => entities[id]
)

// layout selectors
export const getLayoutState = createSelector(
    articlesFeatureSelector,
    state => state.layout
)

export const getIsGridView = createSelector(
    getLayoutState,
    state => state.isGridView
)

export const getIsListView = createSelector(
    getLayoutState,
    state => state.isListView
)