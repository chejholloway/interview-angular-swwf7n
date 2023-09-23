import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PixabayService {
  private apiKey = '6543525-74599a2c36d0fa03c6a380533';
  private apiUrl = 'https://pixabay.com/api/';

  constructor(private http: HttpClient) {}

  getLatestImages(): Observable<any> {
    const params = new HttpParams().set('key', this.apiKey).set('per_page', '20');
    return this.http.get(this.apiUrl, { params });
  }
}
