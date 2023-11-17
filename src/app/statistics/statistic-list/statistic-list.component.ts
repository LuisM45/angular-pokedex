import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StatisticsService } from 'src/app/statistics.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-statistic-list',
  templateUrl: './statistic-list.component.html',
  styleUrls: ['./statistic-list.component.scss']
})
export class StatisticListComponent implements OnInit,OnDestroy {
  battleData:Subject<any>
  
  datalist:{name:string,value:number}[] = [
    {name:'German',value:1},
    // {name:'Alemania',value:98000},
    // {name:'USA',value:500_000},
  ]

  pushData(name:string){
    let data = this.datalist.find(e=>e.name==name)
    if(data) data.value+=1
    else this.datalist.push({name,value:0})
    this.datalist = [...this.datalist]
    console.log(this.datalist)
  }

  constructor(private statisticsSvc:StatisticsService) { }
  ngOnDestroy(): void {
    this.statisticsSvc.close()
  }

  ngOnInit(): void {
    this.statisticsSvc.connect()
    this.battleData = new Subject<any>()
    this.statisticsSvc.battleStatisticMsg.subscribe({
      next:(dataEast:any)=>{
        this.battleData.next(JSON.stringify(dataEast));
        this.pushData(dataEast.winner)
        console.log(dataEast)}
    })
  }



}
