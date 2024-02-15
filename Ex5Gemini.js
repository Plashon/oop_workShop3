class Customer {
  constructor(name) {
    this.name = name;
    this.member = false;
    this.memberType = "";
    this.visits = [];
  }

  getName() {
    return this.name;
  }

  isMember() {
    return this.member;
  }

  setMember(isMember) {
    this.member = isMember;
  }

  getMemberType() {
    return this.memberType;
  }

  setMemberType(memberType) {
    this.memberType = memberType;
  }

  addVisit(visit) {
    this.visits.push(visit);
  }

  getVisits() {
    return this.visits;
  }

  toString() {
    return `Customer: ${this.name}, Member: ${this.member}, Member Type: ${this.memberType}, Visits: ${this.visits.length}`;
  }
}
class Visit {
  constructor(date, serviceExpense, productExpense) {
    this.date = date;
    this.serviceExpense = serviceExpense;
    this.productExpense = productExpense;
  }

  getDate() {
    return this.date;
  }

  getServiceExpense() {
    return this.serviceExpense;
  }

  getProductExpense() {
    return this.productExpense;
  }

  getTotalExpense() {
    return this.serviceExpense + this.productExpense;
  }

  toString() {
    return `Visit: ${this.date}, Service Expense: ${
      this.serviceExpense
    }, Product Expense: ${
      this.productExpense
    }, Total Expense: ${this.getTotalExpense()}`;
  }
}

class DiscountRate {
  static serviceDiscount = {
    PREMIUM: 0.2,
    GOLD: 0.15,
    SILVER: 0.1,
  };

  static productDiscount = {
    PREMIUM: 0.1,
    GOLD: 0.1,
    SILVER: 0.1,
  };

  constructor(type, discountRate) {
    this.type = type;
    this.discountRate = discountRate;
  }

  static getServiceDiscountRate(type) {
    return this.serviceDiscount[type] || 0;
  }

  static getProductDiscountRate(type) {
    return this.productDiscount[type] || 0;
  }
}

const main = () => {
  const customer1 = new Customer("John Doe");
  customer1.setMember(true);
  customer1.setMemberType("GOLD");

  const visit1 = new Visit(new Date(2024, 2, 15), 50.0, 20.0);
  customer1.addVisit(visit1);

  const visit2 = new Visit(new Date(2024, 2, 16), 100.0, 30.0);
  customer1.addVisit(visit2);
  
  const serviceDiscountRate = DiscountRate.getServiceDiscountRate("GOLD");
  const productDiscountRate = DiscountRate.getProductDiscountRate("SILVER");

  console.log(serviceDiscountRate); // Output: 0.15
  console.log(productDiscountRate); // Output: 0.1

  console.log(customer1.toString());
};
