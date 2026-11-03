import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { AppPreferencesService } from '@/app/core/preferences/app-preferences.service';
import { AuthService } from '@/app/core/auth/auth.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `,
})
export class AppMenu {
    model: MenuItem[] = [];
    private preferences = inject(AppPreferencesService);
    private auth = inject(AuthService);

    constructor() {
        effect(() => {
            const t = (value: string) => this.preferences.translate(value);

            const systemItems: MenuItem[] = [
                { label: t('Settings'), icon: 'pi pi-fw pi-cog', routerLink: ['/settings'] }
            ];
            // TODO: restore role check — only Logistics Officer should see this.
            // if (this.auth.currentUser?.role === 'Logistics Officer') {
                systemItems.unshift({ label: t('User Management'), icon: 'pi pi-fw pi-users', routerLink: ['/users'] });
            // }

        this.model = [
            {
                label: t('Home'),
                items: [{ label: t('Dashboard'), icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }]
            },
            {
                label: t('Asset Management'),
                items: [
                    { label: t('Assets'), icon: 'pi pi-fw pi-box', routerLink: ['/assets'] },
                    { label: t('Incidents'), icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/incidents'] }
                ]
            },
            {
                label: t('Operations'),
                items: [
                    { label: t('Tasks'), icon: 'pi pi-fw pi-list', routerLink: ['/tasks'] },
                    { label: t('Reports'), icon: 'pi pi-fw pi-chart-bar', routerLink: ['/reports'] }
                ]
            },
            {
                label: t('System'),
                items: systemItems
            }
        ];
        });
    }
}
