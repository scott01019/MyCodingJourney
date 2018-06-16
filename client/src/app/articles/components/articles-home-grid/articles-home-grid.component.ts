import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
    selector: 'articles-home-grid',
    templateUrl: './articles-home-grid.component.html',
    styleUrls: ['./articles-home-grid.component.scss']
})
export class ArticlesHomeGridComponent implements OnInit {

    @Input() articles: Article[]
    constructor() { }

    ngOnInit() {
    }

}
