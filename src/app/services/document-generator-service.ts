import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentGeneratorService {
  private http = inject(HttpClient);

  private readonly API_URL =
    'smart-sheet-reporter-production.up.railway.app/smart-sheet-reporter/api/beta/generator/generate';

  generateDocuments(excel: File, template: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('excel', excel);
    formData.append('template', template);

    return this.http.post(this.API_URL, formData, {
      responseType: 'blob',
    });
  }
}
