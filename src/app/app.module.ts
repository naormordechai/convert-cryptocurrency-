import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExchangeContainerComponent } from './components/exchange-container/exchange-container.component';
import { SelectCurrencyComponent } from './components/select-currency/select-currency.component';

import { HttpClientModule } from '@angular/common/http';
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ConvertDisplayComponent } from './components/convert-display/convert-display.component';

import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeContainerComponent,
    SelectCurrencyComponent,
    ExchangeFormComponent,
    ConvertDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
