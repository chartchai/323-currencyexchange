import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';


const appRoutes: Routes = [
  { path: 'currency', component: CurrencyComponent },
  { path: '', redirectTo: '/currency', pathMatch: 'full' }
  // {path: '', component:TriangleComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
