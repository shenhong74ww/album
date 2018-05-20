import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ReportService } from '../../services/report.service';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss'],
  providers: [
    ReportService,
    MatDialog,
  ]
})
export class DailyReportComponent implements OnInit {

  displayedColumns = ['position', 'name', 'author', 'image'];
  ELEMENT_DATA: Element[] = [];
  dataSource: any;
  mergeOptions: any;
  selectedRowIndex: number = -1;
  chartOption = {
    title: {
      text: '热度榜前十'
    },
    tooltip : {
      trigger: 'axis',
      axisPointer : {
          type : 'shadow'
      }
    },
    angleAxis: {
      type: 'category',
      data: ['图一', '图二', '图三', '图四', '图五', '图六', '图七', '图八', '图九', '图十'],
      z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '访问数',
        stack: 'a'
    }, {
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '评论数',
        stack: 'a'
    }, {
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '点赞数',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['访问数', '评论数', '点赞数']
    }
  };
  constructor(
    private reportService: ReportService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.reportService.getTopTenReports().subscribe(
      (reports) => {
        reports.map((report, index) => {
          this.chartOption.series[0].data.push(report.views);
          this.chartOption.series[1].data.push(report.comments);
          this.chartOption.series[2].data.push(report.likes);
          this.ELEMENT_DATA.push({
            position: index + 1,
            name: report.photo.photoName,
            author: report.photo.user.name,
            image: report.photo.imageName
          });
        });

        this.mergeOptions = this.chartOption;
        this.mergeOptions.series = [...this.chartOption.series];

        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
    );
  }

  onSelect(item) {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      height: '100%',
      width: '100%',
      autoFocus: false,
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}

export interface Element {
  position: number;
  name: string;
  author: string;
  image: string;
}

