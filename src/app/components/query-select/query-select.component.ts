import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule, Http, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { BaseService } from '../../services/base.service';
// import THREE from "THREE";
declare var THREE: any;

@Component({
  selector: 'app-query-select',
  templateUrl: './query-select.component.html',
  styleUrls: ['./query-select.component.css']
})
export class QuerySelectComponent implements OnInit {
  name : string;
  category: string;
  // 'webgl_geometry_cube.html'
  // http://localhost:3000/examples/260
  // http://192.168.50.126:3000/examples/260
  constructor(private http: Http, private base: BaseService) { 
    console.log('QuerySelectComponent.ctor: entered');
    // console.log(`QuerySelectComponent.ctor: base.doIt=${base.doIt()}`);
    console.log(`QuerySelectComponent.ctor: base.vrizeSvcUrl=${base.vrizeSvcUrl}`);
  }

  ngOnInit() {
    console.log('QuerySelectComponent.ngOnInit: entered');

    // let o = this.getObservable();
    // let o = this.getObservable(`${this.base.vrizeSvcUrl}/examples/260.json`, new THREE.Vector3(-6, 0, 0))
    let o = this.getObservable(`${this.base.vrizeSvcUrl}/examples/260.json`, new THREE.Vector3(-6, 0, 0))
    o.subscribe(this.addLink.bind(this))

    let o2 = this.getObservable(`${this.base.vrizeSvcUrl}/examples/15.json`, new THREE.Vector3(6, 0, 0))
    o2.subscribe(this.addLink.bind(this))
    // o.subscribe( data => {
    //   // debugger;
    //   console.log(`http result=${data}`);
    //   console.log(`http result.name=${data.name}`);
    //   console.log(`http result.category=${data.category}`);
    //   console.log(`http result.created_at=${data.created_at}`);
    //   this.name = data.name;
    //   this.category = data.category;
    //   // debugger;
      
    //   // this.loading = false;
    //   // this.results = data 
    //   let scene: any = document.querySelector('a-scene');
    //   // scene.vrgal_createlink_name = this.name;
    //   let appPrefix = this.base.appPrefix
    //   let evtPrefix = `${appPrefix}_createlink`
    //   console.log(`querySelect: evtPrefix=${evtPrefix}`);
    //   // debugger;
      
    //   scene[evtPrefix] = {}
    //   // scene.evtPrefix['url'] = `${this.base.vrizeSvcUrl}/examples/${data.id}.json`
    //   // linkEl.setAttribute('href', "assets/threejs-env/examples/vrize_webgl_geometry_cube.html");
    //   scene[evtPrefix]['href'] = `assets/threejs-env/examples/vrize_${data.name}`
    //   // scene[evtPrefix]['pos'] = {x: -6, y: 0, z: 0} 
    //   scene[evtPrefix]['pos'] = data.pos
    //   scene[evtPrefix]['title'] = data.name; 
    //   scene.emit(`${appPrefix}_createlink`);
    // });
  }

  addLink(data) {
    console.log(`http result=${data}`);
    console.log(`http result.name=${data.name}`);
    console.log(`http result.category=${data.category}`);
    console.log(`http result.created_at=${data.created_at}`);
    this.name = data.name;
    this.category = data.category;
    // debugger;

    // this.loading = false;
    // this.results = data 
    let scene: any = document.querySelector('a-scene');
    // scene.vrgal_createlink_name = this.name;
    let appPrefix = this.base.appPrefix
    let evtPrefix = `${appPrefix}_createlink`
    console.log(`querySelect: evtPrefix=${evtPrefix}`);
    // debugger;

    scene[evtPrefix] = {}
    // scene.evtPrefix['url'] = `${this.base.vrizeSvcUrl}/examples/${data.id}.json`
    // linkEl.setAttribute('href', "assets/threejs-env/examples/vrize_webgl_geometry_cube.html");
    scene[evtPrefix]['href'] = `assets/threejs-env/examples/vrize_${data.name}`
    // scene[evtPrefix]['pos'] = {x: -6, y: 0, z: 0} 
    scene[evtPrefix]['pos'] = data.pos
    scene[evtPrefix]['title'] = data.name;
    scene.emit(`${appPrefix}_createlink`);
  }

  getObservable(apiURL: string, pos: THREE.Vector3) {
    // let apiURL = "http://192.168.50.126:3000/examples/260.json";
    // let apiURL = "http://192.168.1.147:3000/examples/260.json";
    // let apiURL = `${this.base.vrizeSvcUrl}/examples/15.json`
    // let apiURL = `${this.base.vrizeSvcUrl}/examples/260.json`
    // console.log(`getObservable: apiUrl=${apiURL}`);
    
    try {
      return this.http.get(apiURL)
        .map(res => {
          // debugger;
          let result = res.json()
          result.pos = pos
          return result;
          // return res.json();
          // return res.json().results.map(item => {
          //   debugger;
          //   // return new SearchItem(
          //   //     item.trackName,
          //   //     item.artistName,
          //   //     item.trackViewUrl,
          //   //     item.artworkUrl30,
          //   //     item.artistId
          //   // );
          //   console.log(`item=${item}`);
          //   // console.log(`item.name=${item.name}`);
          // });
        });
    }
    catch(e) {
      console.log(`try-catch-1: e=${e}`);
      debugger;
    }

  }

}
