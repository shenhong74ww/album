import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { ReportRoutingModule } from './report-routing.moudule';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../shared/shared.module';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule,
    NgxEchartsModule
  ],
  declarations: [DailyReportComponent, ReportDialogComponent],
  entryComponents : [
    ReportDialogComponent,
  ]
})
export class ReportModule { }
