import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";

@NgModule({
  declarations: [ProductComponent, PaAttrDirective, PaModel],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule {}
