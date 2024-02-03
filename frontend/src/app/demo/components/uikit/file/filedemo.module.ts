import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

import { FileDemoComponent } from './filedemo.component';
import { FileDemoRoutingModule } from './filedemo-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, FileDemoRoutingModule, FileUploadModule],
  declarations: [FileDemoComponent],
})
export class FileDemoModule {}
