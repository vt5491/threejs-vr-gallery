import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  // providers: [UtilsService]
})
export class BaseComponent implements OnInit {
  msg: string;
  // utils: UtilsService;

  constructor(private utils: UtilsService) { 
  // constructor() {
    // this.utils = new UtilsService()
   };


  ngOnInit() {
  }

}
