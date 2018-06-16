import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

import { ArticleEffects } from "./effects/article"

import { reducers } from "./reducers"

import { ArticlesHomePageComponent } from './containers/articles-home-page/articles-home-page.component';
import { ArticlesHomeGridComponent } from './components/articles-home-grid/articles-home-grid.component';
import { ArticlesHomeSubMenuComponent } from './components/articles-home-sub-menu/articles-home-sub-menu.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleHttpService } from './services/article-http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
    RouterModule.forChild([
        { path: "", component: ArticlesHomePageComponent }
    ]),
    FontAwesomeModule,
    StoreModule.forFeature("articles", reducers),
    EffectsModule.forFeature([ArticleEffects])
  ],
  providers: [ArticleHttpService],
  declarations: [ArticlesHomePageComponent, ArticlesHomeGridComponent, ArticlesHomeSubMenuComponent, ArticleCardComponent]
})
export class ArticlesModule {}
