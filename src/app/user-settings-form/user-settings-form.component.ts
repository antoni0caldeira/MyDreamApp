import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../Data/data.service';
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
  userSettings : UserSettings = { ...this.originalUserSettings};

  onSubmit(form: NgForm){
    console.log(`in on submit: ${form.valid}`);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      success => console.log(`It works: `, success),
      error => console.log(`It doesn't work: ` ,error)
    );
  }
  onBlur(field: NgModel){
    alert(`On blur: ${field.valid}`)
  }

  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
