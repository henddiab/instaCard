import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { CategoryComponent } from './category/category.component';
import { CardComponent } from './card/card.component';
import { TagCardsComponent } from './tag-cards/tag-cards.component';
import { SortComponent } from './sort/sort.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tags", component: TagsComponent },
  { path: "cat/:id/:title", component: CategoryComponent },
  { path: "card/:id", component: CardComponent },
  { path: "tag/:tagname", component: TagCardsComponent },
  { path: "cards/:sort", component: SortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
