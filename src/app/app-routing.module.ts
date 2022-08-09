import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinearComponent} from "./generators/linear/linear.component";
import {HomeComponent} from "./home/home/home.component";

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full' },
    {path: 'generators/linear', component: LinearComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
