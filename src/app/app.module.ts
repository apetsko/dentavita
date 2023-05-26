import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CarouselComponent, FooterComponent, HeaderComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    TabMenuModule,
    TagModule,
    ButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export interface Product {
  id: string;
  code: string;
  name: string;
  links: Link[];
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export interface Link {
  label?: string,
  icon?: string,
  url?: string
}

export interface carouselItem {
  img?: string,
  label?: string,
  text?: string,
  urltext?: string
  url?: string
}