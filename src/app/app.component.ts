import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageGalleryComponent } from "./components/image-gallery/image-gallery.component";
import { ImageUploadComponent } from "./components/image-upload/image-upload.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageGalleryComponent, ImageUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'image-gallery-frontend';
}
