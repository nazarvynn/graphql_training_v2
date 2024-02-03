import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { ChartsDemoComponent } from './chartsdemo.component';
import { ChartsDemoRoutingModule } from './chartsdemo-routing.module';

@NgModule({
  imports: [CommonModule, ChartsDemoRoutingModule, ChartModule],
  declarations: [ChartsDemoComponent],
})
export class ChartsDemoModule {}
