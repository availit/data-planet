import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  toggleNewCustomer: Boolean = false;
  newCustomer: Customer;
  public newId: Number;
  public newName: String;
  public newEmail: String;
  public newPhone: String;
  public newAddress: String;

  customers: Customer[] = [
    new Customer(123, 'John Doe', 'john@doe.com', '123-123-1234', '987 Ang Dr, Dallas Texas'),
    new Customer(456, 'Jane Doe', 'jane@doe.com', '434-123-1234', '987 Ang Dr, Dallas Texas')
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleAddNew () {
    this.toggleNewCustomer = !this.toggleNewCustomer;
  }

  handleNewCustomer () {
    if (this.newId !== null && this.newName !== undefined) {
      this.newCustomer = new Customer(this.newId, this.newName, this.newEmail, this.newPhone, this.newAddress);
      this.customers.unshift(this.newCustomer);
      console.log(this.newCustomer);
    } else {
      return;
    }
  }

}
