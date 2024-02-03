import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

import { TimelineDemoComponent } from './timelinedemo.component';
import { TimelineDemoRoutingModule } from './timelinedemo-routing.module';

@NgModule({
  imports: [CommonModule, TimelineModule, ButtonModule, CardModule, TimelineDemoRoutingModule],
  declarations: [TimelineDemoComponent],
})
export class TimelineDemoModule {}
