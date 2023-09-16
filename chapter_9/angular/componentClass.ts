import {Component, OnInit} from "@angular/core"
import { MessageService } from "./MessageService.js"


@Component({
    selector: 'simple-message',
    styleUrls: ['./simple-message.component.css'],
    templateUrl: './simple-message.component.html'
})

export class SimpleMessageComponent implements OnInit {
    message: string = ""
    constructor(
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.messageService.getMessage().subscribe(response =>
            this.message = response as string
            )
    }
}