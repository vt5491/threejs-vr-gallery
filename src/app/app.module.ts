import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { VrGalleryComponent } from './vr-gallery/vr-gallery.component';

const appRoutes:Routes = [
 {path: '', component: VrGalleryComponent},
 {path: 'vr-gallery', component: VrGalleryComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    VrGalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
