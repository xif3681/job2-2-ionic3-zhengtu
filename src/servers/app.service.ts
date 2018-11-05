
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs/';
import 'rxjs/Rx';
import { DateType } from './date.type';
// import { API_ROOT } from '../config/constants';
import { ENV } from '@environment';


@Injectable()
export class AppService {

    // private headers: any;
    constructor(private http: Http, private nathttp: HTTP, public plt: Platform) {
        // this.headers = new Headers();

        // this.headers.append("Access-Control-Allow-Origin", "http://172.18.1.133:10001");
        if (this.plt.is('ios')) {
            // This will only print when on iOS
            console.log('I am an iOS device!');
        } else{
            console.log('I am not an iOS device!');
        }

    }

    // 获取征途年份 
    // /api/postlists / sublist / { listId }
    // 获取子栏目列表
    getSublist(type: string): Observable<DateType[]> {
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
