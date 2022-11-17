import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/object/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css']
})
export class AjoutUserComponent implements OnInit {

  username:string = " ";
  prenom:string = " ";
  nom:string = " ";
  age:number = 0;
  

  constructor(private produitService: UserService) { }

  ngOnInit(): void {
  }

  save()
  {
    var item = new User(this.username,this.prenom,this.nom,this.age)
    this.produitService.AddUser(item).subscribe(data => {
      if(data === true)
      {
        alert("Le produit a été ajouté!");
      }
    });
  }

}
