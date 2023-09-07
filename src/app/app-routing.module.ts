import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
     path : "users",
     loadChildren : ()=>
     import('./users/users.module').then(
      u => u.UsersModule
     )
  },
  {
    path:"admin",
    // canActivate: [AuthGuard],
    loadChildren : ()=>
    import('./admin/admin.module').then(a => a.AdminModule)
  }, 
  {
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.module').then(
        a => a.AuthModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
