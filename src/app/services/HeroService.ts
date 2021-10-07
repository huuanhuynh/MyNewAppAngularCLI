import { Observable, of } from 'rxjs';
import { MessageService } from "./MessageService";
import { HeroData } from '../shared/HeroData';
import { Hero } from '../shared/Hero';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeroService{
  constructor(public messageSV:MessageService){}   // biến trong tham số contructor sẽ dùng được trong các hàm.

  GetHeroes() : Observable<Hero[]>{  // định nghĩa hàm GetHeros trả về Observable<Hero[]>
    const heros = of(HeroData);
    this.messageSV.Add("HeroService: Đã tải tất cả Anh Hùng.");
    return heros;
    //return new Observable<Hero[]>();
  }

  GetHero(id:number) : Observable<Hero>{
    const hero = HeroData.find(hero => hero.id===id)!;    // Có dấu !
    this.messageSV.Add("HeroService: Đã tải Anh Hùng id="+id)
    return of(hero);
    //return new Observable<Hero>()
  }
}
