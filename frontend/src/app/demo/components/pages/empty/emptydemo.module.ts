import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmptyDemoComponent } from './emptydemo.component';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';

@NgModule({
  imports: [CommonModule, EmptyDemoRoutingModule],
  declarations: [EmptyDemoComponent],
})
export class EmptyDemoModule {}
