
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/';
import 'rxjs/Rx';
import { NewsType } from './news-type';
// import { API_ROOT, IMG_ROOT} from '../config/constants';
import { ENV } from '@environment';


@Injectable()
export class HomeService {
    // public url: string;
    // private headers: any;
    constructor(private http: Http) {
        // this.url
        // this.url = '/media-repo/';

        // this.headers = new Headers(REQUEST_HEADER);
        // this.headers = new Headers();

        // this.headers.append("Access-Control-Allow-Origin", "http://172.18.1.133:10001");
    }


    //  根据类型获取新闻
    getTypeNews(type: string): Observable<NewsType[]> {
        // return Observable.of(ARTICLESTYPE);

        return this.http.get(`${ENV.API_ROOT}api/docposts/all/${type}`)
            .map((res: Response) => {
                if (res.status === 200) {
                    const data = res.json();
                    // 改变图片路径
                    const newsImage = 'assets/imgs/administration-articles-bank.jpg';
                    // 图片处理
        
                    data.map((item, index) => {

                        if (item.top_image === undefined || item.top_image === null) {
                            if (index === 0) {
                                data[index].top_image = newsImage;
                            }
                            // data[index].top_image = newsImage;
                        } else {
                            data[index].top_image = ENV.IMG_ROOT + item.top_image;
                        }
                    });

                    return data;
                } else if (res.status === 202) {
                    return res.json().code.toString();

                }
            });
    }

    // 获取征途年份 
    // /api/postlists / sublist / { listId }
    // 获取子栏目列表
    getYears(type: string): Observable<NewsType[]> {

        return this.http.get(`${ENV.API_ROOT}api/postlists/sublist/${type}`)
            .map((res: Response) => {
                if (res.status === 200) {
                    const data = res.json();

                    return data;
                } else if (res.status === 202) {
                    return res.json().code.toString();

                }
            });
    }


}
