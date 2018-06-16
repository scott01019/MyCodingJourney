import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faFilter, faList, faTh } from "@fortawesome/free-solid-svg-icons"

@Component({
    selector: 'articles-home-sub-menu',
    templateUrl: './articles-home-sub-menu.component.html',
    styleUrls: ['./articles-home-sub-menu.component.scss']
})
export class ArticlesHomeSubMenuComponent implements OnInit {
    faFilter = faFilter
    faList = faList
    faTh = faTh

    @Output() filterClicked = new EventEmitter()
    @Output() listClicked = new EventEmitter()
    @Output() gridClicked = new EventEmitter()

    constructor() { }

    ngOnInit() {
    }

}
