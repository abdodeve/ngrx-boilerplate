import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tabChangedAction } from '../store/tabs/tabs.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tab$: Observable<any>;
  
  constructor( private store: Store< {tab: any} > ) {
    this.tab$ = store.pipe( select('tab') );
  }

  ngOnInit() {
  }

  onChangeTab( event ) {
    this.store.dispatch( tabChangedAction({ selectedTab: event }) );
  }

}
