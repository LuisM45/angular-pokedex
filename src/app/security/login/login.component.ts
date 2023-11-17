import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string|null;

  constructor(
    private fb:FormBuilder,
    private authSvc: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',
        Validators.compose([Validators.required,Validators.minLength(4),Validators.email])
      ],
      password: ['',Validators.required]
    })
  }

  submit(){
    if (this.loginForm.valid){
      const controls= this.loginForm.controls
      this.authSvc.loginWithEmal(controls['username'].value,controls['password'].value)
        .then((result)=>{
          this.error = null
        })
        .catch((error)=>{
          console.error(this.loginForm.controls)
          this.error = error
        })
    }
    console.log("login")
    console.log('username: ', this.loginForm.controls['username'].value)
    console.log('password: ', this.loginForm.controls['password'].value)
  }
}
