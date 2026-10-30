import { Component, OnInit } from '@angular/core';
import { AssetService, Asset } from './asset.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-assets',
  template: `
    <div class="container">
      <h1>Gestion des Actifs</h1>
      
      <!-- Search -->
      <div class="mb-3">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Rechercher un actif..."
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
                  <th>ID État</th>
                  <th>Nom</th>
                  <th>Catégorie</th>
                  <th>Statut</th>
                  <th>Valeur</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let asset of assets">
                  <td>{{ asset.stateId }}</td>
                  <td>{{ asset.name }}</td>
                  <td>{{ asset.category }}</td>
                  <td>
                    <span class="status-badge" [class]="'status-' + asset.currentStatus.toLowerCase().replace('é', 'e')">
                      {{ asset.currentStatus }}
                    </span>
                  </td>
                  <td>{{ asset.currentValue | currency:'EUR':'symbol':'1.0-0' }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary" routerLink="/assets/{{ asset.id }}">
                      Détails
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
        Nouvel Actif
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
}
