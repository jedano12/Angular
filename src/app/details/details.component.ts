import { Component } from "@angular/core";


@Component({
    selector: 'detail',
    templateUrl: './details.component.html',
    styles: [`
        .white {
            color: #fff;
        }
    `],
})
export class DetailComponent{
    showDetails = false;
    logs = [];

    onToggleDetails() {
        this.showDetails = !this.showDetails;
        this.logs.push({id: this.logs.length + 1, date: new Date()});
    }
}