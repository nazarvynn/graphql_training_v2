import { NgModule } from '@angular/core';

import { SharedModule } from '../../@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';

@NgModule({
  imports: [SharedModule, DashboardsRoutingModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
