import { Movie, MOVIE_TYPES } from './../../models/movie.model';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-movie',
  templateUrl: 'add.movie.page.html',
})
export class AddMoviePage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MOVIE_TYPES = MOVIE_TYPES;

  movie = new Movie();

  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  addMovie() {
    this.movie.dateAdded = new Date();
    this.apiSvc.post('api/Movies', this.movie).subscribe(
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

  isChecked(event) {
    this.movie.watched = event.target.checked;
  }
}
