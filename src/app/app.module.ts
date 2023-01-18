import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {CdkTableModule} from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelHomeComponent } from './label-home/label-home.component';
import { BreedComponent } from './breed/breed.component';

@NgModule({
  declarations: [AppComponent, LabelHomeComponent, LabelHomeComponent, BreedComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatGridListModule, MatCardModule, MatIconModule, CdkTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
