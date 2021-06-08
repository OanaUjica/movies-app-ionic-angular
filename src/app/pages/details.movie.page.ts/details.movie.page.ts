/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Movie, MOVIE_TYPES } from './../../models/movie.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-movie',
  templateUrl: 'details.movie.page.html',
})
export class DetailsMoviePage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MOVIE_TYPES = MOVIE_TYPES;

  movie = new Movie();

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.movie = JSON.parse(params.special);
      }
    });
  }
}
