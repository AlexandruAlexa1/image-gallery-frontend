import { Component, inject, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ImageMetadata } from '../../models/image-metadata.model';
import { CommonModule } from '@angular/common';
import { ImageStateService } from '../../services/image-state.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  imports: [CommonModule]
})
export class ImageGalleryComponent implements OnInit {
  private imageService = inject(ImageService);
  private imageState = inject(ImageStateService);

  images: ImageMetadata[] = [];

  constructor() {
    this.loadImages();
  }

   ngOnInit(): void {
    this.imageState.images$.subscribe(images => {
      this.images = images;
    });

    this.imageService.getAllImages().subscribe(images => {
      this.imageState.setImages(images);
    });
  }

  loadImages(): void {
    this.imageService.getAllImages().subscribe((data: ImageMetadata[]) => {
      this.images = data;
    });
  }

  deleteImage(id: number): void {
    this.imageService.deleteImage(id).subscribe(() => {
      this.images = this.images.filter(image => image.id !== id);
    });
  }
}
