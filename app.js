/// <reference path="typings/angular2/angular2.d.ts" />
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
var angular2_1 = require("angular2/angular2");
var HeaderApp = (function () {
    function HeaderApp() {
        this.name = 'Matias';
        this.names = ['Pepe', 'Juan', 'Pedro'];
    }
    HeaderApp = __decorate([
        angular2_1.Component({
            selector: 'test-header'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n        <div class=\"header\">\n            <div>\n                <article>\n                    Hello {{ name }}\n                </article>\n            </div>\n            <div>\n                <ul class=\"list\">\n                    <li class=\"list-item\" *ng-for=\"#name of names\">Hello {{ name }}</li>\n                </ul>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderApp);
    return HeaderApp;
})();
var Article = (function () {
    function Article(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    return Article;
})();
var ArticleApp = (function () {
    function ArticleApp() {
    }
    ArticleApp = __decorate([
        angular2_1.Component({
            selector: 'test-article',
            properties: ['article'],
        }),
        angular2_1.View({
            template: "\n        <article>\n            <div class=\"votes\">{{ article.votes }}</div>\n            <div class=\"main\">\n                <h2>\n                    <a href=\"{{ article.link }}\">{{ article.title }}</a>\n                </h2>\n                <ul>\n                    <li>\n                        <a href (click)='article.voteUp()'>upvote</a>\n                    </li>\n                    <li>\n                        <a href (click)='article.voteDown()'>downvote</a>\n                    </li>\n                </ul>\n            </div>\n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleApp);
    return ArticleApp;
})();
var ConsoleApp = (function () {
    function ConsoleApp() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io')
        ];
    }
    ConsoleApp.prototype.addArticle = function (title, link) {
        console.log("Adding article with title", title.value, "and link", link.value);
    };
    ConsoleApp = __decorate([
        angular2_1.Component({
            selector: 'test-console'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, ArticleApp, HeaderApp],
            template: "\n        <test-header></test-header>\n\n        <section class=\"new-link\">\n            <div class=\"control-group\">\n                <div><label for=\"title\">Title:</label></div>\n                <div><input name=\"title\" #newtitle></div>\n            </div>\n            <div class=\"control-group\">\n                <div><label for=\"link\">Link:</label></div>\n                <div><input name=\"link\" #newlink></div>\n            </div>\n\n            <button (click)=\"addArticle(newtitle, newlink)\">Submit Link</button>\n        </section>\n\n        <test-article *ng-for=\"#article of articles\" [article]=\"article\">{{ article }}</test-article>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ConsoleApp);
    return ConsoleApp;
})();
angular2_1.bootstrap(ConsoleApp);
