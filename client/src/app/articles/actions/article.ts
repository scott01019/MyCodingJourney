import { Action } from "@ngrx/store"
import { Article } from "../models/article"

export enum ArticleActionTypes {
    Load = "[Article] Load",
    LoadSuccess = "[Article] Load Success",
    LoadError = "[Article] Load Error",
    LoadLatest = "[Article] Load Latest",
    LoadLatestSuccess = "[Article] Load Latest Success",
    LoadLatestError = "[Article] Load Latest Error"
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

export class LoadLatest implements Action {
    readonly type = ArticleActionTypes.LoadLatest
    constructor(public payload: number) {}
}

export class LoadLatestSuccess implements Action {
    readonly type = ArticleActionTypes.LoadLatestSuccess
    constructor(public payload: Article[]) {}
}

export class LoadLatestError implements Action {
    readonly type = ArticleActionTypes.LoadLatestError
    constructor(public payload: string) {}
}

export type ArticleActions = Load | LoadSuccess | LoadError | LoadLatest | LoadLatestError | LoadLatestSuccess