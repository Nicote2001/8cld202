import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Article } from "../object/article";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    get baseUri() {
        return '/api/user';
    }

    getAll() {
        return this.http.get<any>(`${this.baseUri}/getall`);
    }

    AddArticle(article : Article)
    {
        console.log("oui 2")
        return this.http.get<any>(`${this.baseUri}/add`);
    }
}