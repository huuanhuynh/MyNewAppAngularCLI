import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/HeroService';
import { Hero } from '../shared/Hero';

@Component({
  selector: 'app-bang-vang',
  templateUrl: './bang-vang.component.html',
  styleUrls: ['./bang-vang.component.css']
})
export class BangVangComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroSV: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSV.GetHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));   // Lấy lên tất cả hero nhưng chỉ trả về từ 1 đến 5.
  }

}
