import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

photos = [
  {'photo' : 1},
  {'photo' : 2},
  {'photo' : 3},
  {'photo' : 4},
  {'photo' : 5},
  {'photo' : 6},
  {'photo' : 7},
  {'photo' : 8},
  {'photo' : 9},
  {'photo' : 10},
  {'photo' : 11},
  {'photo' : 12},
  {'photo' : 13},
  {'photo' : 14}
]

currentPage: 1
photosPerPage: 3
indexOfLastPhoto = this.currentPage * this.photosPerPage
indexOfFirstCoord = this.indexOfLastPhoto- this.photosPerPage
currentPhotos = this.photos.slice(this.indexOfFirstCoord, this.indexOfLastPhoto)

}
