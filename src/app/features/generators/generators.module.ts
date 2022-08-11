import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearComponent } from './linear/linear.component';
import {GeneratorService} from "./services/generator.service";
import {ValuesHistoryComponent} from "../../common/components/values-history/values-history.component";
import {CurrentValueComponent} from "../../common/components/current-value/current-value.component";
import {DoubleLinearsComponent} from "./double-linears/double-linears.component";



@NgModule({
    declarations: [
        CurrentValueComponent,
        DoubleLinearsComponent,
        LinearComponent,
        ValuesHistoryComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [GeneratorService]
})
export class GeneratorsModule { }
