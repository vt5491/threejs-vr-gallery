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
  constructor(private http: Http) { 
    console.log('QuerySelectComponent.ctor: entered');
  }

  ngOnInit() {
    console.log('QuerySelectComponent.ngOnInit: entered');

    let o = this.getObservable();

    o.subscribe( data => {
      // debugger;
      console.log(`http result=${data}`);
      console.log(`http result.name=${data.name}`);
      console.log(`http result.category=${data.category}`);
      console.log(`http result.created_at=${data.created_at}`);
      this.name = data.name;
      this.category = data.category;
      // debugger;
      
      // this.loading = false;
      // this.results = data 
    });
  }

  getObservable() {
    let apiURL = "http://192.168.50.126:3000/examples/260.json";
    try {
      return this.http.get(apiURL)
        .map(res => {
          // debugger;
          return res.json();
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
