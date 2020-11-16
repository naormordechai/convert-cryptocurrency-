import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeContainerComponent } from './components/exchange-container/exchange-container.component';

const routes: Routes = [
  { path: 'exchange', component: ExchangeContainerComponent },
  { path: '**', redirectTo: 'exchange' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
