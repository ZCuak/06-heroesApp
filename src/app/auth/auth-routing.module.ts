import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './Pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './Pages/login-pages/login-pages.component';
import { NewPageComponent } from '../heroes/Pages/new-page/new-page.component';

const routes: Routes = [
  {
    path: '', component: LayoutPagesComponent, children: [
      {
        path: 'login', component: LoginPagesComponent
      },
      {
        path: 'new-account', component: NewPageComponent
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
