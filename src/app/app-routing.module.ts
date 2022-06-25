import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMoviesComponent } from './pages/home-movies/home-movies.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  // Start Re-direct
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // Success User Pages
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeMoviesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'sign-in', component: SignInComponent },
  // Error Page Default
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
