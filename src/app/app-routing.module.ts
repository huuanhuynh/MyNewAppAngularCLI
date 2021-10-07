import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BangVangComponent } from './bang-vang/bang-vang.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BottomMessageComponent } from './bottom-message/bottom-message.component';


const routes: Routes = [
  { path: 'bang-vang', component: BangVangComponent  },
  { path: 'heroes', component: HeroesComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

