import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-older',
  templateUrl: './older.component.html',
  styleUrls: ['./older.component.css'],
})
export class OlderComponent implements OnInit {
  olderMatches: any = [];
  query: any;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.olderMatchData.subscribe((res: any) => {
      console.log('Results::::', res);
      if (res && Array.isArray(res)) {
        this.olderMatches = res;
      } else {
        console.log('unable to get res of array');
        this.olderMatches = [];
      }
    });
  }
}
