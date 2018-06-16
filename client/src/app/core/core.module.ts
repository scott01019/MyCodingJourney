import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

import { AppComponent } from "./containers/app/app.component"
import { ToolbarComponent } from './components/toolbar/toolbar.component'


export const COMPONENTS = [ ToolbarComponent, AppComponent ]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    FontAwesomeModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { 
    static forRoot() {
        return {
            ngModule: CoreModule
        }
    }
}