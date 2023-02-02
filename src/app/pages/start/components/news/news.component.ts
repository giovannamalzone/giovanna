import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/pages/news.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class NewsComponent implements OnInit {
  active = 0;
  news: Array<any> = new Array();

  constructor(private newsService: NewsService, config: NgbCarouselConfig) {}

  next() {
    if (this.active >= 0 && this.active < this.news.length - 1) {
      this.active++;
      console.log(this.active);
    }
  }

  back() {
    if (this.active != 0) {
      this.active--;
      console.log(this.active);
    }
  }

  ngOnInit() {
    this.listarNews();
    interval(20000).subscribe(() => {
      console.log(this.active);
      if (this.active <= 1 && this.active >= 0) {
        this.active++;
        console.log(this.active);
      } else {
        this.active = 0;
      }
      console.log(this.active);
    });
  }

  listarNews() {
    this.newsService.listarNews().subscribe(
      (news) => {
        this.news = news;
      },
      (err) => {
        console.log('Erro ao listar', err);
      }
    );
  }
}
