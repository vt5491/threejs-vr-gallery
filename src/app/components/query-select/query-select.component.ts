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
// import THREE from "THREE";
// declare var THREE: any;
import * as THREE from "three";
import {Router} from '@angular/router';
import { BaseComponent} from '../base/base.component'
import { debug } from 'util';

@Component({
  selector: 'app-query-select',
  templateUrl: './query-select.component.html',
  styleUrls: ['./query-select.component.css'],
  // providers: [UtilsService]
})
// export class QuerySelectComponent extends BaseComponent implements OnInit {
export class QuerySelectComponent implements OnInit {
  name : string;
  category: string;
  exampleResults : Object[] = []
  expectedResultCnt : number
  // 'webgl_geometry_cube.html'
  // http://localhost:3000/examples/260
  // http://192.168.50.126:3000/examples/260
  constructor(private http: Http, private base: BaseService, 
    private utils: UtilsService,
    private router: Router 
  ) { 
    // super()
    console.log('QuerySelectComponent.ctor: entered');
    // console.log(`QuerySelectComponent.ctor: base.doIt=${base.doIt()}`);
    console.log(`QuerySelectComponent.ctor: base.vrizeSvcUrl=${base.vrizeSvcUrl}`);
  }

  ngOnInit() {
    document.querySelector('a-scene').addEventListener('loaded', this.init.bind(this))
  }

  init() {
    console.log('QuerySelectComponent.ngOnInit: entered');

    let exampleResults : Object[] = [];
    // let ex1 = {'id': 15, 'name' : "webgl_geometries.html", 'pos': new THREE.Vector3(-6, 0, 0)};
    // let ex2 = {'id': 260, 'name' : "webgl_geometry_cube.html", 'pos': new THREE.Vector3(6, 0, 0)};
    // exampleResults.push(ex1);
    // exampleResults.push(ex2);

    // this.utils.dataStore['query-select-results'] = exampleResults
    // let o = this.getObservable();
    // let o = this.getObservable(`${this.base.vrizeSvcUrl}/examples/260.json`, new THREE.Vector3(-6, 0, 0))
    // let o = this.getObservable(`${this.base.vrizeSvcUrl}/examples/260.json`, new THREE.Vector3(-6, 0, 0))
    // o.subscribe(this.addLink.bind(this))

    // let o2 = this.getObservable(`${this.base.vrizeSvcUrl}/examples/15.json`, new THREE.Vector3(6, 0, 0))
    // o2.subscribe(this.addLink.bind(this))
    // let router= Router;
    // debugger;

    // console.log(`querySelect: about to route to results-scene`);
    
    let scene: any = document.querySelector('a-scene');
    let sbBox: any = document.querySelector('#sb-query');
    let allBox: any = document.querySelector('#all-query');


    sbBox.addEventListener('click', () => {
      console.log(`querySelect.clickHandler: click genned`);
      console.log(`querySelect.clickHandler: doing api route`);
      
      // this.router.navigateByUrl('results-scene');
      // this.router.navigate(['/results-scene']);
      // (document.querySelector('#results-link') as any).navigate();
      this.querySandbox()
    });

    allBox.addEventListener('click', () => {
      this.queryAll()
    });

    // this.queryAll()

    // this.router.navigateByUrl('results-scene');
    // (document.querySelector('#results-link') as any).navigate();
    // this.msg = "abc"
    // console.log(`QuerySelect.ctor: this.msg=${this.msg}`);
    // this.router.navigate(['/results-scene']);
    // dynamically add a link

    // let evtDetail = {}
    // evtDetail['href'] = `results-scene`
    // evtDetail['pos'] = new THREE.Vector3(0, -2, 0)
    // evtDetail['title'] = "dynamic results link";
    // let appPrefix = this.base.appPrefix
    // let evt = new CustomEvent(`${appPrefix}_createlink`, { detail: evtDetail });
    // evt.initEvent(`${appPrefix}_createlink`, true, true);
    // scene.dispatchEvent(evt)
  }

  querySandbox() {
    this.expectedResultCnt = 3

    let exObservable_1 = this.getExampleObservable(`${this.base.vrizeSvcUrl}/examples/260.json`, new THREE.Vector3(-6, 0 ,0))
    let exObservable_2 = this.getExampleObservable(`${this.base.vrizeSvcUrl}/examples/288.json`, new THREE.Vector3(0, 0 ,0))
    let exObservable_3 = this.getExampleObservable(`${this.base.vrizeSvcUrl}/examples/15.json`, new THREE.Vector3(6, 0 ,0))

    exObservable_1.subscribe(this.aggregateResults.bind(this))
    exObservable_2.subscribe(this.aggregateResults.bind(this))
    exObservable_3.subscribe(this.aggregateResults.bind(this))

  }

  queryAll() {
    this.expectedResultCnt = 4

    let exObservable = this.getExampleObservable(`${this.base.vrizeSvcUrl}/examples/all_lifted.json`, new THREE.Vector3(-6, 0 ,0))

    exObservable.subscribe(this.processResult.bind(this))
  }

  getExampleObservable(apiURL: string, pos: THREE.Vector3) {
    try {
      return this.http.get(apiURL)
        .map(res => {
          let result = res.json()
          result.pos = pos
          return result;
        });
    }
    catch(e) {
      console.log(`try-catch-1: e=${e}`);
      // debugger;
    }
  }

  // process a (potentially) many rowed result
  processResult(data) {
    // debugger
    console.log(`QuerySelect.processResult: data.length=${data.length}`);
    let pos = new THREE.Vector3(-6, 0 ,0)
    let xPos = -6

    for(let i=0; i < data.length; i++) {
      // data[i].pos = pos
      // data[i].pos.x = pos.x 
      data[i].pos = {}
      data[i].pos.x = xPos
      console.log(`data.${i}.pos.x=${data[i].pos.x}`);
      console.log(`data.${i}.name=${data[i].name}`);
      
      this.aggregateResults(data[i])

      // pos.x += 3
      xPos += 3
    }
    

  }
  aggregateResults(data) {
    let example = {}

    // example['href'] = `assets/threejs-env/examples/vrize_${data.name}`
    // example['pos'] = data.pos
    // example['title'] = data.name
    example['name'] = data.name
    example['pos'] = data.pos

    this.exampleResults.push(example)

    if (this.exampleResults.length == this.expectedResultCnt) {
      // debugger
      // localStorage.setItem('currentUser', JSON.stringify({ token: token, name: name }));
      // We have to use sessionStorage to transfer data among routes, because a pure a-frame
      // link is more of a pure DOM transfer and is kind of out reach of the NG environment, thus
      // NG injects a new services into the transferred-to component, instead of the existing one.
      // We can do an offical NG route with something like 'this.router.navigate', but that
      // drop the a-frame vr-mode, and you can't carry vr mode into the next route.
      sessionStorage.setItem(`${this.base.appPrefix}_querySelectResults`, JSON.stringify(this.exampleResults));

      // create dynamic link
      let scene: any = document.querySelector('a-scene');

      let evtDetail = {}
      evtDetail['href'] = `results-scene`
      evtDetail['pos'] = new THREE.Vector3(0, -2, 0)
      evtDetail['title'] = "dynamic results link";
      let appPrefix = this.base.appPrefix
      let evt = new CustomEvent(`${appPrefix}_createlink`, { detail: evtDetail });
      evt.initEvent(`${appPrefix}_createlink`, true, true);
      scene.dispatchEvent(evt)


    }
  }

  // addLink(data) {
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
  // }

  // getObservable(apiURL: string, pos: THREE.Vector3) {
  //   // let apiURL = "http://192.168.50.126:3000/examples/260.json";
  //   // let apiURL = "http://192.168.1.147:3000/examples/260.json";
  //   // let apiURL = `${this.base.vrizeSvcUrl}/examples/15.json`
  //   // let apiURL = `${this.base.vrizeSvcUrl}/examples/260.json`
  //   // console.log(`getObservable: apiUrl=${apiURL}`);
    
  //   try {
  //     return this.http.get(apiURL)
  //       .map(res => {
  //         // debugger;
  //         let result = res.json()
  //         result.pos = pos
  //         return result;
  //         // return res.json();
  //         // return res.json().results.map(item => {
  //         //   debugger;
  //         //   // return new SearchItem(
  //         //   //     item.trackName,
  //         //   //     item.artistName,
  //         //   //     item.trackViewUrl,
  //         //   //     item.artworkUrl30,
  //         //   //     item.artistId
  //         //   // );
  //         //   console.log(`item=${item}`);
  //         //   // console.log(`item.name=${item.name}`);
  //         // });
  //       });
  //   }
  //   catch(e) {
  //     console.log(`try-catch-1: e=${e}`);
  //     debugger;
  //   }

  // }

}
