import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';
import { PokemonAddCommentComponent } from '../pokemon-add-comment/pokemon-add-comment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit,OnDestroy {
  data: any
  comments: string[] = []

  constructor(
    private pokemonSvc:PokemonService,
    private activatedRoute:ActivatedRoute,
    private angularFirestore: AngularFirestore,
    private dialog: MatDialog
    ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .subscribe((params)=>{
      let id = params.get("id")!! 
        this.pokemonSvc.getPokemonDetails(id).subscribe(
          {
            next: data=>{
              this.data=data
              // this.angularFirestore.collection('pokemons').add({
              //   id:data.id,
              //   name:data.name
              // })
              // .then((res)=>{
              //   console.log(res)
              // })
              // .catch(e=>{
              //   console.log(e)
              // })
              this.angularFirestore.collection('pokemons').doc(data.id.toString()).set({
                name:data.name
              })
            }
          }
        )
      }
    )
  }


  loadComments(){
    let document = this.angularFirestore.collection("pokemons")
      .doc(this.data.id)
      .valueChanges();

    document.subscribe((ret: any)=>console.log(ret))
  }

  showDialog(){
    this.dialog.open(PokemonAddCommentComponent)
    .afterClosed().subscribe({
      next: value=>console.log(value)
    })
  }
}
