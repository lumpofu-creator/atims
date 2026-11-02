import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Kpi } from './kpi.model';
import { environment } from '../../../environments/environment';

interface ApiKpi {
  total_portfolio_value: number;
  operational_health_rate: number;
  capital_at_risk: number;
  total_assets: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private kpiSubject = new BehaviorSubject<Kpi | null>(null);
  kpi$ = this.kpiSubject.asObservable();
  private apiUrl = `${environment.apiBase}/dashboards/kpi`;
  
  constructor(private http: HttpClient) {}
  
  getKpi(): Observable<Kpi> {
    return this.http.get<ApiResponse<ApiKpi>>(`${this.apiUrl}`).pipe(
      map(response => ({
        totalValue: Number(response.data.total_portfolio_value),
        healthRate: Number(response.data.operational_health_rate),
        capitalAtRisk: Number(response.data.capital_at_risk),
        totalAssets: Number(response.data.total_assets),
      })),
      tap(data => this.kpiSubject.next(data)),
      shareReplay(1)
    );
  }
  
  refreshKpi(): void {
    this.getKpi().subscribe();
  }
}
