import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { SubPageComponent } from './pages/sub-page/sub-page.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [IndexPageComponent, SubPageComponent],
  imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {}
