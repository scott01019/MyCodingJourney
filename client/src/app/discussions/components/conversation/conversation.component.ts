import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from '../../models/conversation';
@Component({
    selector: 'conversation',
    templateUrl: './conversation.component.html',
    styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
    
    @Input() conversation: Conversation;
    
    constructor() { }
    
    ngOnInit() {
    }
}