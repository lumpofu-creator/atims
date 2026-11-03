import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslatePipe } from '../../core/preferences/translate.pipe';
import {
  ManagedUser,
  ManagedUserCreate,
  ManagedUserUpdate,
  USER_ROLES,
  UserRole,
  UsersService,
} from './user.service';

interface UserDraft {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  password: string;
}

interface PageEvent {
  first?: number | null;
  rows?: number | null;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    SelectModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    TableModule,
    TagModule,
    TranslatePipe,
  ],
  providers: [MessageService, ConfirmationService],
  template: `
    <p-toast />
    <p-confirmdialog [style]="{ width: '28rem', maxWidth: 'calc(100vw - 2rem)' }" />

    <section class="users-page">
      <header class="page-heading">
        <div>
          <h1>{{ 'User Management' | t }}</h1>
          <p>{{ 'Create, update and remove user accounts.' | t }}</p>
        </div>
        <span class="user-total">{{ totalRecords }} {{ 'users' | t }}</span>
      </header>

      <div class="card">
        <p-table
          #userTable
          [value]="users()"
          dataKey="id"
          [paginator]="true"
          [rows]="rows"
          [first]="first"
          [totalRecords]="totalRecords"
          [rowsPerPageOptions]="[10, 20, 50]"
          [loading]="loading()"
          [rowHover]="true"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="{{ 'Showing' | t }} {first} - {last} / {totalRecords}"
          responsiveLayout="scroll"
          (onPage)="onPage($event)"
        >
          <ng-template #caption>
            <div class="table-toolbar">
              <p-iconfield iconPosition="left" class="search-field">
                <p-inputicon><i class="pi pi-search"></i></p-inputicon>
                <input
                  pInputText
                  type="text"
                  [value]="searchTerm"
                  (input)="onSearch(userTable, $event)"
                  [placeholder]="'Search username or email' | t"
                  aria-label="Search users"
                />
              </p-iconfield>
              <div class="toolbar-actions">
                <p-button [label]="'Add' | t" icon="pi pi-plus" [outlined]="true" (onClick)="openCreate()" />
                <p-button [label]="'Refresh' | t" icon="pi pi-refresh" severity="secondary" [outlined]="true" [loading]="loading()" (onClick)="load()" />
              </div>
            </div>
          </ng-template>

          <ng-template #header>
            <tr>
              <th>{{ 'Username' | t }}</th>
              <th>{{ 'Email address' | t }}</th>
              <th>{{ 'Role' | t }}</th>
              <th>{{ 'Phone number' | t }}</th>
              <th style="width: 8rem">{{ 'Actions' | t }}</th>
            </tr>
          </ng-template>

          <ng-template #body let-user>
            <tr>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td><p-tag [value]="user.role | t" severity="info" /></td>
              <td>{{ user.phone || '—' }}</td>
              <td class="actions-cell">
                <p-button icon="pi pi-pencil" severity="secondary" [text]="true" [rounded]="true" [ariaLabel]="'Edit' | t" (onClick)="openEdit(user)" />
                <p-button icon="pi pi-trash" severity="danger" [text]="true" [rounded]="true" [ariaLabel]="'Delete' | t" (onClick)="confirmDelete(user)" />
              </td>
            </tr>
          </ng-template>

          <ng-template #emptymessage>
            <tr>
              <td colspan="5" class="empty-row">{{ 'No users found.' | t }}</td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </section>

    <p-dialog
      [header]="(editingId ? 'Edit user' : 'Add user') | t"
      [(visible)]="dialogVisible"
      [modal]="true"
      [style]="{ width: '34rem', maxWidth: 'calc(100vw - 2rem)' }"
      [dismissableMask]="true"
    >
      <form class="user-form" (ngSubmit)="save()">
        <div class="field">
          <label for="username">{{ 'Username' | t }}</label>
          <input pInputText id="username" name="username" [(ngModel)]="draft.username" required autocomplete="off" fluid />
        </div>
        <div class="field">
          <label for="email">{{ 'Email address' | t }}</label>
          <input pInputText id="email" name="email" type="email" [(ngModel)]="draft.email" required autocomplete="off" fluid />
        </div>
        <div class="field-row">
          <div class="field">
            <label for="firstName">{{ 'First name' | t }}</label>
            <input pInputText id="firstName" name="firstName" [(ngModel)]="draft.firstName" autocomplete="off" fluid />
          </div>
          <div class="field">
            <label for="lastName">{{ 'Last name' | t }}</label>
            <input pInputText id="lastName" name="lastName" [(ngModel)]="draft.lastName" autocomplete="off" fluid />
          </div>
        </div>
        <div class="field">
          <label for="role">{{ 'Role' | t }}</label>
          <p-select
            inputId="role"
            name="role"
            [options]="roleOptions"
            optionLabel="label"
            optionValue="value"
            [(ngModel)]="draft.role"
            appendTo="body"
            fluid
          />
        </div>
        <div class="field">
          <label for="phone">{{ 'Phone number' | t }}</label>
          <input pInputText id="phone" name="phone" [(ngModel)]="draft.phone" autocomplete="off" fluid />
        </div>
        <div class="field">
          <label for="password">{{ 'Password' | t }}</label>
          <input
            pInputText
            id="password"
            name="password"
            type="password"
            [(ngModel)]="draft.password"
            autocomplete="new-password"
            [placeholder]="(editingId ? 'Leave blank to keep current password' : '') | t"
            fluid
          />
        </div>
      </form>

      <ng-template #footer>
        <p-button [label]="'Cancel' | t" severity="secondary" [text]="true" (onClick)="dialogVisible = false" />
        <p-button [label]="'Save changes' | t" icon="pi pi-check" [loading]="saving()" (onClick)="save()" />
      </ng-template>
    </p-dialog>
  `,
  styles: [`
    .users-page { display: flex; flex-direction: column; gap: 1.25rem; }
    .page-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
    .page-heading h1 { margin: 0; font-size: 1.5rem; }
    .page-heading p { margin: 0.25rem 0 0; color: var(--text-color-secondary); }
    .user-total { color: var(--text-color-secondary); font-weight: 600; }
    .table-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
    .search-field { flex: 1 1 16rem; max-width: 24rem; }
    .search-field input { width: 100%; }
    .toolbar-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .actions-cell { display: flex; gap: 0.25rem; }
    .empty-row { text-align: center; padding: 1.5rem 0; color: var(--text-color-secondary); }
    .user-form { display: flex; flex-direction: column; gap: 1rem; padding-top: 0.5rem; }
    .field { display: flex; flex-direction: column; gap: 0.375rem; }
    .field-row { display: flex; gap: 1rem; flex-wrap: wrap; }
    .field-row .field { flex: 1 1 12rem; }
    .field label { font-weight: 600; font-size: 0.875rem; }
  `],
})
export class UsersComponent implements OnInit {
  private readonly usersService = inject(UsersService);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);

  readonly users = signal<ManagedUser[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);

  totalRecords = 0;
  rows = 10;
  first = 0;
  searchTerm = '';
  private searchDebounce?: ReturnType<typeof setTimeout>;

  dialogVisible = false;
  editingId: number | null = null;
  draft: UserDraft = this.emptyDraft();

  readonly roleOptions = USER_ROLES.map(role => ({ label: role, value: role }));

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const page = Math.floor(this.first / this.rows) + 1;
    this.loading.set(true);
    this.usersService.getAll(page, this.rows, this.searchTerm).subscribe({
      next: result => {
        this.users.set(result.items);
        this.totalRecords = result.total;
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Échec du chargement des utilisateurs.' });
      },
    });
  }

  onPage(event: PageEvent): void {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? this.rows;
    this.load();
  }

  onSearch(table: Table, event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.first = 0;
      table.first = 0;
      this.load();
    }, 300);
  }

  openCreate(): void {
    this.editingId = null;
    this.draft = this.emptyDraft();
    this.dialogVisible = true;
  }

  openEdit(user: ManagedUser): void {
    this.editingId = user.id;
    this.draft = {
      username: user.username,
      email: user.email,
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      phone: user.phone ?? '',
      role: user.role,
      password: '',
    };
    this.dialogVisible = true;
  }

  save(): void {
    if (!this.draft.username.trim() || !this.draft.email.trim() || !this.draft.role) {
      this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'Nom d’utilisateur, e-mail et rôle sont requis.' });
      return;
    }
    if (this.editingId === null && !this.draft.password) {
      this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'Un mot de passe est requis pour un nouvel utilisateur.' });
      return;
    }

    this.saving.set(true);

    if (this.editingId === null) {
      const payload: ManagedUserCreate = {
        username: this.draft.username.trim(),
        email: this.draft.email.trim(),
        firstName: this.draft.firstName.trim() || null,
        lastName: this.draft.lastName.trim() || null,
        phone: this.draft.phone.trim() || null,
        role: this.draft.role,
        password: this.draft.password,
      };
      this.usersService.create(payload).subscribe({
        next: () => this.onSaveSuccess('Utilisateur créé avec succès.'),
        error: err => this.onSaveError(err),
      });
    } else {
      const payload: ManagedUserUpdate = {
        username: this.draft.username.trim(),
        email: this.draft.email.trim(),
        firstName: this.draft.firstName.trim() || null,
        lastName: this.draft.lastName.trim() || null,
        phone: this.draft.phone.trim() || null,
        role: this.draft.role,
        password: this.draft.password || null,
      };
      this.usersService.update(this.editingId, payload).subscribe({
        next: () => this.onSaveSuccess('Utilisateur mis à jour avec succès.'),
        error: err => this.onSaveError(err),
      });
    }
  }

  confirmDelete(user: ManagedUser): void {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: `Supprimer l’utilisateur « ${user.username} » ?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.usersService.delete(user.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Utilisateur supprimé.' });
            this.load();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Échec de la suppression.' });
          },
        });
      },
    });
  }

  private onSaveSuccess(detail: string): void {
    this.saving.set(false);
    this.dialogVisible = false;
    this.messageService.add({ severity: 'success', summary: 'Succès', detail });
    this.load();
  }

  private onSaveError(err: unknown): void {
    this.saving.set(false);
    const detail = this.extractError(err) ?? 'Échec de l’enregistrement.';
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail });
  }

  private extractError(err: unknown): string | null {
    const error = (err as { error?: { error?: string; details?: { validation_errors?: Record<string, string[]> } } })?.error;
    if (!error) return null;
    const validation = error.details?.validation_errors;
    if (validation) {
      const first = Object.values(validation)[0];
      if (Array.isArray(first) && first.length) return first[0];
    }
    return error.error ?? null;
  }

  private emptyDraft(): UserDraft {
    return { username: '', email: '', firstName: '', lastName: '', phone: '', role: 'Field Agent', password: '' };
  }
}
