import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { VrGalleryComponent } from './components/vr-gallery/vr-gallery.component';
import { PlaneSelectComponent } from './components/plane-select/plane-select.component';
import { LinkSelectComponent } from './components/link-select/link-select.component';
import { StickyPosService } from './aframe/sticky-pos.service';

const appRoutes:Routes = [
 {path: '', component: VrGalleryComponent},
 {path: 'vr-gallery', component: VrGalleryComponent},
 {path: 'plane-select', component: PlaneSelectComponent},
 {path: 'link-select', component: LinkSelectComponent},
//  {path: 'g1', url: 'http://www.google.com'},
//  {path: 'g1', redirectTo: 'http://www.google.com'},
// {url: 'www.google.com'}
]

@NgModule({
  declarations: [
    AppComponent,
    VrGalleryComponent,
    PlaneSelectComponent,
    LinkSelectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StickyPosService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
