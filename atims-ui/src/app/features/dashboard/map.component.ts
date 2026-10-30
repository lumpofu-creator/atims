import { Component, OnInit, OnDestroy, ElementRef, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './map.service';

export interface MapPin {
  assetId: number;
  name: string;
  status: string;
  latitude: number;
  longitude: number;
}

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
  private pins: Map<number, L.Marker> = new Map();
  private icons: Map<string, L.Icon> = new Map();
  
  @Input() pinsInput: MapPin[] = [];
  
  constructor(
    private elRef: ElementRef,
    private mapService: MapService
  ) {}
  
  ngOnInit(): void {
    this.createIcons();
    this.initMap();
  }
  
  ngOnChanges(): void {
    this.updatePins();
  }
  
  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
  
  private createIcons(): void {
    // Green pin for Fonctionnel
    this.icons.set('Fonctionnel', L.icon({
      iconUrl: '/assets/icons/green-pin.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: '/assets/icons/pin-shadow.png',
      shadowSize: [41, 41]
    }));
    
    // Red pin for En Panne
    this.icons.set('En Panne', L.icon({
      iconUrl: '/assets/icons/red-pin.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: '/assets/icons/pin-shadow.png',
      shadowSize: [41, 41]
    }));
    
    // Gray pin for other statuses
    this.icons.set('Déclassé', L.icon({
      iconUrl: '/assets/icons/gray-pin.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: '/assets/icons/pin-shadow.png',
      shadowSize: [41, 41]
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
    this.pins.forEach((marker, id) => {
      if (!this.pinsInput.find(p => p.assetId === id)) {
        this.map.removeLayer(marker);
        this.pins.delete(id);
      }
    });
    
    // Add/update pins
    this.pinsInput.forEach(pin => {
      const existingPin = this.pins.get(pin.assetId);
      
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
        
        this.pins.set(pin.assetId, marker);
      }
    });
  }
}
