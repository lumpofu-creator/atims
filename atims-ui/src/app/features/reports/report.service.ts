import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = `${environment.apiBase}/reports`;
  
  constructor(private http: HttpClient) {}
  
  generateReport(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate`, data);
  }
  
  getReports(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  
  downloadReport(id: number, format: 'pdf' | 'excel' | 'csv'): Observable<Blob> {
    const params = new HttpParams().set('format', format);
    return this.http.get(`${this.apiUrl}/${id}`, {
      params,
      responseType: 'blob'
    });
  }
}