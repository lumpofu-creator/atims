import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../core/auth/auth.service';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, AppFloatingConfigurator],
  template: `
    <app-floating-configurator />
    <main class="login-page">
      <section class="login-shell">
        <div class="login-card">
          <div class="login-brand">
            <span aria-hidden="true" class="sakai-caret-mark sakai-caret-mark--login">^</span>
            <h1>Asset Tracking and Infrastructure Management System</h1>
            <p>Sign in to continue</p>
          </div>

          <form (ngSubmit)="signIn()" #loginForm="ngForm" novalidate>
            <div class="login-field">
              <label for="login-name">Email or username</label>
              <input pInputText id="login-name" name="username" type="text" placeholder="Enter your email or username" autocomplete="username" [(ngModel)]="username" required />
            </div>
            <div class="login-field">
              <label for="login-password">Password</label>
              <p-password inputId="login-password" name="password" [(ngModel)]="password" placeholder="Enter your password" autocomplete="current-password" [toggleMask]="true" [fluid]="true" [feedback]="false" required />
            </div>
            <div class="login-options">
              <label class="remember-option" for="remember-me"><p-checkbox inputId="remember-me" name="remember" [(ngModel)]="rememberMe" [binary]="true" /> <span>Remember me</span></label>
            </div>
            <div *ngIf="errorMessage" class="login-error" role="alert"><i class="pi pi-exclamation-circle"></i>{{ errorMessage }}</div>
            <p-button type="submit" label="Sign in" icon="pi pi-sign-in" styleClass="login-submit" [loading]="signingIn" [disabled]="signingIn || !loginForm.valid" />
          </form>
          <p class="login-help">Need access? Contact your system administrator.</p>
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host { display: block; }
    .login-page { display: grid; min-height: 100vh; place-items: center; padding: 1.5rem; background: var(--surface-ground); }
    .login-shell { width: min(100%, 28rem); padding: 0.3rem; border-radius: 1.5rem; background: linear-gradient(180deg, var(--primary-color) 10%, color-mix(in srgb, var(--primary-color) 0%, transparent) 45%); }
    .login-card { padding: 2.6rem; border: 1px solid var(--surface-border); border-radius: 1.3rem; background: var(--surface-card); box-shadow: 0 1rem 3rem rgb(0 0 0 / 7%); }
    .login-brand { margin-bottom: 2rem; text-align: center; }
    .login-brand .sakai-caret-mark { display: inline-flex; margin-bottom: 1.1rem; }
    .login-brand h1 { margin: 0 auto; max-width: 20rem; font-size: 1.25rem; line-height: 1.45; font-weight: 600; }
    .login-brand p { margin: 0.45rem 0 0; color: var(--text-color-secondary); }
    .login-field { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.2rem; }
    .login-field label { font-size: 0.9rem; font-weight: 500; }
    .login-field input, .login-field p-password { width: 100%; }
    .login-options { display: flex; align-items: center; justify-content: space-between; margin: 0.25rem 0 1rem; }
    .remember-option { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-color-secondary); font-size: 0.9rem; cursor: pointer; }
    .login-error { display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 1rem; padding: 0.75rem; border: 1px solid color-mix(in srgb, var(--red-500, #ef4444) 25%, transparent); border-radius: var(--content-border-radius); background: color-mix(in srgb, var(--red-500, #ef4444) 8%, var(--surface-card)); color: var(--red-500, #ef4444); font-size: 0.875rem; }
    :host ::ng-deep .login-submit { width: 100%; }
    .login-help { margin: 1.5rem 0 0; color: var(--text-color-secondary); font-size: 0.82rem; text-align: center; }
    @media (max-width: 480px) { .login-card { padding: 1.5rem; } }
  `]
})
export class Login {
  username = '';
  password = '';
  rememberMe = true;
  signingIn = false;
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, private changeDetector: ChangeDetectorRef) {}

  signIn(): void {
    if (this.signingIn || !this.username.trim() || !this.password) return;
    this.signingIn = true;
    this.errorMessage = '';
    this.auth.login(this.username.trim(), this.password, this.rememberMe).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigateByUrl(returnUrl?.startsWith('/') && !returnUrl.startsWith('//') ? returnUrl : '/dashboard');
      },
      error: error => {
        this.errorMessage = error?.status === 401
          ? 'The email/username or password is incorrect.'
          : error?.error?.message ?? error?.error?.error ?? 'Unable to sign in. Check your connection and try again.';
        this.signingIn = false;
        this.changeDetector.markForCheck();
      }
    });
  }
}
