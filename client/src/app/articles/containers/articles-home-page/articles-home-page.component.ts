import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromArticles from "./../../reducers"
import * as articleActions from "./../../actions/article"
import { Article } from '../../models/article';

@Component({
    selector: 'articles-home-page',
    templateUrl: './articles-home-page.component.html',
    styleUrls: ['./articles-home-page.component.scss']
})
export class ArticlesHomePageComponent implements OnInit {

    articles: Observable<Article[]>
    
    constructor(public store: Store<fromArticles.State>) { 
        this.articles = this.store.pipe(select(fromArticles.getAllArticles))
    }

    ngOnInit() {
        this.store.dispatch(new articleActions.LoadLatest(9))
    }
}
