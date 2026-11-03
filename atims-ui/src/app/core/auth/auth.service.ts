import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AuthUser {
  id: number;
  name?: string;
  username?: string;
  email: string;
  role?: string | null;
}

interface AuthResponse {
  success: boolean;
  data: { token: string; expires_at?: string; user: AuthUser };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = `${environment.apiBase}/auth`;
  private readonly tokenKey = 'token';
  private readonly userKey = 'atims_user';

  constructor(private http: HttpClient, private router: Router) {}

  get token(): string | null {
    return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);
  }

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  get currentUser(): AuthUser | null {
    const serialized = localStorage.getItem(this.userKey) || sessionStorage.getItem(this.userKey);
    if (!serialized) return null;
    try {
      return JSON.parse(serialized) as AuthUser;
    } catch {
      this.clearSession();
      return null;
    }
  }

  login(username: string, password: string, rememberMe = true): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password, remember: rememberMe }).pipe(
      tap(response => {
        this.clearSession();
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem(this.tokenKey, response.data.token);
        storage.setItem(this.userKey, JSON.stringify(response.data.user));
      })
    );
  }

  logout(): void {
    const clearAndRedirect = () => {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.userKey);
      sessionStorage.removeItem(this.tokenKey);
      sessionStorage.removeItem(this.userKey);
      this.router.navigate(['/login']);
    };
    
    if (!this.isAuthenticated) {
      clearAndRedirect();
      return;
    }
    
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      next: clearAndRedirect,
      error: clearAndRedirect
    });
  }

  clearSession(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userKey);
  }
}
