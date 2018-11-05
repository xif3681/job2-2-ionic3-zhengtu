import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/';
// import { ImgUrlService } from './imgUrl.service';
import { NewsDetailType } from './news-detail-type';
// import { API_ROOT, IMG_ROOT } from '../config/constants';
import { ENV } from '@environment';

@Injectable()
export class NewDetailService {
  
    constructor(private http: Http) {
        
    }
    getNewsDetil(id: number, listId:string): Observable<NewsDetailType> {

        return this.http.get(`${ENV.API_ROOT}api/docposts/${id}?listId=${listId}`)
        .map((res: Response) => {
            if (res.status === 200) {
                const data = res.json();
                // 图片处理
                data.top_image = ENV.IMG_ROOT + data.top_image;
                // console.log(data);
                return data;
            } else if (res.status === 202) {
                return res.json().code.toString();

            }
        });
    }

}
