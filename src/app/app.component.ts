import { Component, OnInit } from '@angular/core';
import { Image } from './types/Image';
import { PixabayService } from './services/pixabay.service';
// import { AppImageList } from './directives/image-list.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  constructor(private pixabayService: PixabayService) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.pixabayService.getLatestImages().subscribe((data: Image) => {
      this.images = data.hits;
    });
  }
}
