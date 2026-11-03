import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-settings',
  template: `
    <section class="settings-page">
      <header class="page-heading">
        <div>
          <span class="eyebrow"><i class="pi pi-cog"></i> Account</span>
          <h1>Settings</h1>
          <p>Manage your profile, security, and notification preferences.</p>
        </div>
      </header>

      <div class="settings-grid">
        <div class="settings-column">
          <section class="card settings-card">
            <div class="section-heading">
              <div class="section-icon"><i class="pi pi-user"></i></div>
              <div><h2>Profile</h2><p>Update the details associated with your account.</p></div>
            </div>
            <form [formGroup]="profileForm" (ngSubmit)="updateProfile()">
              <div class="settings-fields">
                <div class="field"><label for="username">Username</label><input id="username" type="text" pInputText formControlName="username" autocomplete="username" /></div>
                <div class="field"><label for="email">Email address</label><input id="email" type="email" pInputText formControlName="email" autocomplete="email" /></div>
                <div class="field"><label for="phone">Phone number</label><input id="phone" type="tel" pInputText formControlName="phone" autocomplete="tel" /></div>
              </div>
              <div class="form-footer">
                <span *ngIf="profileMessage" class="profile-message" [class.profile-message--error]="profileError" aria-live="polite"><i [class]="profileError ? 'pi pi-exclamation-circle' : 'pi pi-check-circle'"></i>{{ profileMessage }}</span>
                <p-button type="submit" label="Save changes" icon="pi pi-save" [loading]="savingProfile" [disabled]="savingProfile" />
              </div>
            </form>
          </section>

          <section class="card settings-card">
            <div class="section-heading">
              <div class="section-icon section-icon--amber"><i class="pi pi-shield"></i></div>
              <div><h2>Two-factor authentication</h2><p>Add another layer of security to your account.</p></div>
              <p-tag [value]="mfaEnabled ? 'Enabled' : 'Disabled'" [severity]="mfaEnabled ? 'success' : 'secondary'" />
            </div>
            <div class="security-action">
              <div><strong>{{ mfaEnabled ? 'Your account has extra protection' : 'Protect your account' }}</strong><span>{{ mfaEnabled ? 'Two-factor authentication is currently enabled.' : 'Require an additional verification step when signing in.' }}</span></div>
              <p-button *ngIf="!mfaEnabled" label="Enable MFA" icon="pi pi-lock" (onClick)="enableMFA()" />
              <p-button *ngIf="mfaEnabled" label="Disable MFA" icon="pi pi-lock-open" severity="danger" [outlined]="true" (onClick)="disableMFA()" />
            </div>
          </section>
        </div>

        <div class="settings-column">
          <section class="card settings-card">
            <div class="section-heading">
              <div class="section-icon section-icon--blue"><i class="pi pi-bell"></i></div>
              <div><h2>Notifications</h2><p>Choose how you want to receive updates.</p></div>
            </div>
            <div class="preference-list">
              <label class="preference-row" for="emailNotifications"><span class="preference-icon"><i class="pi pi-envelope"></i></span><span class="preference-copy"><strong>Email notifications</strong><small>Receive updates in your inbox.</small></span><p-checkbox inputId="emailNotifications" name="emailNotifications" [(ngModel)]="emailNotifications" [binary]="true" /></label>
              <label class="preference-row" for="pushNotifications"><span class="preference-icon"><i class="pi pi-mobile"></i></span><span class="preference-copy"><strong>Push notifications</strong><small>Receive browser or device alerts.</small></span><p-checkbox inputId="pushNotifications" name="pushNotifications" [(ngModel)]="pushNotifications" [binary]="true" /></label>
              <label class="preference-row" for="smsNotifications"><span class="preference-icon"><i class="pi pi-comment"></i></span><span class="preference-copy"><strong>SMS notifications</strong><small>Receive important updates by text.</small></span><p-checkbox inputId="smsNotifications" name="smsNotifications" [(ngModel)]="smsNotifications" [binary]="true" /></label>
            </div>
          </section>

          <section class="card settings-card">
            <div class="section-heading">
              <div class="section-icon section-icon--purple"><i class="pi pi-sliders-h"></i></div>
              <div><h2>Preferences</h2><p>Set your application language.</p></div>
            </div>
            <div class="field language-field">
              <label for="language">Language</label>
              <p-select inputId="language" name="language" [(ngModel)]="language" [options]="languages" optionLabel="label" optionValue="value" />
            </div>
          </section>

          <section class="card account-card">
            <span class="account-icon"><i class="pi pi-sign-out"></i></span>
            <div class="account-copy"><strong>Sign out</strong><span>End your current session on this device.</span></div>
            <p-button label="Log out" icon="pi pi-sign-out" severity="danger" [outlined]="true" (onClick)="logout()" />
          </section>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .settings-page { display: flex; max-width: 80rem; flex-direction: column; gap: 1.25rem; margin: 0 auto; }
    .page-heading { margin-bottom: 0.15rem; }
    .eyebrow { display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.3rem; color: var(--primary-color); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
    .page-heading h1 { margin: 0; font-size: 1.65rem; line-height: 1.3; font-weight: 600; }
    .page-heading p, .section-heading p { margin: 0.3rem 0 0; color: var(--text-color-secondary); }
    .settings-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; gap: 1.25rem; }
    .settings-column { display: flex; min-width: 0; flex-direction: column; gap: 1.25rem; }
    .settings-card { padding: 1.4rem; }
    .section-heading { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.25rem; }
    .section-heading h2 { margin: 0; font-size: 1.08rem; line-height: 1.35; font-weight: 600; }
    .section-heading p { font-size: 0.86rem; }
    .section-heading > p-tag { margin-left: auto; }
    .section-icon { display: grid; width: 2.55rem; height: 2.55rem; flex: 0 0 auto; place-items: center; border-radius: 0.7rem; background: color-mix(in srgb, var(--primary-color) 12%, var(--surface-card)); color: var(--primary-color); font-size: 1.05rem; }
    .section-icon--amber { background: color-mix(in srgb, var(--orange-500, #f97316) 13%, var(--surface-card)); color: var(--orange-600, #ea580c); }
    .section-icon--blue { background: color-mix(in srgb, var(--blue-500, #3b82f6) 12%, var(--surface-card)); color: var(--blue-600, #2563eb); }
    .section-icon--purple { background: color-mix(in srgb, var(--purple-500, #a855f7) 12%, var(--surface-card)); color: var(--purple-600, #9333ea); }
    .settings-fields { display: flex; flex-direction: column; gap: 1rem; }
    .field { display: flex; min-width: 0; flex-direction: column; gap: 0.45rem; }
    .field label { font-size: 0.9rem; font-weight: 500; }
    .field input, .field p-select { width: 100%; }
    .form-footer { display: flex; min-height: 2.5rem; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--surface-border); }
    .profile-message { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--green-600, #16a34a); font-size: 0.85rem; }
    .profile-message--error { color: var(--red-500, #ef4444); }
    .security-action { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem; border: 1px solid var(--surface-border); border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .security-action > div { display: flex; min-width: 0; flex-direction: column; gap: 0.3rem; }
    .security-action strong { font-size: 0.9rem; }
    .security-action span { color: var(--text-color-secondary); font-size: 0.84rem; line-height: 1.45; }
    .preference-list { display: flex; flex-direction: column; }
    .preference-row { display: flex; align-items: center; gap: 0.75rem; padding: 0.85rem 0; cursor: pointer; }
    .preference-row + .preference-row { border-top: 1px solid var(--surface-border); }
    .preference-icon { display: grid; width: 2.2rem; height: 2.2rem; flex: 0 0 auto; place-items: center; border-radius: 0.6rem; background: var(--surface-ground); color: var(--text-color-secondary); }
    .preference-copy { display: flex; min-width: 0; flex: 1; flex-direction: column; gap: 0.18rem; }
    .preference-copy strong { font-size: 0.9rem; font-weight: 500; }
    .preference-copy small { color: var(--text-color-secondary); font-size: 0.8rem; }
    .language-field { max-width: 24rem; }
    .account-card { display: flex; align-items: center; gap: 0.8rem; padding: 1.1rem 1.25rem; }
    .account-icon { display: grid; width: 2.4rem; height: 2.4rem; flex: 0 0 auto; place-items: center; border-radius: 0.65rem; background: color-mix(in srgb, var(--red-500, #ef4444) 10%, var(--surface-card)); color: var(--red-500, #ef4444); }
    .account-copy { display: flex; min-width: 0; flex: 1; flex-direction: column; gap: 0.2rem; }
    .account-copy strong { font-size: 0.9rem; font-weight: 600; }
    .account-copy span { color: var(--text-color-secondary); font-size: 0.82rem; }
    @media (max-width: 850px) { .settings-grid { grid-template-columns: minmax(0, 1fr); } }
    @media (max-width: 520px) {
      .page-heading h1 { font-size: 1.4rem; }
      .settings-card { padding: 1rem; }
      .section-heading { align-items: flex-start; flex-wrap: wrap; }
      .section-heading > p-tag { margin-left: auto; }
      .security-action { align-items: stretch; flex-direction: column; }
      .account-card { flex-wrap: wrap; }
      .account-copy { flex-basis: calc(100% - 3.5rem); }
      .account-card p-button { margin-left: 3.2rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class SettingsComponent implements OnInit {
  profileForm!: FormGroup;
  mfaEnabled = false;
  emailNotifications = true;
  pushNotifications = false;
  smsNotifications = false;
  language = 'en';
  savingProfile = false;
  profileMessage = '';
  profileError = false;
  readonly languages = [{ label: 'English', value: 'en' }];

  constructor(private fb: FormBuilder, private userService: UserService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({ username: [''], email: [''], phone: [''] });
    this.loadSettings();
  }

  loadSettings(): void {
    this.userService.getCurrentUser().subscribe({
      next: user => {
        this.profileForm.patchValue({ username: user.username, email: user.email, phone: user.phone || '' });
        this.mfaEnabled = user.mfa_enabled || false;
        this.changeDetector.markForCheck();
      },
      error: () => this.changeDetector.markForCheck()
    });
  }

  updateProfile(): void {
    if (this.profileForm.invalid || this.savingProfile) return;
    this.savingProfile = true;
    this.profileMessage = '';
    this.userService.updateProfile(this.profileForm.value).subscribe({
      next: () => {
        this.savingProfile = false;
        this.profileMessage = 'Profile updated.';
        this.profileError = false;
        this.changeDetector.markForCheck();
      },
      error: error => {
        this.savingProfile = false;
        this.profileMessage = error?.error?.message ?? 'Could not update your profile.';
        this.profileError = true;
        this.changeDetector.markForCheck();
      }
    });
  }

  enableMFA(): void {
    // Implement MFA enable flow
    console.log('Enable MFA');
  }

  disableMFA(): void {
    // Implement MFA disable flow
    console.log('Disable MFA');
  }

  logout(): void {
    this.userService.logout();
  }
}
