import { Component, OnInit, Input } from '@angular/core';

import { faUser, faChevronUp } from "@fortawesome/free-solid-svg-icons"

import { Comment } from '../../models/comment';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
    faChevronUp = faChevronUp
    faUser = faUser

    @Input() comment: Comment

    constructor() { }

    ngOnInit() {
    }

}
