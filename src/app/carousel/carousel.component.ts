import { Component, OnInit } from '@angular/core';
import { Product } from '../app.module';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];

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
        description: 'Блоки для системы Cad/Cam\nЦирконевые блоки\nPMMA (пластмасса)\nВосковые блоки',
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
        description: 'Высокоточные 5-4 осевые фрезерные станки\nПечь для быстрой синтеризации диоксида циркония F1\nПылевсасывающий аппарат\n- Фрезы и комплектующие',
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
        description: 'Стоматологическое оборудование\nМатериалы для ортопеда-стоматолога\nЗуботехническое оборудование\nЗуботехнические материалы',
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
        description: 'Блоки для системы Cad/Cam\nЦирконевые блоки\nPMMA (пластмасса)\nВосковые блоки',
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
        description: 'Высокоточные 5-4 осевые фрезерные станки\nПечь для быстрой синтеризации диоксида циркония F1\nПылевсасывающий аппарат\n- Фрезы и комплектующие',
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
        description: 'Стоматологическое оборудование\nМатериалы для ортопеда-стоматолога\nЗуботехническое оборудование\nЗуботехнические материалы',
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
        description: 'Блоки для системы Cad/Cam\nЦирконевые блоки\nPMMA (пластмасса)\nВосковые блоки',
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
        description: 'Высокоточные 5-4 осевые фрезерные станки\nПечь для быстрой синтеризации диоксида циркония F1\nПылевсасывающий аппарат\n- Фрезы и комплектующие',
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
        description: 'Стоматологическое оборудование\nМатериалы для ортопеда-стоматолога\nЗуботехническое оборудование\nЗуботехнические материалы',
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
        description: 'Блоки для системы Cad/Cam\nЦирконевые блоки\nPMMA (пластмасса)\nВосковые блоки',
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
        description: 'Высокоточные 5-4 осевые фрезерные станки\nПечь для быстрой синтеризации диоксида циркония F1\nПылевсасывающий аппарат\n- Фрезы и комплектующие',
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
        description: 'Стоматологическое оборудование\nМатериалы для ортопеда-стоматолога\nЗуботехническое оборудование\nЗуботехнические материалы',
        image: 'dental.png',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ];

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
