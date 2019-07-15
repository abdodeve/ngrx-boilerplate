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
  selectedTab: string;

  constructor( private store: Store< {tab: any} > ) {
    this.tab$ = store.pipe( select('tab') );
    this.tab$.subscribe(res =>{
          // console.log(res);
          this.selectedTab = res.selectedTab ;
    });
  }

  ngOnInit() {
  }

  onChangeTab( event ) {
    this.store.dispatch( tabChangedAction({ selectedTab: event }) );
  }

}
