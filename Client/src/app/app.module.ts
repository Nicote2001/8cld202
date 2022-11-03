import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutBlogComponent } from './ajout-blog/ajout-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ProduitService } from './services/produit.service';

@NgModule({
  declarations: [
    AppComponent,
    AjoutBlogComponent,
    UpdateBlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProduitService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
