import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinearComponent} from "./features/generators/linear/linear.component";
import {HomeComponent} from "./features/home/home/home.component";
import {DoubleLinearsComponent} from "./features/generators/double-linears/double-linears.component";

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full' },
    {path: 'generators/linear', component: LinearComponent},
    {path: 'generators/double-linears', component: DoubleLinearsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
