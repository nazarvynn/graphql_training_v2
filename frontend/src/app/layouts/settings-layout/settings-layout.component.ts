import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

import { MainFooterComponent, MainHeaderComponent } from '../../@shared/components';

@Component({
  selector: 'app-settings-layout',
  standalone: true,
  imports: [RouterOutlet, MenuModule, MainHeaderComponent, MainFooterComponent],
  templateUrl: './settings-layout.component.html',
  styleUrl: './settings-layout.component.scss',
})
export class SettingsLayoutComponent implements OnInit {
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
        label: 'Settings',
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: '/settings/profile',
          },
        ],
      },
    ];
  }
}
