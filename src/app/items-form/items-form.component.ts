import {
    Component,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';

import { ItemsService } from '../services/items.service';

@Component({
    selector: 'app-items-form',
    templateUrl: './items-form.component.html',
    styleUrls: ['./items-form.component.scss']
})
export class ItemsFormComponent implements OnInit {

    constructor(private itemsService: ItemsService) { }

    @Output()
    addEvent = new EventEmitter();

    ngOnInit(): void {
    }

    onSubmit(event, title: string): void {
        event.preventDefault();

        title = title.trim();
        if (!title) { return; }

        this.itemsService.addItem(title);
    }

}
