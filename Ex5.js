class Customer {
  visit = [];
  name = "";
  member = false;
  memberType = "";
  constructor(name, member = false, memberType) {
    this.name = name;
    this.member = member;
    this.memberType = memberType;
  }
  getName() {
    return this.name;
  }
  isMember() {
    return this.member;
  }
  setMember(member) {
    this.member = member;
  }
  getMemberType() {
    return (this.memberType = this.memberType);
  }
  setMemberType(memberType) {
    this.memberType = memberType;
  }
  toString() {
    return `Customer [ Name = ${this.name}, Member = ${this.member}, MemberType = ${this.memberType} ]`;
  }
}

class Visit {
  name = "";
  date = Date;
  serviceExpense = 0;
  productExpense = 0;
  constructor(customer, date, serviceExpense, productExpense) {
    this.customer = customer;
    this.date = date;
    this.serviceExpense = serviceExpense;
    this.productExpense = productExpense;
  }
  getName() {
    return this.name;
  }
  getServiceExpense() {
    return this.serviceExpense;
  }
  setServiceExpense(serviceExpense) {
    this.serviceExpense = serviceExpense;
  }
  getProductExpense() {
    return this.productExpense;
  }
  setProductExpense(productExpense) {
    this.productExpense = productExpense;
  }
  toString() {
    return `Visit [ ${this.customer.toString()}, date = ${this.date}] `;
  }
}

class DiscountRate {
  static serviceDiscountPremium = new DiscountRate("SPremium", 0.2);
  static serviceDiscountGold = new DiscountRate("SGold", 0.15);
  static serviceDiscountSilver = new DiscountRate("SSilver", 0.1);
  static productDiscountPremium = new DiscountRate("PPremium", 0.1);
  static productDiscountGold = new DiscountRate("PGold", 0.1);
  static productDiscountSilver = new DiscountRate("PSilver", 0.1);
  constructor(service, product) {
    this.service = service;
    this.product = product;
  }
  getServiceDiscountRate() {
    return this.service;
  }

  getProductDiscountRate() {
    return this.product;
  }
}

const main = () => {
  const customer1 = new Customer("Punsan", true, "Customer");
  const visit1 = new Visit(customer1, "2024/02/13", 500, 500);

  console.log(visit1.toString());
};
main();
