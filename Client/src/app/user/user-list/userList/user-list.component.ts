import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/object/user';
import { ProduitService } from 'src/app/services/produit.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];

  constructor(private userService : UserService, private produitService : ProduitService, private router: Router)
  {
    this.getUser();
  }

  ngOnInit(): void {
  }

  async getUser()
  {
    await this.getuserCall();
  }




  async getuserCall()
  {
    this.userService.getAll().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  async deleteUser(username:string)
  {
    await this.calldeleteUser(username);
    await this.getUser();
  }

  GoToUpdate(username:string)
  {
    this.router.navigateByUrl('user/modifier/'+username);
  }

  async calldeleteUser(username : string)
  {
    this.userService.deleteUser(username).subscribe(data => {
      console.log(data);
      alert("réussie");
    });
  }
}
