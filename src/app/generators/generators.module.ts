import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearComponent } from './linear/linear.component';
import {GeneratorService} from "./services/generator.service";



@NgModule({
    declarations: [
        LinearComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [GeneratorService]
})
export class GeneratorsModule { }
