import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.scss']
})
export class MyFavoritesComponent implements OnInit {

  constructor(private angularFirestore: AngularFirestore) { }

  ngOnInit(): void {
    this.angularFirestore
    .collection('pokemon', (ref)=>ref.where('isFavorite','==',true))
    .get()
    .subscribe((data: any)=>{
      console.log(data.size)
    })
  }

}
