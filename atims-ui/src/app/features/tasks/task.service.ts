import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface IncidentActivity {
  id: number | string;
  type: 'reported' | 'note' | 'assignment' | 'status' | 'resolution' | string;
  body: string;
  author_name: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiBase}/tasks`;
  
  constructor(private http: HttpClient) {}
  
  getTasks(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(map(response => this.itemsFrom(response)));
  }
  
  getGlobalQueue(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/global-queue`).pipe(map(response => this.itemsFrom(response)));
  }

  getIncidentActivities(incidentId: number): Observable<IncidentActivity[]> {
    return this.http.get<{ data?: { items?: IncidentActivity[] } }>(`${environment.apiBase}/incidents/${incidentId}/activities`).pipe(
      map(response => Array.isArray(response?.data?.items) ? response.data.items : [])
    );
  }

  addIncidentNote(incidentId: number, body: string): Observable<unknown> {
    return this.http.post(`${environment.apiBase}/incidents/${incidentId}/activities`, { body });
  }

  private itemsFrom(response: any): any[] {
    if (Array.isArray(response)) return response;
    const items = response?.data?.items;
    return Array.isArray(items) ? items : [];
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
