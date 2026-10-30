import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfflineService } from '../offline-sync/offline.service';

@Component({
  selector: 'app-offline-indicator',
  template: `
    <div 
      class="offline-banner"
      *ngIf="isOffline"
      role="alert"
    >
      <div class="offline-banner-content">
        <span class="offline-icon">📡</span>
        <span class="offline-text">Mode hors-ligne - Les données seront synchronisées automatiquement</span>
        <button class="offline-btn" (click)="syncNow()">Synchroniser maintenant</button>
      </div>
    </div>
  `,
  styles: [`
    .offline-banner {
      background: #ff9800;
      color: white;
      padding: 1rem;
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .offline-banner-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .offline-icon {
      font-size: 1.5rem;
    }
    
    .offline-text {
      flex-grow: 1;
      text-align: center;
    }
    
    .offline-btn {
      background: white;
      color: #ff9800;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
    }
    
    .offline-btn:hover {
      background: #f0f0f0;
    }
  `]
})
export class OfflineIndicatorComponent implements OnInit, OnDestroy {
  isOffline = false;
  private subscription?: Subscription;
  
  constructor(private offlineService: OfflineService) {}
  
  ngOnInit(): void {
    // Check connection status
    this.updateConnectionStatus();
    
    // Listen to online/offline events
    window.addEventListener('online', () => this.updateConnectionStatus());
    window.addEventListener('offline', () => this.updateConnectionStatus());
    
    // Subscribe to offline inspections count
    this.subscription = this.offlineService.inspections$.subscribe(inspections => {
      if (inspections.length > 0 && this.offlineService.isOnline()) {
        this.isOffline = false;
      }
    });
  }
  
  ngOnDestroy(): void {
    window.removeEventListener('online', () => this.updateConnectionStatus());
    window.removeEventListener('offline', () => this.updateConnectionStatus());
    this.subscription?.unsubscribe();
  }
  
  private updateConnectionStatus(): void {
    this.isOffline = !this.offlineService.isOnline();
  }
  
  syncNow(): void {
    // Trigger sync manually
    this.isOffline = false;
  }
}
