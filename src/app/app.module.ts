import { ReservationPage } from './pages/reservations/reservation.page';
import { AddMoviePage } from './pages/add.movie.page.ts/add.movie.page';
import { EditMoviePage } from './pages/edit.movie.page.ts/edit.movie.page';
import { SideMenuComponent } from './components/side.menu/side.menu.component';
import { MoviesPage } from './pages/movies/movies.page';
import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptors/auth.token.interceptor';

@NgModule({
  declarations: [
    // components
    AddMoviePage,
    EditMoviePage,
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    // pages
    LoginPage,
    ReservationPage,
    MoviesPage,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
