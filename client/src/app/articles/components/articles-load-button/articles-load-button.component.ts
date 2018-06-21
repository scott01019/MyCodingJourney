import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'articles-load-button',
    templateUrl: './articles-load-button.component.html',
    styleUrls: ['./articles-load-button.component.scss']
})
export class ArticlesLoadButtonComponent implements OnInit {

    click = new EventEmitter()

    constructor() { }

    ngOnInit() {
    }
}
