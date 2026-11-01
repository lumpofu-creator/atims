import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  id: number;
  username: string;
  email: string;
  phone?: string;
  role: string;
  mfa_enabled: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiBase}/auth`;
  
  constructor(private http: HttpClient) {}
  
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }
  
  updateProfile(data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/me`, data);
  }
  
  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      next: () => {
        localStorage.removeItem('token');
        location.href = '/login';
      },
      error: () => {
        localStorage.removeItem('token');
        location.href = '/login';
      }
    });
  }
  
  updateMFA(mfa_enabled: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/me/mfa`, { mfa_enabled });
  }
}