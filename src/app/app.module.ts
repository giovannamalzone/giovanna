import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelHomeComponent } from './pages/components/label-home/label-home.component';
import { BreedComponent } from './pages/breed/breed/breed.component';
import { DescriptionPugComponent } from './pages/breed/components/description-pug/description-pug.component';
import { TabBarComponent } from './pages/breed/components/tab-bar/tab-bar.component';
import { AboutBistecaComponent } from './pages/bisteca/about-bisteca-page/about-bisteca.component';
import { CountdownTimerComponent } from './pages/bisteca/components/countdown-timer/countdown-timer.component';
import { CuriositiesBistecaComponent } from './pages/bisteca/components/curiosities-bisteca/curiosities-bisteca.component';
import { BottomBarComponent } from './pages/components/bottom-bar/bottom-bar.component';
import { PhotoAlbumComponent } from './pages/photo-album/photo-album-page/photo-album.component';
import { CarouselComponent } from './pages/photo-album/components/carousel/carousel.component';
import { StartComponent } from './pages/start/start.component';
import { NewsComponent } from './pages/start/components/news/news.component';
import { NewsService } from './pages/news.service';
import { HttpClientModule } from '@angular/common/http';

import { RecadosComponent } from './pages/start/components/recados/recados.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelHomeComponent,
    LabelHomeComponent,
    BreedComponent,
    DescriptionPugComponent,
    TabBarComponent,
    AboutBistecaComponent,
    CountdownTimerComponent,
    CuriositiesBistecaComponent,
    BottomBarComponent,
    PhotoAlbumComponent,
    CarouselComponent,
    StartComponent,
    NewsComponent,
    RecadosComponent,

  ],
  providers: [NewsService, HttpClientModule],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    CdkTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
