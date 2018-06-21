import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import * as fromRoot from "./../../../reducers"
import * as fromArticles from "./../../reducers"
import * as articleActions from "./../../actions/article"
import { Article } from '../../models/article';

@Component({
    selector: 'article-page',
    templateUrl: './article-page.component.html',
    styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit, OnDestroy {

    article: Observable<Article>
    routeSub: Subscription

    constructor(private store: Store<fromRoot.State>, private activatedRoute: ActivatedRoute) {
        this.article = this.store.pipe(select(fromArticles.getCurrentArticle))
    }

    ngOnInit() {
        this.routeSub = this.activatedRoute.params.pipe(
            map(params => {
                this.store.dispatch(new articleActions.SetCurrentArticleId(params.id))
                this.store.dispatch(new articleActions.Load(params.id))
            })
        ).subscribe(_ => null)
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe()
    }
}