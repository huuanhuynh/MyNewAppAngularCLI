import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BangVangComponent } from './bang-vang/bang-vang.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BottomMessageComponent } from './bottom-message/bottom-message.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: 'bang-vang', component: BangVangComponent  },
  { path: 'heroes', component: HeroesComponent  },
  { path: 'hero-detail/:id', component: HeroDetailComponent  }      // path này có tham số /:id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

