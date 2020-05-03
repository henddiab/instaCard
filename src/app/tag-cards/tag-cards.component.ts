import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service'


@Component({
  selector: 'app-tag-cards',
  templateUrl: './tag-cards.component.html',
  styleUrls: ['./tag-cards.component.scss']
})
export class TagCardsComponent implements OnInit {

  cards;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe((param: Params) => {

      this.httpService.getCardsOfTag(param['tagname']).subscribe(data => {
        this.cards = data['data'];
      })
    })
  }

  ngOnInit(): void {
  }

}
