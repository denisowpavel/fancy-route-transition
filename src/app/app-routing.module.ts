import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: 'data-table', component: DataTablePageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
