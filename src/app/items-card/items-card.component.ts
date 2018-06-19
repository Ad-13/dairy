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
        this.subscription = this.itemsService.watchItemsList()
            .subscribe((id?) => {
                this.getItems();
                if (id) {
                    this.updateSelectedItem(id);
                }
            });
        this.getItems();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    updateSelectedItem(id): void {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (id === item.id) {
                this.selectedItem = item;
                this.itemsService.notifyAboutSelectedItem(this.selectedItem);
                break;
            }
        }
    }

    getItems(): void {
        this.items = this.itemsService.getItems();
    }

    onItemSelect(item: Item): void {
        this.selectedItem = item;
        this.itemsService.notifyAboutSelectedItem(this.selectedItem);
    }

    onDelete(deletedItemId: number): void {
        if (this.selectedItem && this.selectedItem.id === deletedItemId) {
            this.selectedItem = null;
        }
        this.itemsService.notifyAboutSelectedItem(this.selectedItem);
    }

}
