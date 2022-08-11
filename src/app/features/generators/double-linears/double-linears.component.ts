import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeneratorService} from "../services/generator.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-double-linears',
    templateUrl: './double-linears.component.html'
})
export class DoubleLinearsComponent implements OnInit, OnDestroy {
    linearGenerator1Observable: Observable<any> | undefined = undefined;
    linearGenerator1Subscription: any;
    linearGenerator2Observable: Observable<any> | undefined = undefined;
    linearGenerator2Subscription: any;
    // last generated number
    lastValue: number | undefined = undefined;

    constructor(
        public readonly generatorService: GeneratorService,
    ) {
        console.log('DoubleLinearsComponent.constructor()');
    }

    ngOnInit(): void {
        console.log('LinearComponent.ngOnInit()');
        this.linearGenerator1Observable = this.generatorService.linear(1000);
        this.linearGenerator1Subscription = this.linearGenerator1Observable.subscribe(value => {
            this.lastValue = value as number;
        })
        this.linearGenerator2Observable = this.generatorService.linear(333);
        this.linearGenerator2Subscription = this.linearGenerator2Observable.subscribe(value => {
            this.lastValue = value as number;
        })
    }

    ngOnDestroy() {
        console.log('LinearComponent.ngOnDestroy()');
        this.linearGenerator1Subscription.unsubscribe();
        this.linearGenerator2Subscription.unsubscribe();
    }

}
