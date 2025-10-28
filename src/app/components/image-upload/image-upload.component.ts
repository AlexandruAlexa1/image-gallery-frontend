import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ImageStateService } from '../../services/image-state.service';

@Component({
  selector: 'app-image-upload',
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {
  selectedFile?: File;

  constructor(
    private imageService: ImageService,
    private imageState: ImageStateService
  ) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

uploadImage(): void {
  const file = this.selectedFile;
  if (!file) {
    console.warn('[UPLOAD] No file selected.');
    return;
  }

  console.log('[UPLOAD] Starting upload for file:', file.name, 'type:', file.type, 'size:', file.size);

  this.imageService.generateUploadUrl(file.name, file.type, file.size)
  .subscribe({
    next: (metadata) => {
      fetch(metadata.url, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } })
        .then(res => {
          if (!res.ok) throw new Error(`S3 upload failed`);
          this.imageState.addImage(metadata);
          alert('✅ Upload successful!');
        })
        .catch(err => {
          console.error(err);
          alert('Upload failed.');
        });
    },
    error: (err) => {
      console.error(err);
      alert('Failed to generate upload URL.');
    }
  });
}
}
