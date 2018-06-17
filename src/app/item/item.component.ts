import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../interfaces/item';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input()
    item: Item;

    constructor() { }

    ngOnInit() {
    }

    delete(event, item: Item) {
        event.stopPropagation();
        console.log('delete');
        console.log(item);
        console.log(event);
    }
}
