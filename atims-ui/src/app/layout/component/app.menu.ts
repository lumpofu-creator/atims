import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

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

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }]
            },
            {
                label: 'Asset Management',
                items: [
                    { label: 'Assets', icon: 'pi pi-fw pi-box', routerLink: ['/assets'] },
                    { label: 'Incidents', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/incidents'] }
                ]
            },
            {
                label: 'Operations',
                items: [
                    { label: 'Tasks', icon: 'pi pi-fw pi-list', routerLink: ['/tasks'] },
                    { label: 'Reports', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/reports'] }
                ]
            },
            {
                label: 'System',
                items: [{ label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/settings'] }]
            }
        ];
    }
}
