import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { Promise } from 'q';

@Injectable()
export class VrGalDbService {

  // constructor() { }
  constructor(private http: HttpClient){
    console.log(`VrGalDbService.ctor: entered`);
    
  }

  ngOnInit(): void {
  }

  // getPath() : Promise<Object>  {
  //   var promise = new Promise(function (resolve, reject) {
  //     this.http.get('http://localhost:8080').subscribe(
  //       data => {
  //         console.log(`VrGaDbService.getPath: data=${data}`);

  //         // return data;
  //         resolve(data);
  //       },
  //       (err) => {
  //         console.log(`driving error path, error=${err.error}`);
  //         // debugger;
  //         reject(err);

  //         if (err.error instanceof Error) {
  //           console.log("Client-side error occured.");
  //         }
  //         else {
  //           console.log("Server-side error occured.");
  //         }
  //       })
  //     });
  //   return promise;
  // }

  // getPath() : Promise<Object> {
  //   return new Promise((resolve, reject) => {
  //     // resolve(42);
  //     resolve({path: "ghi"});
  //   });
  // }

  getPath() : Promise<Object> {
  // getPath2() : string {
  // getPath2() : any {
    var promise;

    //TODO work this out.  It can prevent the project from compiling
    /*
    promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080').subscribe(
        (data) => {
          console.log(`data.resolve: data=${data}`);
          
          resolve(data);
        },
        (err) => {
          console.log(`data.err: err=${err}`);
          // debugger;
          reject(err);
        }
      )
    });
    */
    // promise = new Promise( function (resolve, reject) {
    //   resolve("abc");

    // });
    // promise = new String();

    return promise;

  }

  getExamples( name: string) {

  }

}
