import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';


//$IMPORTSTATEMENT

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  logout(){
        // Remove API token 
        const root = this.app.getRootNav();
        root.popToRoot();
  }
}
