import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    title: 'Centric Express',
    component: HomepageComponent
  },
  {
    path: 'about',
    title: 'Centric Express - About',
    component: AboutComponent
  },
  {
    path: 'login',
    title: 'Centric Express - login',
    component: LoginComponent
  },
  {
    path: '**',
    title: 'Centric Express - not found',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
