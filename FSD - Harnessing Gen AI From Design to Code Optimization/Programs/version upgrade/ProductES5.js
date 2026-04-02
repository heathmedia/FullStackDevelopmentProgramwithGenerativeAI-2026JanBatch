class Product {
    constructor(pid, pname, price) {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }

    display() {
        console.log(`${this.pid} ${this.pname} ${this.price}`);
    }
}

const p1 = new Product(101, "Laptop", 45000);
const p2 = new Product(102, "Mobile", 15000);

p1.display();
p2.display();