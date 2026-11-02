import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Component({
    selector: 'app-settings',
    template: `
    <div class="container">
      <h1>Settings</h1>
    
      <div class="row">
        <div class="col-md-6">
          <!-- Profile Settings -->
          <div class="card mb-3">
            <div class="card-header">
              <h5>Profil</h5>
            </div>
            <div class="card-body">
              <form [formGroup]="profileForm" (ngSubmit)="updateProfile()">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" formControlName="username" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" formControlName="email" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="tel" class="form-control" id="phone" formControlName="phone" />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
    
          <!-- MFA Settings -->
          <div class="card mb-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5>Two-Factor Authentication (MFA)</h5>
              <span class="badge bg-{{ mfaEnabled ? 'success' : 'secondary' }}">
                {{ mfaEnabled ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
            <div class="card-body">
              <p class="text-muted">
                Add an extra layer of security to your account.
              </p>
              @if (!mfaEnabled) {
                <button class="btn btn-primary" (click)="enableMFA()">
                  Enable MFA
                </button>
              }
              @if (mfaEnabled) {
                <button class="btn btn-danger" (click)="disableMFA()">
                  Disable MFA
                </button>
              }
            </div>
          </div>
        </div>
    
        <div class="col-md-6">
          <!-- Notification Settings -->
          <div class="card mb-3">
            <div class="card-header">
              <h5>Notifications</h5>
            </div>
            <div class="card-body">
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="emailNotifications" [(ngModel)]="emailNotifications" />
                <label class="form-check-label" for="emailNotifications">
                  Email Notifications
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="pushNotifications" [(ngModel)]="pushNotifications" />
                <label class="form-check-label" for="pushNotifications">
                  Push Notifications
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="smsNotifications" [(ngModel)]="smsNotifications" />
                <label class="form-check-label" for="smsNotifications">
                  SMS Notifications
                </label>
              </div>
            </div>
          </div>
    
          <!-- Preferences -->
          <div class="card mb-3">
            <div class="card-header">
              <h5>Preferences</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="language" class="form-label">Language</label>
                <select class="form-select" id="language" [(ngModel)]="language">
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
    
          <button class="btn btn-outline-danger" (click)="logout()">
            Log Out
          </button>
        </div>
      </div>
    </div>
    `,
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
  
  constructor(private fb: FormBuilder, private userService: UserService) {}
  
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      phone: ['']
    });
    
    this.loadSettings();
  }
  
  loadSettings(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.profileForm.patchValue({
        username: user.username,
        email: user.email,
        phone: user.phone || ''
      });
      this.mfaEnabled = user.mfa_enabled || false;
    });
  }
  
  updateProfile(): void {
    if (this.profileForm.valid) {
      this.userService.updateProfile(this.profileForm.value).subscribe({
        next: () => alert('Profile updated.'),
        error: (error) => console.error('Error updating profile:', error)
      });
    }
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
