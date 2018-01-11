import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vr-gallery',
  templateUrl: './vr-gallery.component.html',
  styleUrls: ['./vr-gallery.component.css']
})
export class VrGalleryComponent implements OnInit {

  constructor() { 
    console.log(`VrGalleryComponent.ctor: entered`);
    
  }

  ngOnInit() {
  }

}
