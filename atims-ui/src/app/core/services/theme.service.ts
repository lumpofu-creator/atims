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
