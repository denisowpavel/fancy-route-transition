import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent, data: {animation : 'HomePage'}},
  { path: 'second', component: SecondPageComponent, data: {animation : 'AboutPage'} },
  { path: 'data-table', component: DataTablePageComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
