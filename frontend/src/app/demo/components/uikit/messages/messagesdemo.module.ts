import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

import { MessagesDemoComponent } from './messagesdemo.component';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesDemoRoutingModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
  ],
  declarations: [MessagesDemoComponent],
})
export class MessagesDemoModule {}
