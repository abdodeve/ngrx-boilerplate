import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-adev1',
  templateUrl: './adev1.component.html',
  styleUrls: ['./adev1.component.css']
})
export class Adev1Component implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }


  ngOnInit() {
  }

}