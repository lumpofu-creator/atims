import { Component, OnInit } from '@angular/core';
import { AssetService, Asset } from './asset.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-assets',
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container">
      <h1>Asset Management</h1>
      
      <!-- Search -->
      <div class="mb-3">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Search assets..."
          [(ngModel)]="searchTerm"
          (ngModelChange)="onSearch()"
        />
      </div>
      
      <!-- Asset List -->
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>State ID</th>
                  <th>Nom</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Value</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let asset of assets">
                  <td>{{ asset.stateId }}</td>
                  <td>{{ asset.name }}</td>
                  <td>{{ asset.category }}</td>
                  <td>
                    <span class="status-badge" [class]="'status-' + getStatusClass(asset.currentStatus)">
                      {{ getStatusLabel(asset.currentStatus) }}
                    </span>
                  </td>
                  <td>{{ asset.currentValue | currency:'EUR':'symbol':'1.0-0' }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary" routerLink="/assets/{{ asset.id }}">
                      Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <!-- Add Asset Button -->
      <button class="btn btn-primary mt-3" routerLink="/assets/new">
        Add Asset
      </button>
    </div>
  `
})
export class AssetsComponent implements OnInit {
  assets: Asset[] = [];
  searchTerm = '';
  
  constructor(private assetService: AssetService) {}
  
  ngOnInit(): void {
    this.loadAssets();
  }
  
  loadAssets(): void {
    this.assetService.getAll().subscribe(assets => {
      this.assets = assets;
    });
  }
  
  onSearch(): void {
    if (this.searchTerm) {
      this.assetService.search(this.searchTerm).subscribe(assets => {
        this.assets = assets;
      });
    } else {
      this.loadAssets();
    }
  }

  getStatusLabel(status: Asset['currentStatus']): string {
    const labels: Record<Asset['currentStatus'], string> = {
      'Fonctionnel': 'Functional',
      'En Panne': 'Out of Service',
      'Déclassé': 'Decommissioned',
      'Inconnu': 'Unknown'
    };
    return labels[status] ?? status;
  }

  getStatusClass(status: Asset['currentStatus']): string {
    const classes: Record<Asset['currentStatus'], string> = {
      'Fonctionnel': 'functional',
      'En Panne': 'out-of-service',
      'Déclassé': 'decommissioned',
      'Inconnu': 'unknown'
    };
    return classes[status] ?? 'unknown';
  }
}
