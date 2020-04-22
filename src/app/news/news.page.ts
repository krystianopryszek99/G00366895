import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  NewsData:any=[];
  searchTitle:string = "";

  constructor(private newsService:NewsService) {

   }

  ngOnInit() {
    this.newsService.GetNewsData().subscribe(
      (data)=>{
        this.NewsData = data.Search;
      }
    );
  }

  searchFor(){
    console.log(this.searchTitle);
    this.newsService.GetSearchData(this.searchTitle).subscribe(
      (data)=>{
        this.NewsData = data.Search;
      }
    );
  }


}
