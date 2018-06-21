import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"

import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

import { DiscussionEffects } from "./effects/discussion"

import { reducers } from "./reducers"
import { DiscussionHttpService } from "./services/discussion-http.service";
import { ConversationComponent } from "./components/conversation/conversation.component";
import { CommentComponent } from './components/comment/comment.component';
import { DiscussionContainerComponent } from './containers/discussion-container/discussion-container.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FontAwesomeModule,
        StoreModule.forFeature("discussions", reducers),
        EffectsModule.forFeature([DiscussionEffects])
    ],
    exports: [
        DiscussionContainerComponent,
        ConversationComponent,
        CommentComponent
    ],
    providers: [DiscussionHttpService],
    declarations: [ ConversationComponent, CommentComponent, DiscussionContainerComponent]
})
export class DiscussionsModule {}