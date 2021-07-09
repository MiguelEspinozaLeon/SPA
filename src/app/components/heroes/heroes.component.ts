import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  constructor(private servicioHeroes: HeroesService) {
    this.heroes = servicioHeroes.getHeroes();
    console.log(this.heroes['0']);
  }


  ngOnInit(): void {
   
  }
  
}
