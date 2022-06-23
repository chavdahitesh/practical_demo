import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  currentMatches: any = [];
  keys: string[] = [];
  searchFilter: any = '';
  query: any;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.currentMatchData.subscribe((res: any) => {
      console.log('Current Data:--', res);
      if (res && Array.isArray(res)) {
        this.currentMatches = res;
        this.keys = Object.keys(this.currentMatches[0]);
      } else {
        console.log('unable to get current order data');
        this.currentMatches = [];
      }
    });
  }
}
