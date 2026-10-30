import { Component, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';

@Component({
  selector: 'app-qr-scanner',
  template: `
    <div #scannerContainer class="qr-scanner-container"></div>
    <div class="qr-scanner-overlay" *ngIf="isScanning">
      <div class="qr-scanner-visual">
        <div class="qr-scanner-target"></div>
      </div>
    </div>
  `,
  styles: [`
    .qr-scanner-container {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
    }
    
    .qr-scanner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .qr-scanner-visual {
      position: relative;
      width: 300px;
      height: 300px;
    }
    
    .qr-scanner-target {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid #00e676;
      animation: scan 2s infinite linear;
    }
    
    @keyframes scan {
      0% {
        top: 0;
        height: 0;
      }
      50% {
        height: 100%;
      }
      100% {
        top: 100%;
        height: 0;
      }
    }
  `]
})
export class QrScannerComponent implements OnInit, OnDestroy {
  @Output() qrScanSuccess = new EventEmitter<string>();
  @Output() qrScanError = new EventEmitter<string>();
  @Output() qrScanDone = new EventEmitter<void>();
  
  private html5QrcodeScanner?: Html5QrcodeScannerState;
  private isScanning = false;
  
  constructor(private elRef: ElementRef) {}
  
  ngOnInit(): void {
    this.isScanning = true;
    this.startScanner();
  }
  
  ngOnDestroy(): void {
    this.stopScanner();
  }
  
  private startScanner(): void {
    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    };
    
    this.html5QrcodeScanner = new Html5Qrcode('scannerContainer', config);
    
    this.html5QrcodeScanner.start(
      { facingMode: 'environment' },
      config,
      (decodedText) => {
        this.onScanSuccess(decodedText);
      },
      (errorMessage) => {
        // No action, just keep scanning
      }
    ).catch((error) => {
      this.qrScanError.emit('Impossible d\'accéder à la caméra: ' + error);
    });
  }
  
  private stopScanner(): void {
    if (this.html5QrcodeScanner) {
      this.html5QrcodeScanner.stop().catch(console.error);
      this.html5QrcodeScanner = undefined;
    }
  }
  
  private onScanSuccess(decodedText: string): void {
    this.qrScanSuccess.emit(decodedText);
    this.stopScanner();
    this.qrScanDone.emit();
  }
}
