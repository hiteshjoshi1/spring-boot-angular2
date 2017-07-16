import { Component, OnInit } from '@angular/core';
// ActivatedRoute is needed to get Route Params
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from './../models/hero';
import { HeroService } from './../services/hero.service';
//SwitchMap
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit():void{
    // capturing Route parameters
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }


  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.heroService.update(this.hero)
    .subscribe(() => this.goBack());
}
}
