import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// import { AppComponent } from './app.component';
// import { SandboxComponent } from './components/sandbox/sandbox.component';
import { BaseService } from './services/base.service';
import { UtilsService } from './services/utils.service';
import { ParserService } from './services/parser.service';
import { TransformerService } from './services/transformer.service';
import { ExamplesService } from './services/examples.service';
import { ConvertComponent } from './components/convert/convert.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    // SandboxComponent,
    ConvertComponent //the bad boy
  ],
  providers: [
    UtilsService,
    BaseService,
    ParserService,
    TransformerService,
    ExamplesService,
  ],
  // we need this since we dynamically add this route
  entryComponents: [ConvertComponent]
})
export class VrizeModule {

  constructor() {
    console.log(`VrizeModule.ctor: entered`);

  }
}
