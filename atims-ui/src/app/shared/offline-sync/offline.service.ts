import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface OfflineInspection {
  id: string;
  assetId: number;
  inspectionType: string;
  conditionStatus: string;
  fieldNotes: string;
  verificationImage: string | null;
  deviceLatitude: number;
  deviceLongitude: number;
  deviceTimestamp: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
  private inspectionsSubject = new BehaviorSubject<OfflineInspection[]>([]);
  inspections$ = this.inspectionsSubject.asObservable();
  
  constructor(private http: HttpClient) {}
  
  /**
   * Save inspection to local storage when offline
   */
  saveForLater(inspection: Partial<OfflineInspection>): string {
    const existing = this.getAll();
    const id = `offline-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const newInspection: OfflineInspection = {
      id,
      assetId: inspection.assetId!,
      inspectionType: inspection.inspectionType!,
      conditionStatus: inspection.conditionStatus!,
      fieldNotes: inspection.fieldNotes || '',
      verificationImage: inspection.verificationImage || null,
      deviceLatitude: inspection.deviceLatitude!,
      deviceLongitude: inspection.deviceLongitude!,
      deviceTimestamp: inspection.deviceTimestamp || new Date().toISOString(),
      createdAt: new Date().toISOString()
    };
    
    const inspections = [...existing, newInspection];
    localStorage.setItem('offline-inspections', JSON.stringify(inspections));
    
    this.inspectionsSubject.next(inspections);
    
    return id;
  }
  
  /**
   * Get all offline inspections
   */
  getAll(): OfflineInspection[] {
    const data = localStorage.getItem('offline-inspections');
    return data ? JSON.parse(data) : [];
  }
  
  /**
   * Delete inspection from local storage
   */
  delete(id: string): void {
    const inspections = this.getAll().filter(i => i.id !== id);
    localStorage.setItem('offline-inspections', JSON.stringify(inspections));
    this.inspectionsSubject.next(inspections);
  }
  
  /**
   * Sync offline inspections to server
   */
  sync(): Observable<any[]> {
    const inspections = this.getAll();
    
    if (inspections.length === 0) {
      return new Observable(obs => {
        obs.next([]);
        obs.complete();
      });
    }
    
    return this.http.post('/api/inspections/bulk-sync', { inspections });
  }
  
  /**
   * Clear all offline data after successful sync
   */
  clear(): void {
    localStorage.removeItem('offline-inspections');
    this.inspectionsSubject.next([]);
  }
  
  /**
   * Check if device is online
   */
  isOnline(): boolean {
    return navigator.onLine;
  }
}
