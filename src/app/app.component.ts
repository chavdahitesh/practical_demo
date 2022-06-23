import { MainService } from './core/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Practicle Test';
  constructor(private mainService: MainService) {}
  ngOnInit() {
    this.getMatchRecords();
  }

  async getMatchRecords() {
    await this.mainService.getAllRecords().subscribe(
      (response: any) => {
        if (response) {
          console.log('getMatchRecords Response ===>', response);
          this.mainService.getCurrentMatchesRecords(response.current);
          this.mainService.getUpcomingMatchesRecords(response.upcoming);
          this.mainService.getOlderMatchesRecords(response.results);
        }
      },
      (error) => {
        console.log('error =>>', error);
      }
    );
  }
}
