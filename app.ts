/// <reference path="typings/angular2/angular2.d.ts" />

import {
    Component,
    NgFor,
    View,
    bootstrap,
} from "angular2/angular2";


// Header component
@Component({
    selector: 'test-header'
})

@View({
    directives: [NgFor],
    template: `
        <div class="header">
            <div>
                <article>
                    Hello {{ name }}
                </article>
            </div>
            <div>
                <ul class="list">
                    <li class="list-item" *ng-for="#name of names">Hello {{ name }}</li>
                </ul>
            </div>
        </div>
    `
})

class HeaderApp {
    name: string;
    names: Array<string>;

    constructor() {
        this.name = 'Matias';
        this.names = ['Pepe', 'Juan', 'Pedro'];
    }
}

class Article {
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
        this.votes += 1;
        return false;
        // Javascript, by default, propagates the click event to all
        // the parent components. Becouse the click event is propagated
        // to parents, our browser is trying to follow an empty link.
        // To fix that, we just need to make event handler to return false.
    }

    voteDown() {
        this.votes -= 1;
        return false;
    }
}

// Article component
@Component({
    selector: 'test-article',
    properties: ['article'],
})

@View({
    template: `
        <article>
            <div class="votes">{{ article.votes }}</div>
            <div class="main">
                <h2>
                    <a href="{{ article.link }}">{{ article.title }}</a>
                    <span>({{ article.domain() }})</span>
                </h2>
                <ul>
                    <li>
                        <a href (click)='article.voteUp()'>upvote</a>
                    </li>
                    <li>
                        <a href (click)='article.voteDown()'>downvote</a>
                    </li>
                </ul>
            </div>
        </article>
    `
})

class ArticleApp {
    article: Article;
}


// Console component
@Component({
    selector: 'test-console'
})

@View({
    directives: [NgFor, ArticleApp, HeaderApp],
    template: `
        <test-header></test-header>

        <section class="new-link">
            <div class="control-group">
                <div><label for="title">Title:</label></div>
                <div><input name="title" #newtitle></div>
            </div>
            <div class="control-group">
                <div><label for="link">Link:</label></div>
                <div><input name="link" #newlink></div>
            </div>

            <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
        </section>

        <test-article *ng-for="#article of articles" [article]="article">{{ article }}</test-article>
    `
})

class ConsoleApp {
    articles: Array<Article>;

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io')
        ];
    }

    addArticle(title, link) {
        this.articles.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
        //console.log("Adding article with title", title.value, "and link", link.value);
    }
}


// bootstraping
bootstrap(ConsoleApp);
