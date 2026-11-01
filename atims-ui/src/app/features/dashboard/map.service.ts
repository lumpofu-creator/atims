import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MapPin } from './map-pin.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private pinsSubject = new BehaviorSubject<MapPin[]>([]);
  pins$ = this.pinsSubject.asObservable();
  
  constructor(private http: HttpClient) {}
  
  loadPins(): Observable<MapPin[]> {
    return this.http.get<MapPin[]>('/api/dashboards/map-pins').pipe(
      tap(pins => this.pinsSubject.next(pins))
    );
  }
  
  refreshPins(): void {
    this.loadPins().subscribe();
  }
}
