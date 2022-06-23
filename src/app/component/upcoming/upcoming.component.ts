import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  upcomingMatches: any = [];
  keys: string[] = [];
  query: any;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.upcomingMatchData.subscribe((res: any) => {
      console.log('upcoming-', res);
      if (res && Array.isArray(res)) {
        this.upcomingMatches = res;
        this.keys = Object.keys(this.upcomingMatches[0]);
      } else {
        console.log('unable to get upcoming match recods');
      }
    });
  }
}
