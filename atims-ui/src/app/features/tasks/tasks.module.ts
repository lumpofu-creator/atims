import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  providers: [TaskService]
})
export class TasksModule { }