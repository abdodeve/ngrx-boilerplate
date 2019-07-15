import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { tabsReducer } from './store/tabs/tabs.reducer';
import { TabsComponent } from './tabs/tabs.component';
import { DuplicateTabsComponent } from './duplicate-tabs/duplicate-tabs.component';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'details', component: DetailsComponent },
  { path: '',
    redirectTo: '/counter',
    pathMatch: 'full'
  },
  { path: '**', component: TabsComponent }
];


@NgModule({
  declarations: [AppComponent, TabsComponent, DuplicateTabsComponent, DetailsComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    StoreModule.forRoot({ tab: tabsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}