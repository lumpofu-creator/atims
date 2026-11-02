---
name: setup-sakai-v22
description: Integrates PrimeNG 22.1.4, PrimeIcons 8, and the modern Sakai Layout into an existing Angular 22 standalone project with dynamic themes, brand palettes, and persistent dark mode.
triggers: [primeng, sakai, layout, angular, darkmode]
always: false
---

# Instructions

### 1. Install Dependencies
Run the following npm command to install PrimeNG v22, PrimeIcons v8, and PrimeFlex utilities:
```bash
npm install primeng@^22.1.4 primeicons@^8.0.2 primeflex
```

### 2. Configure Global Stylesheet (`src/styles.scss`)
Remove any legacy theme CSS imports. Overwrite the file with the following clean architecture:
```scss
@import "primeicons/primeicons.css";
@import "primeflex/primeflex.css";

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: var(--p-font-family);
    background-color: var(--p-surface-50);
    color: var(--p-text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```

### 3. Setup Custom Theme & Brand Palette (`src/app/app.config.ts`)
Inject the modern theme provider along with async animations and a custom primary color preset map (Emerald palette):
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: false
        }
      }
    })
  ]
};
```

### 4. Create Persistent Dark Mode Service (`src/app/core/services/theme.service.ts`)
Manage global runtime appearance toggling seamlessly via Angular Signals:
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggleTheme(): void {
    if (this.isDarkMode()) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  private enableDarkMode(): void {
    this.isDarkMode.set(true);
    document.documentElement.classList.add('app-dark');
    localStorage.setItem('theme', 'dark');
  }

  private enableLightMode(): void {
    this.isDarkMode.set(false);
    document.documentElement.classList.remove('app-dark');
    localStorage.setItem('theme', 'light');
  }
}
```

### 5. Create Standalone Shell Layout (`src/app/layout/app.layout.ts`)
```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    ButtonModule
  ],
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.scss']
})
export class AppLayoutComponent {
  themeService = inject(ThemeService);
}
```

### 6. Design the Layout HTML (`src/app/layout/app.layout.component.html`)
```html
<div class="layout-wrapper flex flex-column min-h-screen">
    <!-- Header Topbar -->
    <header class="layout-topbar fixed top-0 left-0 w-full h-4rem px-4 flex align-items-center justify-content-between z-5 shadow-1" 
            style="background: var(--p-surface-card); border-bottom: 1px solid var(--p-content-border-color)">
        <div class="flex align-items-center gap-2">
            <span class="text-xl font-bold text-primary">Sakai Enterprise</span>
        </div>
        
        <div class="flex align-items-center gap-3">
            <p-button 
                [icon]="themeService.isDarkMode() ? 'pi pi-sun' : 'pi pi-moon'" 
                [text]="true" 
                [rounded]="true" 
                severity="secondary"
                (onClick)="themeService.toggleTheme()"
                aria-label="Toggle Dark Mode">
            </p-button>
            <i class="pi pi-bell text-xl cursor-pointer text-secondary"></i>
            <div class="w-2rem h-2rem border-circle bg-primary flex align-items-center justify-content-center font-bold text-xs text-white">AD</div>
        </div>
    </header>

    <div class="flex flex-1 pt-4rem">
        <!-- Sidebar Menu -->
        <aside class="layout-sidebar fixed left-0 w-15rem h-full p-3 shadow-1 hidden md:block" 
               style="background: var(--p-surface-card); border-right: 1px solid var(--p-content-border-color)">
            <ul class="list-none p-0 m-0 flex flex-column gap-1">
                <li>
                    <a routerLink="/dashboard" routerLinkActive="bg-primary-100 text-primary-900 font-semibold" class="flex align-items-center p-3 text-color hover:surface-hover border-round transition-colors no-underline cursor-pointer">
                        <i class="pi pi-home mr-3 text-lg"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a routerLink="/assets" routerLinkActive="bg-primary-100 text-primary-900 font-semibold" class="flex align-items-center p-3 text-color hover:surface-hover border-round transition-colors no-underline cursor-pointer">
                        <i class="pi pi-box mr-3 text-lg"></i>
                        <span>Assets</span>
                    </a>
                </li>
            </ul>
        </aside>

        <!-- Main Body Wrapper -->
        <main class="layout-main-container flex flex-column flex-1 ml-0 md:ml-15rem p-4" style="background: var(--p-surface-50)">
            <div class="layout-main flex-1">
                <router-outlet></router-outlet>
            </div>
        </main>
    </div>
</div>
```

### 7. Configure Application Navigation Rules (`src/app/app.routes.ts`)
Wrap existing routes cleanly beneath the new standalone application shell:
```typescript
import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'assets',
        loadComponent: () => import('./pages/assets/assets.component').then(m => m.AssetsComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
```
