import { Action } from "@ngrx/store"
import { Article, ARTICLE_SORTS } from "../models/article"

export enum ArticleActionTypes {
    Load = "[Article] Load",
    LoadSuccess = "[Article] Load Success",
    LoadError = "[Article] Load Error",
    LoadAll = "[Article] Load Many",
    LoadAllSuccess = "[Article] Load Many Success",
    LoadAllError = "[Article] Load Many Error",
    SortBy = "[Article] Sort By"
}

export class Load implements Action {
    readonly type = ArticleActionTypes.Load
    constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
    readonly type = ArticleActionTypes.LoadSuccess
    constructor(public payload: Article) {}
}

export class LoadError implements Action {
    readonly type = ArticleActionTypes.LoadError
    constructor(public payload: string) {}
}

export class LoadAll implements Action {
    readonly type = ArticleActionTypes.LoadAll
}

export class LoadAllSuccess implements Action {
    readonly type = ArticleActionTypes.LoadAllSuccess
    constructor(public payload: Article[]) {}
}

export class LoadAllError implements Action {
    readonly type = ArticleActionTypes.LoadAllError
    constructor(public payload: string) {}
}

export class SortBy implements Action {
    readonly type = ArticleActionTypes.SortBy
    constructor(public payload: ARTICLE_SORTS) {}
}


export type ArticleActions = Load | LoadSuccess | LoadError | LoadAll | LoadAllError | LoadAllSuccess | SortBy