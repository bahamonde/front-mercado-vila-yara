import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';

import { TemplateModule} from './template/template.module';
import { ProdutosService } from './produtos.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ProdutosModule
  ],
  providers: [
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
