import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    employeeId: '',
    username: '',
    role: '',
    password: ''
  };

  confirmPassword = '';

  submitForm() {
    if (this.user.password !== this.confirmPassword) {
      // Password and confirm password do not match
      // Handle the error or show a validation message
      return;
    }

    // Form submission logic goes here
    // You can send the user data to a server or perform the desired actions

    // Reset the form
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      employeeId: '',
      username: '',
      role: '',
      password: ''
    };
    this.confirmPassword = '';
  }
}