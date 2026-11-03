import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  description: string | null;
  category: string | null;
  registeredLocation?: string | null;
  latitude: number | null;
  longitude: number | null;
  currentStatus: 'Fonctionnel' | 'En Panne' | 'Déclassé' | 'Inconnu';
  purchaseValue?: number | null;
  currentValue: number;
  locationText?: string;
}

export interface AssetDetails extends Asset {
  categoryId: number;
  acquisitionDate: string | null;
  parentAssetId: number | null;
}

export type AssetUpdate = Partial<Pick<AssetDetails,
  'name' | 'description' | 'categoryId' | 'currentStatus' | 'currentValue' |
  'registeredLocation' | 'acquisitionDate' | 'latitude' | 'longitude' | 'parentAssetId'
>>;

export interface AssetCreate {
  stateId?: string;
  name: string;
  description: string | null;
  categoryId: number;
  currentStatus: Asset['currentStatus'];
  currentValue: number;
  purchaseValue?: number | null;
  registeredLocation?: string | null;
  acquisitionDate?: string | null;
  latitude: number;
  longitude: number;
  parentAssetId?: number | null;
}

export interface AssetPage {
  items: Asset[];
  total: number;
}

export interface Category {
  id: number;
  name: string;
  code: string | null;
  tier: string | null;
  parentId: number | null;
}

interface ApiCategory {
  id: number;
  name: string;
  code: string | null;
  tier: string | null;
  parent_id: number | null;
}

interface ApiAsset {
  id: number;
  state_id: string;
  name: string;
  description: string | null;
  current_status: Asset['currentStatus'];
  latitude: string | number | null;
  longitude: string | number | null;
  category_id: number;
  category_name: string | null;
  current_value: string | number;
  registered_location?: string | null;
  acquisition_date?: string | null;
  purchase_value?: string | number | null;
  parent_asset_id?: number | null;
}

interface ApiAssetPage {
  items: ApiAsset[];
  pagination: { total: number };
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
  
  getAll(page = 1, limit = 10, searchTerm = ''): Observable<AssetPage> {
    let params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    if (searchTerm) params = params.set('search', searchTerm);

    return this.http.get<ApiResponse<ApiAssetPage>>(this.apiUrlAssets, { params }).pipe(
      map(response => ({
        items: Array.isArray(response?.data?.items)
          ? response.data.items.map(asset => this.mapAsset(asset))
          : [],
        total: Number(response?.data?.pagination?.total ?? 0)
      }))
    );
  }
  
  getCategories(tier?: string): Observable<Category[]> {
    let params = new HttpParams();
    if (tier) params = params.set('tier', tier);

    return this.http.get<ApiResponse<ApiCategory[]>>(`${this.apiUrl}/categories`, { params }).pipe(
      map(response => Array.isArray(response?.data)
        ? response.data.map(category => ({
            id: category.id,
            name: category.name,
            code: category.code ?? null,
            tier: category.tier ?? null,
            parentId: category.parent_id ?? null
          }))
        : [])
    );
  }

  getById(id: number): Observable<AssetDetails> {    return this.http.get<ApiResponse<ApiAsset>>(`${this.apiUrlAssets}/${id}`).pipe(
      map(response => this.mapAsset(response.data) as AssetDetails)
    );
  }
  
  create(asset: AssetCreate): Observable<number> {
    const payload = {
      state_id: asset.stateId || undefined,
      name: asset.name,
      description: asset.description,
      category_id: asset.categoryId,
      current_status: asset.currentStatus,
      current_value: asset.currentValue,
      purchase_value: asset.purchaseValue,
      registered_location: asset.registeredLocation,
      acquisition_date: asset.acquisitionDate,
      latitude: asset.latitude,
      longitude: asset.longitude,
      parent_asset_id: asset.parentAssetId
    };
    return this.http.post<{ id: number }>(this.apiUrlAssets, payload).pipe(
      map(response => response.id)
    );
  }
  
  update(id: number, asset: AssetUpdate): Observable<void> {
    const payload = {
      name: asset.name,
      description: asset.description,
      category_id: asset.categoryId,
      current_status: asset.currentStatus,
      current_value: asset.currentValue,
      registered_location: asset.registeredLocation,
      acquisition_date: asset.acquisitionDate,
      latitude: asset.latitude,
      longitude: asset.longitude,
      parent_asset_id: asset.parentAssetId
    };
    return this.http.put<ApiResponse<unknown>>(`${this.apiUrlAssets}/${id}`, payload).pipe(
      map(() => undefined)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<ApiResponse<unknown>>(`${this.apiUrlAssets}/${id}`).pipe(
      map(() => undefined)
    );
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
  
  private mapAsset(asset: ApiAsset): AssetDetails {
    const status = asset.current_status;
    const latitude = asset.latitude === null ? null : Number(asset.latitude);
    const longitude = asset.longitude === null ? null : Number(asset.longitude);
    return {
      id: asset.id,
      stateId: asset.state_id,
      name: asset.name,
      description: asset.description,
      category: asset.category_name,
      categoryId: asset.category_id,
      registeredLocation: asset.registered_location ?? null,
      acquisitionDate: asset.acquisition_date ?? null,
      purchaseValue: asset.purchase_value == null ? null : Number(asset.purchase_value),
      parentAssetId: asset.parent_asset_id ?? null,
      latitude,
      longitude,
      locationText: latitude === null || longitude === null ? '' : `${latitude}, ${longitude}`,
      currentStatus: status in { 'Fonctionnel': true, 'En Panne': true, 'Déclassé': true, 'Inconnu': true }
        ? status
        : 'Inconnu',
      currentValue: Number(asset.current_value)
    };
  }
}
