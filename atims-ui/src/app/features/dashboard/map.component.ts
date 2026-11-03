import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { MapPin } from './map-pin.model';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="map-panel" aria-labelledby="asset-map-title">
      <header class="map-header">
        <div>
          <h2 id="asset-map-title">Asset Locations</h2>
          <p>Explore assets by their reported coordinates.</p>
        </div>
        <span class="map-count">{{ validPins.length }} mapped</span>
      </header>

      <div #mapContainer class="map-canvas" role="region" aria-label="Interactive map of asset locations"></div>

      <div class="map-empty" *ngIf="validPins.length === 0" role="status">
        No assets with valid coordinates are available to display.
      </div>

      <div class="map-legend" aria-label="Asset status legend">
        <span><i class="legend-dot legend-dot--functional"></i>Functional</span>
        <span><i class="legend-dot legend-dot--out-of-service"></i>Out of Service</span>
        <span><i class="legend-dot legend-dot--decommissioned"></i>Decommissioned</span>
        <span><i class="legend-dot legend-dot--unknown"></i>Unknown</span>
      </div>
    </section>
  `,
  styles: [`
    .map-panel {
      overflow: hidden;
      border: 1px solid var(--surface-border, #e2e8f0);
      border-radius: 12px;
      background: var(--surface-card, #fff);
    }

    .map-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.25rem 1.5rem;
    }

    .map-header h2 {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
    }

    .map-header p {
      margin: 0.35rem 0 0;
      color: var(--text-color-secondary, #64748b);
      font-size: 0.875rem;
    }

    .map-count {
      flex: 0 0 auto;
      padding: 0.4rem 0.7rem;
      border-radius: 999px;
      background: var(--surface-ground, #f1f5f9);
      color: var(--text-color-secondary, #64748b);
      font-size: 0.8rem;
      font-weight: 600;
    }

    .map-canvas {
      width: 100%;
      height: clamp(300px, 42vw, 480px);
      background: #e8eef3;
      z-index: 0;
    }

    .map-empty {
      padding: 0.75rem 1.5rem;
      color: var(--text-color-secondary, #64748b);
      font-size: 0.875rem;
    }

    .map-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem 1.25rem;
      padding: 1rem 1.5rem;
      color: var(--text-color-secondary, #64748b);
      font-size: 0.8125rem;
    }

    .map-legend span {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
    }

    .legend-dot {
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
    }

    .legend-dot--functional { background: #16a34a; }
    .legend-dot--out-of-service { background: #dc2626; }
    .legend-dot--decommissioned { background: #f59e0b; }
    .legend-dot--unknown { background: #64748b; }

    @media (max-width: 640px) {
      .map-header { padding: 1rem; }
      .map-legend { padding: 0.875rem 1rem; }
    }
  `]
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') private mapContainer!: ElementRef<HTMLDivElement>;

  private map?: L.Map;
  private markerLayer?: L.LayerGroup;
  private _pins: MapPin[] = [];

  @Input()
  set pinsInput(value: MapPin[] | null | undefined) {
    this._pins = Array.isArray(value) ? value : [];
    this.renderPins(true);
  }

  get pinsInput(): MapPin[] {
    return this._pins;
  }

  get validPins(): MapPin[] {
    return this._pins.filter(pin =>
      Number.isFinite(pin.latitude) &&
      Number.isFinite(pin.longitude) &&
      pin.latitude >= -90 && pin.latitude <= 90 &&
      pin.longitude >= -180 && pin.longitude <= 180
    );
  }

  ngAfterViewInit(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      scrollWheelZoom: true
    }).setView([-29, 24], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.markerLayer = L.layerGroup().addTo(this.map);
    this.renderPins(true);
    this.map.on('zoomend moveend', this.refreshClusters);
    requestAnimationFrame(() => this.map?.invalidateSize());
  }

  ngOnDestroy(): void {
    this.map?.remove();
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

  private refreshClusters = (): void => this.renderPins();

  private renderPins(fitToPins = false): void {
    if (!this.map || !this.markerLayer) {
      return;
    }

    const pins = this.validPins;
    this.markerLayer.clearLayers();

    const groups: MapPin[][] = [];
    const points = pins.map(pin => ({
      pin,
      point: this.map!.latLngToLayerPoint([pin.latitude, pin.longitude])
    }));

    for (const item of points) {
      const group = groups.find(candidate => {
        const first = candidate[0];
        const firstPoint = this.map!.latLngToLayerPoint([first.latitude, first.longitude]);
        return firstPoint.distanceTo(item.point) < 36;
      });
      if (group) group.push(item.pin);
      else groups.push([item.pin]);
    }

    for (const group of groups) {
      if (group.length > 1) {
        const center = this.getGroupCenter(group);
        L.marker(center, { icon: this.createClusterIcon(group.length) })
          .bindPopup(this.createClusterPopup(group))
          .on('click', () => {
            const bounds = L.latLngBounds(group.map(pin => [pin.latitude, pin.longitude] as L.LatLngTuple));
            if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
              this.map?.setView(center, Math.min((this.map.getZoom() ?? 5) + 3, 18));
            } else {
              this.map?.fitBounds(bounds, { padding: [80, 80], maxZoom: 18 });
            }
          })
          .addTo(this.markerLayer);
        continue;
      }

      const pin = group[0];
      L.circleMarker([pin.latitude, pin.longitude], {
        radius: 9,
        color: '#ffffff',
        weight: 3,
        fillColor: this.getStatusColor(pin.status),
        fillOpacity: 1
      })
        .bindPopup(this.createPopup(pin))
        .addTo(this.markerLayer);
    }

    if (!fitToPins) return;

    if (pins.length === 1) {
      this.map.setView([pins[0].latitude, pins[0].longitude], 12);
    } else if (pins.length > 1) {
      const bounds = L.latLngBounds(pins.map(pin => [pin.latitude, pin.longitude] as L.LatLngTuple));
      this.map.fitBounds(bounds, { padding: [32, 32], maxZoom: 12 });
    }
  }

  private getGroupCenter(group: MapPin[]): L.LatLng {
    const lat = group.reduce((sum, pin) => sum + pin.latitude, 0) / group.length;
    const lng = group.reduce((sum, pin) => sum + pin.longitude, 0) / group.length;
    return L.latLng(lat, lng);
  }

  private createClusterIcon(count: number): L.DivIcon {
    return L.divIcon({
      className: 'asset-cluster-icon',
      html: `<span style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;border:3px solid #fff;border-radius:50%;background:#0f9f75;color:#fff;font-size:14px;font-weight:700;box-shadow:0 2px 8px #0004">${count}</span>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });
  }

  private createClusterPopup(group: MapPin[]): HTMLElement {
    const content = document.createElement('div');
    const heading = document.createElement('strong');
    heading.textContent = `${group.length} assets at this location`;
    const list = document.createElement('ul');
    list.style.margin = '0.5rem 0 0';
    list.style.paddingLeft = '1.25rem';
    for (const pin of group) {
      const item = document.createElement('li');
      item.textContent = `${pin.name || 'Unnamed asset'} — ${this.getStatusLabel(pin.status)}`;
      list.appendChild(item);
    }
    content.append(heading, list);
    return content;
  }

  private getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'Fonctionnel': '#16a34a',
      'En Panne': '#dc2626',
      'Déclassé': '#f59e0b',
      'Inconnu': '#64748b'
    };
    return colors[status] ?? colors['Inconnu'];
  }

  private createPopup(pin: MapPin): HTMLElement {
    const content = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = pin.name || 'Unnamed asset';
    const status = document.createElement('div');
    status.textContent = `Status: ${this.getStatusLabel(pin.status)}`;
    const coordinates = document.createElement('div');
    coordinates.textContent = `${pin.latitude.toFixed(5)}, ${pin.longitude.toFixed(5)}`;
    content.append(name, status, coordinates);
    return content;
  }
}
