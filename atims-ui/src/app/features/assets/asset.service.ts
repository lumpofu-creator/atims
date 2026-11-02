import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ApiMapPin, MapPin } from '../dashboard/map-pin.model';

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

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

export interface RecentInspection {
  id: number;
  assetName: string | null;
  inspectionType: string;
  conditionStatus: string;
  date: string;
}

interface ApiInspection {
  id: number;
  asset_name: string | null;
  inspection_type: string;
  condition_status: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private apiUrl = `${environment.apiBase}`;
  private apiUrlAssets = `${environment.apiBase}/assets`;
  
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.apiUrlAssets);
  }
  
  getById(id: number): Observable<Asset> {
    return this.http.get<Asset>(`${this.apiUrlAssets}/${id}`);
  }
  
  create(asset: Partial<Asset>): Observable<Asset> {
    return this.http.post<Asset>(this.apiUrlAssets, asset);
  }
  
  update(id: number, asset: Partial<Asset>): Observable<Asset> {
    return this.http.put<Asset>(`${this.apiUrlAssets}/${id}`, asset);
  }
  
  getMapPins(): Observable<MapPin[]> {
    return this.http.get<ApiResponse<ApiMapPin[]>>(`${this.apiUrl}/dashboards/map-pins`).pipe(
      map(response => Array.isArray(response?.data)
        ? response.data.map(pin => ({
            assetId: pin.asset_id,
            name: pin.name,
            status: pin.status,
            latitude: Number(pin.latitude),
            longitude: Number(pin.longitude)
          }))
        : [])
    );
  }
  
  getRecentInspections(): Observable<RecentInspection[]> {
    return this.http.get<ApiResponse<{ items: ApiInspection[] }>>(
      `${this.apiUrl}/inspections?limit=10&orderBy=created_at:desc`
    ).pipe(
      map(response => Array.isArray(response?.data?.items)
        ? response.data.items.map(inspection => ({
            id: inspection.id,
            assetName: inspection.asset_name,
            inspectionType: inspection.inspection_type,
            conditionStatus: inspection.condition_status,
            date: inspection.created_at
          }))
        : [])
    );
  }
  
  search(searchTerm: string): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.apiUrlAssets}/search?q=${searchTerm}`);
  }
}
