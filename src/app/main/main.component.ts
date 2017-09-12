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
  indexOfFirstPhoto:number
  pagesAtAll:number
  currentPhotos:any[]
  selectedPhoto:number
  name:string
  age:number
  email:string
  address:Address
  hobbies:string[]
  hobbies1:any[] //can make array

  constructor() {
    console.log('contructor')
   }

  ngOnInit() {
    this.selectedPhoto = 1
    this.photosPerPage = 3
    this.currentPage = 1
    this.name = 'Mantvydas'
    this.age = 30
    this.address = {
      street: 'kovo11',
      city: 'kaunas',
      state: 'whatever'
    }
    this.hobbies =['Write code', 'Watch movies', 'Listen to music']
    this.indexOfLastPhoto = this.currentPage * this.photosPerPage
    this.indexOfFirstPhoto = this.indexOfLastPhoto -  this.photosPerPage
    this.currentPhotos = this.photos.slice(this.indexOfFirstPhoto, this.indexOfLastPhoto)
  }

arrowPush(e:any) {
  this.pagesAtAll = this.photos.length / this.photosPerPage
  this.pagesAtAll = Math.ceil(this.pagesAtAll)
  if(e.target.id == 'up' && this.currentPage < this.pagesAtAll) {
    this.currentPage++
  }
  if(e.target.id =='down' && this.currentPage > 1) {
    this.currentPage--
  }
  this.indexOfLastPhoto = this.currentPage * this.photosPerPage
  this.indexOfFirstPhoto = this.indexOfLastPhoto -  this.photosPerPage
  this.currentPhotos = this.photos.slice(this.indexOfFirstPhoto, this.indexOfLastPhoto)
}

selected (id:number) {
  this.selectedPhoto = id
}


// photosPerPage: 3
// indexOfLastPhoto = this.currentPage * this.photosPerPage
// indexOfFirstCoord = this.indexOfLastPhoto- this.photosPerPage
// currentPhotos = this.photos.slice(this.indexOfFirstCoord, this.indexOfLastPhoto)
photos = [
  {'small' : './assets/small-1.jpg',
    'big'  : './assets/1.jpg',
    'id' : 1
},
  {'small' : './assets/small-2.jpg',
    'big'  : './assets/2.jpg',
    'id' : 2
},
  {'small' : './assets/small-3.jpg',
    'big'  : './assets/3.jpg',
    'id' : 3
},
  {'small' : './assets/small-4.jpg',
    'big'  : './assets/4.jpg',
    'id' : 4
},
  {'small' : './assets/small-5.jpg',
    'big'  : './assets/5.jpg',
    'id' : 5
},
  {'small' : './assets/small-6.jpg',
    'big'  : './assets/6.jpg',
    'id' : 6
},
  {'small' : './assets/small-7.jpg',
    'big'  : './assets/7.jpg',
    'id' : 7
},
  {'small' : './assets/small-8.jpg',
    'big'  : './assets/8.jpg',
    'id' : 8
},
  {'small' : './assets/small-9.jpg',
    'big'  : './assets/9.jpg',
    'id' : 9
},
  {'small' : './assets/small-10.jpg',
    'big'  : './assets/10.jpg',
    'id' : 10
},
  {'small' : './assets/small-11.jpg',
    'big'  : './assets/11.jpg',
    'id' : 11
},
  {'small' : './assets/small-12.jpg',
    'big'  : './assets/12.jpg',
    'id' : 12
},
  {'small' : './assets/small-13.jpg',
    'big'  : './assets/13.jpg',
    'id' : 13
},
  {'small' : './assets/small-14.jpg',
    'big'  : './assets/14.jpg',
    'id' : 14
}
]
}

interface Address {
  street:string,
  city:string,
  state:string
}
