import { ReservationPage } from './pages/reservations/reservation.page';
import { AddMoviePage } from './pages/add.movie.page.ts/add.movie.page';
import { EditMoviePage } from './pages/edit.movie.page.ts/edit.movie.page';
import { DetailsMoviePage } from './pages/details.movie.page.ts/details.movie.page';
import { MoviesPage } from './pages/movies/movies.page';
import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'movies',
    component: MoviesPage,
  },
  {
    path: 'movies/add',
    component: AddMoviePage,
  },
  {
    path: 'movies/edit',
    component: EditMoviePage,
  },
  {
    path: 'movies/details',
    component: DetailsMoviePage,
  },
  {
    path: 'reservations',
    component: ReservationPage,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
