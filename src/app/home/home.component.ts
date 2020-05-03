import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: string[] = [];
  page: number = 1;

  constructor(private httpService: HttpService) {

  }
  getAllCards() {
    this.httpService.getAllCards(this.page)
      .subscribe(res => {
        this.data = this.data.concat((res as any).data);
      })
  }


  onScroll() {
    this.page++;
    this.getAllCards();
  }



  ngOnInit(): void {
    this.getAllCards();
  }

}
