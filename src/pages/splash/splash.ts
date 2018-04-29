import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//$IMPORTSTATEMENT

/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
