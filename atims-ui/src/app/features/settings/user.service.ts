import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/auth/auth.service';

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
  
  constructor(private http: HttpClient, private auth: AuthService) {}
  
  getCurrentUser(): Observable<User> {
    return this.http.get<{ data?: User } | User>(`${this.apiUrl}/me`).pipe(
      map(response => {
        const user = 'data' in response && response.data ? response.data : response as User;
        return { ...user, username: user.username || (user as any).name || '' };
      })
    );
  }
  
  updateProfile(data: Partial<User>): Observable<User> {
    return this.http.put<{ data?: User } | User>(`${this.apiUrl}/me`, { ...data, name: data.username }).pipe(
      map(response => {
        const user = 'data' in response && response.data ? response.data : response as User;
        return { ...user, username: user.username || (user as any).name || '' };
      })
    );
  }
  
  logout(): void {
    this.auth.logout();
  }
  
  updateMFA(mfa_enabled: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/me/mfa`, { mfa_enabled });
  }
}
