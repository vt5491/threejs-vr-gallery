import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { VrGalDbService } from '../../services/vr-gal-db.service';

@Component({
  selector: 'app-sb',
  templateUrl: './sb.component.html',
  styleUrls: ['./sb.component.css']
})
export class SbComponent implements OnInit {

  constructor(private vrGalDb : VrGalDbService) { 

  }

  ngOnInit() {
    // debugger;
    let dynamicDiv = document.createElement("div");
    let a : any = document.createElement('a');
    a.href = 'assets/threejs-env/examples/vrize_webgl_geometry_cube.html';
    a.innerHTML = "cube-geometry (dynamic js link)";
    dynamicDiv.appendChild(a); // Append the link to the div
    document.body.appendChild(dynamicDiv); // And append the div to the document body
  }

  btnClick() {
    console.log(`sb.btnClick: entered`);

    // let result = this.vrGalDb.getPath();

    this.vrGalDb.getPath().then( (result) => {
      let path = result['path'];
    
      console.log(`btnClick: path=${path}`);
    });
  }

  addLink() {
    let insertNode = document.querySelector('a-scene');
    let aLink = document.createElement('a-link');
    aLink.setAttribute('href','assets/threejs-env/examples/vrize_webgl_geometry_cube_af.html');
    // aLink.title = "cg-dynamic";
    aLink.setAttribute('title',"cg-dynamic");
    // aLink.image="#webglGeometryCubeThumb";
    aLink.setAttribute('image', "#webglGeometryCubeThumb");
    // aLink.position = "3 0 0";
    aLink.setAttribute('position', "3 0 0");

    insertNode.appendChild(aLink);

  }

}
