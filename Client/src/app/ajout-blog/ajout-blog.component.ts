import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { serialize } from 'v8';
import { Article } from '../object/article';
import { Produit } from '../object/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent implements OnInit {

  nom:string = " ";
  desc:string = " ";
  prix:number = 0;
  qty:number = 0;
  

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
  }

  save()
  {
    var item = new Produit(this.nom,this.desc,this.prix,this.qty)
    this.produitService.AddProduit(item).subscribe(data => {
      if(data === true)
      {
        alert("Le produit a été ajouté!");
      }
    });
  }

}
