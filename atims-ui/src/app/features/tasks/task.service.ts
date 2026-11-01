import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiBase}/tasks`;
  
  constructor(private http: HttpClient) {}
  
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  getGlobalQueue(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/global-queue`);
  }
  
  assignTask(assetId: number, assignedUserId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/assign`, {
      asset_id: assetId,
      assigned_user_id: assignedUserId
    });
  }
  
  updateTaskStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { status });
  }
  
  cancelTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}