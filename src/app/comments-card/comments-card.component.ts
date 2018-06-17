import {
    Component,
    OnInit,
    Input,
    OnDestroy,
} from '@angular/core';

import { Item } from '../interfaces/item';

import { ItemsService } from '../services/items.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-comments-card',
    templateUrl: './comments-card.component.html',
    styleUrls: ['./comments-card.component.scss']
})
export class CommentsCardComponent implements OnInit, OnDestroy {

    @Input()
    public item: Item;

    private subscription: Subscription;

    constructor(private itemsService: ItemsService) { }

    ngOnInit(): void {
        this.subscription = this.itemsService.subscribeSelectedItemObserver()
            .subscribe((item: Item) => {
                this.item = item;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSubmit(newComment): void {
        this.itemsService.updateComment(this.item, newComment);
        this.itemsService.emitUpdateCommentObserver();
    }

}
