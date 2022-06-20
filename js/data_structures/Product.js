class Product {
    constructor (title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    // Instance methods
    getTitle() {
        return `Product: ${this.title}`;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }

    updatePrice(price) {
        this.price = price;
        return `Price Update!`;
    }

    addQuantity (quantity) {
        this.quantity += quantity;
        return 'Quantity update!';
    }

    substractQuantity(quantity) {
        this.quantity -= quantity;
        return 'Quantity update!';
    }

    // class Methods
    static byProducts(products) {
        for (let product of products) {
            product.substractQuantity(1);
        }

        return 'Proccess completed!';
    }
}

let product1 = new Product("product one", 150.00, 50);
let product2 = new Product("product two", 250.00, 30);

Product.byProducts([product1, product2]);