import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromArticles from "./../../reducers/"
import * as articleActions from "./../../actions/article"
import { Article, ARTICLE_SORTS, latestCmp, popularCmp, oldestCmp } from '../../models/article';
import * as layoutActions from '../../actions/layout';
import { map } from 'rxjs/operators';

@Component({
    selector: 'articles-home-page',
    templateUrl: './articles-home-page.component.html',
    styleUrls: ['./articles-home-page.component.scss']
})
export class ArticlesHomePageComponent implements OnInit, OnDestroy {

    articles: Observable<Article[]>
    isGridView: Observable<boolean>
    isListView: Observable<boolean>
    loading: Observable<boolean>
    error: Observable<string>
    sort: ARTICLE_SORTS
    sortSubscription: Subscription
    
    constructor(public store: Store<fromArticles.State>) {
        this.loading = this.store.pipe(select(fromArticles.getLoading))
        this.isListView = this.store.pipe(select(fromArticles.getIsListView))
        this.isGridView = this.store.pipe(select(fromArticles.getIsGridView))
        this.error = this.store.pipe(select(fromArticles.getError))
        this.sortSubscription = this.store.pipe(select(fromArticles.getSort)).subscribe(sort => { this.sort = sort })
        this.articles = this.store.pipe(select(fromArticles.getSortedArticles))
    }

    ngOnInit() {
        this.store.dispatch(new articleActions.LoadAll())
    }

    loadGridView() {
        this.store.dispatch(new layoutActions.GridView())
    }

    loadListView() {
        this.store.dispatch(new layoutActions.ListView())
    }

    sortByNewest() {
        this.store.dispatch(new articleActions.SortBy(ARTICLE_SORTS.LATEST))
    }

    sortByOldest() {
        this.store.dispatch(new articleActions.SortBy(ARTICLE_SORTS.OLDEST))
    }

    sortByPopular() {
        this.store.dispatch(new articleActions.SortBy(ARTICLE_SORTS.POPULAR))
    }

    ngOnDestroy() {
        this.sortSubscription.unsubscribe()
    }
}
