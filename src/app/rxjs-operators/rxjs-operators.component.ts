import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest, forkJoin, map, merge, tap, zip } from 'rxjs';

type DRUM = ["Meat", "BREAD", "sauce", "tomato"]

let meatCounter: number = 0;
let breadCounter: number = 0;
let sauceCounter: number = 0;
let tomatoCounter: number = 0;
@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.scss'
})
export class RxjsOperatorsComponent implements OnInit {


  DRUM$: Observable<DRUM> = new Observable();
  meat$: Subject<'meat'> = new Subject();
  bread$: Subject<"bread"> = new Subject();
  sauce$: Subject<"sauce"> = new Subject();
  tomato$: Subject<"tomato"> = new Subject();


  ngOnInit(): void {
    //combineLatest =>listen to the observables if all emitted values /if any of them changes the value  will be calculated  again =>out array 
    //zip =>listen to the observables if all emitted values / if all of them changes the value  will be calculated  again  => output array
    //merge =>listen to the observables if any emitted value this value will be rended  =>  out single value
    this.DRUM$ = zip(
      [this.meat$.pipe(
        map((ingredient) => `${ingredient}${++meatCounter}`),
        tap(console.log)
      ),
      this.bread$.pipe(
        map((ingredient) => `${ingredient}${++breadCounter}`),
        tap(console.log)
      ),
      this.sauce$.pipe(
        map((ingredient) => `${ingredient}${++sauceCounter}`),
        tap(console.log)
      ),
      this.tomato$.pipe(
        map((ingredient) => `${ingredient}${++tomatoCounter}`),
        tap(console.log)
      )]
    ).pipe(tap((drum) => console.log(drum)));
  }

}
