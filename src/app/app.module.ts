import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ErrorTailorModule} from '@ngneat/error-tailor'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DetailsMoviesComponent } from './pages/details-movies/details-movies.component';
import { HomeMoviesComponent } from './pages/home-movies/home-movies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommentsComponent } from './components/common/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignInComponent,
    DetailsMoviesComponent,
    HomeMoviesComponent,
    NotFoundComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useFactory() {
          return {
            required: '',
            minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
            maxlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
            invalidAddress: error => `Address not valid`
          };
        },
        deps: []
      }
      //controlErrorComponent: CustomControlErrorComponent, // Uncomment to see errors being rendered using a custom component
      //controlErrorComponentAnchorFn: controlErrorComponentAnchorFn // Uncomment to see errors being positioned differently
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
