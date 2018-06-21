import { Action } from "@ngrx/store"

export enum LayoutActionTypes {
    SetShowDiscussion = "[Layout] Set Show Discussion"
}

export class SetShowDiscussion implements Action {
    readonly type = LayoutActionTypes.SetShowDiscussion
    constructor(public payload: boolean) {}
}

export type LayoutActions = SetShowDiscussion