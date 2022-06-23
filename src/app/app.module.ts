import { OlderComponent } from './component/older/older.component';
import { UpcomingComponent } from './component/upcoming/upcoming.component';
import { CurrentComponent } from './component/current/current.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterPipe } from './core/pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    UpcomingComponent,
    OlderComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
