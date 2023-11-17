import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  error: string|null;

  constructor(
    private fb:FormBuilder,
    private authSvc: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['',
        Validators.compose([Validators.required,Validators.minLength(4),Validators.email])
      ],
      password: ['',Validators.required],
      password_confirmation: ['',Validators.compose([Validators.required])]
    })
    
  }


  submit(){
    if (this.registerForm.valid){
      const controls= this.registerForm.controls
      this.authSvc.registerWithEmail(controls['username'].value,controls['password'].value)
        .then((result)=>{
          this.error = null
        })
        .catch((error)=>{
          console.error(this.registerForm.controls)
          this.error = error
        })
    }
    console.log("login")
    console.log('username: ', this.registerForm.controls['username'].value)
    console.log('password: ', this.registerForm.controls['password'].value)
  }
}
