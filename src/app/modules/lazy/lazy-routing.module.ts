import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { SubPageComponent } from './pages/sub-page/sub-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'sub', component: SubPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
