import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent {
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
}
