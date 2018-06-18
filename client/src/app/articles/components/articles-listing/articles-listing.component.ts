import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
    selector: 'articles-listing',
    templateUrl: './articles-listing.component.html',
    styleUrls: ['./articles-listing.component.scss']
})
export class ArticlesListingComponent implements OnInit {

    @Input() articles: Article[]
    @Input() isGridView: boolean = true
    @Input() isListView: boolean = false
    
    constructor() { }

    ngOnInit() {
    }
}
