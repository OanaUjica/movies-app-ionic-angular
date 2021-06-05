import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: 'reservation.page.html',
})
export class ReservationPage {
  reservation;

  constructor(private apiSvc: ApiService) {}

  ionViewWillEnter() {
    this.apiSvc.get('api/Reservations').subscribe((response) => {
      this.reservation = response;
    });
  }
}
