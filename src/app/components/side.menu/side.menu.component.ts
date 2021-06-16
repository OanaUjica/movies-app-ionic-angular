import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side.menu.component.html',
})
export class SideMenuComponent {
  constructor(private authSvc: AuthService, private navCtrl: NavController) {}
  isNotLoggedIn() {
    const token = this.authSvc.getToken();
    return token === null;
  }

  isLoggedIn() {
    const token = this.authSvc.getToken();
    return token !== null;
  }

  logOut() {
    this.authSvc.removeToken();
    this.navCtrl.navigateRoot('');
  }

  logIn() {
    this.navCtrl.navigateRoot('/login');
  }
}
