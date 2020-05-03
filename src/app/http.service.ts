import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  // categories
  getAllCats() {
    return this.http.get("https://instacards.net/api/cards/categories");
  }
  getCardsOfCat(catId, catName) {
    return this.http.get('https://instacards.net/api/cards/category/' + catId + '-' + catName);
  }

  // cards
  getAllCards(page: number) {
    return this.http.get(`https://instacards.net/api/cards?page=${page}&perpage=20`);
  }

  getSingleCard(id) {
    return this.http.get('https://instacards.net/api/cards/' + id)
  }

  getAllCardsSorted(page: number,sort) {
    return this.http.get(`https://instacards.net/api/cards?page=${page}&perpage=20&sort=${sort}`);
  }


  // tags
  getTags() {
    return this.http.get("https://instacards.net/api/cards/tags");
  }

  getCardsOfTag(tagname) {
    return this.http.get('https://instacards.net/api/cards/tag/' + tagname);
  }

  getAllTags() {
    return this.http.get("https://instacards.net/api/cards/alltags");
  }



}
