import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

import { MainFooterComponent, MainHeaderComponent } from '../../@shared/components';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MenuModule, MainHeaderComponent, MainFooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit {
  mainMenu!: MenuItem[];

  ngOnInit() {
    this.mainMenu = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: '/dashboard',
          },
        ],
      },
      {
        label: 'Catalog',
        items: [
          {
            label: 'Products',
            icon: 'pi pi-th-large',
            routerLink: '/products',
          },
          {
            label: 'Orders',
            icon: 'pi pi-tags',
            routerLink: '/orders',
          },
          {
            label: 'Users',
            icon: 'pi pi-users',
            routerLink: '/users',
          },
        ],
      },
      {
        label: 'Travels',
        items: [
          {
            label: 'Statistic',
            icon: 'pi pi-globe',
            routerLink: '/travels-statistic',
          },
          {
            label: 'My Countries',
            icon: 'pi pi-map',
            routerLink: '/my-countries',
          },
        ],
      },
    ];
  }
}
