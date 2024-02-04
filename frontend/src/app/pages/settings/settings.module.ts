import { NgModule } from '@angular/core';

import { SharedModule } from '../../@shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [SharedModule, SettingsRoutingModule],
  declarations: [ProfileComponent],
})
export class SettingsModule {}
