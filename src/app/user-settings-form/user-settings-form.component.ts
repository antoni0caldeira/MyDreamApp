import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from './user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  onSubmit(form: NgForm){
    alert(`in on submit: ${form.valid}`)
  }
  onBlur(field: NgModel){
    alert(`On blur: ${field.valid}`)
  }

  userSettings : UserSettings = { ...this.originalUserSettings};
  constructor() { }

  ngOnInit(): void {
  }

}
