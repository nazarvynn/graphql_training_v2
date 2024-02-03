import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { AccessComponent } from './access.component';
import { AccessRoutingModule } from './access-routing.module';

@NgModule({
  imports: [CommonModule, AccessRoutingModule, ButtonModule],
  declarations: [AccessComponent],
})
export class AccessModule {}
