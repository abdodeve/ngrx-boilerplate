import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { username } from '../global/global.actions';

@Component({
  selector: 'app-adev1',
  templateUrl: './adev1.component.html',
  styleUrls: ['./adev1.component.css']
})
export class Adev1Component implements OnInit {

  count$: Observable<number>;
  user$: Observable<string>;

  constructor(private store: Store<{ count: number, user: string }>) {
    this.count$ = store.pipe(select('count'));
    this.user$ = store.pipe(select('user'));
  }


  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  changeUsername() {
    this.store.dispatch(username());
  }
}