import { Component, Input } from '@angular/core';
import { MapPin } from './map-pin.model';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-map',
  imports: [NgIf, NgFor],
  template: `
    <div class="map-placeholder">
      <h4>Map Placeholder</h4>
      <p>Leaflet map would be displayed here</p>
      <div class="pins-info" *ngIf="pinsInput.length">
        <p>Pins to display: {{ pinsInput.length }}</p>
        <ul>
          <li *ngFor="let pin of pinsInput">
            {{ pin.name }} ({{ getStatusLabel(pin.status) }}): {{ pin.latitude }}, {{ pin.longitude }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .map-placeholder {
      border: 1px solid var(--p-content-border-color);
      border-radius: 8px;
      padding: 16px;
      background: var(--p-surface-card);
    }
    
    .pins-info {
      margin-top: 16px;
    }
  `]
})
export class MapComponent {
  private _pins: MapPin[] = [];

  @Input()
  set pinsInput(value: MapPin[] | null | undefined) {
    this._pins = Array.isArray(value) ? value : [];
  }

  get pinsInput(): MapPin[] {
    return this._pins;
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'Fonctionnel': 'Functional',
      'En Panne': 'Out of Service',
      'Déclassé': 'Decommissioned',
      'Inconnu': 'Unknown'
    };
    return labels[status] ?? status;
  }
}
