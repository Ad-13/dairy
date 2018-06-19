import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Item } from '../interfaces/item';
import { Comment } from '../interfaces/comment';

import { items } from '../mock-data/mock-items';

import {
    isObjAlreadyContained,
} from '../utils/utils';

@Injectable()
export class ItemsService {

    public itemsListObserver = new Subject();

    public selectedItemObserver = new Subject<Item>();

    private nextId: number;


    constructor() {
        if (!localStorage.getItem('items')) {
            this.setItems(items);
        }

        this.nextId = this.setNextIdOnInit();
    }


    public notifyAboutListChanges(id?): void {
        this.itemsListObserver.next(id);
    }

    public watchItemsList() {
        return this.itemsListObserver.asObservable();
    }

    public notifyAboutSelectedItem(item: Item): void {
        this.selectedItemObserver.next(item);
    }

    public watchSelectedItem(): Observable<Item> {
        return this.selectedItemObserver.asObservable();
    }


    public setItems(itemsList: Item[]): void {
        const value = JSON.stringify(itemsList);

        localStorage.setItem('items', value);
    }

    public getItems(): Item[] {
        return JSON.parse(localStorage.getItem('items'));
    }

    public updateComment(id: number, newComment: string): void {
        const commentObj = new Comment(newComment);
        const itemsList = this.getItems();

        for (let i = 0; i < itemsList.length; i++) {
            const item = itemsList[i];
            if (id === item.id) {
                item.comments.push(commentObj);
                break;
            }
        }

        this.setItems(itemsList);
        this.notifyAboutListChanges(id);
    }

    public addItem(title: string): void {
        const newItem = new Item(this.nextId, title, []);
        const itemsList = this.getItems();

        if (isObjAlreadyContained(itemsList, newItem)) {
            return;
        }

        itemsList.push(newItem);
        this.setItems(itemsList);
        this.nextId++;

        this.notifyAboutListChanges();
    }

    public removeItem(id: number): void {
        let itemsList = this.getItems();

        itemsList = itemsList.filter((listItem) => listItem.id !== id);
        this.setItems(itemsList);

        this.notifyAboutListChanges();
    }

    private setNextIdOnInit(): number {
        const itemsList = this.getItems(),
            lastItem = itemsList[itemsList.length - 1],
            nextId = lastItem ? ++lastItem.id : 0;

        return nextId;
    }

}
