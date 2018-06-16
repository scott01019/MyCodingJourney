import { Effect, Actions, ofType } from "@ngrx/effects"
import { Action } from "@ngrx/store"
import { Observable, of } from "rxjs"
import { map, catchError, switchMap } from "rxjs/operators"
import { ArticleHttpService } from "./../services/article-http.service"

import { Article } from "./../models/article"
import { ArticleActionTypes, Load, LoadError, LoadSuccess, LoadLatest, LoadLatestSuccess, LoadLatestError } from "./../actions/article"
import { Injectable } from "@angular/core";

@Injectable()
export class ArticleEffects {
    constructor(private actions$: Actions, private articleService: ArticleHttpService) {}

    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType<Load>(ArticleActionTypes.Load),
        map(action => action.payload),
        switchMap((id: string) => this.articleService.getArticle(id).pipe(
            map((article: Article) => new LoadSuccess(article)),
            catchError(err => of(new LoadError(err)))
        ))
    )

    @Effect()
    loadLatest$: Observable<Action> = this.actions$.pipe(
        ofType<LoadLatest>(ArticleActionTypes.LoadLatest),
        map(action => action.payload),
        switchMap((size: number) => this.articleService.getLatestArticles(size).pipe(
            map((articles: Article[]) => new LoadLatestSuccess(articles)),
            catchError(err => of(new LoadLatestError(err)))
        ))
    )
}