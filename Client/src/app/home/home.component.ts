import { Component, OnInit } from '@angular/core';
import { Article } from '../object/article';
import { Produit } from '../object/produit';
import { User } from '../object/user';
import { ProduitService } from '../services/produit.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles : Article[];
  produits : Produit[];
  users : User[];

  constructor(private userService : UserService, private produitService : ProduitService)
  {
    this.getarticlesAndUser();
  }

  ngOnInit(): void {
  }

  async getarticlesAndUser()
  {
    await this.getarticlesCall();
    await this.getuserCall();
    console.log("oui", this.articles);
  }


  async getarticlesCall()
  {
    this.produitService.getAll().subscribe(data => {
      console.log(data);
      this.produits = data;
    });
  }

  async getuserCall()
  {
    this.userService.getAll().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  async deleteProduit(nom:string)
  {
    await this.calldeleteProduit(nom);
    await this.getarticlesCall();
  }

  async calldeleteProduit(nom : string)
  {
    console.log("je suis dans call ts nom" , nom)
    this.produitService.deleteProduit(nom).subscribe(data => {
      console.log(data);
      alert("réussie");
    });
  }
}
