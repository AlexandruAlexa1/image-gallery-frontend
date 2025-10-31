import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImageMetadata } from '../models/image-metadata.model';

@Injectable({
  providedIn: 'root'
})
export class ImageStateService {
  
  private imagesSubject = new BehaviorSubject<ImageMetadata[]>([]);
  images$ = this.imagesSubject.asObservable();

  setImages(images: ImageMetadata[]) {
    this.imagesSubject.next(images);
  }

  addImage(image: ImageMetadata) {
    const current = this.imagesSubject.getValue();
    this.imagesSubject.next([...current, image]);
  }
}
