import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
    constructor(private apiService: ApiService) {}
    articles: any;
    ngOnInit() {
        this.apiService.getNews().subscribe(data => {
            console.log(data);
            this.articles = data['articles'];
        });
    }
}
