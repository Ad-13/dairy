import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Item } from '../interfaces/item';

import { items } from '../mock-data/mock-items';

import {
  handleError
} from '../utils/utils';

@Injectable()
export class ItemsService {

  public itemsList: Item[] = items;

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.itemsList).pipe(
      catchError(handleError<Item[]>('getItems', []))
    );
  }

  deleteItem(item: Item): Observable<Item | {}> {
    console.log('ser deleteItem');
    this.itemsList = this.itemsList.filter(listItem => listItem.id !== item.id);
    return of(item).pipe(
      catchError(handleError<Item>('deleteItem', {} as Item))
    );
  }

}
