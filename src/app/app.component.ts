import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AdminComponent } from './components/admin/admin.component';
import { environment } from '../environments/environment';
import { ConvertComponent } from './modules/vrize/components/convert/convert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _router: Router) {
    // debugger;
    if (!environment.production) {
      console.log(`router.config.length pre=${this._router.config.length}`);

      // this._router.config.push({
      //   path: 'admin',
      //   component: AdminComponent,
      //   // loadChildren: '/app/modules/admin/admin.module'
      // });
      this._router.config.push({
        path: 'vrize/convert',
        component: ConvertComponent
      });
      console.log(`router.config.length post=${this._router.config.length}`);
    }
  }
}
