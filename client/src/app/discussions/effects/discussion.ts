import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Effect, Actions, ofType } from "@ngrx/effects"
import { Action } from "@ngrx/store";

import { Load, DiscussionActionTypes, LoadSuccess, LoadError } from "../actions/discussion";
import { DiscussionHttpService } from "../services/discussion-http.service";
import { map, switchMap, catchError } from "rxjs/operators";
import { Discussion } from "../models/discussion";

@Injectable()
export class DiscussionEffects {
    constructor(private actions$: Actions, private discussionService: DiscussionHttpService) {}

    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType<Load>(DiscussionActionTypes.Load),
        map(action => action.payload),
        switchMap((id: string) => this.discussionService.getDiscussion(id).pipe(
           map((discussion: Discussion) => new LoadSuccess(discussion)),
           catchError(err => of(new LoadError(err))) 
        ))
    )
}