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
      // { label: 'Главная', icon: 'pi pi-fw pi-home', url: '/' },
      { label: 'Акции', icon: 'pi pi-fw pi-cog', url: '/promo' },
      { label: 'Оформить рассрочку', icon: 'pi pi-fw pi-pencil', url: '/installment' },
      { label: 'Наши партнёры', icon: 'pi pi-fw pi-pencil', url: '/partners' },
      { label: 'Наша команда', icon: 'pi pi-fw pi-calendar', url: '/team' },
      { label: 'Контакты', icon: 'pi pi-fw pi-file', url: '/contact' },
    ];
  }

  setActive(link: MenuItem): void {
    this.activeItem = link.label!;
  }

  isActive(link: MenuItem): boolean {
    return link.label === this.activeItem
  }
}

