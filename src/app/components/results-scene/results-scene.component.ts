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
import { UtilsService } from '../../services/utils.service';
import * as THREE from "three";
import { BaseComponent} from '../base/base.component'

@Component({
  selector: 'app-results-scene',
  templateUrl: './results-scene.component.html',
  styleUrls: ['./results-scene.component.css']
})
// export class ResultsSceneComponent extends BaseComponent implements OnInit {
export class ResultsSceneComponent implements OnInit {
  // name : string;
  // category: string;
  // utils : UtilsService
  exampleResults : Object[] = []

  // constructor() { }
  // constructor(private http: Http, private base: BaseService, private utils: UtilsService) { 
  constructor( private http: Http, private base: BaseService,
    private utils: UtilsService 
  ) { 
    // super()
    console.log(`ResultsSceneComponent.ctor: entered`);
    // debugger;
    
    // let ex1 = {'id': 15, 'name' : "webgl_geometries.html", 'pos': new THREE.Vector3(-6, 0, 0)};
    // let ex2 = {'id': 260, 'name' : "webgl_geometry_cube.html", 'pos': new THREE.Vector3(6, 0, 0)};
    // this.exampleResults.push(ex1);
    // this.exampleResults.push(ex2);

    // this.utils = utils
    // debugger
    console.log(`ResultScene.ctor: dataStore=${this.utils.dataStore}`);
    console.log(`ResultsScene.ctor: this.utils.dataStore json=${JSON.stringify(this.utils.dataStore)}`);
    console.log(`ResultScene.ctor: query-select-results=${this.utils.dataStore['query-select-results']}`);
    
    // this.exampleResults = this.utils.dataStore['query-select-results']

    this.exampleResults = JSON.parse(sessionStorage.getItem(`${this.base.appPrefix}_querySelectResults`))
    console.log(`ResultScene.ctor: exampleResult-2=${this.exampleResults[0]}`);
    // debugger;
    // console.log(`ResultScene.ctor: this.msg=${this.msg}`);
    
  }

  ngOnInit() {
    console.log('ResultComponent.ngOnInit: entered');

    // this.addLinks()
    console.log(`ResultsScene.ngOnInit: this.exampleResults.length=${this.exampleResults.length}`);
    document.querySelector('a-scene').addEventListener('loaded', this.addLinks.bind(this))
    // let o = this.getObservable(`${this.base.vrizeSvcUrl}/examples/260.json`, new THREE.Vector3(-6, 0, 0))
    // o.subscribe(this.addLink.bind(this))

    // let o2 = this.getObservable(`${this.base.vrizeSvcUrl}/examples/15.json`, new THREE.Vector3(6, 0, 0))
    // o2.subscribe(this.addLink.bind(this))
  }

  addLinks() {
    console.log(`ResultsScene.addLinks: this.exampleResults.length=${this.exampleResults.length}`);
    
    for(let i=0; i < this.exampleResults.length; i++) {
      this.addLink(this.exampleResults[i])
    }

  }

  addLink(data) {
    console.log(`resultsSceneComponent.addLink: http result=${data}`);
    console.log(`resultsSceneComponent.addLink: http result.name=${data.name}`);
    console.log(`resultsSceneComponent.addLink: http result.category=${data.category}`);
    console.log(`resultsSceneComponent.addLink: http result.created_at=${data.created_at}`);
    // this.name = data.name;
    // this.category = data.category;
    let scene: any = document.querySelector('a-scene');
    let appPrefix = this.base.appPrefix
    let evtPrefix = `${appPrefix}_createlink`
    console.log(`querySelect: evtPrefix=${evtPrefix}`);

    // scene[evtPrefix] = {}
    // scene[evtPrefix]['href'] = `assets/threejs-env/examples/vrize_${data.name}`
    // scene[evtPrefix]['pos'] = data.pos
    // scene[evtPrefix]['title'] = data.name;

    let evtDetail = {}
    evtDetail['href'] = `assets/threejs-env/examples/vrize_${data.name}`
    evtDetail['pos'] = data.pos
    evtDetail['title'] = data.name;
    let evt = new CustomEvent(`${appPrefix}_createlink`, { detail: evtDetail });
    evt.initEvent(`${appPrefix}_createlink`, true, true);
    // scene.emit(`${appPrefix}_createlink`);
    scene.dispatchEvent(evt)
  }


  // getObservable(apiURL: string, pos: THREE.Vector3) {
    
  //   try {
  //     return this.http.get(apiURL)
  //       .map(res => {
  //         let result = res.json()
  //         result.pos = pos
  //         return result;
  //       });
  //   }
  //   catch(e) {
  //     console.log(`try-catch-1: e=${e}`);
  //     // debugger;
  //   }

  // }
}
