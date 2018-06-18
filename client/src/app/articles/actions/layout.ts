import { Action } from "@ngrx/store"
import { ARTICLE_SORTS } from "../models/article";

export enum LayoutActionTypes {
    GridView = "[Layout] Grid View",
    ListView = "[Layout] List View",
}

export class GridView implements Action {
    readonly type = LayoutActionTypes.GridView
}

export class ListView implements Action {
    readonly type = LayoutActionTypes.ListView
}

export type LayoutActions = GridView | ListView