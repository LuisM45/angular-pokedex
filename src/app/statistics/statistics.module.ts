import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { StatisticListComponent } from './statistic-list/statistic-list.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    StatisticListComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    NgxChartsModule,
    RouterModule.forChild([
      {path: "pokemon-statistics", component: StatisticListComponent}
    ])
  ]
})
export class StatisticsModule { }
