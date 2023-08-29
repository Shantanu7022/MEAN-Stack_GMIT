import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { EditcatComponent } from './editcat/editcat.component';
import { LoginComponent } from './login/login.component';
import { ExpenseGuard } from './expense.guard';
const routes: Routes = [
  {path:"",component:DashboardComponent,canActivate: [ExpenseGuard]}, 
  {path:"add-category",component:AddCategoryComponent,canActivate: [ExpenseGuard]},
  {path: "list-category",component:ListcategoryComponent,canActivate: [ExpenseGuard]}, 
  {path: "add-product",component:AddproductComponent,canActivate: [ExpenseGuard]}, 
  {path: "list-product",component:ListproductsComponent,canActivate: [ExpenseGuard]}, 
  {path: "edit-cat/:id",component:EditcatComponent,canActivate: [ExpenseGuard]},
  {path: "login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
