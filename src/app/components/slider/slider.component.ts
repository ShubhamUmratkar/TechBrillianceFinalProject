import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  registerForm: FormGroup;
 
  constructor(private fb: FormBuilder, private userInfoService: UserinfoService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      mobileNo: ['', [Validators.required, this.mobileNumberValidator]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
 
  ngOnInit(): void {}
 
  // Custom validator for mobile number
  mobileNumberValidator(control: AbstractControl) {
    const value = control.value;
    const valid = /^\d{10}$/.test(value); // Regex for exactly 10 digits
    return valid ? null : { invalidMobileNumber: true };
  }
 
  submitForm() {
    if (this.registerForm.valid) {
      this.userInfoService.saveUserInfo(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('User information saved successfully:', response);
          alert('An error occurred while saving the user information. Please try again later.');
          this.registerForm.reset();
        },
        error: (error) => {
          console.error('Error occurred while saving user information:', error);
          alert('User information saved successfully!');
 
        }
      });
    } else {
      alert('The form contains errors. Please correct them before submitting.');
    }
  }
 
 
 
  isCollapsed = false;
 
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}