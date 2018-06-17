import { Component, OnInit, OnDestroy } from '@angular/core';

import { Item } from '../interfaces/item';

import { ItemsService } from '../services/items.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-items-card',
    templateUrl: './items-card.component.html',
    styleUrls: ['./items-card.component.scss']
})
export class ItemsCardComponent implements OnInit, OnDestroy {

    public items: Item[] = [];

    public selectedItem: Item;

    private subscription: Subscription;

    constructor(private itemsService: ItemsService) { }

    ngOnInit(): void {
        this.subscription = this.itemsService.subscribeUpdateCommentObserver()
            .subscribe(() => {
                this.getItems();
                this.itemsService.emitSelectedItemObserver(this.selectedItem);
            });
        this.getItems();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getItems(): void {
        this.itemsService.getItems()
            .subscribe(items => this.items = items);
    }

    onItemSelect(item: Item): void {
        this.selectedItem = item;
        this.itemsService.emitSelectedItemObserver(this.selectedItem);
    }

    onDelete(item: Item): void {
        this.getItems();

        if (this.selectedItem && this.selectedItem.id === item.id) {
            this.selectedItem = null;
        }
        this.itemsService.emitSelectedItemObserver(this.selectedItem);
    }

    updateItems(newItems: Item[]): void {
        this.items = newItems;
    }

}
