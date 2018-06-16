import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from "./core/core.module"

import { AppComponent } from "./core/containers/app/app.component"

import { routes } from "./routes"
import { reducers, metaReducers } from "./reducers" 
import { SerializedRouterState } from './shared/utils';
import { environment } from '../environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true }),
        NgbModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({
            stateKey: "router"
        }),
        StoreDevtoolsModule.instrument({
            name: "Coding Journey Blog",
            logOnly: environment.production
        }),
        EffectsModule.forRoot([]),
        CoreModule.forRoot()
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: SerializedRouterState }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }