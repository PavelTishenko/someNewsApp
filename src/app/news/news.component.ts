import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

const apiKey = `4d6447013a3845ada3fd42c8ecf74bd7`;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  allNews;
  countryData: string[] = ['us', 'ua', 'de', 'it', 'gb'];
  chosenCntry;
  constructor(private getNews: HttpService) { }

  ngOnInit() {
      this.getNews.getData(this.chosenCntry).subscribe(news => this.allNews = news[`articles`] );
      this.myStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        'z-index': -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

      this.myParams = {
        particles: {
          number: {
            value: 200,
          },
          color: {
            value: '#37476B'
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 6,
            random: true,
          },
          line_linked: {
            enable_auto: true,
            distance: 150,
            color: '#37476B'
          }
        }
      };
  }
  show() {
     this.ngOnInit();
  }
}
