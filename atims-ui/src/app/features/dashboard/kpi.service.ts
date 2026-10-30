import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Kpi {
  totalValue: number;
  healthRate: number;
  capitalAtRisk: number;
}

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private kpiSubject = new BehaviorSubject<Kpi | null>(null);
  kpi$ = this.kpiSubject.asObservable();
  
  constructor(private http: HttpClient) {}
  
  getKpi(): Observable<Kpi> {
    return this.http.get<Kpi>('/api/dashboards/kpi').pipe(
      tap(data => this.kpiSubject.next(data)),
      shareReplay(1)
    );
  }
  
  refreshKpi(): void {
    this.getKpi().subscribe();
  }
}
