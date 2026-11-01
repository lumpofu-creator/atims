import { Component, OnInit, OnDestroy, ElementRef, Input } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './map.service';
import { MapPin } from './map-pin.model';

@Component({
  selector: 'app-map',
  template: `
    <div #mapContainer class="map-container"></div>
  `,
  styles: [`
    .map-container {
      height: 100%;
      width: 100%;
    }
  `]
})
export class MapComponent implements OnInit, OnDestroy {
  private map!: L.Map;
  private markers: Map<number, L.Marker> = new Map();
  private icons: Map<string, L.Icon> = new Map();
  
  private currentPins: MapPin[] = [];

  @Input()
  set pinsInput(value: MapPin[] | null | undefined) {
    this.currentPins = Array.isArray(value) ? value : [];
    if (this.map) {
      this.updatePins();
    }
  }

  get pinsInput(): MapPin[] {
    return this.currentPins;
  }
  
  constructor(
    private elRef: ElementRef,
    private mapService: MapService
  ) {}
  
  ngOnInit(): void {
    this.createIcons();
    this.initMap();
  }
  
  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
  
  private createIcons(): void {
    // Green pin for Fonctionnel
    this.icons.set('Fonctionnel', L.icon({
      iconUrl: '/assets/icons/green-pin.svg',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    }));
    
    // Red pin for En Panne
    this.icons.set('En Panne', L.icon({
      iconUrl: '/assets/icons/red-pin.svg',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    }));
    
    // Gray pin for other statuses
    this.icons.set('Déclassé', L.icon({
      iconUrl: '/assets/icons/gray-pin.svg',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    }));
    
    this.icons.set('Inconnu', this.icons.get('Déclassé')!);
  }
  
  private initMap(): void {
    this.map = L.map(this.elRef.nativeElement.querySelector('.map-container')).setView([48.8566, 2.3522], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(this.map);
    
    this.updatePins();
  }
  
  private updatePins(): void {
    // Remove pins not in new data
    this.markers.forEach((marker, id) => {
      if (!this.pinsInput.find(p => p.assetId === id)) {
        this.map.removeLayer(marker);
        this.markers.delete(id);
      }
    });
    
    // Add/update pins
    this.pinsInput.forEach(pin => {
      const existingPin = this.markers.get(pin.assetId);
      
      if (existingPin) {
        // Update position if changed
        const newPos = L.latLng(pin.latitude, pin.longitude);
        if (!existingPin.getLatLng().equals(newPos)) {
          existingPin.setLatLng(newPos);
        }
        
        // Update icon if status changed
        const newIcon = this.icons.get(pin.status) || this.icons.get('Inconnu')!;
        existingPin.setIcon(newIcon);
      } else {
        const marker = L.marker([pin.latitude, pin.longitude], {
          icon: this.icons.get(pin.status) || this.icons.get('Inconnu')!
        }).addTo(this.map);
        
        marker.bindTooltip(`${pin.name} (${pin.status})`);
        
        this.markers.set(pin.assetId, marker);
      }
    });
  }
}
