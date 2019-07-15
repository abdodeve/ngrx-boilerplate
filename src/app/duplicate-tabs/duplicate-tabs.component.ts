import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tabChangedAction } from '../store/tabs/tabs.actions';

@Component({
  selector: 'app-duplicate-tabs',
  templateUrl: './duplicate-tabs.component.html',
  styleUrls: ['./duplicate-tabs.component.css']
})
export class DuplicateTabsComponent implements OnInit {
  tab$: Observable<any>;
  selectedTab: string;

  constructor( private store: Store< {tab: any} > ) {
    this.tab$ = store.pipe( select('tab') );
    this.tab$.subscribe(res =>{
          this.selectedTab = res.selectedTab ;
    });
  }

  ngOnInit() {
  }

  onChangeTab( event ) {
    this.store.dispatch( tabChangedAction({ selectedTab: event }) );
  }

}
