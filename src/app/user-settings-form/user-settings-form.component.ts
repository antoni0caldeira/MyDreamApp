import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
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
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  onHttpError(errorResponse: any) {
    console.log(`It doesn't work: ` , errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
    alert(this.postErrorMessage);
    
  }

  onSubmit(form: NgForm){
    console.log(`in on submit: ${form.valid}`);
    if (form.valid){
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      success => console.log(`It works: `, success),
      error => this.onHttpError(error)
    );
    }
    else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the shit you have done';
    }
  }

  onBlur(field: NgModel){
    alert(`On blur: ${field.valid}`)
  }

  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();


  }

}
