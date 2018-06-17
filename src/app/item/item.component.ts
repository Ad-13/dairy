import {
    Component,
    OnInit,
    Output,
    Input,
    EventEmitter
} from '@angular/core';

import { Item } from '../interfaces/item';

import { ItemsService } from '../services/items.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input()
    item: Item;

    @Output()
    deleteEvent = new EventEmitter();

    constructor(private itemsService: ItemsService) { }

    ngOnInit() {
    }

    deleteItem(event, item: Item) {
        event.stopPropagation();
        this.itemsService.deleteItem(item)
            .subscribe(itemsList => this.deleteEvent.emit(itemsList));
    }
}
