class Customer{
    id = 0 ;
    name = "";
    discount = 0;
    constructor(id,name,discount){
        this.id = id ;
        this.name = name;
        this.discount = discount;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDiscount(){
        return this.discount;
    }
    setDiscount(discount){
        this.discount = discount;
    }
    toString(){
        return `${this.getName()}(${this.getId()})(${this.getDiscount()}%)`;
    }
}


class Invoice{
    id = 0;
    Customer = null;
    amount = 0;
    constructor(id,customer,amount){
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getId(){
        return this.id;
    }
    getCustomer(){
        return this.customer;
    }
    setCustomer(customer){
        this.customer = customer;
    }
    getAmount(){
        return this.amount;
    }
    setAmount(amount){
        this.amount = amount
    }
    getCustomerId(){
        this.customer.getId();
    }
    setCustomerName(){
        this.customer.getName();
    }
    setCustomerDiscount(){
        this.customer.getDiscount();
    }
    getAmountAfterDiscount(){
        return this.amount-(this.amount*this.customer.getDiscount())/100;
    }
    toString(){
        return `Invoice [ id = ${this.getId()}, customer = ${this.customer.toString()}, amount = ${this.getAmount()} ]`
    }
}

const main = () => {
    const customer1 = new Customer(1,"Four",50)
    const invoice1  = new Invoice(1,customer1,100)
    console.log(invoice1.toString());
};
main();