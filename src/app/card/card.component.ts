import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card;
  cardPrev;
  cardNext;
  tags;
  imageUrl;
  origin = window.location.hostname;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {

    this.httpService.getTags().subscribe(data => {
      this.tags = data['data']
    })
    this.route.params.subscribe((param: Params) => {

      this.httpService.getSingleCard(param['id']).subscribe(data => {
        this.card = data[0];
        this.cardNext = this.card.next[0];
        this.cardPrev = this.card.prevoius[0];
        this.imageUrl = this.origin + '/storage/card/l/' + this.card.card_id;

      })
    })
  }


  ngOnInit(): void {
  }

}
