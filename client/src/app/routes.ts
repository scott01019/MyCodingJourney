import { Routes } from "@angular/router"

export const routes: Routes = [
    { path: "", redirectTo: "/articles", pathMatch: "full" },
    { path: "articles", loadChildren: "./articles/articles.module#ArticlesModule" },
    { path: "**", redirectTo: "/articles", pathMatch: "full" }
]