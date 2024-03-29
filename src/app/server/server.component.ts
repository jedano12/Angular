import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}