import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './homepage/product-list/product-list.component';
import { ProductItemComponent } from './homepage/product-list/product-item/product-item.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { SideInfosComponent } from './homepage/side-infos/side-infos.component';
import { HomeCarouselComponent } from './homepage/home-carousel/home-carousel.component';
import { ProductDetailComponent } from './detailpage/product-detail/product-detail.component';

const appRoutes: Routes = [
  { path: 'detail/:id', component: DetailpageComponent },
  { path: '', component: HomepageComponent, pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomepageComponent,
    ProductListComponent,
    ProductItemComponent,
    DetailpageComponent,
    SideInfosComponent,
    HomeCarouselComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
