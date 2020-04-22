import { Component, OnInit } from '@angular/core';
//importing service for movie api
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

  //searches for title of the movie
  searchFor(){
    console.log(this.searchTitle);
    //makes it available using angular framework and we get access to it 
    this.newsService.GetSearchData(this.searchTitle).subscribe(
      (data)=>{
        this.NewsData = data.Search;
      }
    );
  }


}
