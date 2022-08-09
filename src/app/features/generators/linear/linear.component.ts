import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
    selector: 'app-linear',
    templateUrl: './linear.component.html'
})
export class LinearComponent implements OnInit, OnDestroy {
    linearGeneratorSubscription: any;
    // last 10 numbers generated
    generatedList: number[] = [];
    // last generated number
    lastValue: number | null = null;

    constructor(
        private readonly generatorService: GeneratorService,
    ) {
        console.log('LinearComponent.constructor()');
    }

    ngOnInit(): void {
        console.log('LinearComponent.ngOnInit()');
        this.generatedList = [];
        this.linearGeneratorSubscription = this.generatorService.linear().subscribe(value => {
            // remove first item from list
            if (this.generatedList.length >= 10) {
                this.generatedList.shift();
            }
            // append new item to list
            this.generatedList.push(value as number);
            // save last value
            this.lastValue = value as number;
        })
    }

    ngOnDestroy() {
        console.log('LinearComponent.ngOnDestroy()');
        this.linearGeneratorSubscription.unsubscribe();
    }

}
