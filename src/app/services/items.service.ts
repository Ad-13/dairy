import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from '../interfaces/item';

import { items } from '../mock-data/mock-items';

@Injectable()
export class ItemsService {

  public itemsList: Item[] = items;

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.itemsList);
  }

  deleteItem(item: Item): Observable<Item> {
    console.log('ser deleteItem');
    this.itemsList = this.itemsList.filter(listItem => listItem.id !== item.id);
    return of(item);
  }

}
