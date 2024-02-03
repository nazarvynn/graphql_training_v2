import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './filedemo.component.html',
  providers: [MessageService],
})
export class FileDemoComponent {
  uploadedFiles: unknown[] = [];

  constructor(private messageService: MessageService) {}

  /* eslint-disable @typescript-eslint/no-explicit-any */
  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  onBasicUpload() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
}
