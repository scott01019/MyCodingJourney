import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faFilter, faList, faTh } from "@fortawesome/free-solid-svg-icons"
import { ARTICLE_SORTS } from '../../models/article';

@Component({
    selector: 'articles-home-sub-menu',
    templateUrl: './articles-home-sub-menu.component.html',
    styleUrls: ['./articles-home-sub-menu.component.scss']
})
export class ArticlesHomeSubMenuComponent implements OnInit {
    faFilter = faFilter
    faList = faList
    faTh = faTh

    @Input() sortedBy: ARTICLE_SORTS
    @Output() sortByNewest = new EventEmitter()
    @Output() sortByOldest = new EventEmitter()
    @Output() sortByPopular = new EventEmitter()
    @Output() filterClicked = new EventEmitter()
    @Output() listClicked = new EventEmitter()
    @Output() gridClicked = new EventEmitter()

    constructor() { }

    ngOnInit() {
    }
}
