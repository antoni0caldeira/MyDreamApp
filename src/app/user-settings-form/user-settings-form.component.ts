import { Component, OnInit } from '@angular/core';
import { UserSettings } from './user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionOption: 'annual',
    notes: 'here are some notes'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
