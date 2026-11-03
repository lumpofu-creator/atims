import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const isApiRequest = request.url.startsWith(environment.apiBase);
  const isLoginRequest = request.url.endsWith('/auth/login');
  const outgoing = isApiRequest && auth.token && !isLoginRequest
    ? request.clone({ setHeaders: { Authorization: `Bearer ${auth.token}` } })
    : request;

  return next(outgoing).pipe(catchError(error => {
    if (error.status === 401 && isApiRequest && !isLoginRequest) {
      auth.clearSession();
      router.navigate(['/login'], { queryParams: { returnUrl: router.url } });
    }
    return throwError(() => error);
  }));
};
