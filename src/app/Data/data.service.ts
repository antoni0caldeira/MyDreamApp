import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../user-settings-form/user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    return this.http.post('https://www.putsreq.com/l8kKkiLuuii29IUzQYJO', userSettings);
    
    // return of(userSettings);

  }
  getSubscriptionTypes(): Observable<string[]>{
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
