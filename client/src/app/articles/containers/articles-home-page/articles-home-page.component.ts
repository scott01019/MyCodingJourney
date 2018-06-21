import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromArticles from "./../../reducers/"
import * as articleActions from "./../../actions/article"
import { Article, ARTICLE_SORTS } from '../../models/article';
import * as layoutActions from '../../actions/layout';

@Component({
    selector: 'articles-home-page',
    templateUrl: './articles-home-page.component.html',
    styleUrls: ['./articles-home-page.component.scss']
})
export class ArticlesHomePageComponent implements OnInit {

    articles: Observable<Article[]>
    isGridView: Observable<boolean>
    isListView: Observable<boolean>
    loading: Observable<boolean>
    error: Observable<string>
    sortBy: Observable<ARTICLE_SORTS>
    limit: Observable<number>
    
    constructor(private store: Store<fromArticles.State>) {
        this.loading = this.store.pipe(select(fromArticles.getLoading))
        this.isListView = this.store.pipe(select(fromArticles.getIsListView))
        this.isGridView = this.store.pipe(select(fromArticles.getIsGridView))
        this.error = this.store.pipe(select(fromArticles.getError))
        this.sortBy = this.store.pipe(select(fromArticles.getSort))
        this.articles = this.store.pipe(select(fromArticles.getSortedArticles))
        this.limit = this.store.pipe(select(fromArticles.getLimit))
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

    increaseArticleLimit() {
        this.store.dispatch(new articleActions.IncreaseLimit(9))
    }
}
