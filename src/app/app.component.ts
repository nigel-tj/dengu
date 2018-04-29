import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController,ViewController, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
//import { HomePage } from '../pages/home/home';
//import { LearnFeedPage } from '../pages/learn-feed/learn-feed';

//@Component({
//  selector: 'app-root',
//  templateUrl: 'app.html'
//})

@Component({
  selector: 'page-splash',
  templateUrl: '../pages/splash/splash.html',
})

export class Splash {
 
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {
 
  }
 
  ionViewDidEnter() {
 
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);
 
  }
 
}

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make LearnFeedPage the root (or first) page
  //rootPage: any = LearnFeedPage;
  rootPage: any = WelcomePage;
  pages: Array<{title: string, component: any, params: any}>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menu: MenuController,
    public app: App
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
    });

    this.pages = [
      {
        title: 'All',
        component: WelcomePage,
        params: {
          query: 'all'
        }
      },
      {
        title: 'Basic',
        component:WelcomePage,
        params: {
          query: 'basic'
        }
      },
      {
        title: 'Core',
        component: WelcomePage,
        params: {
          query: 'core'
        }
      }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, page.params);
  }
}
