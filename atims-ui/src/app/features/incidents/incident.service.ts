import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface IncidentLog {
  qrCodeData: string;
  fieldNotes: string;
  deviceLatitude?: number;
  deviceLongitude?: number;
  deviceTimestamp?: string;
}

export interface IncidentLogResponse {
  success: boolean;
  id: number;
  asset_id: number;
  incident_id: number;
}

export type IncidentStatus = 'open' | 'resolved' | 'pending_forensic_clearance';

export interface IncidentRecord {
  id: number;
  assetId: number;
  stateId: string;
  assetName: string;
  fieldNotes: string;
  status: IncidentStatus;
  reportedAt: string;
  resolvedAt: string | null;
  resolutionNotes: string | null;
  assignedUserId: number | null;
  assignedUserName: string | null;
}

export interface IncidentPage {
  items: IncidentRecord[];
  total: number;
}

export interface FieldAgent {
  id: number;
  name: string;
  email: string;
}

interface ApiIncidentPage {
  items: Array<{
    id: number;
    asset_id: number;
    state_id: string;
    asset_name: string;
    field_notes: string;
    status: IncidentStatus;
    reported_at: string;
    resolved_at: string | null;
    resolution_notes: string | null;
    assigned_user_id: number | null;
    assigned_user_name: string | null;
  }>;
  pagination: { total: number };
}

export interface IncidentVerification {
  incidentId: number;
  qrCodeData: string;
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

  getIncidents(page = 1, limit = 10, search = '', includeHistory = false): Observable<IncidentPage> {
    let params = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('include_history', includeHistory ? '1' : '0');
    if (search.trim()) params = params.set('search', search.trim());

    return this.http.get<{ success: boolean; data: ApiIncidentPage }>(this.apiUrl, { params }).pipe(
      map(response => ({
        items: Array.isArray(response?.data?.items) ? response.data.items.map(incident => ({
          id: incident.id,
          assetId: incident.asset_id,
          stateId: incident.state_id,
          assetName: incident.asset_name,
          fieldNotes: incident.field_notes,
          status: incident.status,
          reportedAt: incident.reported_at,
          resolvedAt: incident.resolved_at,
          resolutionNotes: incident.resolution_notes,
          assignedUserId: incident.assigned_user_id,
          assignedUserName: incident.assigned_user_name
        })) : [],
        total: Number(response?.data?.pagination?.total ?? 0)
      }))
    );
  }

  getFieldAgents(): Observable<FieldAgent[]> {
    return this.http.get<{ success: boolean; data?: { items?: FieldAgent[] } }>(`${environment.apiBase}/users/field-agents`).pipe(
      map(response => Array.isArray(response?.data?.items) ? response.data.items : [])
    );
  }

  assignIncidents(incidentIds: number[], assignedUserId: number): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/assign`, {
      incident_ids: incidentIds,
      assigned_user_id: assignedUserId
    });
  }
  
  logIncident(incident: IncidentLog): Observable<IncidentLogResponse> {
    const payload: Record<string, string | number> = {
      qr_code_data: incident.qrCodeData,
      field_notes: incident.fieldNotes
    };
    if (incident.deviceLatitude !== undefined && incident.deviceLongitude !== undefined) {
      payload['device_latitude'] = incident.deviceLatitude;
      payload['device_longitude'] = incident.deviceLongitude;
      if (incident.deviceTimestamp) payload['device_timestamp'] = incident.deviceTimestamp;
    }
    return this.http.post<IncidentLogResponse>(`${this.apiUrl}/log`, payload);
  }

  uploadDefectImage(assetId: number, file: File, incidentId?: number): Observable<unknown> {
    const data = new FormData();
    data.append('asset_id', String(assetId));
    if (incidentId !== undefined) data.append('incident_id', String(incidentId));
    data.append('file', file, file.name);
    return this.http.post(`${environment.apiBase}/attachments`, data);
  }
  
  verifyRepair(verification: IncidentVerification): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify`, {
      incident_id: verification.incidentId,
      qr_code_data: verification.qrCodeData,
      field_notes: verification.fieldNotes,
      device_latitude: verification.deviceLatitude,
      device_longitude: verification.deviceLongitude,
      device_timestamp: verification.deviceTimestamp
    });
  }
  
  getUnresolved(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/unresolved`);
  }
  
  getHistory(assetId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history/${assetId}`);
  }
}
