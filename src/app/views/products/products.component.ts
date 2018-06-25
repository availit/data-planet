import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  OrderHeader: String = 'Hello, Orders!!!';
  allowNewServer: Boolean = false;
  serverCreationStatus: String = 'no server was created!';
  serverName: String = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  getHeader() {
    return this.OrderHeader;
  }

  onCreateServer() {
    if (!this.serverName) {
      return this.serverName = this.serverCreationStatus;
    } else {

      return this.serverName = 'Server was created! Name is ' + this.serverName;
    }
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
