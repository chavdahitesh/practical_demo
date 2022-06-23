import { UpcomingComponent } from './component/upcoming/upcoming.component';
import { OlderComponent } from './component/older/older.component';
import { CurrentComponent } from './component/current/current.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'current',
    pathMatch: 'full',
  },

  { path: 'current', component: CurrentComponent },
  { path: 'older', component: OlderComponent },
  { path: 'upcoming', component: UpcomingComponent },
  {
    path: '**',
    redirectTo: 'current',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
