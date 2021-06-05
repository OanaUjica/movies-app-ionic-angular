/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Movie, MOVIE_TYPES } from './../../models/movie.model';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: 'edit.movie.page.html',
})
export class EditMoviePage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MOVIE_TYPES = MOVIE_TYPES;

  movie = new Movie();

  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.movie = JSON.parse(params.special);
      }
    });
  }

  editMovie(movie: Movie) {
    this.apiSvc.put(`api/Movies/${this.movie.id}`, movie).subscribe(
      () => {
        this.navCtrl.pop();
      },
      (err) => {
        let message = 'Validation error';
        const errorsArray = err?.error?.errors;
        if (errorsArray) {
          message = Object.values(errorsArray)[0] as string;
        }
        this.alertCtrl
          .create({
            header: 'Error',
            message,
            buttons: ['Ok'],
          })
          .then((al) => al.present());
      }
    );
  }
}
