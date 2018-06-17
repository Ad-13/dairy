import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Item } from '../interfaces/item';

import { items } from '../mock-data/mock-items';

import { Subject } from 'rxjs/Subject';

import {
    handleError,
    isObjAlreadyContained,
    buildNewItem
} from '../utils/utils';

@Injectable()
export class ItemsService {

    public itemsList: Item[] = items;

    public updateCommentObserver = new Subject();

    public selectedItemObserver = new Subject<Item>();

    constructor() { }

    updateComment(currentItem, newComment) {
        const commentObj = {
            text: newComment
        };

        this.itemsList.forEach(item => {
            if (currentItem.id === item.id) {
                item.comments.push(commentObj);
            }
        });
    }

    public emitUpdateCommentObserver(): void {
        this.updateCommentObserver.next();
    }

    public subscribeUpdateCommentObserver() {
        return this.updateCommentObserver.asObservable();
    }

    public emitSelectedItemObserver(item: Item): void {
        this.selectedItemObserver.next(item);
    }

    public subscribeSelectedItemObserver(): Observable<Item> {
        return this.selectedItemObserver.asObservable();
    }

    getItems(): Observable<Item[]> {
        return of(this.itemsList).pipe(
            catchError(handleError<Item[]>('getItems', []))
        );
    }

    addItem(item: Item): Observable<any> {
        if (isObjAlreadyContained(this.itemsList, item)) {
            return of(this.itemsList).pipe(
                catchError(handleError('addItem'))
            );
        }

        item = buildNewItem(this.itemsList, item);
        this.itemsList.push(item);

        return of(this.itemsList).pipe(
            catchError(handleError('addItem'))
        );
    }

    deleteItem(item: Item): Observable<any> {
        this.itemsList = this.itemsList.filter(listItem => listItem.id !== item.id);

        return of(item).pipe(
            catchError(handleError('deleteItem'))
        );
    }

}
