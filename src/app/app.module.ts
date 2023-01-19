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
import { LabelHomeComponent } from './pages/label-home/label-home.component';
import { BreedComponent } from './pages/breed/breed.component';
import { DescriptionPugComponent } from "./pages/breed/components/description-pug/description-pug.component";
import { TabBarComponent } from './pages/breed/components/tab-bar/tab-bar.component';

@NgModule({
    declarations: [AppComponent, LabelHomeComponent, LabelHomeComponent, BreedComponent, DescriptionPugComponent, TabBarComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatGridListModule, MatCardModule, MatIconModule, CdkTableModule, ]
})
export class AppModule {}
