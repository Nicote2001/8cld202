import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Article } from "../object/article";
import { Produit } from "../object/produit";

@Injectable({
    providedIn: 'root'
})
export class ProduitService {
    constructor(private http: HttpClient) { }

    get baseUri() {
        return '/api/produit';
    }

    getAll() {
        return this.http.get<any>(`${this.baseUri}/getall`);
    }

    AddProduit(produit : Produit)
    {
        return this.http.post<any>(`${this.baseUri}/add`,produit);
    }

    deleteProduit(nom :string)
    {
        console.log("why",nom);
        return this.http.delete<any>(`${this.baseUri}/delete/`+nom);
    }

    getProductByName(name : string)
    {
        return this.http.get<any>(`${this.baseUri}/getProductByName/`+name);
    }

    updateProduit(produit : Produit)
    {
        return this.http.put<any>(`${this.baseUri}/update`,produit);
    }
}