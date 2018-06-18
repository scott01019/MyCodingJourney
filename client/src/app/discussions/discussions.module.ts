import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"

import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

import { DiscussionEffects } from "./effects/discussion"

import { reducers } from "./reducers"
import { DiscussionHttpService } from "./services/discussion-http.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FontAwesomeModule,
        StoreModule.forFeature("discussions", reducers),
        EffectsModule.forFeature([DiscussionEffects])
    ],
    providers: [DiscussionHttpService]
})
export class DiscussionsModule {}