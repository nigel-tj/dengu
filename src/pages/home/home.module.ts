import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  constructor(public navCtrl: NavController) {
  }

  login(){
  this.navCtrl.push(LoginPage);
  }

  signup(){
  this.navCtrl.push(SignupPage);
  }
}
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
