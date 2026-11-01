import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ReportService } from './report.service';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsRoutingModule
  ],
  providers: [ReportService]
})
export class ReportsModule { }