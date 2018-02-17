import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {

  vrizeSvcUrl = "http://192.168.1.147:3000"
  appPrefix = "vrgal"

  constructor() { 

  }

  doIt() {
    return 7;
  }

}
