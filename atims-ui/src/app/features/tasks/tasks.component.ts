import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="container">
      <h1>Gestion des Tâches</h1>
      
      <!-- Tabs -->
      <div class="tabs mb-3">
        <button class="btn btn-primary" (click)="activeTab = 'assigned'">Mes Tâches</button>
        <button class="btn btn-outline-primary" (click)="activeTab = 'global'">File d'Attente Globale</button>
      </div>
      
      <!-- Assigned Tasks -->
      <div *ngIf="activeTab === 'assigned'" class="card">
        <div class="card-body">
          <h3>Mes Tâches Assignées</h3>
          <table class="table" *ngIf="assignedTasks?.length; else noTasks">
            <thead>
              <tr>
                <th>ID</th>
                <th>Actif</th>
                <th>Statut</th>
                <th>Date d'échéance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let task of assignedTasks">
                <td>{{ task.id }}</td>
                <td>{{ task.asset_name }}</td>
                <td>
                  <span class="badge" [class]="'bg-' + getTaskStatusColor(task.status)">{{ task.status }}</span>
                </td>
                <td>{{ task.due_date | date:'shortDate' }}</td>
                <td>
                  <button class="btn btn-sm btn-primary" (click)="viewTask(task.id)">
                    Voir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <ng-template #noTasks>
            <p>Aucune tâche assignée.</p>
          </ng-template>
        </div>
      </div>
      
      <!-- Global Queue -->
      <div *ngIf="activeTab === 'global'" class="card">
        <div class="card-body">
          <h3>File d'Attente Globale</h3>
          <p class="text-muted">Tâches non assignées</p>
          <table class="table" *ngIf="globalQueue?.length; else noGlobalTasks">
            <thead>
              <tr>
                <th>ID</th>
                <th>Actif</th>
                <th>Créé le</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let task of globalQueue">
                <td>{{ task.id }}</td>
                <td>{{ task.asset_name }}</td>
                <td>{{ task.created_at | date:'short' }}</td>
                <td>
                  <button class="btn btn-sm btn-success" (click)="assignTask(task.id)">
                    Assigner
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <ng-template #noGlobalTasks>
            <p>Aucune tâche dans la file d'attente.</p>
          </ng-template>
        </div>
      </div>
    </div>
  `
})
export class TasksComponent implements OnInit {
  activeTab = 'assigned';
  assignedTasks: any[] = [];
  globalQueue: any[] = [];
  
  constructor(private taskService: TaskService) {}
  
  ngOnInit(): void {
    this.loadAssignedTasks();
    this.loadGlobalQueue();
  }
  
  loadAssignedTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.assignedTasks = tasks;
    });
  }
  
  loadGlobalQueue(): void {
    this.taskService.getGlobalQueue().subscribe(tasks => {
      this.globalQueue = tasks;
    });
  }
  
  getTaskStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'Pending': 'warning',
      'Assigned': 'primary',
      'In Progress': 'info',
      'Completed': 'success',
      'Cancelled': 'secondary'
    };
    return colors[status] || 'secondary';
  }
  
  viewTask(id: number): void {
    console.log('View task:', id);
    // Implement task detail view
  }
  
  assignTask(id: number): void {
    console.log('Assign task:', id);
    // Implement task assignment
  }
}