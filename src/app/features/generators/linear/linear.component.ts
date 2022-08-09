import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html'
})
export class LinearComponent implements OnInit, OnDestroy {
    linearGeneratorSubscription: any;

    constructor(
        private readonly generatorService: GeneratorService,
    ) {
        console.log('LinearComponent.constructor()');
    }

    ngOnInit(): void {
        console.log('LinearComponent.ngOnInit()');
        this.linearGeneratorSubscription = this.generatorService.linear().subscribe(value => {
            console.log(value);
        })
    }

    ngOnDestroy() {
        console.log('LinearComponent.ngOnDestroy()');
        this.linearGeneratorSubscription.unsubscribe();
    }

}
