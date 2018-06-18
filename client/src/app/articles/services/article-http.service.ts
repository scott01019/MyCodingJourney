import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable()
export class ArticleHttpService {

    constructor(private http: HttpClient) { }

    getArticle(id: string): Observable<Article> {
        return this.http.get<Article>("/api/articles/" + id)
    }

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>("/api/articles")
    }
}