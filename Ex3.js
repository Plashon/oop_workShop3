class Person {
    name = "";
    address = "";
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
    setAddress(address){
        this.address = address
    }
    toString(){
        return `Person [ name = ${this.name}, address = ${this.address} ]`
    }
}

class Student extends Person{
    program = "";
    year = 0;
    fee = 0;
    constructor(name,address,program,year,fee){
        super(name,address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    getProgram(){
        return this.program;
    }
    setProgram(program){
        this.program = program;
    }
    getYear(){
        return this.year;
    }
    setYear(year){
        this.year = year;
    }
    getFee(){
        return this.fee;
    }
    setFee(fee){
        this.fee = fee;
    }

    toStringTow(){
        return `Student [ ${this.toString()} ], program = ${this.program}, fee = ${this.fee} ]`;
    }
}




const main = () =>{
    const person1 = new Person("Four","Banna nacha");
    const student1 = new Student(person1.name,person1.address,"SE",65,13000)
    //console.log(person1.toString());
    console.log(student1.toStringTow());

}
main();