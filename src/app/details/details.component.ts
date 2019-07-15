import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tabChangedAction } from '../store/tabs/tabs.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tab$: Observable<any>;
  selectedTab: string;

  constructor( private store: Store< {tab: any} > ) {
    this.tab$ = store.pipe( select('tab') );
  }

  ngOnInit() {
  }

  onChangeTab( event ) {
    this.store.dispatch( tabChangedAction({ selectedTab: event }) );
  }

}
