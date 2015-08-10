/// <reference path="typings/angular2/angular2.d.ts" />
import {
    Component,
    NgFor,
    NgIf,
    View,
    bootstrap,
} from "angular2/angular2";


// Header component
@Component({
    selector: 'my-header'
})

@View({
    directives: [NgFor],
    templateUrl: 'views/MyHeader.html'
})

class MyHeader {
    myName: string;
    names: Array<string>;

    constructor() {
        this.myName = 'Matias';
        this.names = ['Pepe', 'Juan', 'Pedro'];
    }
}

// Footer component
@Component({
    selector: 'my-footer'
})

@View({
    directives: [NgFor],
    templateUrl: 'views/MyFooter.html'
})

class MyFooter {
    myName: string;
    names: Array<string>;

    constructor() {
        this.myName = 'Matias';
        this.names = ['Pepe', 'Juan', 'Pedro'];
    }
}

class Product {
    title: string;
    link: string;
    votes: number;

    constructor(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }

    domain() {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    }

    voteUp() {
        this.votes++;
        return false;
        // Javascript, by default, propagates the click event to all
        // the parent components. Becouse the click event is propagated
        // to parents, our browser is trying to follow an empty link.
        // To fix that, we just need to make event handler to return false.
    }

    voteDown() {
        this.votes--;
        return false;
    }
}

class ProductsService {
    products: Array<Product>;

    constructor() {
        this.products = [
            new Product('Angular 2', 'http://angular.io'),
            new Product('Fullstack', 'http://fullstack.io')
        ];
    };

    getProducts() {
        return this.products;
    };

    addProduct(product: Product) {
        this.products.push(product);
    };
}

// Product Row component
@Component({
    selector: 'product-row',
    properties: ['product: named-product'],
})

@View({
    templateUrl: 'views/ProductRow.html'
})

class ProductRow {
    product: Product;
}


// Product List component
@Component({
    selector: 'products-list',
    appInjector: [ProductsService]
})

@View({
    directives: [NgFor, ProductRow],
    templateUrl: 'views/ProductList.html'
})

class ProductsList {
    products: Array<Product>;

    constructor(productsService: ProductsService) {
        this.products = productsService.getProducts();
    }
}


// Products Form component
@Component({
    selector: 'product-form',
    appInjector: [ProductsService]
})

@View({
    templateUrl: 'views/ProductForm.html'
})

class ProductForm {
    products: Array<Product>;

    constructor(public productsService: ProductsService) {
        this.products = productsService.getProducts();
    }

    addProduct(title, link) {
        this.productsService.addProduct(new Product(title.value, link.value));
        console.log("Adding product with title", title.value, "and link", link.value);
        console.log(this.productsService.getProducts());
        title.value = '';
        link.value = '';
    }
}


// App component
@Component({
    selector: 'start-app'
})

@View({
    directives: [MyHeader, ProductForm, ProductsList, MyFooter],
    templateUrl: 'views/StartApp.html'
})

class StartApp {

}


// bootstraping
bootstrap(StartApp);
