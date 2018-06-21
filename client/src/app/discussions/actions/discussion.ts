import { Action } from "@ngrx/store"
import { Discussion } from "./../models/discussion"

export enum DiscussionActionTypes {
    Load = "[Discussion] Load",
    LoadSuccess = "[Discussion] Load Success",
    LoadError = "[Discussion] Load Error",
    SetCurrentDiscussionId = "[Discussion] Set Current Discussion Id"
}

export class Load implements Action {
    readonly type = DiscussionActionTypes.Load
    constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
    readonly type = DiscussionActionTypes.LoadSuccess
    constructor(public payload: Discussion) {}
}

export class LoadError implements Action {
    readonly type = DiscussionActionTypes.LoadError
    constructor(public payload: string) {}
}

export class SetCurrentDiscussionId implements Action {
    readonly type = DiscussionActionTypes.SetCurrentDiscussionId
    constructor(public payload: string) {}
}

export type DiscussionActions = Load | LoadSuccess | LoadError | SetCurrentDiscussionId