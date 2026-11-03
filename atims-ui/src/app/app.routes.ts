import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { authGuard, guestGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/auth/login').then(m => m.Login)
  },
  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'assets',
        loadComponent: () => import('./features/assets/assets.component').then(m => m.AssetsComponent)
      },
      {
        path: 'incidents',
        loadComponent: () => import('./features/incidents/incident-list.component').then(m => m.IncidentListComponent)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
