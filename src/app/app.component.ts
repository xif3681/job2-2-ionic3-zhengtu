import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';



import { AppService } from '../servers/app.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  model: any = {}; // 存储数据

  rootPage: any = HomePage;

  massage: string; // 底部文字

  pages: Array<{title: string, component: any}>;



  constructor(public events: Events,public menuCtrl: MenuController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private appService: AppService) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
      // ,
      // { title: 'List', component: ListPage }
    ];



    // this.pages = JOURNALS;

  }

  ngOnInit(): void {
    this.getYears();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.splashScreen.show();
    });
  }



  sortBy (filed, rev) {
    rev = (rev) ? -1 : 1;
    return function (a, b) {
      a = a[filed];
      b = b[filed];
      if (a < b) { return rev * -1; }
      if (a > b) { return rev * 1; }
      return 1;
    }
  };


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  // 侧边栏 
  // 获取年份
  getYears(): void {
    const that = this;
    this.appService.getSublist('zt')
      .subscribe(
        years => {
          years = years.sort(that.sortBy('id', true))
          that.model.years = years;

        });

  }

  // 获取月份
  getMonth(index:string): void {
 
    if (!this.model.years[index].mons) {
      let id = this.model.years[index].id;
      this.appService.getSublist(id)
        .subscribe(
          mons => {
            mons = mons.sort(this.sortBy('id', true))
            this.model.years[index].mons = mons;

          });

    } else {
      this.model.years[index].mons = null;
    }

  }


  openJournal(listId,years,month) {
    this.nav.setRoot(HomePage);
    const massage = years + month;
    this.events.publish('listId:created', listId, Date.now());
    this.events.publish('massage:created', massage, Date.now());
    this.events.publish('flag:created', true, Date.now());

    this.menuCtrl.close();
  }
}
