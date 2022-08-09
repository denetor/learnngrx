import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinearComponent} from "./generators/linear/linear.component";

const routes: Routes = [
  {path: 'generators/linear', component: LinearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
