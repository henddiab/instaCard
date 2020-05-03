import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags;
  allTags;
  tagsGroup = {};
  tagsGroupArr;
  constructor(private httpService: HttpService) {

    this.httpService.getTags().subscribe(data => {
      this.tags = data['data'];
      console.log(this.tags);

    })

    this.httpService.getAllTags().subscribe(data => {
      this.allTags = data['data'];
      for (let i = 0; i < this.allTags.length; i++) {
        let item = this.allTags[i];
        item.percentage = (item.count / data['total']) * 100;
        console.log(item.percentage);

        let firstChar = item.tag.charAt(0).toUpperCase();
        this.tagsGroup[firstChar] = this.tagsGroup[firstChar] || [];
        this.tagsGroup[firstChar].push(item);
        console.log(this.tagsGroup);
        this.tagsGroupArr = Object.entries(this.tagsGroup);
      }
      console.log(this.tagsGroup);

    })

  }

  ngOnInit(): void {
  }

}
