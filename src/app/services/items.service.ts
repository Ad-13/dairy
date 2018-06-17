import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from '../interfaces/item';

import { ITEMS } from '../mock-data/mock-items';

@Injectable()
export class ItemsService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

}
