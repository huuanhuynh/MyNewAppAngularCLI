import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/HeroService';
import { Hero } from '../shared/Hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // biến trong service sẽ dùng trong html
  hero:Hero | undefined;
  // tham số public messageService được dùng trong các property html. ví dụ (click)="messageService.Clear()"
  constructor(
    private router : ActivatedRoute,
    private heroSV : HeroService,
    private location : Location
    ) { }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get("id"));
    this.GetHeroByID(id);
  }

  GetHeroByID(id:number):void{
    this.heroSV.GetHero(id).subscribe(h=>this.hero=h);
  }

  GoBack():void{
    //alert("Chưa viết GoBack()");
    this.location.back();
  }
}
