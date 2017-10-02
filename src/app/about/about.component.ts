import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

    console.log(route.snapshot.params)
  }

  ngOnInit() {
  }

}
