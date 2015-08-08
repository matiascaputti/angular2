/// <reference path="typings/angular2/angular2.d.ts" />

import {
    Component,
    NgFor,
    View,
    bootstrap,
} from "angular2/angular2";

@Component({
    selector: 'hello-world'
})

@View({
    directives: [NgFor],
    template: `
        <div>
            <article>
                Hello {{ name }}
            </article>
        </div>
        <div>
            <ul>
                <li *ng-for="#name of names">Hello {{ name }}</li>
            </ul>
        </div>
    `
})

class HelloWorld {
    name: string;
    names: Array<string>;

    constructor() {
        this.name = 'Matias';
        this.names = ['Pepe', 'Juan', 'Pedro'];
    }
}

bootstrap(HelloWorld);
