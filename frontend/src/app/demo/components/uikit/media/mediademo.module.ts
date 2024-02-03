import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

import { MediaDemoComponent } from './mediademo.component';
import { MediaDemoRoutingModule } from './mediademo-routing.module';

@NgModule({
  imports: [CommonModule, MediaDemoRoutingModule, ButtonModule, ImageModule, GalleriaModule, CarouselModule],
  declarations: [MediaDemoComponent],
})
export class MediaDemoModule {}
