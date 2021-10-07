import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/Hero';
import { HeroService } from '../services/HeroService';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  _heroes: Hero[] = []; // biến lưu giá trị.

  constructor(private heroSV:HeroService) { }

  ngOnInit(): void {
    this.GetHeroes();
  }

  GetHeroes():void{
    this.heroSV.GetHeroes().subscribe(ketqua => this._heroes = ketqua);
  }
}
