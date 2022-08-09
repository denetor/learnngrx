import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearComponent } from './linear/linear.component';
import {GeneratorService} from "./services/generator.service";
import {ValuesHistoryComponent} from "../../common/components/values-history/values-history.component";



@NgModule({
    declarations: [
        LinearComponent,
        ValuesHistoryComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [GeneratorService]
})
export class GeneratorsModule { }
