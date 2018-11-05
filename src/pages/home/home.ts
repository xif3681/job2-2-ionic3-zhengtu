import { Component, ViewChild, Input, NgZone, ElementRef} from '@angular/core';
import { NavController,  Slides, MenuController, Events } from 'ionic-angular';

import { TITLES } from '../../mock/titles';

import { HomeService } from '../../servers/home.service';
import { AppService } from '../../servers/app.service';
import { ListPage } from '../../pages/list/list';



declare var Swiper;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  @Input()
  titlesTab:any;

  // @ViewChild(Slides) slides: Slides;
  @ViewChild('contentSlides') contentSlides: Slides;
  @ViewChild('searchBox') searchBoxView: ElementRef;

  swiper: any;


  index: number = 0; // 当前菜单索引

  currentTitle = 0; // 当前菜单栏

  currentMonth: string; // 当前月份

  curentYear: string; // 当前年刊

  model: any = {}; // 存储数据

  flag = false; // 判断是否是相同栏目

  massage:string; // 底部文字

  subNum: boolean; // 是否从侧边栏过来

  offsets: Array<number>;


  titles: Array<{ id: string, name: string }>;

  hash : string; // url hash 值

  hashArr: Array<string>; // url id



  constructor(public menuCtrl: MenuController,public navCtrl: NavController,public events: Events,  
    private homeService: HomeService, private appService: AppService, public zone: NgZone) {

    this.titles = TITLES;
    
    events.subscribe('listId:created', (listId, time) => {
      HomePage.prototype.currentMonth = listId;

    });

    events.subscribe('massage:created', (massage, time) => {
      HomePage.prototype.massage = massage;

    });

    events.subscribe('flag:created', (flag, time) => {
      HomePage.prototype.subNum = flag;

    });

    // this.hash = window.location.search.slice(1);
    // console.log(this.hash);

    this.hash = this.GetRequest()[0];
    if (this.hash && !this.subNum) {
      this.hashArr = this.hash.split('-');
      let leng = this.hashArr.length;
      if (leng > 1) {
        this.curentYear = this.hashArr[0] + '-' + this.hashArr[1];
        this.model.years = [];
        this.model.years.push({ id: this.curentYear});
        this.massage = this.hashArr[1] + '年';

      }

      if (leng > 2) {
        this.currentMonth = this.hashArr[0] + '-' + this.hashArr[1] + '-' + this.hashArr[2];

      }

    }
    



  }



  ionViewDidLoad() {
    if (this.subNum && this.currentMonth) {
      // 从侧边栏选择
      console.log('当前月份');
      console.log(this.currentMonth);
      this.getCurentMon(this.currentMonth);
    } else
    if (this.curentYear && !this.currentMonth) {
      // url路径形式为?id=ZT-18
      this.getMons(this.curentYear);
      // console.log('url路径形式为?id=ZT-18');

    } else if (this.curentYear && this.currentMonth) {
      // url路径形式为?id=ZT-18-05
      this.getTheMons(this.curentYear);
      // console.log('url路径形式为?id=ZT-18-05');
    }
    else if (!this.currentMonth) {
      // url 不带参数
      this.getYears();
    } else {
      // 从侧边栏选择
      console.log('当前月份');
      console.log(this.currentMonth);
      this.getCurentMon(this.currentMonth);

    }

    
  }

  //获取url中"?"符后的字串   
  GetRequest() {
    let url = location.search; //获取url中"?"符后的字串   
    // let theRequest = new Object();//url参数转换对象输出
    let theRequest = []; // 转换数组输出
    let strs = [];
    if (url.indexOf("?") != -1) {
      let str = url.substr(1);
      strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        // theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]); //url参数转换对象输出
        theRequest.push(strs[i].split("=")[1]);// 转换数组输出
      }
    }
    return theRequest;
  }  

  // 在对象数组中寻找key = id的索引值
  findIndex (arr:Array<any>, key:string) {
    let index = 0;
    if (key) {
      arr.map((item, ind) => {
        if (item.id === key) {
          index = ind;
        }

      })
    }
    

    return index;
  }

  // 排序
  sortBy(filed, rev) {
    rev = (rev) ? -1 : 1;
    return function (a, b) {
      a = a[filed];
      b = b[filed];
      if (a < b) { return rev * -1; }
      if (a > b) { return rev * 1; }
      return 1;
    }
  };

  // 打开侧边栏
  openMenu() {
    this.menuCtrl.open();
  }


  // 获取最新一年年份
  getYears(): void {
    const that = this;
    this.appService.getSublist('zt')
      .subscribe({
        next: function (years) {
          that.model.years = years.sort(that.sortBy('id', true));
          console.log(that.model.years);       
          
        },
        complete: function () {
          let id = that.model.years[0].id;
          that.massage = that.model.years[0].name;
          that.getMons(id);
        },
        error: function (error) {
          console.log(error);
        }
      
  })
}

  // 获取最新一期月份
  getMons(index: string): void {
    const that = this;
    this.appService.getSublist(index)
      .subscribe({
        next: function (mons) {
          that.model.years[0].mons = mons.sort(that.sortBy('id', true));

        },
        complete: function () {
          let id = that.model.years[0].mons[0].id;
          that.massage = that.massage + that.model.years[0].mons[0].name;
          that.currentMonth = id;
          console.log('当前月份');
          console.log(id);
          that.getCurentMon(id);
        },
        error: function (error) {
          console.log(error);
        }

      })

  }

  // 获取指定一期月份
  getTheMons(index: string): void {
    const that = this;
    this.appService.getSublist(index)
      .subscribe({
        next: function (mons) {
          // let index = that.findIndex(mons, that.currentMonth);
          that.massage = that.massage + mons[0].name;
        },
        complete: function () {
          that.getCurentMon(that.currentMonth);
        },
        error: function (error) {
          console.log(error);
        }

      })


  }

  // 获取当前月份菜单

  getCurentMon(index: string): void {
    const that = this;
    this.appService.getSublist(index)
      .subscribe({
        next: function (mons) {
          that.model.curentMon = mons;
          that.titles = mons;
        
        },
        complete: function () {
          // that.initSwiper();
          that.getAllNews();
        },
        error: function (error) {
          console.log(error);
        }
      })

  }



  // 获取类型新闻
  getAllNews() {
    let all = this.model.curentMon;
    all.map((item, index)=> {
      let id = all[index].id;
      this.getTypeNews(id,index);
    })
  }

  getTypeNews(id:string,index:number): void {
    const that = this;
    this.homeService.getTypeNews(id)
      .subscribe({
      next: articlesType => {
          this.model.curentMon[index].news = articlesType;

        },
      complete: function () {
        that.initSwiper();

      },
      error: function (error) {
        console.log(error);
      }
    })

  }

  initSwiper() {
    setTimeout(() => {
      this.swiper = new Swiper('.pageMenuSlides .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 4,
            spaceBetween: 0
          }
        }
      });
      // url 跳转到相应的锚点
      if (this.hash) {
        let index = this.findIndex(this.model.curentMon, this.hash);
        this.slideChanged(index);
        this.scrollIntoView(this.hash);
      }

    }, 100);

  }

    // 切换菜单栏目
  selectPageMenu(id, index) {
    this.currentTitle = index;
 
    this.scrollIntoView(id);

  }




  // ionic3锚点操作
  scrollIntoView(id: string) {
    let element = document.getElementById(id);

    if (element) {
      element.scrollIntoView();

    }
  }

  openPage(id: number) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(ListPage);
    const that = this;
    this.navCtrl.push(ListPage, {
      'id': id,
      'listId': that.currentMonth
    });
  }

  // 滚动到对应的导航
  slideChanged(index) {
    const that = this;
    if (index !== this.currentTitle) {
      if (that.model.curentMon.length > 0 && that.swiper && that.swiper.slideTo) {
        that.swiper.slideTo(index, 300);
      }
    }

    this.currentTitle = index;


  }


  // 获取锚点
  getMenId(offsets: any,scroll:any) {
    const that = this;

    for (let i = 0; i < offsets.length; i++) {//遍历所有的offset

        scroll >= offsets[i] //滚动高度>i元素的offset
        && (offsets[i + 1] === undefined || scroll < offsets[i + 1]) //i + 1元素不存在，或者i+1元素不大于滚动高度
        && that.slideChanged(i) //设置i为当前活动项
    }
  }

  // 遍历获取 滚动区域内的hashkey对应的offset值
  getOffsets(arr: any) {
    const that = this;
    that.offsets = [];
    arr.map((item, i) => {
      let pp = document.getElementById(item.id);
      if (pp) {
        that.offsets.push(pp.offsetTop);

      }


    })
    return that.offsets;
  }



  // 滚滚动条
  scrollHandler(event) {
    const that = this;
    that.getOffsets(this.titles);

    this.zone.run(() => {
      // since scrollAmount is data-binded,
      that.getMenId(that.offsets, event.scrollTop);
    })
  }





}
