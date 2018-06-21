import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromDiscussion from "./../../reducers/"
import * as fromLayout from "./../../reducers/"
import { Discussion } from '../../models/discussion';
import * as discussionActions from '../../actions/discussion';
import * as layoutActions from '../../../discussions/actions/layout';

@Component({
    selector: 'discussion-container',
    templateUrl: './discussion-container.component.html',
    styleUrls: ['./discussion-container.component.scss']
})
export class DiscussionContainerComponent implements OnInit {

    @Input() discussionId: string
    discussion: Observable<Discussion>
    showDiscussion: Observable<boolean>

    constructor(private store: Store<fromDiscussion.State>) {
        this.discussion = this.store.pipe(select(fromDiscussion.getCurrentDiscussion))
        this.showDiscussion = this.store.pipe(select(fromLayout.getShowDiscussion))
    }

    ngOnInit() {
        this.store.dispatch(new discussionActions.SetCurrentDiscussionId(this.discussionId))
        this.store.dispatch(new discussionActions.Load(this.discussionId))
    }

    loadDiscussion() {
        this.store.dispatch(new discussionActions.SetCurrentDiscussionId(this.discussionId))
        this.store.dispatch(new discussionActions.Load(this.discussionId))
        this.store.dispatch(new layoutActions.SetShowDiscussion(true))
    }
}