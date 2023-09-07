import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth/authInterceptorService';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuardAdmin } from './auth/auth-admin.guard';




@NgModule({
  declarations: [
    AppComponent,
 

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,UsersModule,AdminModule, HttpClientModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    },
    AuthGuard,
    AuthGuardAdmin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
