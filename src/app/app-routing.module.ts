import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokeErrorComponent} from "./shared/poke-error/poke-error.component";

const routes: Routes = [
  {
    path:'',loadChildren:() => import('./pages/pages.module').then(p => p.PagesModule)
  },
  {
    path: '**', component:PokeErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
