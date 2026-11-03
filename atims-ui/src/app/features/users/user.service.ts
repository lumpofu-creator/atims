import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export type UserRole = 'Logistics Officer' | 'Field Agent' | 'State Auditor' | 'Executive';

export const USER_ROLES: UserRole[] = ['Logistics Officer', 'Field Agent', 'State Auditor', 'Executive'];

export interface ManagedUser {
  id: number;
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  name: string;
  phone: string | null;
  role: UserRole;
}

export interface ManagedUserPage {
  items: ManagedUser[];
  total: number;
}

export interface ManagedUserCreate {
  username: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  role: UserRole;
  password: string;
}

export type ManagedUserUpdate = Partial<Omit<ManagedUserCreate, 'password'>> & {
  password?: string | null;
};

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface ApiUser {
  id: number;
  username: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  name: string;
  phone: string | null;
  role: UserRole;
}

interface ApiUserPage {
  items: ApiUser[];
  pagination: { total: number };
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiBase}/users`;

  getAll(page = 1, limit = 10, search = ''): Observable<ManagedUserPage> {
    let params = new HttpParams().set('page', page).set('limit', limit);
    if (search) params = params.set('search', search);

    return this.http.get<ApiResponse<ApiUserPage>>(this.apiUrl, { params }).pipe(
      map(response => ({
        items: Array.isArray(response?.data?.items)
          ? response.data.items.map(user => this.mapUser(user))
          : [],
        total: Number(response?.data?.pagination?.total ?? 0),
      }))
    );
  }

  getById(id: number): Observable<ManagedUser> {
    return this.http.get<ApiResponse<ApiUser>>(`${this.apiUrl}/${id}`).pipe(
      map(response => this.mapUser(response.data))
    );
  }

  create(user: ManagedUserCreate): Observable<number> {
    return this.http.post<{ id: number }>(this.apiUrl, this.toPayload(user)).pipe(
      map(response => response.id)
    );
  }

  update(id: number, user: ManagedUserUpdate): Observable<void> {
    return this.http.put<ApiResponse<unknown>>(`${this.apiUrl}/${id}`, this.toPayload(user)).pipe(
      map(() => undefined)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<ApiResponse<unknown>>(`${this.apiUrl}/${id}`).pipe(
      map(() => undefined)
    );
  }

  private toPayload(user: ManagedUserCreate | ManagedUserUpdate): Record<string, unknown> {
    const payload: Record<string, unknown> = {};
    if ('username' in user && user.username !== undefined) payload['username'] = user.username;
    if ('email' in user && user.email !== undefined) payload['email'] = user.email;
    if ('firstName' in user) payload['first_name'] = user.firstName ?? null;
    if ('lastName' in user) payload['last_name'] = user.lastName ?? null;
    if ('phone' in user) payload['phone'] = user.phone ?? null;
    if ('role' in user && user.role !== undefined) payload['role'] = user.role;
    // Only send password when it is a non-empty string (blank = keep existing).
    if ('password' in user && user.password) payload['password'] = user.password;
    return payload;
  }

  private mapUser(user: ApiUser): ManagedUser {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.first_name ?? null,
      lastName: user.last_name ?? null,
      name: user.name || user.username,
      phone: user.phone ?? null,
      role: user.role,
    };
  }
}
