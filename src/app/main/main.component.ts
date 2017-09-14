import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentPage:number
  photosPerPage:number
  indexOfLastPhoto:number
  toggleProduct:boolean
  indexOfFirstPhoto:number
  pagesAtAll:number
  currentPhotos:any[]
  selectedPhoto:number
  product:Product
  cartList:any[]
  constructor() {

   }

  ngOnInit() {
    this.product = this.photos[1]
    this.selectedPhoto = 1
    this.photosPerPage = 3
    this.currentPage = 1
    this.indexOfLastPhoto = this.currentPage * this.photosPerPage
    this.indexOfFirstPhoto = this.indexOfLastPhoto -  this.photosPerPage
    this.currentPhotos = this.photos.slice(this.indexOfFirstPhoto, this.indexOfLastPhoto)
  }

  selectedProduct(product) {
    this.product = product
    this.toggleProduct = !this.toggleProduct
  }

  addToCart(product) {
    if(product==null) {
      this.cartList = []
      this.cartList.push(product)
    } else {
      this.cartList.push(product)
      console.log(this.cartList)
    }

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

photos = [
  {'small' : './assets/small-1.jpg',
    'big'  : './assets/1.jpg',
    'id' : 1,
    'name' : 'Abel Axe',
    'price' : 800
},
  {'small' : './assets/small-2.jpg',
    'big'  : './assets/2.jpg',
    'id' : 2,
    'name' : 'The 0001 Strat',
    'price' : 798
},
  {'small' : './assets/small-3.jpg',
    'big'  : './assets/3.jpg',
    'id' : 3,
    'name' : 'Babysnakes SG',
    'price' : 455
},
  {'small' : './assets/small-4.jpg',
    'big'  : './assets/4.jpg',
    'id' : 4,
    'name' : 'Black Beauty',
    'price' : 299
},
  {'small' : './assets/small-5.jpg',
    'big'  : './assets/5.jpg',
    'id' : 5,
    'name' : 'The Black Dog',
    'price' : 1500
},
  {'small' : './assets/small-6.jpg',
    'big'  : './assets/6.jpg',
    'id' : 6,
    'name' : 'The Black Strat',
    'price' : 200
},
  {'small' : './assets/small-7.jpg',
    'big'  : './assets/7.jpg',
    'id' : 7,
    'name' : 'Beano Burst',
    'price' : 799
},
  {'small' : './assets/small-8.jpg',
    'big'  : './assets/8.jpg',
    'id' : 8,
    'name' : 'The Concorde',
    'price' : 1200
},
  {'small' : './assets/small-9.jpg',
    'big'  : './assets/9.jpg',
    'id' : 9,
    'name' : 'Duck',
    'price' : 1500
},
  {'small' : './assets/small-10.jpg',
    'big'  : './assets/10.jpg',
    'id' : 10,
    'name' : 'Epiphone Supernova',
    'price' : 1200
},
  {'small' : './assets/small-11.jpg',
    'big'  : './assets/11.jpg',
    'id' : 11,
    'name' : 'The Fool',
    'price' : 399
},
  {'small' : './assets/small-12.jpg',
    'big'  : './assets/12.jpg',
    'id' : 12,
    'name' : 'The Grail',
    'price' : 499
},
  {'small' : './assets/small-13.jpg',
    'big'  : './assets/13.jpg',
    'id' : 13,
    'name' : 'Lenny',
    'price' : 650
},
  {'small' : './assets/small-14.jpg',
    'big'  : './assets/14.jpg',
    'id' : 14,
    'name' : 'Lucille',
    'price' : 756
}
]
}

interface Product {
  small:string,
  big:string,
  id:number
  name:string
  price:number
}
