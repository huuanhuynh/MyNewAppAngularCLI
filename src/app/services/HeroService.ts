import { Observable, of } from 'rxjs';
import { MessageService } from "./MessageService";
import { HeroData } from '../shared/HeroData';
import { Hero } from '../shared/Hero';


export class HeroService{
  constructor(private messageSV:MessageService){}

  GetHeroes() : Observable<Hero[]>{  // định nghĩa hàm GetHeros trả về Observable<Hero[]>
    const heros = of(HeroData);
    this.messageSV.Add("HeroService: Đã tải tất cả Anh Hùng.");
    return heros;
  }

  GetHero(id:number) : Observable<Hero>{
    const hero = HeroData.find(hero => hero.id===id)!;    // Có dấu !
    this.messageSV.Add("HeroService: Đã tải Anh Hùng ${id}: " + hero.name)
    return of(hero);
  }
}
