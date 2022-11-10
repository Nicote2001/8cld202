import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Article } from "../object/article";
import { User } from "../object/user";

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

    AddUser(user : User)
    {
        return this.http.post<any>(`${this.baseUri}/add`,user);
    }

    deleteUser(username :string)
    {
        return this.http.delete<any>(`${this.baseUri}/delete/`+username);
    }

    getUserByName(username : string)
    {
        return this.http.get<any>(`${this.baseUri}/getUserByUsername/`+username);
    }

    updateUser(user : User)
    {
        return this.http.put<any>(`${this.baseUri}/update`,user);
    }
}