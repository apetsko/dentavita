import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links: MenuItem[] = [];
  activeItem: string = 'Главная';

  ngOnInit() {
    this.links = [
      { label: 'Главная', icon: 'pi pi-fw pi-home', url: '/' },
      { label: 'Наша команда', icon: 'pi pi-fw pi-calendar', url: '/team' },
      { label: 'Оформить рассрочку', icon: 'pi pi-fw pi-pencil', url: '/installment' },
      { label: 'Контакты', icon: 'pi pi-fw pi-file', url: '/contact' },
      { label: 'Акции', icon: 'pi pi-fw pi-cog', url: '/promo' },
    ];
  }

  setActive(link: MenuItem): void {
    this.activeItem = link.label!;
  }

  isActive(link: MenuItem): boolean {
    return link.label === this.activeItem
  }
}

