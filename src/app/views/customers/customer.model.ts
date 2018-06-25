export class Customer {
  public id: String;
  public name: String;
  public email: String;
  public phone: String;
  public address: String;

  constructor(id: String, name: String, email: String, phone: String, address: String) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}
