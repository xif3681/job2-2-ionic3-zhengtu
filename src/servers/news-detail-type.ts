export class NewsDetailType {
    id: number;
    author: string; // 作者
    content: string; // 内容
    digest: string; // 标题
    keywords: string;
    tags: Array<any>;
    next_id: number;
    prev_id: number;
    subject: string; // 简介
    post_date: string; // 发布时间
    top_image: string; // 图片地址
}
