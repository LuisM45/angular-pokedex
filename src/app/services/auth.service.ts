  import { Injectable } from '@angular/core';
  import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: any;
  private userSubject$ = new Subject<any>();
  public get userObservable$():Observable<any>{
    return this.userSubject$.asObservable()
  }

  constructor(
    public authFire: AngularFireAuth,
    private firestore: AngularFirestore,
    public router: Router
    ) {
      this.authFire.authState
        .subscribe(user=>{
          if(user){
            localStorage.setItem('user',JSON.stringify(user))
            this.userData = user
            this.userSubject$.next(user)
          }
          else{
            localStorage.removeItem('user')
            this.userData = null
            this.userSubject$.next(null)
          }
        })
  }

  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user')!)
    return user !== null && user.emailVerified
  }

  loginWithEmal(email:string, password:string){
    return this.authFire.signInWithEmailAndPassword(email,password)
    .then(user=>{
      console.log(user)
      this.router.navigate(['/'])

    })
  }

  registerWithEmail(email:string, password: string){
    return this.authFire.createUserWithEmailAndPassword(email,password)
    .then(result=>{
      console.log(result.user)
      this.storeUserData(result.user)
      this.sendVerificationEmail()
      this.router.navigate(['/verify'])
    })

  }

  sendVerificationEmail(){
    return this.authFire.currentUser
      .then(user=>{
        user?.sendEmailVerification()
      })
  }

  storeUserData(user:any){
    this.firestore.collection('user').doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      emailVerifier: user.emailVerified
    })
    .then(data=>{
      console.log(data)
    })
  }

  logout(){
    this.authFire.signOut()
  }
}
