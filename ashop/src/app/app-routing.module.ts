import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { EditcatComponent } from './editcat/editcat.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"",component:DashboardComponent}, 
  {path:"add-category",component:AddCategoryComponent},
  {path: "list-category",component:ListcategoryComponent}, 
  {path: "add-product",component:AddproductComponent}, 
  {path: "list-product",component:ListproductsComponent}, 
  {path: "edit-cat/:id",component:EditcatComponent},
  {path: "login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
