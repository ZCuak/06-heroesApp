import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPagesComponent } from './Pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './Pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './Pages/register-pages/register-pages.component';



@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPagesComponent,
    RegisterPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
