import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Route guard that only allows users whose role is in `allowedRoles`.
 * Non-matching users are redirected to the dashboard.
 *
 * This is a UX convenience only; the real enforcement lives in the backend
 * `role.guard` middleware.
 */
export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const role = auth.currentUser?.role ?? '';
    return allowedRoles.includes(role) ? true : router.createUrlTree(['/dashboard']);
  };
}
