import { Component,OnInit  } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from './../hero.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // heroes: Hero[] = [];

  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(heroes.length-4,heroes.length));
  }
}
