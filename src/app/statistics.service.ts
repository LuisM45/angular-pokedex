import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private socket:WebSocketSubject<any>|undefined;
  public battleStatisticMsg = new Subject<any>()
  
  constructor() { }

  public connect(){
    this.socket = this.getNewWebSocket()
    this.socket.subscribe({
      next:(dataEast:any)=>{
          this.battleStatisticMsg.next(dataEast)
      }
    })
  }

  private getNewWebSocket(){
    return webSocket({
      url: environment.pokestatisticsBaseUrl,
      openObserver:{
        next: () => {console.log("Socket opened")}
      },
      closeObserver:{
        next: () => {console.log("Socket closed");this.socket=undefined}
      },
    }
      )
  }

  public close(){
    this.socket!!.complete()
  }
}
