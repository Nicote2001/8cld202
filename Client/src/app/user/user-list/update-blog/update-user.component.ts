import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/object/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  username:string = " ";
  prenom:string = " ";
  nom:string = " ";
  age:number = 0;
  

  constructor(private userService: UserService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserCall(this.route.snapshot.params['username']);
  }

  save()
  {
    var item = new User(this.username,this.nom,this.prenom,this.age)
    this.userService.updateUser(item).subscribe(data => {
      if(data === true)
      {
        alert("modification réussie");
      }
    });
  }

  async getUserCall(username : string)
  {
    this.userService.getUserByName(username).subscribe(data => {
      console.log(data);
      this.username = data.username;
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.age = data.age;
    });
  }

}
