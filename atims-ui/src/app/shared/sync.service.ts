import { Injectable } from '@angular/core';
import { OfflineService } from './offline-sync/offline.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private syncSubscription?: Subscription;
  private isSyncing = false;
  
  constructor(
    private offlineService: OfflineService,
    private http: HttpClient
  ) {}
  
  /**
   * Start automatic sync when online
   */
  startAutoSync(): void {
    // Check connection every 30 seconds
    this.syncSubscription = interval(30000).subscribe(() => {
      this.syncIfOnline();
    });
    
    // Also check immediately on start
    this.syncIfOnline();
  }
  
  /**
   * Stop automatic sync
   */
  stopAutoSync(): void {
    this.syncSubscription?.unsubscribe();
  }
  
  /**
   * Manual sync
   */
  syncNow(): void {
    this.syncIfOnline();
  }
  
  /**
   * Sync if online
   */
  private syncIfOnline(): void {
    if (!this.isSyncing && this.offlineService.isOnline()) {
      this.sync();
    }
  }
  
  /**
   * Perform sync
   */
  private sync(): void {
    this.isSyncing = true;
    
    this.offlineService.sync().subscribe({
      next: (results) => {
        console.log('Sync completed:', results);
        
        // Clear offline data if all synced successfully
        if (results.every((r: any) => r.success)) {
          this.offlineService.clear();
        }
        
        this.isSyncing = false;
      },
      error: (error) => {
        console.error('Sync failed:', error);
        this.isSyncing = false;
      }
    });
  }
}
