import { Component, OnInit } from '@angular/core';

import { Item } from '../interfaces/item';

import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.scss']
})
export class ItemsCardComponent implements OnInit {

  public items: Item[] = [];

  public selectedItem: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems()
      .subscribe(items => this.items = items);
  }

  onItemClick(item: Item): void {
    this.selectedItem = item;
  }

  deleteItem(deletedItem: Item): void {
    this.items = this.items.filter(item => deletedItem.id !== item.id);
  }

}
