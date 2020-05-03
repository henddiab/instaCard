import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories;
  allCards = [];
  searchResult = [];

  constructor(private httpService: HttpService) {
    this.httpService.getAllCats().subscribe(data => {
      this.categories = data;
    })
    this.httpService.getAllCards(1).subscribe(data => {
      for (let index = 1; index < data['last_page']; index++) {
        this.httpService.getAllCards(index).subscribe(res => {
          this.allCards = this.allCards.concat((res as any).data);
        })
      }
    })
  }

  handlingSearch(inputVal) {
    inputVal.value = "";
    this.searchResult = [];
  }

  searcForCard(event) {
    this.searchResult = [];
    for (let card of this.allCards) {
      if (card.name.toLowerCase().includes(event.target.value.toLowerCase()) && event.target.value.length >= 3) {
        this.searchResult.push(card);
      }
    }
  }

  ngOnInit(): void {
  }

}
