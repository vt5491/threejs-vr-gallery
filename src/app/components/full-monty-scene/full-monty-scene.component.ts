import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-monty-scene',
  templateUrl: './full-monty-scene.component.html',
  styleUrls: ['./full-monty-scene.component.css']
})
export class FullMontySceneComponent implements OnInit {

  constructor() { 
    // this.init()
  }

  ngOnInit() {
    // this.init()
    console.log(`FullMontySceneComponent.ngOnInit: entered`);
    setTimeout(() => {
      console.log(`now calling delayed init`);
      this.init();
    }, 2000);
  }

  init() {
    console.log(`FullMontySceneComponent.init: entered`);
    let scene: any = document.querySelector('a-scene');
    scene.emit('vrgaladdexample');
   
    
  }

}
