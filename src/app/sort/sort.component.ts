import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  page: number = 1;
  data: string[] = [];


  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  getCrads() {
    this.route.params.subscribe((param: Params) => {
      this.get(param['sort']);
    })
  }

  get(sort) {
    this.data=[];
    this.httpService.getAllCardsSorted(this.page, sort).subscribe(data => {
      this.data = this.data.concat((data as any).data);
      console.log(this.data);
    })
  }

  onScroll() {
    this.page++;
    this.getCrads();
  }

  ngOnInit(): void {
    this.getCrads();
  }

}
