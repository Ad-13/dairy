import {
    Component,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-comments-form',
    templateUrl: './comments-form.component.html',
    styleUrls: ['./comments-form.component.scss']
})
export class CommentsFormComponent implements OnInit {

    constructor() { }

    @Output()
    submitEvent = new EventEmitter();

    ngOnInit(): void {
    }

    onSubmit(newComment): void {
        newComment = newComment.trim();
        if (!newComment) { return; }

        this.submitEvent.emit(newComment);
    }

}
