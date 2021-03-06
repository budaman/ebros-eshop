import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';

//providers
import { Cart } from './api/cart'
import { ProductService } from './api/products.service'


@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'contacts',
      component: SlidesComponent
    },
    {
    path: 'about',
    component: AboutComponent
    },
    {
      path: '',
      component: MainComponent
    }

    ])
  ],
  providers: [Cart, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
