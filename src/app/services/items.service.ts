import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Item } from '../interfaces/item';

import { items } from '../mock-data/mock-items';

import {
  handleError,
  isObjAlreadyContained
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

  addItem(item: Item): Observable<any> {
    if ( isObjAlreadyContained(item) ) {
      return of(this.itemsList).pipe(
        catchError(handleError('addItem'))
      );
    }
    item.id = this.itemsList.length;
    item.comments = [];
    this.itemsList.push(item);
    return of(this.itemsList).pipe(
      catchError(handleError('addItem'))
    );
  }

  deleteItem(item: Item): Observable<any> {
    this.itemsList = this.itemsList.filter(listItem => listItem.id !== item.id);
    return of(this.itemsList).pipe(
      catchError(handleError('deleteItem'))
    );
  }

}
