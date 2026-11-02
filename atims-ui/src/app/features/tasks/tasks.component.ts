import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks',
    template: `
    <div class="container">
      <h1>Task Management</h1>
    
      <!-- Tabs -->
      <div class="tabs mb-3">
        <button class="btn btn-primary" (click)="activeTab = 'assigned'">My Tasks</button>
        <button class="btn btn-outline-primary" (click)="activeTab = 'global'">Global Queue</button>
      </div>
    
      <!-- Assigned Tasks -->
      @if (activeTab === 'assigned') {
        <div class="card">
          <div class="card-body">
            <h3>My Assigned Tasks</h3>
            @if (assignedTasks.length) {
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Asset</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (task of assignedTasks; track task) {
                    <tr>
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
                  }
                </tbody>
              </table>
            } @else {
              <p>No tasks are assigned to you.</p>
            }
          </div>
        </div>
      }
    
      <!-- Global Queue -->
      @if (activeTab === 'global') {
        <div class="card">
          <div class="card-body">
            <h3>Global Queue</h3>
            <p class="text-muted">Unassigned Tasks</p>
            @if (globalQueue.length) {
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Asset</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (task of globalQueue; track task) {
                    <tr>
                      <td>{{ task.id }}</td>
                      <td>{{ task.asset_name }}</td>
                      <td>{{ task.created_at | date:'short' }}</td>
                      <td>
                        <button class="btn btn-sm btn-success" (click)="assignTask(task.id)">
                          Assigner
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            } @else {
              <p>The queue is empty.</p>
            }
          </div>
        </div>
      }
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
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
