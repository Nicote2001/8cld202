import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutBlogComponent } from './ajout-blog/ajout-blog.component';
import { HomeComponent } from './home/home.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { AjoutUserComponent } from './user/user-list/ajout-blog/ajout-user.component';
import { UpdateUserComponent } from './user/user-list/update-blog/update-user.component';
import { UserListComponent } from './user/user-list/userList/user-list.component';

const routes: Routes = 
[
    {path: '', component: HomeComponent},
    {path: 'produit/ajouter', component: AjoutBlogComponent},
    {path: 'modifier/:name', component: UpdateBlogComponent},
    {path: 'user', component: UserListComponent},
    {path: 'user/modifier/:username', component: UpdateUserComponent},
    {path: 'user/ajouter', component: AjoutUserComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    imports:
    [
        RouterModule.forRoot(routes)
    ],
    exports:
    [
        RouterModule
    ]
})
export class AppRoutingModule {}
