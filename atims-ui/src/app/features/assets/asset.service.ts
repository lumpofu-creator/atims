import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Asset {
  id: number;
  stateId: string;
  name: string;
  description: string;
  category: string;
  registeredLocation: string;
  latitude: number;
  longitude: number;
  currentStatus: 'Fonctionnel' | 'En Panne' | 'Déclassé' | 'Inconnu';
  purchaseValue: number;
  currentValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private apiUrl = `${environment.apiBase}/assets`;
  
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.apiUrl);
  }
  
  getById(id: number): Observable<Asset> {
    return this.http.get<Asset>(`${this.apiUrl}/${id}`);
  }
  
  create(asset: Partial<Asset>): Observable<Asset> {
    return this.http.post<Asset>(this.apiUrl, asset);
  }
  
  update(id: number, asset: Partial<Asset>): Observable<Asset> {
    return this.http.put<Asset>(`${this.apiUrl}/${id}`, asset);
  }
  
  getMapPins(): Observable<any[]> {
    return this.http.get('/api/dashboards/map-pins');
  }
  
  getRecentInspections(): Observable<any[]> {
    return this.http.get('/api/inspections?limit=10&orderBy=created_at:desc');
  }
  
  search(searchTerm: string): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.apiUrl}/search?q=${searchTerm}`);
  }
}
