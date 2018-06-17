import {
    Component,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';

import { ItemsService } from '../services/items.service';

import { Item } from '../interfaces/item';

@Component({
    selector: 'app-items-form',
    templateUrl: './items-form.component.html',
    styleUrls: ['./items-form.component.scss']
})
export class ItemsFormComponent implements OnInit {

    constructor(private itemsService: ItemsService) { }

    @Output()
    addEvent = new EventEmitter();

    ngOnInit() {
    }

    onSubmit(event, title: string) {
        console.log('onSubmit');
        event.preventDefault();
        title = title.trim();
        if (!title) { return; }
        this.itemsService.addItem({ title } as Item)
            .subscribe(itemsList => this.addEvent.emit(itemsList));
    }

}
