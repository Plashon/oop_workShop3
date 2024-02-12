class Author {
    name = "";
    email = "";
    gender = "";
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    toString() {
        return `Author [ name = ${this.name} , email =  ${this.email} , gender = ${this.gender}]`;
    }
}

class Book {
    name = "";
    authors = [];
    price = 0;
    qty = 0;
    constructor(name,authors, price, qty=0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }

    getName() {
        return this.name;
    }
    getAuther() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let authorDetail = "";
        for (let i = 0 ;i < this.authors.length;i++) {
            authorDetail += this.authors[i].toString();
            if (i < this.authors.length - 1) {
                authorDetail+= ",";
            }
        }
       

        return `Book [ name = ${this.name}, authors = {${authorDetail}}, price = ${this.price} , qty = ${this.qty}]`;
    }
    getAuthorNames() {
        let authorName = "";
        for (let i = 0 ;i < this.authors.length;i++){
            authorName += this.authors[i].getName();
            if (i < this.authors.length - 1) {
                authorName += " , ";
            }
        }
        return `A" ${authorName} "`
    }
}

const main = () => {
    const author1 = new Author('Bard', 'bard@google.com', 'M');
    const author2 = new Author('Jane', 'jane@example.com', 'F');

    const book = new Book('JavaScript Lerning', [author1, author2], 100.0, 10);
    
    console.log(book.toString());
    console.log(book.getAuthorNames());
};
main();