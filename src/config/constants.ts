import { ENV } from "./env";

// 请求超时时间,单位为毫秒
export const REQUEST_TIMEOUT = 15000;
// 请求header设置
export const REQUEST_HEADER = {
    "Access-Control-Allow-Origin": "http://172.18.1.133:10001"
};

/**
 * 开发与生产环境区分配置
 */
let api_root = '' // api请求根路径

let img_root = '' // api请求根路径

if (ENV === 'devlopment') {
    // api_root = "https://news-at.zhihu.com/api/";
    api_root = '/';
    img_root = '/media-repo/';
}
else if (ENV === 'production') {
    api_root = "http://172.18.1.133:10001/";
    img_root = "http://172.18.8.11:8080/";
}

export const API_ROOT = api_root
export const IMG_ROOT = img_root
