import { Component, OnInit } from '@angular/core';
import { ProductService } from '.././api/products.service'
import { Products } from '.././api/products-type'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Cart } from '.././api/cart';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  photos: Products[]
  product: any[]
  currentPage:number
  photosPerPage:number
  indexOfLastPhoto:number
  toggleProduct:boolean
  indexOfFirstPhoto:number
  pagesAtAll:number
  currentPhotos:any[]
  selectedPhoto:number
  cartList:any[]
  loading: boolean = true



  constructor(private productService: ProductService, private cart: Cart) {

  }
  ngOnInit(): void {
    this.productService.getProductsSlowly()
    .then(photos => {
      this.photos = photos
      this.selectedPhoto = 1
      this.photosPerPage = 3
      this.currentPage = 1
      this.indexOfLastPhoto = this.currentPage * this.photosPerPage
      this.indexOfFirstPhoto = this.indexOfLastPhoto -  this.photosPerPage
      this.currentPhotos = this.photos.slice(this.indexOfFirstPhoto, this.indexOfLastPhoto)
      this.loading = false
    }) //kolkas meta erora, nes vyksta promises ir negauna pirmuju masyvu apacioje esantis kodas
  }

  selectedProduct(product) {
    this.toggleProduct = !this.toggleProduct
    this.product = product
  }

  addToCart(product) {
    this.toggleProduct = false
    if(this.cartList==null) {
      this.cartList = []
      this.cartList.push(product)
      this.cart.changeCart(this.cartList)
    } else {
      this.cartList.push(product)
        this.cart.changeCart(this.cartList)
    }
    // this.appComponent.increment()

  }

arrowPush(e:any) {

  this.pagesAtAll = this.photos.length / this.photosPerPage
  this.pagesAtAll = Math.ceil(this.pagesAtAll)
  if(e.target.id == 'up') {
    let first = this.indexOfFirstPhoto
    let last = this.indexOfLastPhoto
    first++
    last++
    let photos = this.photos.slice(first, last)
    if(photos.length > 2)
    {

    this.indexOfFirstPhoto++
    this.indexOfLastPhoto++
    this.currentPhotos = this.photos.slice(this.indexOfFirstPhoto, this.indexOfLastPhoto)
    }
    if(this.photos.length > this.selectedPhoto) {
      this.selectedPhoto++
    }
  return false
  }
  if(e.target.id =='down' &&  this.selectedPhoto!=1) {
    this.selectedPhoto--
    let first = this.indexOfFirstPhoto
    let last = this.indexOfLastPhoto
    first--
    last--
    let photos = this.photos.slice(first, last)
    if(photos.length > 2) {
      this.indexOfFirstPhoto--
      this.indexOfLastPhoto--
      this.currentPhotos = this.photos.slice(this.indexOfFirstPhoto, this.indexOfLastPhoto)
    }
  return false
  }
  e.stopPropagation();
 return false
}

selected (id:number) {
  this.selectedPhoto = id
}


}
