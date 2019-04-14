import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [  // Model que eu criei para isso

    new Recipe('A tests recipe', 'Description for the recepi', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'), // instancia o objeto e call the constructor
    new Recipe('A tests recipe', 'Description for the recepi', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg') // instancia o objeto e call the constructor
  ]; 


  constructor() { }

  ngOnInit() {
  }

}
