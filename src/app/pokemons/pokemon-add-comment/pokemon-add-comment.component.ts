import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-add-comment',
  templateUrl: './pokemon-add-comment.component.html',
  styleUrls: ['./pokemon-add-comment.component.scss']
})
export class PokemonAddCommentComponent implements OnInit {
  comment:string

  constructor(
    public dialogRef: MatDialogRef<PokemonAddCommentComponent>,
    ) { }

  ngOnInit(): void {
  }

  sendCommentSignal(){
    
  }

  saveComment(){
    this.dialogRef.close({
      comment: this.comment
    })
  }
}
