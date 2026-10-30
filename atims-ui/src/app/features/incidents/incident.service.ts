import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface IncidentLog {
  assetId: number;
  qrCodeData?: string;
  defectImagePath?: string;
  fieldNotes: string;
  deviceLatitude: number;
  deviceLongitude: number;
  deviceTimestamp: string;
}

export interface IncidentVerification {
  assetId: number;
  inspectionType: 'Maintenance';
  conditionStatus: 'Fonctionnel';
  fieldNotes: string;
  deviceLatitude: number;
  deviceLongitude: number;
  deviceTimestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl = `${environment.apiBase}/incidents`;
  
  constructor(private http: HttpClient) {}
  
  logIncident(incident: IncidentLog): Observable<any> {
    return this.http.post(`${this.apiUrl}/log`, incident);
  }
  
  verifyRepair(verification: IncidentVerification): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify`, verification);
  }
  
  getUnresolved(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/unresolved`);
  }
  
  getHistory(assetId: number): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/history/${assetId}`);
  }
}
