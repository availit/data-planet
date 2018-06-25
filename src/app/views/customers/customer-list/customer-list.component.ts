import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [
    new Customer('1a', 'John Doe', 'john@doe.com', '123-123-1234', '987 Ang Dr, Dallas Texas')
  ];

  constructor() { }

  ngOnInit() {
  }

}
