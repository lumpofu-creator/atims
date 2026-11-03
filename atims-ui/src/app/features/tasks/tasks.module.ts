import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    ButtonModule,
    TableModule,
    TagModule,
    DialogModule,
    TextareaModule,
    SelectModule
  ],
  providers: [TaskService]
})
export class TasksModule { }
