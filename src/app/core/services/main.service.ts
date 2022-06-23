import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  _base_url = environment.base_url;
  private olderMatchesRecords = new BehaviorSubject({});
  private upcomingMatchesRecords = new BehaviorSubject({});
  private currentMatchesRecords = new BehaviorSubject({});
  currentMatchData = this.currentMatchesRecords.asObservable();
  olderMatchData = this.olderMatchesRecords.asObservable();
  upcomingMatchData = this.upcomingMatchesRecords.asObservable();

  constructor(private httpClient: HttpClient) {}

  getAllRecords() {
    try {
      return this.httpClient.get(this._base_url);
    } catch (error) {
      return throwError(error);
    }
  }

  getCurrentMatchesRecords(record: any) {
    this.currentMatchesRecords.next(record);
  }

  getUpcomingMatchesRecords(record: any) {
    this.upcomingMatchesRecords.next(record);
  }

  getOlderMatchesRecords(record: any) {
    this.olderMatchesRecords.next(record);
  }
}
