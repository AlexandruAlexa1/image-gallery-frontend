import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageMetadata } from '../models/image-metadata.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<ImageMetadata[]> {
    return this.http.get<ImageMetadata[]>(this.apiUrl);
  }

  generateUploadUrl(fileName: string, contentType: string, size?: number): Observable<ImageMetadata> {
    let params = new HttpParams()
      .set('fileName', fileName)
      .set('contentType', contentType);
    if (size) {
      params = params.set('size', size.toString());
    }

    return this.http.post<ImageMetadata>(`${this.apiUrl}/upload-url`, null, { params });
  }

  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
