import { Component, OnInit } from '@angular/core';
import { Product, carouselItem } from '../app.module';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];
  carousel: carouselItem[] = [];

  responsiveOptions: any[] = [];

  // constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //   this.products = products;
    // });

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
        image: '1.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },      
    ];

    this.carousel = [
      {img: '1.jpg',
      label: 'ZOTION',
      text: 'оборудование для профессионалов',
      urltext: 'Подробнее',
      url: 'products/zotion/',
      },
      {img: '2.jpg',
      label: 'SEVENZIRCON',
      text: 'Зуботехнические блоки',
      urltext: 'Подробнее',
      url: 'products/sevenzircon/',
      },
      {img: '3.jpg',
      label: 'Dental',
      text: 'Стоматологические оборудование и материалы',
      urltext: 'Подробнее',
      url: 'products/Dental/',
      },
    ]

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
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


