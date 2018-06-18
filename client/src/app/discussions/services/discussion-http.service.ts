import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discussion } from '../models/discussion';
import { Observable } from 'rxjs';

@Injectable()
export class DiscussionHttpService {
    constructor(private http: HttpClient) { }

    getDiscussion(id: string): Observable<Discussion> {
        return this.http.get<Discussion>("/api/discussions/" + id)
    }

    // addConversation(id: string, conversation: Conversation) {
    //     return this.http.patch<Discussion>("/api/disucssions/" + id + "/conversations/create/", conversation)
    // }

    // addComment(id: string, conversationId: string, comment: Comment) {
    //     return this.http.patch<Discussion>("/api/discussions/" + id + "/conversations/" + conversationId + "/comments/create", comment)
    // }
}
