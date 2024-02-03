import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  imports: [CommonModule, ErrorRoutingModule, ButtonModule],
  declarations: [ErrorComponent],
})
export class ErrorModule {}
