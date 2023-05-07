import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserComponent } from './components/users/user/user.component';
import { ProductComponent } from './components/products/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  // {
  //   path : '' , component : DashboardComponent
  // },
  // {
  //   path : '' , redirectTo: 'home', pathMatch:'full'
  // },
  {
    path : '' , component : DashboardComponent
  },
  {
    path : 'users' , component : UsersComponent
  },
  {
    path : 'users/:userid' , component : UserComponent
  },
  {
    path : 'products' , component : ProductsComponent
  },
  {
    path : 'about' , component : AboutComponent
  },
  {
    path : 'contactus' , component : ContactUsComponent
  },
  {
    path : 'products/:productid/edit' , component : EditProductComponent
  },
  {
    path : 'edituser/:userid/edit' , component : EditUserComponent
  },
  {
    path : 'products/:productid' , component : ProductComponent
  },
  {
    path:'**', redirectTo:'pagenotfound'
  },
  {
    path : 'pagenotfound' , component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
