import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { ButtonDemoComponent } from './buttondemo.component';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';

@NgModule({
  imports: [CommonModule, ButtonDemoRoutingModule, ButtonModule, RippleModule, SplitButtonModule, ToggleButtonModule],
  declarations: [ButtonDemoComponent],
})
export class ButtonDemoModule {}
