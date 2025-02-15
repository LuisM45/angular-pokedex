import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userData: any

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.userObservable$
      .subscribe((user)=>{
        this.userData = user
      })
  }

  logout(){
    this.authSvc.logout()
  }
}
