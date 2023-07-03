import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observablec',
  templateUrl: './observablec.component.html',
  styleUrls: ['./observablec.component.scss']
})
export class ObservablecComponent implements OnInit, OnDestroy {
  observable = new Observable((ob)=>{
    let self = (fun:any)=>{
      fun()
      setTimeout(()=>self(fun),1000)
    }

    let i = 0
    self(()=>{
      i+=1
      ob.next(i)
      if(Math.random()<0.02){
        ob.error("Ayayayaya!")
      }
      if(Math.random()<0.02){
        ob.complete()
      }
    })
  })

  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.observable.subscribe(
      value=>console.log(value)
    )
  }

}
