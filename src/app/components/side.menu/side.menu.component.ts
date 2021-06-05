import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side.menu.component.html',
})
export class SideMenuComponent {
  constructor(private authSvc: AuthService, private navCtrl: NavController) {}
  logOut() {
    this.authSvc.removeToken();
    this.navCtrl.navigateRoot('');
  }
}
