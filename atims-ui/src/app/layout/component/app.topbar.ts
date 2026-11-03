import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '@/app/layout/service/layout.service';
import { MenuModule } from 'primeng/menu';
import { AuthService } from '@/app/core/auth/auth.service';
import { AppPreferencesService } from '@/app/core/preferences/app-preferences.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, MenuModule],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <span aria-hidden="true" class="layout-topbar-logo-mark sakai-caret-mark sakai-caret-mark--header">^</span>
                <span class="whitespace-nowrap">Asset Tracking and Infrastructure Management System</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <!--<div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>-->
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <p-menu #accountMenu [model]="accountMenuItems" [popup]="true" [autoZIndex]="true" />
                    <button type="button" class="layout-topbar-action account-trigger" (click)="accountMenu.toggle($event)" aria-haspopup="true" [attr.aria-label]="preferences.translate('Open user menu')">
                        <i class="pi pi-user"></i>
                        <span class="account-name">{{ displayName }}</span>
                        <i class="pi pi-angle-down account-chevron"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`
    ,
    styles: [`
        .account-trigger { display: inline-flex; align-items: center; gap: 0.55rem; max-width: 15rem; }
        .account-name { max-width: 10rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .account-chevron { font-size: 0.75rem; color: var(--text-color-secondary); }
        @media (max-width: 768px) { .account-name { max-width: 8rem; } }
    `]
})
export class AppTopbar {
    layoutService = inject(LayoutService);
    private auth = inject(AuthService);
    private router = inject(Router);
    preferences = inject(AppPreferencesService);

    get displayName(): string {
        const user = this.auth.currentUser;
        return user?.name || user?.username || user?.email || 'Account';
    }

    accountMenuItems: MenuItem[];

    constructor() {
        const t = (value: string) => this.preferences.translate(value);
        this.accountMenuItems = [
            { label: t('My Profile'), icon: 'pi pi-user-edit', routerLink: ['/settings'] },
            { separator: true },
            { 
                label: t('Logout'), 
                icon: 'pi pi-sign-out', 
                command: () => {
                    this.auth.logout();
                }
            }
        ];
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }
}
