import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from '../interfaces/item';

export function handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    console.error(error);

    return of(result as T);
  };
}

export function hasTitle(obj1, obj2): boolean {
  return obj1.title === obj2.title;
}

export function isObjAlreadyContained(item: Item): boolean {
  return this.itemsList.some((listItem: Item) => {
    return hasTitle(listItem, item);
  });
}
