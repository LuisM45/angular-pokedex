import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category.service';
import { PokemonType } from 'src/app/shared/pokemon-types.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categoryList: PokemonType[];

  subscriberCategoryList: Subscription;

  constructor(private categorySvc:CategoryService) { }

  ngOnInit(): void {
    this.subscriberCategoryList = this.categorySvc
      .getTypes()
      .subscribe({next:cat=> {
        // this.categoryList=cat
        this.categoryList=cat.results
        .map(
          (value:any,idx:any)=> ({
            name:value.name,
            id:(value.url.toString()).match("(?<=/)\\d+(?=/$)")[0],
            imageUrl:`https://ui-avatars.com/api/?font-size=0.33&size=300&name=${value.name}`
          })
        )
          console.log(this.categoryList)
        }
      })
    // this.categoryList = this.categorySvc.getTypes()
    // console.log()
    
  }

  ngOnDestroy(): void {
    this.subscriberCategoryList.unsubscribe();
  }

}
