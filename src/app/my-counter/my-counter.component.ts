import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, login } from '../counter.actions';
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    this.count$.subscribe(res =>{
          console.log(res);
    });
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

  onSubmit(username: string = 'Maati', password: string = 'tazota') {
    this.store.dispatch(login({ username: username, password: password }));
  }
}