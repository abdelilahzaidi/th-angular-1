import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserNewComponent } from './user-new/user-new.component';

import { AuthGuard } from '../auth/auth.guard';
import { AuthGuardAdmin } from '../auth/auth-admin.guard';

const routes: Routes = [
  {path:'admin-home',component:HomeComponent,canActivate: [AuthGuardAdmin]},
  {path:'user-new',component:UserNewComponent,canActivate: [AuthGuardAdmin]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
