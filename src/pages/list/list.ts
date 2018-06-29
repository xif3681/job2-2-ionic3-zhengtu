import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Nav, NavController, NavParams, Content, Slides} from 'ionic-angular';
// import { ActivatedRoute } from '@angular/router';

import { NewDetailService } from '../../servers/news-detail.service';
import { ENV } from '@environment';
// import { QueryList } from '@angular/core/src/render3';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;
  @ViewChild('scroll') scroll: any;
  @ViewChild('contentSlides') contentSlides: Slides;
  @ViewChildren('textContent') textContent: QueryList<ElementRef>;



  model: any = {}; // 存储数据

  id: number; // 新闻id

  listId: string; // 当前期刊

  list = []; // 新闻详情列表

  slies :any;

  last = false; // 是否为最后一篇

  first = false; // 是否为第一篇

  slideId: number; // 当前页

  detailId:any; // 当前详情的id

  massage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newDetailService: NewDetailService) {

    // 通过这种形式来接收父级页面传过来的值 
    this.id = this.navParams.get('id');
    this.listId = this.navParams.get('listId');
    this.slies = [{},{},{}];

  }


  ionViewDidLoad() {

    let listId = this.listId;
    this.getNewsDetil(this.id, listId);
    console.log(1)



  }


  // 返回首页
  pushPage() {
    this.navCtrl.pop();
  }



  // 获取新闻详情
  getNewsDetil(id: number, listId:string) {
    const that = this;

      that.newDetailService.getNewsDetil(id, listId)
        .subscribe({
          next: function (newsDetils) {
            that.model.newsDetils = newsDetils;
            that.detailId =  newsDetils.id; // 当前详情的id
            that.slideId = 1; // 当前页
            that.list.push(newsDetils);
            that.slies[1].list = newsDetils;
           
          },
          complete: function () {
            that.imgSrcChange();
            that.getInit();


          },
          error: function (error) {
            console.log(error);
          }
        });
  }
  imgSrcChange() {
    const that = this;
    setTimeout(() => {
      that.textContent.forEach((item,i) => {

        let imgs = item.nativeElement.querySelectorAll('img');
        for (let index = 0; index < imgs.length; index++) {
          const element = imgs[index];
          if (element.src) {
    
            // http://localhost:7070/media-repo/MI/news/1-16.jpg
            let mi = element.src.split('media-repo/');
            // let mii = ENV.IMG_ROOT.split('media-repo');
            // console.log(mii)

            if (mi.length > 1) {
              element.src = ENV.IMG_ROOT + mi[1];

            }


          }
        }
      }) 

    }, 0);
  }



  getInit () {
    const that = this;
    let prev_id = this.model.newsDetils.prev_id;
    let next_id = this.model.newsDetils.next_id;
    if (prev_id) {
      let listId = this.listId;
      this.newDetailService.getNewsDetil(prev_id, listId)
        .subscribe({
          next: function (newsDetils) {
            that.list.unshift(newsDetils);
            that.slies[0].list = newsDetils;

          },
          complete: function () {

          },
          error: function (error) {
            console.log(error);
          }
        });
    } else {
      let index = this.contentSlides.getActiveIndex();
      this.slies[index].first = true;
      this.first = true;
      this.slies[0].list = null;
      this.massage = '第一篇!';
      console.log('已是第一篇!');
      this.contentSlides.lockSwipeToPrev(true);

    }

    if (next_id) {
      let listId = this.listId;
      this.newDetailService.getNewsDetil(next_id, listId)
        .subscribe({
          next: function (newsDetils) {
            that.list.push(newsDetils);
            that.slies[2].list = newsDetils;

          },
          complete: function () {

          },
          error: function (error) {
            console.log(error);
          }
        });

    } else {
      let index = this.contentSlides.getActiveIndex();
      this.slies[index].last = true;
      this.last = true;
      this.slies[2].list = null;
      this.massage = '最后一篇！';
      console.log('已是最后一篇！');
      this.contentSlides.lockSwipeToNext(true);

    }
  }

  slideToChanged (flag: number) {
    if (flag === 0) {
      this.contentSlides.slidePrev();
    } else {
      this.contentSlides.slideNext();
    }
  }

  slideChanged() {
    this.last = false;
    this.first = false;
    this.contentSlides.lockSwipeToPrev(false);
    this.contentSlides.lockSwipeToNext(false);

    let index = this.contentSlides.getActiveIndex();
    let len = this.slies.length;
    this.model.newsDetils = this.slies[index] && this.slies[index].list;

    if (this.slies[index] && this.slies[index].first) {
      this.first = true;
      this.massage = '第一篇!';
      console.log('已是第一篇!');
      this.contentSlides.lockSwipeToPrev(true);
    }
    if (this.slies[index] && this.slies[index].last) {
      this.last = true;
      this.massage = '最后一篇！';
      console.log('已是最后一篇！');
      this.contentSlides.lockSwipeToNext(true);
    } 

    if (index === 0) {
      this.getPrev();

    } else if (index + 1 === len) {
      this.getNext();
    } 

  }


  getNext(): any {

    this.detailId = this.model.newsDetils && this.model.newsDetils.next_id; // 当前详情的id
    const that = this;
    let next_id;
    next_id = this.detailId;

    if (next_id) {
      let listId = this.listId;
      this.newDetailService.getNewsDetil(next_id, listId)
        .subscribe({
          next: function (newsDetils) {
  
            that.list.push(newsDetils);
            that.slies.push({ list: newsDetils });

          },
          complete: function () {
            that.imgSrcChange();
          },
          error: function (error) {
            console.log(error);
          }
        });

    } else {
      let index = this.contentSlides.getActiveIndex();
      this.slies[index].last = true;
      this.last = true;
      this.massage = '最后一篇！';
      console.log('已是最后一篇！');
      this.contentSlides.lockSwipeToNext(true);

    }


  }

  getPrev(): any {

    this.detailId = this.model.newsDetils && this.model.newsDetils.prev_id; // 当前详情的id
    
    const that = this;
    let  prev_id;
    prev_id = this.detailId;

    if (prev_id) {
      let listId = this.listId;

      this.newDetailService.getNewsDetil(prev_id, listId)
        .subscribe({
          next: function (newsDetils) {
            that.list.unshift(newsDetils); 
            that.slies.unshift({ list: newsDetils });
          },
          complete: function () {
            that.contentSlides.slideTo(1, 0);
            that.imgSrcChange();
          },
          error: function (error) {
            console.log(error);
          }
        });
    } else {
      let index = this.contentSlides.getActiveIndex();
      this.slies[index].first = true;
      this.first = true;
      this.massage = '第一篇!';
      console.log('已是第一篇!');
      this.contentSlides.lockSwipeToPrev(true);

    }

  }

}
