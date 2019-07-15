import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { tabsReducer } from './store/tabs/tabs.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { Adev1Component } from './adev1/adev1.component';
import { TabsComponent } from './tabs/tabs.component';
import { DuplicateTabsComponent } from './duplicate-tabs/duplicate-tabs.component';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'counter', component: MyCounterComponent },
  { path: 'adev1', component: Adev1Component },
  { path: '',
    redirectTo: '/counter',
    pathMatch: 'full'
  },
  { path: '**', component: MyCounterComponent }
];


@NgModule({
  declarations: [AppComponent, MyCounterComponent, Adev1Component, TabsComponent, DuplicateTabsComponent, DetailsComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forRoot({ tab: tabsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/