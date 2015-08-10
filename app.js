var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var MyHeader = (function () {
    function MyHeader() {
        this.myName = 'Matias';
        this.names = ['Pepe', 'Juan', 'Pedro'];
    }
    MyHeader = __decorate([
        angular2_1.Component({
            selector: 'my-header'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: 'views/MyHeader.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyHeader);
    return MyHeader;
})();
var MyFooter = (function () {
    function MyFooter() {
        this.myName = 'Matias';
        this.names = ['Pepe', 'Juan', 'Pedro'];
    }
    MyFooter = __decorate([
        angular2_1.Component({
            selector: 'my-footer'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: 'views/MyFooter.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyFooter);
    return MyFooter;
})();
var Product = (function () {
    function Product(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    Product.prototype.domain = function () {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    };
    Product.prototype.voteUp = function () {
        this.votes++;
        return false;
    };
    Product.prototype.voteDown = function () {
        this.votes--;
        return false;
    };
    return Product;
})();
var ProductsService = (function () {
    function ProductsService() {
        this.products = [
            new Product('Angular 2', 'http://angular.io'),
            new Product('Fullstack', 'http://fullstack.io')
        ];
    }
    return ProductsService;
})();
var ProductRow = (function () {
    function ProductRow() {
    }
    ProductRow = __decorate([
        angular2_1.Component({
            selector: 'product-row',
            properties: ['product: named-product'],
        }),
        angular2_1.View({
            templateUrl: 'views/ProductRow.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductRow);
    return ProductRow;
})();
var ProductsList = (function () {
    function ProductsList(productsService) {
        this.products = productsService.products;
    }
    ProductsList = __decorate([
        angular2_1.Component({
            selector: 'products-list',
            appInjector: [ProductsService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, ProductRow],
            templateUrl: 'views/ProductList.html'
        }), 
        __metadata('design:paramtypes', [ProductsService])
    ], ProductsList);
    return ProductsList;
})();
var ProductForm = (function () {
    function ProductForm() {
    }
    ProductForm.prototype.addProduct = function (title, link) {
        console.log("Adding product with title", title.value, "and link", link.value);
        title.value = '';
        link.value = '';
    };
    ProductForm = __decorate([
        angular2_1.Component({
            selector: 'product-form',
            appInjector: [ProductsService]
        }),
        angular2_1.View({
            templateUrl: 'views/ProductForm.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductForm);
    return ProductForm;
})();
var StartApp = (function () {
    function StartApp() {
    }
    StartApp = __decorate([
        angular2_1.Component({
            selector: 'start-app'
        }),
        angular2_1.View({
            directives: [MyHeader, ProductForm, ProductsList, MyFooter],
            templateUrl: 'views/StartApp.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StartApp);
    return StartApp;
})();
angular2_1.bootstrap(StartApp);
