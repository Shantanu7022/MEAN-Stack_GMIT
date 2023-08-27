import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './api.service';

import {HttpClientModule} from '@angular/common/http';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component'
import { CKEditorModule } from 'ckeditor4-angular';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { EditcatComponent } from './editcat/editcat.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCategoryComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ListcategoryComponent,
    AddproductComponent,
    ListproductsComponent,
    EditcatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
