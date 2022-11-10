import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../object/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

 nom:string = " ";
  desc:string = " ";
  prix:number = 0;
  qty:number = 0;
  

  constructor(private produitService: ProduitService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getarticlesCall(this.route.snapshot.params['name']);
  }

  save()
  {
    var item = new Produit(this.nom,this.desc,this.prix,this.qty)
    this.produitService.updateProduit(item).subscribe(data => {
      if(data === true)
      {
        alert("modification réussie");
      }
    });
  }

  async getarticlesCall(name : string)
  {
    this.produitService.getProductByName(name).subscribe(data => {
      console.log(data);
      this.nom = data.nom;
      this.desc = data.description;
      this.prix = data.prix;
      this.qty = data.qty;
    });
  }

}
