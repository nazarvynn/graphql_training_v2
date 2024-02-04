import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [RouterModule, ButtonModule, MenuModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent implements OnInit {
  userMenu!: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.userMenu = [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: '/settings',
      },
      {
        label: 'Log Out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  goToDashboard() {
    this.router.navigate(['/']);
  }

  logout() {
    // TODO
  }
}
