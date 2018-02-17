import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseService } from './services/base.service'
import { UtilsService } from './services/utils.service'
import {} from '../services/base.service'


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { VrGalleryComponent } from './components/vr-gallery/vr-gallery.component';
import { PlaneSelectComponent } from './components/plane-select/plane-select.component';
import { LinkSelectComponent } from './components/link-select/link-select.component';
// import { StickyPosService } from './aframe/sticky-pos.service';
import { VrGalDbService } from './services/vr-gal-db.service';
import { SbComponent } from './components/sb/sb.component';
import { QuerySelectComponent } from './components/query-select/query-select.component';
import { FullMontySceneComponent } from './components/full-monty-scene/full-monty-scene.component';
import { ResultsSceneComponent } from './components/results-scene/results-scene.component';
import { QuerySceneComponent } from './components/query-scene/query-scene.component';
import { BaseComponent } from './components/base/base.component';

const appRoutes:Routes = [
 {path: '', component: VrGalleryComponent},
 {path: 'vr-gallery', component: VrGalleryComponent},
 {path: 'plane-select', component: PlaneSelectComponent},
 {path: 'link-select', component: LinkSelectComponent},
 {path: 'sb', component: SbComponent},
 {path: 'query-select', component: QuerySelectComponent},
 {path: 'full-monty-scene', component: FullMontySceneComponent},
 {path: 'results-scene', component: ResultsSceneComponent},
 {path: 'query-scene', component: QuerySceneComponent},
//  {path: 'g1', url: 'http://www.google.com'},
//  {path: 'g1', redirectTo: 'http://www.google.com'},
// {url: 'www.google.com'}
]

@NgModule({
  declarations: [
    AppComponent,
    VrGalleryComponent,
    PlaneSelectComponent,
    LinkSelectComponent,
    SbComponent,
    QuerySelectComponent,
    FullMontySceneComponent,
    ResultsSceneComponent,
    QuerySceneComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    // ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // StickyPosService,
    BaseService,
    UtilsService,
    VrGalDbService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
