import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Movie } from './../../models/movie.model';
import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesPage {
  movies: Array<Movie>;

  constructor(
    private apiSvc: ApiService,
    private router: Router,
    private authSvc: AuthService
  ) {}
  ionViewWillEnter() {
    this.loadMovies();
  }

  goToAddMovie() {
    this.router.navigateByUrl('movies/add');
  }

  goToEditMovie(movie: Movie) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(movie),
      },
    };
    this.router.navigate(['movies/edit'], navigationExtras);
  }

  goToDetailsMovie(movie: Movie) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(movie),
      },
    };
    this.router.navigate(['movies/details'], navigationExtras);
  }

  deleteMovie(movie: Movie) {
    this.apiSvc.delete(`api/Movies/${movie.id}`).subscribe(() => {
      this.loadMovies();
    });
  }

  isLoggedIn() {
    const token = this.authSvc.getToken();
    return token !== null;
  }

  private loadMovies() {
    this.apiSvc.get('api/Movies').subscribe((response: Array<Movie>) => {
      this.movies = response;
    });
  }
}
