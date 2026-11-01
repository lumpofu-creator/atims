import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AssetService, RecentInspection } from '../assets/asset.service';
import { KpiService } from './kpi.service';
import { Kpi } from './kpi.model';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapPin } from './map-pin.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MapComponent],
  template: `
    <div class="container">
      <h1>Dashboard</h1>
      
      <!-- KPI Cards -->
      <div class="kpi-container">
        <div class="kpi-card">
          <h3>Total Portfolio Value</h3>
          <div class="value">
            {{ kpis?.totalValue | currency:'EUR':'symbol':'1.0-0' }}
          </div>
        </div>
        <div class="kpi-card">
          <h3>Operational Health Rate</h3>
          <div class="value">
            {{ kpis?.healthRate | number:'1.1-1' }}%
          </div>
        </div>
        <div class="kpi-card">
          <h3>Capital at Risk</h3>
          <div class="value" [class.text-danger]="(kpis?.capitalAtRisk ?? 0) > 0">
            {{ kpis?.capitalAtRisk | currency:'EUR':'symbol':'1.0-0' }}
          </div>
        </div>
      </div>
      
      <!-- Map Container -->
      <div class="map-container">
        <app-map [pinsInput]="(mapPins$ | async) ?? []"></app-map>
      </div>
      
      <!-- Recent Inspections -->
      <h2>Recent Inspections</h2>
      <div *ngIf="inspections; else loading">
        <div *ngFor="let inspection of inspections" class="card mb-2">
          <div class="card-body">
            <h5 class="card-title">{{ inspection.assetName }}</h5>
            <p class="card-text">
              Type: {{ inspection.inspectionType }} | 
              Status: {{ inspection.conditionStatus }} | 
              Date: {{ inspection.date | date:'short' }}
            </p>
          </div>
        </div>
      </div>
      <ng-template #loading>
        <div class="loading-spinner">Loading...</div>
      </ng-template>
    </div>
  `
})
export class DashboardComponent implements OnInit, OnDestroy {
  kpis: Kpi | null = null;
  mapPins$!: Observable<MapPin[]>;
  inspections: RecentInspection[] = [];
  
  private subscription = new Subscription();
  
  constructor(
    private kpiService: KpiService,
    private assetService: AssetService
  ) {}
  
  ngOnInit(): void {
    this.subscription.add(
      this.kpiService.getKpi().subscribe(data => {
        this.kpis = data;
      })
    );
    
    this.mapPins$ = this.assetService.getMapPins();
    
    this.subscription.add(
      this.assetService.getRecentInspections().subscribe(data => {
        this.inspections = data;
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
