import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  singleCatData;
  title;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe((param: Params) => {

      this.httpService.getCardsOfCat(param['id'], param['title']).subscribe(data => {
        this.singleCatData = data['data'];
        this.title = param['title'];

      })
    })
  }

  ngOnInit(): void {
  }
}
