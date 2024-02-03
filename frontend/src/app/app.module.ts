import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ProductService } from './demo/service/product.service';
import { GraphQLModule } from './graphql.module';
import { AppLayoutModule } from './layout/app.layout.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PaginatorModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ImageModule,
    ToastModule,
    CardModule,
    InputTextareaModule,
    DialogModule,
    DynamicDialogModule,
    ChipModule,
    ReactiveFormsModule,
    GraphQLModule,
    AppLayoutModule,
  ],
  declarations: [AppComponent, DashboardComponent, NotfoundComponent],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    CountryService,
    CustomerService,
    EventService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
