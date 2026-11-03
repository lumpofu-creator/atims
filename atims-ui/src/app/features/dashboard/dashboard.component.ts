import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AssetService, RecentInspection } from '../assets/asset.service';
import { KpiService } from './kpi.service';
import { Kpi } from './kpi.model';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapPin } from './map-pin.model';
import { AppPreferencesService } from '../../core/preferences/app-preferences.service';
import { TranslatePipe } from '../../core/preferences/translate.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MapComponent, TranslatePipe],
  templateUrl: './dashboard.component.html',
  styles: [`
    .dashboard-kpis {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .dashboard-kpi {
      min-width: 0;
    }

    .dashboard-kpi-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 176px;
      height: 100%;
      padding: 1.5rem;
      background: var(--surface-card, #fff);
      border: 1px solid var(--surface-border, #e2e8f0);
      border-radius: 12px;
      box-shadow: 0 2px 8px rgb(15 23 42 / 4%);
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .dashboard-kpi-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgb(15 23 42 / 8%);
    }

    .dashboard-kpi-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }

    .dashboard-kpi-label {
      margin: 0 0 0.9rem;
      color: var(--text-color-secondary, #64748b);
      font-size: 1rem;
      font-weight: 500;
    }

    .dashboard-kpi-value {
      color: var(--text-color, #1e293b);
      font-size: clamp(1.5rem, 2vw, 2rem);
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.025em;
    }

    .dashboard-kpi-value--risk {
      color: #e5484d;
    }

    .dashboard-kpi-icon {
      display: grid;
      width: 2.8rem;
      height: 2.8rem;
      flex: 0 0 2.8rem;
      place-items: center;
      border-radius: 10px;
      font-size: 1.2rem;
    }

    .dashboard-kpi-icon--blue {
      color: #2563eb;
      background: #e8f0ff;
    }

    .dashboard-kpi-icon--green {
      color: #059669;
      background: #dcfce7;
    }

    .dashboard-kpi-icon--orange {
      color: #ea580c;
      background: #ffedd5;
    }

    .dashboard-kpi-caption {
      margin: 1rem 0 0;
      color: var(--text-color-secondary, #64748b);
      font-size: 0.875rem;
    }

    @media (max-width: 1100px) {
      .dashboard-kpis {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .dashboard-kpis {
        grid-template-columns: minmax(0, 1fr);
      }
    }
  `]
})
export class DashboardComponent implements OnInit, OnDestroy {
  readonly preferences = inject(AppPreferencesService);
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
