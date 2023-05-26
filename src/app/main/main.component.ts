import { Component, OnInit } from '@angular/core';
import { Product } from '../app.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'SEVENZIRCON',
        links: [
          {label:'Блоки для системы Cad/Cam',url:'products/sevenzircon/blocks/cadcam'},
          {label:'Цирконевые блоки',url:'products/sevenzircon/blocks/zircon'},
          {label:'PMMA (пластмасса)',url:'products/sevenzircon/blocks/plastic'},
          {label:'Восковые блоки',url:'products/sevenzircon/blocks/wax'},
        ],
        image: 'sevezircon.png',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'ZOTION',
        links: [
          {label:'Высокоточные 5-4 осевые фрезерные станки',url:'products/ZOTION/millingmachine'},
          {label:'Печь для быстрой синтеризации диоксида циркония F1',url:'products/ZOTION/oven'},
          {label:'Пылевсасывающий аппарат',url:'products/ZOTION/blocks/vacuum'},
          {label:'Фрезы и комплектующие',url:'products/ZOTION/accessories'},
        ],
        image: 'zotion.png',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Dental',
        links: [
          {label:'Стоматологическое оборудование',url:'products/appliance'},
          {label:'Материалы для ортопеда-стоматолога',url:'products/Dental/materials'},
          {label:'Зуботехническое оборудование',url:'products/Dental/teethequipment'},
          {label:'Зуботехнические материалы',url:'products/Dental/teethmaterials'},
        ],
        image: 'dental.png',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'error';
    }
  }
}
